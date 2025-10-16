'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  lazy?: boolean;
  webpSrc?: string;
  avifSrc?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  style,
  onLoad,
  onError,
  fallbackSrc = '/images/placeholder.jpg',
  lazy = true,
  webpSrc,
  avifSrc
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [mounted, setMounted] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority, isInView]);

  // Handle image error
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc(fallbackSrc);
      onError?.();
    }
  };

  // Handle image load
  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Generate blur placeholder
  const generateBlurDataURL = (width: number = 10, height: number = 10) => {
    if (typeof window === 'undefined') {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjNmNGY2Ii8+Cjwvc3ZnPgo=';
    }
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, width, height);
    }
    return canvas.toDataURL();
  };

  // WebP/AVIF support detection
  const supportsWebP = () => {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  const supportsAVIF = () => {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  };

  // Determine best image source
  const getBestImageSrc = () => {
    if (!mounted) return imageSrc; // Use original source during SSR
    if (avifSrc && supportsAVIF()) return avifSrc;
    if (webpSrc && supportsWebP()) return webpSrc;
    return imageSrc;
  };

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div 
      className={`bg-gray-200 animate-pulse ${className}`}
      style={{
        width: fill ? '100%' : width,
        height: fill ? '100%' : height,
        ...style
      }}
    />
  );

  if (!isInView) {
    return (
      <div ref={imgRef} className={className} style={style}>
        <LoadingSkeleton />
      </div>
    );
  }

  const imageProps = {
    src: getBestImageSrc(),
    className: `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`,
    onLoad: handleImageLoad,
    onError: handleImageError,
    quality,
    style,
    ...(fill ? { fill: true } : { width, height }),
    ...(priority ? { priority: true } : {}),
    ...(sizes ? { sizes } : {}),
    ...(placeholder === 'blur' ? {
      placeholder: 'blur' as const,
      blurDataURL: blurDataURL || generateBlurDataURL(width, height)
    } : {})
  };

  return (
    <div ref={imgRef} className="relative">
      {!isLoaded && <LoadingSkeleton />}
      <Image {...imageProps} alt={alt} />
    </div>
  );
};

// Specialized components for common use cases
export const ProjectImage: React.FC<Omit<OptimizedImageProps, 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    quality={90}
  />
);

export const HeroImage: React.FC<Omit<OptimizedImageProps, 'sizes' | 'priority'>> = (props) => (
  <OptimizedImage
    {...props}
    sizes="100vw"
    priority={true}
    quality={95}
    lazy={false}
  />
);

export const ThumbnailImage: React.FC<Omit<OptimizedImageProps, 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 768px) 50vw, 25vw"
    quality={80}
  />
);

export const GalleryImage: React.FC<Omit<OptimizedImageProps, 'sizes'>> = (props) => (
  <OptimizedImage
    {...props}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    quality={85}
    placeholder="blur"
  />
);

export default OptimizedImage;
