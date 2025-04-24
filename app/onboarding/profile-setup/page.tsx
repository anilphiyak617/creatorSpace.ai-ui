import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { ProfileSetupForm } from '@/components/forms/ProfileSetupForm';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';
import { ProgressIndicator } from '@/components/ui/ProgressIndicator';

export default function ProfileSetupPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-background dark:bg-muted text-gray-900 dark:text-white">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      <ProgressIndicator currentStep={2} totalSteps={5} className="mt-4" />
      
      <h1 className="text-3xl font-bold mt-6 mb-8 text-center">
        🚀 Welcome to your creator journey! ✨
      </h1>
      <Suspense fallback={<div className="flex justify-center"><LoadingSpinner /></div>}>
        <ProfileSetupForm />
      </Suspense>
    </div>
  );
}
