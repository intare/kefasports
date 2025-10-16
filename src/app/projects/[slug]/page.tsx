import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GalleryGrid from '@/components/ui/GalleryGrid';
import CTABlock from '@/components/ui/CTABlock';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { projectBySlugQuery } from '@/lib/queries';
import type { SanityImage, Testimonial } from '@/types/sanity';

type ProjectDetails = {
  duration?: string;
  area?: string;
  surface?: string;
  budget?: string;
  [key: string]: string | undefined;
};

type ProjectTestimonial = Pick<Testimonial, '_id' | 'quote' | 'author' | 'title' | 'company'> & {
  image?: SanityImage;
};

type RelatedProjectSummary = {
  _id: string;
  title: string;
  slug?: string;
  category?: string;
  mainImage?: SanityImage;
};

type ProjectQueryResult = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  mainImage?: SanityImage;
  images?: SanityImage[];
  client?: string;
  location?: string;
  year?: number | string;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  projectDetails?: ProjectDetails;
  testimonial?: ProjectTestimonial;
  relatedProjects?: RelatedProjectSummary[];
};

type GalleryImageItem = {
  imageUrl: string;
  title: string;
  category: string;
};

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  // Fetch project data from Sanity
  const project = await fetchSanityData<ProjectQueryResult>(projectBySlugQuery, { slug });

  if (!project) {
    notFound();
  }

  const projectData = project;

  // Transform gallery images
  const galleryImages: GalleryImageItem[] = (projectData.images ?? []).map((img, index) => ({
    imageUrl: urlFor(img).width(800).height(600).url(),
    title: `Gallery Image ${index + 1}`,
    category: projectData.category || 'Project',
  }));

  // Get main image URL
  const mainImageUrl = projectData.mainImage
    ? urlFor(projectData.mainImage).width(1200).height(800).url()
    : '/gallery/court1.jpg';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={mainImageUrl}
          alt={projectData.title}
          fill
          className="object-cover object-center"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <span className="inline-block bg-brand-accent text-white px-3 py-1 rounded-sm text-sm font-medium mb-4">
                {projectData.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{projectData.title}</h1>
              <div className="flex flex-wrap gap-6 text-brand-lighterGray">
                {projectData.location && <span><strong>Location:</strong> {projectData.location}</span>}
                {projectData.year && <span><strong>Year:</strong> {projectData.year}</span>}
                {projectData.client && <span><strong>Client:</strong> {projectData.client}</span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Project Overview</h2>
                <p className="text-brand-secondary text-lg leading-relaxed mb-6">{projectData.description}</p>

                {projectData.challenge && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">Challenge</h3>
                    <p className="text-brand-secondary text-lg leading-relaxed">{projectData.challenge}</p>
                  </div>
                )}

                {projectData.solution && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">Solution</h3>
                    <p className="text-brand-secondary text-lg leading-relaxed">{projectData.solution}</p>
                  </div>
                )}

                {projectData.results && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">Results</h3>
                    <p className="text-brand-secondary text-lg leading-relaxed">{projectData.results}</p>
                  </div>
                )}

                {/* Project Details Card */}
                {projectData.projectDetails && (
                  <div className="mt-8 bg-brand-offWhite p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-brand-dark mb-4">Additional Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {projectData.projectDetails.duration && (
                        <div>
                          <span className="font-medium text-brand-dark">Duration:</span>
                          <span className="ml-2 text-brand-secondary">{projectData.projectDetails.duration}</span>
                        </div>
                      )}
                      {projectData.projectDetails.area && (
                        <div>
                          <span className="font-medium text-brand-dark">Area:</span>
                          <span className="ml-2 text-brand-secondary">{projectData.projectDetails.area}</span>
                        </div>
                      )}
                      {projectData.projectDetails.teamSize && (
                        <div>
                          <span className="font-medium text-brand-dark">Team Size:</span>
                          <span className="ml-2 text-brand-secondary">{projectData.projectDetails.teamSize} people</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-brand-offWhite p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-brand-dark">Category:</span>
                    <span className="ml-2 text-brand-secondary">{projectData.category}</span>
                  </div>
                  {projectData.location && (
                    <div>
                      <span className="font-medium text-brand-dark">Location:</span>
                      <span className="ml-2 text-brand-secondary">{projectData.location}</span>
                    </div>
                  )}
                  {projectData.year && (
                    <div>
                      <span className="font-medium text-brand-dark">Year:</span>
                      <span className="ml-2 text-brand-secondary">{projectData.year}</span>
                    </div>
                  )}
                  {projectData.client && (
                    <div>
                      <span className="font-medium text-brand-dark">Client:</span>
                      <span className="ml-2 text-brand-secondary">{projectData.client}</span>
                    </div>
                  )}
                </div>

                {/* Testimonial if exists */}
                {projectData.testimonial && (
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <h4 className="text-lg font-bold text-brand-dark mb-3">Client Testimonial</h4>
                    <blockquote className="italic text-brand-secondary mb-2">
                      &ldquo;{projectData.testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="text-sm text-brand-dark font-medium">
                      - {projectData.testimonial.author}
                      {projectData.testimonial.title ? `, ${projectData.testimonial.title}` : ''}
                    </p>
                    {projectData.testimonial.company && (
                      <p className="text-sm text-brand-secondary">{projectData.testimonial.company}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Back to Projects */}
              <div className="mt-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center text-brand-accent hover:text-brand-dark transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Project Gallery</h2>
            <GalleryGrid
              items={galleryImages}
              columns={2}
            />
          </div>
        </section>
      )}

      {/* Related Projects */}
      {projectData.relatedProjects && projectData.relatedProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectData.relatedProjects.map((relatedProject) => {
                const relatedProjectUrl = relatedProject.slug
                  ? `/projects/${relatedProject.slug}`
                  : '/projects';
                const relatedImageUrl = relatedProject.mainImage
                  ? urlFor(relatedProject.mainImage).width(400).height(300).url()
                  : '/gallery/court1.jpg';
                return (
                  <Link
                    key={relatedProject._id}
                    href={relatedProjectUrl}
                    className="group"
                  >
                    <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={relatedImageUrl}
                        alt={relatedProject.title}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-brand-secondary">
                      {relatedProject.category || 'Sports Facility'}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTABlock
        headline="Interested in a Similar Project?"
        description="Contact our team to discuss how we can create a world-class sports facility for your organization."
        buttonText="Start Your Project"
        buttonLink="/contact"
        appearance="primary"
      />
    </div>
  );
}

