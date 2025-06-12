'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  trustSignal?: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustSignal,
  backgroundImage
}) => {
  const [imageSrc, setImageSrc] = useState(backgroundImage);
  const [imageError, setImageError] = useState(false);

  // Fallback image if the original fails to load
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc('/gallery/court1.jpg'); // Use a default image from your gallery
    }
  };

  return (
    <div className="relative bg-brand-dark text-brand-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt="Sports facility"
          fill
          className="object-cover object-center"
          onError={handleImageError}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-brand-lighterGray">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={primaryCTA.href}
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-white bg-brand-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
            >
              {primaryCTA.text}
            </Link>
            <Link 
              href={secondaryCTA.href}
              className="inline-flex justify-center items-center px-6 py-3 border border-brand-white text-base font-medium rounded-md shadow-sm text-brand-white bg-transparent hover:bg-brand-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-white"
            >
              {secondaryCTA.text}
            </Link>
          </div>
          {trustSignal && (
            <p className="mt-6 text-brand-lighterGray">
              {trustSignal}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;