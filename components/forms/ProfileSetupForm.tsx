'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/atoms/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/card"
import { BioInput } from '@/components/ui/BioInput';
import { CategorySelector } from '@/components/ui/CategorySelector';
import { ProfilePictureUpload } from '@/components/ui/ProfilePictureUpload';
import { useProfileSetup } from '@/hooks/useProfileSetup';

export const ProfileSetupForm: React.FC = () => {
  const router = useRouter();
  const { profileData, updateProfileData, forceSave, isSaving } = useProfileSetup({
    username: '',
    bio: '',
    categories: [],
    profilePictureUrl: undefined
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await forceSave();
    if (success) {
      router.push('/onboarding/profile-details');
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Profile Setup</CardTitle>
        <CardDescription>Tell us a bit about yourself to get started.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <ProfilePictureUpload
            currentImage={profileData.profilePictureUrl}
            onImageSelected={(file) => updateProfileData('profilePictureUrl', file)}
          />

          <CategorySelector
            selectedCategories={profileData.categories}
            onCategoriesChanged={(categories) => updateProfileData('categories', categories)}
          />

          <BioInput
            value={profileData.bio}
            onChange={(bio) => updateProfileData('bio', bio)}
            maxLength={150}
          />

          {isSaving && <p className="text-muted-foreground">Saving...</p>}
          <Button
            type="submit"
            disabled={isSaving || !profileData.profilePictureUrl}
            className="w-full"
          >
            {isSaving ? 'Saving...' : 'Continue to Profile Details'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
