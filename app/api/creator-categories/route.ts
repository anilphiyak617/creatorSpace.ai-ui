import { NextRequest, NextResponse } from 'next/server';
import { getAllCategories } from '@/services/category-service';

export const revalidate = 3600; // Revalidate this route every hour

export async function GET(request: NextRequest) {
  try {
    const categories = await getAllCategories();
    
    return NextResponse.json(categories, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
