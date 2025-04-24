import { useEffect } from 'react';
import { useDarkModeStore } from '../store/useDarkModeStore';

export function useDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    // Check if user has a dark mode preference
    const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && isDarkModePreferred)) {
      document.documentElement.classList.add('dark');
      useDarkModeStore.setState({ isDarkMode: true });
    }
  }, []);

  return { isDarkMode, toggleDarkMode };
} 