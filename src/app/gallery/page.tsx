import React from 'react';
// import SectionHeading from '@/components/ui/SectionHeading';
import GalleryGrid from '@/components/ui/GalleryGrid';
import CTABlock from '@/components/ui/CTABlock';

export default function GalleryPage() {
  // Gallery items using actual images from your project
  const galleryItems = [
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

  // Categories for filter
  const categories = [
    "All",
    "Basketball Courts",
    "Swimming Pools",
    "Playgrounds",
    "Soccer Fields",
    "Equipment & Gear",
    "Arena Design-Build"
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

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  index === 0 
                    ? 'bg-brand-accent text-brand-white' 
                    : 'bg-brand-white text-brand-secondary hover:bg-brand-accent hover:text-brand-white'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <GalleryGrid items={galleryItems} columns={3} />
        </div>
      </section>

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
