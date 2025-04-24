import { writeFile } from 'fs/promises';
import { join } from 'path';

export function validateFile(file: File, allowedTypes: string[], maxSize: number): string | null {
  if (!allowedTypes.includes(file.type)) {
    return `Invalid file type. Allowed types are: ${allowedTypes.join(', ')}`;
  }
  
  if (file.size > maxSize) {
    return `File size exceeds the ${maxSize / (1024 * 1024)}MB limit.`;
  }
  
  return null;
}

export async function saveProfilePicture(userId: string, file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Generate a unique filename
  const filename = `profile-${userId}-${Date.now()}${getFileExtension(file.name)}`;
  const filepath = join(process.cwd(), 'public', 'uploads', filename);

  // Save the file
  await writeFile(filepath, buffer);

  // Return the public URL
  return `/uploads/${filename}`;
}

function getFileExtension(filename: string): string {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
}
