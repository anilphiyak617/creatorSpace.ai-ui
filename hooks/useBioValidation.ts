import { useCallback, useState } from 'react';

export const useBioValidation = (
  initialValue: string,
  onChange: (value: string) => void,
  maxLength: number
) => {
  const [characterCount, setCharacterCount] = useState(initialValue.length);
  const [isValid, setIsValid] = useState(initialValue.length <= maxLength);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setCharacterCount(newValue.length);
    setIsValid(newValue.length <= maxLength);
    onChange(newValue);
  }, [maxLength, onChange]);

  return {
    isValid,
    characterCount,
    handleChange,
  };
};
