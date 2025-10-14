import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'pulse'
}) => {
  const baseClasses = 'bg-gray-200';
  
  const variantClasses = {
    text: 'rounded',
    rectangular: '',
    circular: 'rounded-full',
    rounded: 'rounded-lg'
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-wave',
    none: ''
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  );
};

// Project Card Skeleton
export const ProjectCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Skeleton variant="rectangular" height={200} className="w-full" />
    <div className="p-6">
      <Skeleton variant="text" height={20} className="w-3/4 mb-2" />
      <Skeleton variant="text" height={16} className="w-1/2 mb-4" />
      <Skeleton variant="text" height={14} className="w-full mb-2" />
      <Skeleton variant="text" height={14} className="w-5/6" />
    </div>
  </div>
);

// Service Card Skeleton
export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <Skeleton variant="circular" width={48} height={48} className="mb-4" />
    <Skeleton variant="text" height={20} className="w-3/4 mb-2" />
    <Skeleton variant="text" height={14} className="w-full mb-2" />
    <Skeleton variant="text" height={14} className="w-5/6 mb-4" />
    <Skeleton variant="rounded" height={36} className="w-24" />
  </div>
);

// Testimonial Card Skeleton
export const TestimonialCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <Skeleton variant="text" height={16} className="w-full mb-2" />
    <Skeleton variant="text" height={16} className="w-full mb-2" />
    <Skeleton variant="text" height={16} className="w-3/4 mb-6" />
    <div className="flex items-center">
      <Skeleton variant="circular" width={48} height={48} className="mr-4" />
      <div className="flex-1">
        <Skeleton variant="text" height={16} className="w-1/2 mb-1" />
        <Skeleton variant="text" height={14} className="w-3/4" />
      </div>
    </div>
  </div>
);

// Hero Slider Skeleton
export const HeroSliderSkeleton: React.FC = () => (
  <div className="relative h-[600px] md:h-[700px] bg-gray-100">
    <div className="absolute inset-0 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-4 bg-gray-200 p-8 lg:p-16 flex flex-col justify-center">
        <Skeleton variant="text" height={12} className="w-1/3 mb-4" />
        <Skeleton variant="text" height={32} className="w-full mb-2" />
        <Skeleton variant="text" height={32} className="w-3/4 mb-8" />
        <Skeleton variant="rounded" height={48} className="w-40" />
      </div>
      <div className="col-span-12 lg:col-span-8 bg-gray-300" />
    </div>
    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Skeleton variant="text" height={20} className="w-8" />
        <Skeleton variant="rectangular" height={1} className="w-24" />
        <Skeleton variant="text" height={20} className="w-8" />
      </div>
      <div className="flex gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
      </div>
    </div>
  </div>
);

// Gallery Grid Skeleton
export const GalleryGridSkeleton: React.FC<{ items?: number }> = ({ items = 6 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {Array.from({ length: items }).map((_, index) => (
      <Skeleton
        key={index}
        variant="rounded"
        height={200}
        className="w-full aspect-[4/3]"
      />
    ))}
  </div>
);

// Client Logo Skeleton
export const ClientLogoSkeleton: React.FC = () => (
  <div className="flex justify-center items-center p-4">
    <Skeleton variant="rectangular" width={120} height={60} className="rounded" />
  </div>
);

// Page Header Skeleton
export const PageHeaderSkeleton: React.FC = () => (
  <div className="relative h-96 md:h-[500px] bg-gray-200">
    <div className="absolute inset-0 bg-gray-300" />
    <div className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Skeleton variant="rounded" height={24} className="w-32 mb-4" />
          <Skeleton variant="text" height={48} className="w-full mb-2" />
          <Skeleton variant="text" height={48} className="w-3/4 mb-4" />
          <div className="flex items-center space-x-4">
            <Skeleton variant="text" height={16} className="w-24" />
            <Skeleton variant="text" height={16} className="w-32" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Section Skeleton
export const SectionSkeleton: React.FC<{ 
  title?: boolean; 
  subtitle?: boolean; 
  children?: React.ReactNode;
}> = ({ 
  title = true, 
  subtitle = true, 
  children 
}) => (
  <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      {title && (
        <div className="text-center mb-12">
          <Skeleton variant="text" height={32} className="w-1/2 mx-auto mb-4" />
          {subtitle && (
            <Skeleton variant="text" height={16} className="w-3/4 mx-auto" />
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Skeleton;
