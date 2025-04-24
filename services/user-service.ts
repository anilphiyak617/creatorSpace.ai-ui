import { ApiError } from '@/lib/types/api-error';
import { User } from '@/lib/types/user';

// This is a mock database. In a real application, you would use an actual database.
const mockDatabase: { [key: string]: User } = {
  '1': {
    id: '1',
    name: 'John Creator',
    email: 'john@example.com',
    profilePictureUrl: 'https://example.com/john.jpg',
    bio: 'I create amazing content!',
    categories: ['tech', 'lifestyle']
  },
  // Add more mock users as needed
};

export async function getUserById(userId: string): Promise<User | null> {
  // Simulate database lookup
  await new Promise(resolve => setTimeout(resolve, 100));

  if (!(userId in mockDatabase)) {
    throw new ApiError('User not found', 404);
  }

  return mockDatabase[userId];
}
