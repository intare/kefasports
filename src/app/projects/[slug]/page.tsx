import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GalleryGrid from '@/components/ui/GalleryGrid';
import CTABlock from '@/components/ui/CTABlock';

// Project data with image galleries
const projectsData = {
  'kepler-university-indoor-basketball-court': {
    title: 'Kepler University Indoor Basketball Court',
    category: 'Basketball Courts',
    location: 'Kigali, Rwanda',
    year: '2023',
    client: 'Kepler University',
    description: 'A state-of-the-art indoor basketball facility designed to meet international standards. This project features premium flooring, professional lighting, and modern amenities to support both training and competitive play. The facility includes spectator seating, locker rooms, and equipment storage, creating a comprehensive sports complex that has hosted multiple regional tournaments and serves as a training ground for aspiring basketball players.',
    mainImage: '/gallery/k1.jpg',
    images: [
      { url: '/gallery/k1.jpg', title: 'Main Court View', category: 'Interior' },
      { url: '/gallery/k17.jpg', title: 'Court from Above', category: 'Interior' },
      { url: '/sports/basketball-court.jpg', title: 'Professional Setup', category: 'Equipment' },
      { url: '/gallery/court1.jpg', title: 'Game in Progress', category: 'Action' }
    ]
  },
  'giants-of-africa-outdoor-basketball-court': {
    title: 'Giants of Africa Outdoor Basketball Court',
    category: 'Basketball Courts',
    location: 'Kigali, Rwanda',
    year: '2023',
    client: 'Giants of Africa Foundation',
    description: 'An outdoor basketball court built in partnership with Giants of Africa to provide youth with access to quality sports facilities and promote basketball development in the community. Built with weather-resistant materials and proper drainage systems, this court has become a community hub, hosting regular training sessions and tournaments for local youth.',
    mainImage: '/gallery/court1.jpg',
    images: [
      { url: '/gallery/court1.jpg', title: 'Outdoor Court Overview', category: 'Exterior' },
      { url: '/gallery/k2.jpg', title: 'Court Surface Detail', category: 'Construction' },
      { url: '/gallery/k3.jpg', title: 'Youth Training Session', category: 'Community' },
      { url: '/gallery/kids.jpg', title: 'Community Engagement', category: 'Community' }
    ]
  },
  'ldk-jr-nba-indoor-basketball-court': {
    title: 'LDK Jr. NBA Indoor Basketball Court',
    category: 'Basketball Courts',
    location: 'Kigali, Rwanda',
    year: '2023',
    client: 'LDK & Jr. NBA',
    description: 'A premium indoor basketball facility built to Jr. NBA standards, featuring modern gymnasium design and professional-grade equipment. This multi-purpose gymnasium includes retractable seating, professional lighting, and advanced ventilation systems. The facility now serves as a regional training center for Jr. NBA programs and hosts international youth tournaments.',
    mainImage: '/sports/LDK-Gymnasium-scaled.jpeg',
    images: [
      { url: '/sports/LDK-Gymnasium-scaled.jpeg', title: 'LDK Gymnasium', category: 'Interior' },
      { url: '/gallery/gymnasiumd.jpeg', title: 'Gymnasium Detail', category: 'Interior' },
      { url: '/gallery/k4.jpg', title: 'Training Session', category: 'Action' },
      { url: '/gallery/k5.jpg', title: 'Professional Setup', category: 'Equipment' }
    ]
  },
  'south-africa-jr-nba-indoor-court': {
    title: 'South Africa Jr NBA Indoor Court',
    category: 'Basketball Courts',
    location: 'South Africa',
    year: '2023',
    client: 'Jr. NBA South Africa',
    description: 'A world-class indoor basketball facility designed to support the Jr. NBA program in South Africa, featuring modern amenities and professional-grade equipment. The facility features professional court surfaces, modern lighting, and community-focused amenities, and has become a cornerstone of basketball development in South Africa, hosting numerous youth programs and tournaments.',
    mainImage: '/gallery/s1.jpg',
    images: [
      { url: '/gallery/s1.jpg', title: 'Main Court View', category: 'Interior' },
      { url: '/gallery/s2.jpg', title: 'Professional Setup', category: 'Equipment' },
      { url: '/gallery/s3.jpg', title: 'Training Facility', category: 'Interior' },
      { url: '/gallery/s4.jpg', title: 'Modern Amenities', category: 'Facilities' }
    ]
  },
  'swimming-pool-project': {
    title: 'Swimming Pool Project',
    category: 'Swimming Pools',
    location: 'Kigali, Rwanda',
    year: '2023',
    client: 'Private Client',
    description: 'A modern swimming pool facility featuring advanced filtration systems, professional lane markings, and safety equipment designed for both recreational and competitive use. The project includes state-of-the-art filtration and heating systems, professional lane configurations, and comprehensive safety features, delivering a facility that serves both competitive training and community recreation with excellent water quality and safety standards.',
    mainImage: '/gallery/swim-k1.jpg',
    images: [
      { url: '/gallery/swim-k1.jpg', title: 'Main Pool View', category: 'Pool' },
      { url: '/gallery/swimingk2.jpg', title: 'Pool Detail', category: 'Pool' },
      { url: '/gallery/swiming pool.jpg', title: 'Pool Overview', category: 'Facilities' },
      { url: '/sports/swiming pool.jpg', title: 'Professional Setup', category: 'Equipment' }
    ]
  },
  'angola-basketball-court-jr-nba-africell': {
    title: 'Angola Basketball Court for Jr NBA & Africell',
    category: 'Basketball Courts',
    location: 'Angola',
    year: '2023',
    client: 'Jr. NBA & Africell',
    description: 'A professional basketball court built in partnership with Jr. NBA and Africell to promote basketball development in Angola. This versatile facility features professional equipment and community-focused amenities, successfully establishing a hub for basketball development in Angola.',
    mainImage: '/gallery/k2.jpg',
    images: [
      { url: '/gallery/k2.jpg', title: 'Court Overview', category: 'Interior' },
      { url: '/gallery/k3.jpg', title: 'Professional Setup', category: 'Equipment' },
      { url: '/gallery/children.jpg', title: 'Youth Programs', category: 'Community' },
      { url: '/gallery/kids.jpg', title: 'Training Sessions', category: 'Action' }
    ]
  },
  'cmu-outdoor-basketball-court': {
    title: 'CMU Outdoor Basketball Court',
    category: 'Basketball Courts',
    location: 'Rwanda',
    year: '2023',
    client: 'Carnegie Mellon University Rwanda',
    description: 'An outdoor basketball court designed for university students and the local community. Built with weather-resistant materials and proper drainage systems, this facility has become a popular recreational space for students and community members.',
    mainImage: '/gallery/k3.jpg',
    images: [
      { url: '/gallery/k3.jpg', title: 'Outdoor Court', category: 'Exterior' },
      { url: '/gallery/k4.jpg', title: 'Court Surface', category: 'Construction' },
      { url: '/sports/basketball-court.jpg', title: 'Professional Markings', category: 'Details' },
      { url: '/gallery/court1.jpg', title: 'Game Action', category: 'Action' }
    ]
  },
  'stecol-indoor-basketball-court': {
    title: 'Stecol Indoor Basketball Court',
    category: 'Basketball Courts',
    location: 'Kigali, Rwanda',
    year: '2023',
    client: 'Stecol Corporation',
    description: 'A corporate indoor basketball facility designed for employee recreation and community events. This multi-purpose space serves both corporate and community needs, enhancing employee wellness and community engagement.',
    mainImage: '/gallery/k4.jpg',
    images: [
      { url: '/gallery/k4.jpg', title: 'Indoor Court', category: 'Interior' },
      { url: '/gallery/k5.jpg', title: 'Corporate Facility', category: 'Interior' },
      { url: '/gallery/k6.jpg', title: 'Modern Design', category: 'Architecture' },
      { url: '/sports/images (1).jpg', title: 'Equipment Setup', category: 'Equipment' }
    ]
  },
  'iprc-huye-basketball-court': {
    title: 'IPRC HUYE Basketball Court',
    category: 'Basketball Courts',
    location: 'Huye, Rwanda',
    year: '2023',
    client: 'IPRC HUYE',
    description: 'A basketball court built for the Integrated Polytechnic Regional College to support student athletics. This efficient facility features essential amenities and provides students with quality sports facilities for recreation and competition.',
    mainImage: '/gallery/k5.jpg',
    images: [
      { url: '/gallery/k5.jpg', title: 'College Court', category: 'Interior' },
      { url: '/gallery/k6.jpg', title: 'Student Facility', category: 'Interior' },
      { url: '/gallery/k7.jpg', title: 'Training Area', category: 'Equipment' },
      { url: '/sports/images (3).jpg', title: 'Court Details', category: 'Construction' }
    ]
  },
  'nyandungu-great-lake-complex-basketball-court': {
    title: 'Nyandungu Great Lake Complex Basketball Court',
    category: 'Basketball Courts',
    location: 'Kigali, Rwanda',
    year: '2023',
    client: 'Nyandungu Urban Wetland Eco-Park',
    description: 'A basketball court integrated into the Nyandungu eco-park complex, combining sports with environmental conservation. Built with eco-friendly materials and sustainable construction practices, this unique facility promotes both athletics and environmental awareness.',
    mainImage: '/gallery/k6.jpg',
    images: [
      { url: '/gallery/k6.jpg', title: 'Eco-Park Court', category: 'Exterior' },
      { url: '/gallery/k7.jpg', title: 'Natural Setting', category: 'Environment' },
      { url: '/gallery/k8.jpg', title: 'Sustainable Design', category: 'Architecture' },
      { url: '/sports/images (4).jpg', title: 'Court Integration', category: 'Construction' }
    ]
  },
  'central-african-republic-basketball-federation-court': {
    title: 'Central African Republic Basketball Federation Court',
    category: 'Basketball Courts',
    location: 'Central African Republic',
    year: '2023',
    client: 'CAR Basketball Federation',
    description: 'A professional basketball court built for the national basketball federation to support player development. Featuring robust construction methods and high-quality materials, this facility serves as a premier training center for national team development.',
    mainImage: '/gallery/k7.jpg',
    images: [
      { url: '/gallery/k7.jpg', title: 'Federation Court', category: 'Interior' },
      { url: '/gallery/centralafrica/images (6).jpg', title: 'Professional Setup', category: 'Equipment' },
      { url: '/gallery/k8.jpg', title: 'Training Facility', category: 'Interior' },
      { url: '/sports/images (5).jpg', title: 'Court Standards', category: 'Construction' }
    ]
  },
  'south-sudan-basketball-federation-indoor-basketball-court': {
    title: 'South Sudan Basketball Federation Indoor Basketball Court',
    category: 'Basketball Courts',
    location: 'South Sudan',
    year: '2023',
    client: 'South Sudan Basketball Federation',
    description: 'An indoor basketball facility designed to support the development of basketball in South Sudan. This comprehensive training center features modern amenities and has established a foundation for basketball growth in South Sudan.',
    mainImage: '/gallery/k8.jpg',
    images: [
      { url: '/gallery/k8.jpg', title: 'Federation Facility', category: 'Interior' },
      { url: '/gallery/southsudan/images.jpg', title: 'National Training Center', category: 'Interior' },
      { url: '/gallery/s3.jpg', title: 'Professional Court', category: 'Equipment' },
      { url: '/sports/images (6).jpg', title: 'Modern Amenities', category: 'Facilities' }
    ]
  },
  'professional-basketball-arena': {
    title: 'Professional Basketball Arena',
    category: 'Basketball Courts',
    location: 'East Africa',
    year: '2023',
    client: 'Regional Sports Authority',
    description: 'A large-scale basketball arena designed for professional games and major tournaments. Featuring advanced lighting, sound systems, and spectator amenities, this world-class venue serves professional basketball in East Africa.',
    mainImage: '/gallery/s2.jpg',
    images: [
      { url: '/gallery/s2.jpg', title: 'Professional Arena', category: 'Interior' },
      { url: '/gallery/s3.jpg', title: 'Tournament Setup', category: 'Equipment' },
      { url: '/gallery/s4.jpg', title: 'Spectator Areas', category: 'Facilities' },
      { url: '/sports/4609.jpg', title: 'Arena Overview', category: 'Architecture' }
    ]
  }
};

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
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
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-brand-lighterGray">
                <span><strong>Location:</strong> {project.location}</span>
                <span><strong>Year:</strong> {project.year}</span>
                <span><strong>Client:</strong> {project.client}</span>
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
                <p className="text-brand-secondary text-lg leading-relaxed">{project.description}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-brand-offWhite p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-brand-dark">Category:</span>
                    <span className="ml-2 text-brand-secondary">{project.category}</span>
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Location:</span>
                    <span className="ml-2 text-brand-secondary">{project.location}</span>
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Year:</span>
                    <span className="ml-2 text-brand-secondary">{project.year}</span>
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark">Client:</span>
                    <span className="ml-2 text-brand-secondary">{project.client}</span>
                  </div>
                </div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Project Gallery</h2>
          <GalleryGrid 
            items={project.images.map(img => ({
              imageUrl: img.url,
              title: img.title,
              category: img.category
            }))} 
            columns={2} 
          />
        </div>
      </section>

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

// Generate static params for known projects
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}
