'use client';

import React, { useState, useMemo } from 'react';
import CTABlock from '@/components/ui/CTABlock';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';

interface Project {
  _id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  projectUrl: string;
}

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  // Fallback projects if none provided
  const fallbackProjects: Project[] = [
    {
      _id: '1',
      title: "Kepler University Indoor Basketball Court",
      category: "Basketball Courts",
      location: "Kigali, Rwanda",
      year: "2023",
      imageUrl: "/gallery/k1.jpg",
      projectUrl: "/projects/kepler-university-indoor-basketball-court"
    },
    {
      _id: '2',
      title: "Giants of Africa Outdoor Basketball Court",
      category: "Basketball Courts",
      location: "Kigali, Rwanda",
      year: "2023",
      imageUrl: "/gallery/court1.jpg",
      projectUrl: "/projects/giants-of-africa-outdoor-basketball-court"
    },
    {
      _id: '3',
      title: "Swimming Pool Project",
      category: "Swimming Pools",
      location: "Kigali, Rwanda",
      year: "2023",
      imageUrl: "/gallery/swim-k1.jpg",
      projectUrl: "/projects/swimming-pool-project"
    }
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = ['All Projects', ...new Set(displayProjects.map(p => p.category))];
    return uniqueCategories;
  }, [displayProjects]);

  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    return selectedCategory === "All Projects"
      ? displayProjects
      : displayProjects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, displayProjects]);

  // Stats data
  const stats = [
    { number: `${displayProjects.length}+`, label: "Projects Completed" },
    { number: "15+", label: "Countries Served" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/gallery/court1.jpg"
          alt="Sports Facilities"
          fill
          className="object-cover object-center"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-brand-dark bg-opacity-70"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl md:text-2xl text-brand-lighterGray mb-8">
                Discover our portfolio of world-class sports facilities across Africa and beyond
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-brand-accent">{stat.number}</div>
                    <div className="text-sm md:text-base text-brand-lighterGray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-brand-offWhite border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-accent text-white shadow-lg'
                    : 'bg-white text-brand-secondary hover:bg-brand-accent hover:text-white shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title={`${selectedCategory === "All Projects" ? "All" : selectedCategory} Projects`}
            subtitle={`${filteredProjects.length} ${filteredProjects.length === 1 ? 'project' : 'projects'} showcasing our expertise in sports facility construction`}
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProjects.map((project) => (
              <div key={project._id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Project Image */}
                  <div className="project-card-image">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-brand-dark bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-secondary mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </p>
                    <a
                      href={project.projectUrl}
                      className="inline-flex items-center text-brand-accent hover:text-brand-dark font-medium transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        headline="Ready to Start Your Project?"
        description="Join our growing list of satisfied clients and let us bring your sports facility vision to life with our proven expertise and commitment to excellence."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
        appearance="primary"
      />
    </div>
  );
}
