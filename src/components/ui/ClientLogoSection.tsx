'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface ClientLogoProps {
  name: string;
  logoUrl: string;
  grayscale?: boolean;
}

const ClientLogo: React.FC<ClientLogoProps> = ({
  name,
  logoUrl,
  grayscale = false
}) => {
  const [imageSrc, setImageSrc] = useState(logoUrl);
  const [imageError, setImageError] = useState(false);

  // Fallback if the original fails to load
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc('/clients/ferwaba.jpg'); // Use a default client logo
    }
  };

  return (
    <div className="group relative flex-shrink-0 w-48 mx-4">
      {/* Logo Container with Professional Styling */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 p-8 border border-gray-200 hover:border-brand-accent/30 transform hover:-translate-y-2 hover:scale-105">
        {/* Logo Image */}
        <div className="relative h-20 w-full flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={`${name} logo`}
            width={160}
            height={80}
            className={`max-w-full max-h-full object-contain transition-all duration-700 ${
              grayscale
                ? 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100'
                : 'opacity-90 group-hover:opacity-100'
            }`}
            onError={handleImageError}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Client Name */}
        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-accent transition-colors duration-300">
            {name}
          </p>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-accent/5 to-[#f36c20]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  );
};

interface ClientLogoSectionProps {
  headline?: string;
  logos: ClientLogoProps[];
  subtitle?: string;
}

const ClientLogoSection: React.FC<ClientLogoSectionProps> = ({
  headline,
  logos,
  subtitle
}) => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          {headline && (
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
              {headline}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          {!subtitle && (
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              We&apos;re proud to partner with leading organizations across Africa and beyond
            </p>
          )}

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-10">
            <div className="h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent w-32"></div>
            <div className="mx-6 w-3 h-3 bg-brand-accent rounded-full shadow-lg"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent w-32"></div>
          </div>
        </div>

        {/* Auto-Scrolling Logos Container */}
        <div className="relative mb-16">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-horizontal">
              {duplicatedLogos.map((logo, index) => (
                <ClientLogo
                  key={`${logo.name}-${index}`}
                  name={logo.name}
                  logoUrl={logo.logoUrl}
                  grayscale={logo.grayscale}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Proven Track Record</h3>
              <p className="text-brand-secondary text-sm">50+ successful projects delivered on time and on budget</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Regional Expertise</h3>
              <p className="text-brand-secondary text-sm">Serving clients across 15+ countries in Africa</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Client Satisfaction</h3>
              <p className="text-brand-secondary text-sm">100% client satisfaction with long-term partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSection;
