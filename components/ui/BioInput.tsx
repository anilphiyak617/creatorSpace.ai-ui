'use client';

import React from 'react';
import { useBioValidation } from '@/hooks/useBioValidation';
import { MAX_BIO_LENGTH } from '@/lib/constants/bio-constants';

interface BioInputProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  maxLength?: number;
}

export const BioInput: React.FC<BioInputProps> = ({ value, onChange, id = 'bio-input', maxLength = MAX_BIO_LENGTH }) => {
  const { isValid, characterCount, handleChange } = useBioValidation(value, onChange, maxLength);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-xl font-semibold">
          Short Bio (Optional)
        </label>
        <span 
          className={`text-sm ${characterCount > maxLength ? 'text-red-500' : 'text-gray-500'}`}
          aria-live="polite"
        >
          {characterCount}/{maxLength}
        </span>
      </div>
      
      <textarea
        id={id}
        value={value}
        onChange={handleChange}
        placeholder="Tell the world about yourself in a few words..."
        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
          isValid ? 'border-gray-300' : 'border-red-500'
        }`}
        rows={3}
        maxLength={maxLength}
        aria-invalid={!isValid}
        aria-describedby={`${id}-description`}
      />
      
      <p id={`${id}-description`} className="text-sm text-gray-500">
        A brief description that will appear on your profile (max {maxLength} characters)
      </p>
      
      {!isValid && (
        <p className="text-sm text-red-500" role="alert">
          Please shorten your bio to {maxLength} characters or less.
        </p>
      )}
    </div>
  );
};
