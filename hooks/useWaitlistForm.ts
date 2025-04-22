import { useState } from 'react';
import { mockApiCall } from '@/services/waitlist';

export interface WaitlistFormData {
  name: string;
  email: string;
}

interface WaitlistFormErrors {
  name?: string;
  email?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';



export const useWaitlistForm = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({ name: '', email: '' });
  const [errors, setErrors] = useState<WaitlistFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: WaitlistFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (/[!@#$%^&*(),.?":{}|<>]/.test(formData.name)) {
      newErrors.name = 'Name should not contain special characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof WaitlistFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('loading');
      try {
        await mockApiCall(formData);
        setSubmitStatus('success');
        setFormData({ name: '', email: '' });
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      }
    }
  };

  return {
    formData,
    errors,
    submitStatus,
    handleInputChange,
    handleSubmit,
  };
};
