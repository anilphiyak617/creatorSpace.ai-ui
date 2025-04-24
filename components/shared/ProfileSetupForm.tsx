'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CategorySelector } from '@/components/ui/CategorySelector';
import { useProfilePictureUpload } from '@/hooks/useProfilePictureUpload';
import { Button } from '@/components/ui/Button';
import { ImageUploader } from '@/components/ui/ImageUploader';
import { TextArea } from '@/components/ui/TextArea';
import { useBioInput } from '@/hooks/useBioInput';
import { useCreatorCategorySelection } from '@/hooks/useCreatorCategorySelection';

export function ProfileSetupForm() {
  const router = useRouter();
  const { profilePicture, handleProfilePictureUpload } = useProfilePictureUpload();
  const { categories, selectedCategories, handleCategoryChange } = useCreatorCategorySelection();
  const { bio, handleBioChange } = useBioInput();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/user/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profilePicture, categories: selectedCategories, bio }),
      });

      if (response.ok) {
        router.push('/onboarding/next-step');
      } else {
        throw new Error('Failed to save profile');
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ImageUploader
        currentImage={profilePicture}
        onImageUpload={handleProfilePictureUpload}
      />
      <CategorySelector
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      <TextArea
        value={bio}
        onChange={handleBioChange}
        maxLength={150}
        placeholder="Tell us about yourself (optional, max 150 characters)"
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Save and Continue'}
      </Button>
    </form>
  );
}
