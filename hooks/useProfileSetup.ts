import { useCallback, useState } from 'react';
import { useAutoSave } from './useAutoSave';

interface ProfileData {
  profilePictureUrl: string | undefined;
  username: string;
  bio: string;
  categories: string[];
}

export function useProfileSetup(initialData: ProfileData) {
  const [profileData, setProfileData] = useState<ProfileData>(initialData);

  const updateProfileData = useCallback((field: keyof ProfileData, value: any) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  }, []);

  const saveProfileData = useCallback(async (data: ProfileData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Saving profile data:', data);
    // In a real app, you would make an API call here
  }, []);

  const { forceSave, lastSaved, isSaving } = useAutoSave({
    data: profileData,
    onSave: saveProfileData,
    interval: 30000, // Auto-save every 30 seconds
  });

  return {
    profileData,
    updateProfileData,
    forceSave,
    lastSaved,
    isSaving,
  };
}
