'use client'
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { useDarkModeStore } from '@/store/useDarkModeStore';

export function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
} 