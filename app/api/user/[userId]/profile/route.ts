import { NextRequest, NextResponse } from 'next/server';
import { saveProfileData } from '@/services/profil-service';
import { ProfileData } from '@/lib/types/profile';
import { validateProfileData } from '@/lib/utils/validation';

export async function POST(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const data: ProfileData = await request.json();

    const validationError = validateProfileData(data);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const savedProfile = await saveProfileData(userId, data);

    return NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      profile: savedProfile
    });
  } catch (error) {
    console.error('Error saving profile data:', error);
    return NextResponse.json(
      { error: 'Failed to save profile data' },
      { status: 500 }
    );
  }
}
