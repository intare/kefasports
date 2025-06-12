import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    // Test the connection by fetching all projects
    const projects = await client.fetch(`*[_type == "project"] {
      _id,
      title,
      "slug": slug.current,
      "category": category->name
    }`);

    return NextResponse.json({
      success: true,
      message: 'Sanity connection successful',
      projectCount: projects.length,
      projects: projects.slice(0, 3) // Return first 3 projects as sample
    });
  } catch (error) {
    console.error('Sanity connection error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to connect to Sanity',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
