import { useCallback, useEffect, useState } from 'react';

interface Category {
  id: string;
  name: string;
}

const mockCategories: Category[] = [
  { id: '1', name: 'Technology' },
  { id: '2', name: 'Travel' },
  { id: '3', name: 'Food' },
  { id: '4', name: 'Fashion' },
  { id: '5', name: 'Lifestyle' },
];

export const useCategories = (
  initialSelectedCategories: string[],
  onCategoriesChanged: (categories: string[]) => void
) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialSelectedCategories);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        // Simulate API call with mock data
        setTimeout(() => {
          setCategories(mockCategories);
          setIsLoading(false);
        }, 500);
        // const response = await fetch('/api/creator-categories');
        
        // if (!response.ok) {
        //   throw new Error('Failed to fetch categories');
        // }
        // const data = await response.json();
        // setCategories(data as Category[]);
      } catch (err) {
        setError('Unable to load categories. Please try again.');
        console.error('Error fetching categories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = useCallback((categoryId: string) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId];
      onCategoriesChanged(updated);
      return updated;
    });
  }, [onCategoriesChanged]);

  return {
    categories,
    selectedCategories,
    isLoading,
    error,
    toggleCategory
  };
};
