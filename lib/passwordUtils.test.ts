import { isPasswordStrong } from './passwordUtils';

describe('isPasswordStrong', () => {
  it('should return false for null, undefined, or empty inputs', () => {
    expect(isPasswordStrong(null as any)).toBe(false);
    expect(isPasswordStrong(undefined as any)).toBe(false);
    expect(isPasswordStrong('')).toBe(false);
  });

  it('should return false for passwords shorter than 8 characters', () => {
    expect(isPasswordStrong('Abc123!')).toBe(false);
  });

  it('should return false for passwords missing uppercase letters', () => {
    expect(isPasswordStrong('abcdef123!')).toBe(false);
  });

  it('should return false for passwords missing lowercase letters', () => {
    expect(isPasswordStrong('ABCDEF123!')).toBe(false);
  });

  it('should return false for passwords missing numeric digits', () => {
    expect(isPasswordStrong('ABCDEFghi!')).toBe(false);
  });

  it('should return false for passwords missing special characters', () => {
    expect(isPasswordStrong('ABCDEFghi123')).toBe(false);
  });

  it('should return true for valid, strong passwords', () => {
    expect(isPasswordStrong('StrongP@ss123')).toBe(true);
    expect(isPasswordStrong('C0mpl3x!P@ssw0rd')).toBe(true);
  });
});