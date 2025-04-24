import { NextRequest, NextResponse } from 'next/server';
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from '@/lib/config/constants';
import { saveProfilePicture, validateFile } from '@/services/file-service';

export async function POST(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }
    
    const validationError = validateFile(file, ALLOWED_FILE_TYPES, MAX_FILE_SIZE);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }
    
    const imageUrl = await saveProfilePicture(userId, file);
    
    return NextResponse.json({
      success: true,
      imageUrl
    });
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    return NextResponse.json(
      { error: 'Failed to upload profile picture' },
      { status: 500 }
    );
  }
}
