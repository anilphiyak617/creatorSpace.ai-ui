import { MIN_PASSWORD_LENGTH } from './constants';

/**
 * Checks if a password meets the defined strength criteria.
 * @param password The password to check
 * @returns boolean indicating whether the password is strong
 */
export function isPasswordStrong(password: string): boolean {
  if (!password || typeof password !== 'string') {
    return false;
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]+/.test(password);

  return (
    password.length >= MIN_PASSWORD_LENGTH &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  );
}

/**
 * Gets detailed feedback on password strength.
 * @param password The password to check
 * @returns An object with boolean flags for each criterion and an overall strength assessment
 */
export function getPasswordStrengthFeedback(password: string): {
  isStrong: boolean;
  meetsMinLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
} {
  const meetsMinLength = password.length >= MIN_PASSWORD_LENGTH;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]+/.test(password);

  const isStrong = meetsMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;

  return {
    isStrong,
    meetsMinLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar,
  };
}
