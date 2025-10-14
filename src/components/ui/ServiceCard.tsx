import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  link: string;
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  linkText = "Learn More"
}) => {
  return (
    <div className="bg-brand-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      {icon && (
        <div className="mb-4 text-brand-accent">
          {/* This would be replaced with an actual icon component or image */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-accent bg-opacity-10">
            <span className="text-2xl">🏀</span> {/* Placeholder */}
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
      <p className="text-brand-secondary mb-4 flex-grow">{description}</p>
      <Link 
        href={link}
        className="text-brand-accent hover:text-brand-dark font-medium inline-flex items-center mt-2"
      >
        {linkText}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;