import { useState } from 'react';

interface WaitlistFormData {
  name: string;
  email: string;
}

export const useWaitlistSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submitWaitlist = async (formData: WaitlistFormData) => {
    setIsLoading(true);
    setSubmitError(null);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Submitted:', formData);
      // Here you would typically make an actual API call
      // const response = await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Failed to submit');
    } catch (error) {
      setSubmitError('Failed to join waitlist. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { submitWaitlist, isLoading, submitError };
};
