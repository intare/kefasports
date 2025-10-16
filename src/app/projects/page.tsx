import React from 'react';
import ProjectsClient from '@/components/projects/ProjectsClient';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { allProjectsQuery } from '@/lib/queries';
import type { SanityImage } from '@/types/sanity';

type ProjectListItem = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  mainImage?: SanityImage;
  location?: string;
  year?: number | string;
};

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProjectsPage() {
  // Fetch all projects from Sanity
  const sanityProjects = (await fetchSanityData<ProjectListItem[]>(allProjectsQuery)) ?? [];

  // Transform Sanity data
  const projects = sanityProjects.length > 0
    ? sanityProjects.map((project) => ({
        _id: project._id,
        title: project.title,
        category: project.category || 'Sports Facility',
        location: project.location || 'East Africa',
        year: project.year ? String(project.year) : '2024',
        imageUrl: project.mainImage
          ? urlFor(project.mainImage).width(800).height(600).url()
          : '/gallery/court1.jpg',
        projectUrl: project.slug ? `/projects/${project.slug}` : '/projects',
      }))
    : [];

  return <ProjectsClient projects={projects} />;
}
