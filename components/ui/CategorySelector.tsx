'use client';

import React from 'react';
import { Checkbox } from '@/components/atoms/checkbox';
import { useCategories } from '@/hooks/useCategories';

interface CategorySelectorProps {
  onCategoriesChanged: (categories: string[]) => void;
  selectedCategories: string[];
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  onCategoriesChanged,
  selectedCategories
}) => {
  const { categories, isLoading, error, toggleCategory } = useCategories(selectedCategories, onCategoriesChanged);

  if (isLoading) {
    return <div className="py-4">Loading categories...</div>;
  }

  if (error) {
    return <div className="py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select Your Categories</h2>
      <p className="text-sm text-gray-500">Choose the categories that best describe your content</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox 
              id={`category-${category.id}`}
              checked={selectedCategories.includes(category.id)}
              onCheckedChange={() => toggleCategory(category.id)}
            />
            <label 
              htmlFor={`category-${category.id}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
