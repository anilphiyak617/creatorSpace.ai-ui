import { Category } from '@/lib/types/category';

// This is a mock database. In a real application, you would fetch this data from a database.
const categories: Category[] = [
  { id: '1', name: 'Beauty' },
  { id: '2', name: 'Gaming' },
  { id: '3', name: 'Tech' },
  { id: '4', name: 'Travel' },
  { id: '5', name: 'Food' },
  { id: '6', name: 'Fitness' },
  { id: '7', name: 'Education' },
  { id: '8', name: 'Music' },
  { id: '9', name: 'Art' },
  { id: '10', name: 'Fashion' }
];

export async function getAllCategories(): Promise<Category[]> {
  // Simulate a database call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return categories;
}

export async function getCategoryById(id: string): Promise<Category | undefined> {
  // Simulate a database call
  await new Promise(resolve => setTimeout(resolve, 50));
  
  return categories.find(category => category.id === id);
}
