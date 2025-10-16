import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import type { SanityImage } from '@/types/sanity';

interface ServicesHeroProps {
  label?: string;
  mainHeading?: string;
  subHeading?: string;
  description?: string;
  heroImage?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({
  label = "CONSTRUCTION",
  mainHeading = "Basketball Court Construction",
  subHeading = "in Florida",
  description = "Mor Sports, one of the leading basketball court builders in Florida, is an award-winning construction company known for its expertise in constructing top-quality basketball courts. With a dedication to excellence and customer satisfaction, Mor Sports has established a strong reputation in the industry. When you choose Mor Sports as your basketball court builders in Florida, you can trust in their exceptional craftsmanship and commitment to delivering outstanding results.",
  heroImage,
  ctaText = "REQUEST A QUOTE",
  ctaLink = "/contact",
}) => {
  const imageUrl = heroImage ? urlFor(heroImage).width(800).height(600).url() : "/services.png";
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image Collage */}
          <div className="w-full h-auto order-2 lg:order-1">
            <img
              src={imageUrl}
              alt={`${mainHeading} ${subHeading}`}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            {/* Small Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-brand-secondary uppercase mb-3 sm:mb-4">
              {label}
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span style={{ color: '#f36c20' }}>{mainHeading}</span>
              <br />
              <span className="text-brand-dark">{subHeading}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed mb-6 lg:mb-8">
              {description}
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href={ctaLink}
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white uppercase tracking-wide transition-all duration-300 hover:opacity-90 rounded"
                style={{ backgroundColor: 'rgb(243, 108, 32)' }}
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
