import React from 'react';
// import Link from 'next/link';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  withAccent?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  withAccent = true
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-brand-dark mb-4 ${withAccent ? 'relative' : ''}`}>
        {withAccent && (
          <span className="absolute -left-3 top-0 bottom-0 w-1 bg-brand-accent hidden md:block"></span>
        )}
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brand-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;