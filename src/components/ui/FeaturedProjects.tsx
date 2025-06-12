'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  location,
  imageUrl,
  projectUrl
}) => {
  const [imageSrc, setImageSrc] = useState(imageUrl || '/gallery/court1.jpg');
  const [imageError, setImageError] = useState(false);

  // Fallback image if the original fails to load
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc('/gallery/court1.jpg'); // Use a default image from your gallery
    }
  };

  return (
    <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0 w-72">
      <Link href={projectUrl || '#'}>
        <div className="group">
          {/* Image Container */}
          <div className="relative h-52 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={handleImageError}
              sizes="288px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-semibold text-gray-900 text-base leading-tight mb-2 group-hover:text-brand-accent transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">
              {location}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

interface FeaturedProjectsProps {
  projects: ProjectProps[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 4; // Show 4 projects at a time like in the reference
  const maxIndex = Math.max(0, projects.length - projectsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };



  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 flex items-center">
          <h2 className="text-xl font-bold text-gray-900">Recent Projects</h2>
          <div className="flex-1 h-px bg-gray-300 ml-6"></div>
        </div>

        {/* Projects Container with Navigation */}
        <div className="relative">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Projects Scroll Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-2 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (288 + 8)}px)` // 288px card width + 8px gap
              }}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                />
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default FeaturedProjects;














