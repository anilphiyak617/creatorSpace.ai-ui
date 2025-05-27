import { CharacterType } from './types';

export function isPasswordStrong(password: string): boolean {
  if (!password || typeof password !== 'string' || password.length < 8) {
    return false;
  }

  const characterTypes: CharacterType[] = [
    { regex: /[A-Z]/, description: 'uppercase letter' },
    { regex: /[a-z]/, description: 'lowercase letter' },
    { regex: /[0-9]/, description: 'numeric digit' },
    { regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/, description: 'special character' }
  ];

  return characterTypes.every(type => type.regex.test(password));
}