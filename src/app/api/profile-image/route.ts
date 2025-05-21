import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse, getWalletAddress } from '@/lib/api-utils';

export async function POST(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    // Check if the request is multipart/form-data
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return errorResponse('Content type must be multipart/form-data', 400);
    }

    const formData = await request.formData();
    const imageFile = formData.get('image') as File | null;

    if (!imageFile) {
      return errorResponse('Image file is required', 400);
    }

    // Validate file type
    if (!imageFile.type.startsWith('image/')) {
      return errorResponse('File must be an image', 400);
    }

    // Validate file size (5MB limit)
    if (imageFile.size > 5 * 1024 * 1024) {
      return errorResponse('Image size must be less than 5MB', 400);
    }

    try {
      // Convert file to base64
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = `data:${imageFile.type};base64,${buffer.toString('base64')}`;

      // Update user profile
      const user = await prisma.user.update({
        where: { walletAddress },
        data: { profileImage: base64Image },
      });

      return successResponse({
        imageUrl: user.profileImage,
        message: 'Profile image updated successfully'
      });
    } catch (error) {
      console.error('Error processing image:', error);
      // Return a more generic error to the client for security
      return errorResponse('Failed to process image', 500);
    }
  } catch (error) {
    console.error('Profile image upload error:', error);
    // Return a more generic error to the client for security
    return errorResponse('Failed to update profile image', 500);
  }
}

export async function GET(request: NextRequest) {
  try {
    const walletAddress = getWalletAddress(request.headers);
    if (!walletAddress) {
      return errorResponse('Authentication required', 401);
    }

    const user = await prisma.user.findUnique({
      where: { walletAddress },
      select: { profileImage: true }
    });

    if (!user) {
      return errorResponse('User not found', 404);
    }

    return successResponse({
      imageUrl: user.profileImage,
      defaultImage: !user.profileImage
    });
  } catch (error) {
    console.error('Profile image fetch error:', error);
    // Return a more generic error to the client for security
    return errorResponse('Failed to fetch profile image', 500);
  }
}
