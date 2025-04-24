'use client';

import Image from 'next/image';
import React from 'react';
import { useProfilePictureUpload } from '@/hooks/useProfilePictureUpload';

interface ProfilePictureUploadProps {
  onImageSelected: (file: File | null) => void;
  currentImage?: string;
}

export const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({
  onImageSelected,
  currentImage
}) => {
  const {
    preview,
    error,
    getRootProps,
    getInputProps,
    isDragActive,
    isUploading
  } = useProfilePictureUpload(onImageSelected, currentImage);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Profile Picture</h2>
      
      <div 
        {...getRootProps()} 
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'
        }`}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image 
              src={preview} 
              alt="Profile preview" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Upload Image</span>
          </div>
        )}
        
        <p className="mt-4 text-sm text-gray-500">
          {isDragActive ? 'Drop the image here' : 'Click or drag to upload (JPEG/PNG, max 5MB)'}
        </p>
      </div>
      
      {isUploading && <p className="text-blue-500 text-sm">Uploading...</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
