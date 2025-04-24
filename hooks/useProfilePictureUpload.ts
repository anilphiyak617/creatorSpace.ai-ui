import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface UseProfilePictureUploadResult {
  preview: string | null;
  error: string | null;
  getRootProps: () => any;
  getInputProps: () => any;
  isDragActive: boolean;
  isUploading: boolean;
}

export const useProfilePictureUpload = (
  onImageSelected: (file: File | null) => void,
  currentImage?: string
): UseProfilePictureUploadResult => {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    const file = acceptedFiles[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        onImageSelected(file);
        setIsUploading(false);
      }, 1000);
    }
  }, [onImageSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    onDrop,
    onDropRejected: (fileRejections) => {
      const rejection = fileRejections[0];
      if (rejection.errors[0].code === 'file-too-large') {
        setError('Image must be less than 5MB');
      } else {
        setError('Please upload a valid JPEG or PNG image');
      }
    }
  });

  useEffect(() => {
    // Clean up the preview URL when the component unmounts
    return () => {
      if (preview && preview !== currentImage) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview, currentImage]);

  return {
    preview,
    error,
    getRootProps,
    getInputProps,
    isDragActive,
    isUploading
  };
};
