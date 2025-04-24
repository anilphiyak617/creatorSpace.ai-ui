import { ProfileData } from '@/lib/types/profile';

// This is a mock database. In a real application, you would use an actual database.
const mockDatabase: { [key: string]: ProfileData } = {};

export async function saveProfileData(userId: string, data: ProfileData): Promise<ProfileData> {
  // Simulate database operation
  await new Promise(resolve => setTimeout(resolve, 100));

  const savedData = {
    ...data,
    updatedAt: new Date().toISOString()
  };

  mockDatabase[userId] = savedData;
  return savedData;
}

export async function getProfileData(userId: string): Promise<ProfileData | null> {
  // Simulate database operation
  await new Promise(resolve => setTimeout(resolve, 100));

  return mockDatabase[userId] || null;
}
