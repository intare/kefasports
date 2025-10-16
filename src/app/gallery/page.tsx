import React from 'react';
import GalleryClient from '@/components/gallery/GalleryClient';
import CTABlock from '@/components/ui/CTABlock';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { galleryQuery } from '@/lib/queries';
import type { Project } from '@/types/sanity';

type GalleryItem = {
  imageUrl: string;
  title: string;
  category: string;
  projectUrl?: string;
};

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function GalleryPage() {
  // Fetch all projects from Sanity for gallery display
  const sanityProjects = (await fetchSanityData<Project[]>(galleryQuery)) ?? [];

  // Transform and flatten gallery items from projects
  const galleryItems: GalleryItem[] = sanityProjects.length > 0
    ? sanityProjects.flatMap((project) => {
        // Create an array of items from project's main image and additional images
        const items: GalleryItem[] = [];
        const projectSlug = project.slug?.current
          ? `/projects/${project.slug.current}`
          : undefined;

        // Add main image
        if (project.mainImage) {
          items.push({
            imageUrl: urlFor(project.mainImage).width(800).height(600).url(),
            title: project.title,
            category: project.category || 'Uncategorized',
            projectUrl: projectSlug,
          });
        }

        // Add additional images from gallery
        if (project.images && project.images.length > 0) {
          project.images.forEach((image, index) => {
            items.push({
              imageUrl: urlFor(image).width(800).height(600).url(),
              title: `${project.title} - Image ${index + 2}`,
              category: project.category || 'Uncategorized',
              projectUrl: projectSlug,
            });
          });
        }

        return items;
      })
    : [
        // Fallback gallery items
        {
          imageUrl: "/gallery/k1.jpg",
          title: "Kepler University Basketball Court",
          category: "Basketball Courts",
          projectUrl: "/projects/kepler-university-basketball-court"
        },
        {
          imageUrl: "/gallery/swim-k1.jpg",
          title: "Swimming Pool Project",
          category: "Swimming Pools",
          projectUrl: "/projects/swimming-pool-project"
        },
        {
          imageUrl: "/gallery/court1.jpg",
          title: "Giants of Africa Basketball Court",
          category: "Basketball Courts",
          projectUrl: "/projects/giants-of-africa-basketball-court"
        },
        {
          imageUrl: "/gallery/k2.jpg",
          title: "Indoor Basketball Facility",
          category: "Basketball Courts",
          projectUrl: "/projects/indoor-basketball-facility"
        },
        {
          imageUrl: "/sports/LDK-Gymnasium-scaled.jpeg",
          title: "LDK Gymnasium",
          category: "Basketball Courts",
          projectUrl: "/projects/ldk-gymnasium"
        },
        {
          imageUrl: "/gallery/k3.jpg",
          title: "Professional Basketball Court",
          category: "Basketball Courts",
          projectUrl: "/projects/professional-basketball-court"
        },
        {
          imageUrl: "/gallery/k4.jpg",
          title: "Community Basketball Court",
          category: "Basketball Courts"
        },
        {
          imageUrl: "/gallery/swimingk2.jpg",
          title: "Community Swimming Pool",
          category: "Swimming Pools"
        },
        {
          imageUrl: "/gallery/k5.jpg",
          title: "IPRC HUYE Basketball Court",
          category: "Basketball Courts"
        },
        {
          imageUrl: "/gallery/s1.jpg",
          title: "South Africa Jr NBA Court",
          category: "Basketball Courts"
        },
        {
          imageUrl: "/gallery/k6.jpg",
          title: "Youth Basketball Complex",
          category: "Basketball Courts"
        },
        {
          imageUrl: "/gallery/k7.jpg",
          title: "Central Africa Basketball Court",
          category: "Basketball Courts"
        },
        {
          imageUrl: "/gallery/k8.jpg",
          title: "South Sudan Basketball Court",
          category: "Basketball Courts"
        },
        {
          imageUrl: "/gallery/s2.jpg",
          title: "Professional Basketball Arena",
          category: "Basketball Courts"
        },
        {
          imageUrl: "/gallery/s3.jpg",
          title: "Indoor Sports Complex",
          category: "Basketball Courts"
        },
        {
          imageUrl: "/gallery/s4.jpg",
          title: "Modern Basketball Facility",
          category: "Basketball Courts"
        }
      ];

  return (
    <div className="bg-brand-white">
      {/* Page Header */}
      <div className="bg-brand-dark text-brand-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-brand-lighterGray">
            Visual showcase of our completed sports facilities and projects.
          </p>
        </div>
      </div>

      {/* Gallery Client Component with filtering */}
      <GalleryClient items={galleryItems} />

      {/* CTA Section */}
      <CTABlock
        headline="Inspired by What You See?"
        description="Contact us to discuss how we can create a similar high-quality sports facility for your organization."
        buttonText="Start Your Project"
        buttonLink="/contact"
        appearance="primary"
      />
    </div>
  );
}
