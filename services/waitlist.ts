import { WaitlistFormData } from "@/hooks/useWaitlistForm";

export const mockApiCall = async (_data: WaitlistFormData): Promise<void> => {
    // Simulate API call
    console.log('Submitting data:', _data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Simulate random success/failure
    if (Math.random() > 0.2) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error('Failed to submit'));
    }
  };