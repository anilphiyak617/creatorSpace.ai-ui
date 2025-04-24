export interface User {
  id: string;
  name: string;
  email: string;
  profilePictureUrl: string | null;
  bio: string;
  categories: string[];
}
