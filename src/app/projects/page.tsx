import React from 'react';
import ProjectsClient from '@/components/projects/ProjectsClient';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { allProjectsQuery } from '@/lib/queries';

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProjectsPage() {
  // Fetch all projects from Sanity
  const sanityProjects = await fetchSanityData(allProjectsQuery);

  // Transform Sanity data
  const projects = sanityProjects && sanityProjects.length > 0
    ? sanityProjects.map((project: any) => ({
        _id: project._id,
        title: project.title,
        category: project.category,
        location: project.location || 'East Africa',
        year: project.year?.toString() || '2024',
        imageUrl: project.mainImage ? urlFor(project.mainImage).width(800).height(600).url() : '/gallery/court1.jpg',
        projectUrl: `/projects/${project.slug}`
      }))
    : [];

  return <ProjectsClient projects={projects} />;
}
