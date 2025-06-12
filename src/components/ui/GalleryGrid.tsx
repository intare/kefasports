'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryItemProps {
  imageUrl: string;
  title?: string;
  category?: string;
  projectUrl?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  imageUrl,
  title,
  category,
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

  const content = (
    <div className="relative overflow-hidden rounded-lg group">
      {/* Image */}
      <div className="gallery-item">
        <Image
          src={imageSrc}
          alt={title || "Gallery image"}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={handleImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    </div>
  );
  
  // If projectUrl is provided, make the item clickable
  if (projectUrl) {
    return (
      <Link href={projectUrl} className="block">
        {content}
      </Link>
    );
  }
  
  // Otherwise, just return the content
  return content;
};

interface GalleryGridProps {
  items: GalleryItemProps[];
  columns?: number;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  columns = 3
}) => {
  // Determine grid columns based on the columns prop
  const gridClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  
  return (
    <div className={`grid ${gridClass} gap-4 md:gap-6`}>
      {items.map((item, index) => (
        <GalleryItem
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          category={item.category}
          projectUrl={item.projectUrl}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;