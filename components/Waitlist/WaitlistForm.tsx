'use client'
import React from 'react';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { useWaitlistForm } from '@/hooks/useWaitlistForm';

const WaitlistForm: React.FC = () => {
  const { formData, errors, submitStatus, handleInputChange, handleSubmit } = useWaitlistForm();

  return (
    <div className="bg-background p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              errors.name ? 'border-red-500' : ''
            }`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            disabled={submitStatus === 'loading'}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              errors.email ? 'border-red-500' : ''
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            disabled={submitStatus === 'loading'}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <Button type="submit" disabled={submitStatus === 'loading'} className="w-full">
          {submitStatus === 'loading' ? 'Submitting...' : 'Join Waitlist'}
        </Button>
      </form>
      {submitStatus === 'success' && (
        <p className="mt-4 text-green-600" role="status">Thank you for joining our waitlist!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-4 text-red-600" role="alert">An error occurred. Please try again later.</p>
      )}
    </div>
  );
};

export default WaitlistForm;
