import React from 'react';
import Link from 'next/link';

interface CTABlockProps {
  headline: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  appearance?: 'primary' | 'secondary';
}

const CTABlock: React.FC<CTABlockProps> = ({
  headline,
  description,
  buttonText,
  buttonLink,
  appearance = 'primary'
}) => {
  const isPrimary = appearance === 'primary';
  
  return (
    <div className={`${isPrimary ? 'bg-brand-dark text-brand-white' : 'bg-brand-offWhite text-brand-dark'} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
        {description && (
          <p className={`text-lg mb-8 ${isPrimary ? 'text-brand-lighterGray' : 'text-brand-secondary'}`}>
            {description}
          </p>
        )}
        <Link
          href={buttonLink}
          className={`inline-flex items-center justify-center px-6 py-3 border ${
            isPrimary 
              ? 'border-transparent bg-brand-accent text-brand-white hover:bg-opacity-90' 
              : 'border-brand-accent text-brand-accent bg-transparent hover:bg-brand-accent hover:text-brand-white'
          } text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CTABlock;