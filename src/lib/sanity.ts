import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'ri3g78rr', // The project ID from the user
  dataset: 'production', // Default dataset
  apiVersion: '2024-01-01', // Use the latest API version
  useCdn: true, // Enable CDN for better performance with dynamic fetching
  perspective: 'published', // Only fetch published documents
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

// Helper function to fetch data with proper error handling
export async function fetchSanityData<T>(query: string, params: Record<string, unknown> = {}) {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    return null;
  }
}
