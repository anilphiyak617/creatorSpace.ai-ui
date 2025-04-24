import { ProfileData } from '@/lib/types/profile';

export function validateProfileData(data: ProfileData): string | null {
  if (!Array.isArray(data.categories)) {
    return 'Categories must be an array';
  }

  if (data.categories.length === 0) {
    return 'At least one category must be selected';
  }

  if (typeof data.bio !== 'string') {
    return 'Bio must be a string';
  }

  if (data.bio.length > 150) {
    return 'Bio must not exceed 150 characters';
  }

  return null;
}
