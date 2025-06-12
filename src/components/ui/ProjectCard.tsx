'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  imageUrl,
  projectUrl
}) => {
  const [imageSrc, setImageSrc] = useState(imageUrl);
  const [imageError, setImageError] = useState(false);

  // Fallback image if the original fails to load
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc('/gallery/court1.jpg'); // Use a default image from your gallery
    }
  };

  return (
    <Link href={projectUrl} className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="project-card-image">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60 group-hover:opacity-75 transition-opacity"></div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-brand-white">
          <span className="text-sm font-medium text-brand-accent bg-brand-dark bg-opacity-50 px-2 py-1 rounded-sm">
            {category}
          </span>
          <h3 className="text-xl font-bold mt-2 group-hover:underline decoration-brand-accent underline-offset-2">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;