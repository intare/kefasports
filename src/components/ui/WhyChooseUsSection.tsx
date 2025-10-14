import React from 'react';
import Image from 'next/image';

export interface WhyChooseUsItemProps {
  icon?: string;
  title: string;
  description: string;
  proofPoint?: string;
}

const WhyChooseUsItem: React.FC<WhyChooseUsItemProps> = ({
  icon,
  title,
  description,
  proofPoint
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Icon */}
      {icon && (
        <div className="mb-4 text-brand-accent">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-accent bg-opacity-10">
            {/* Placeholder icon - would be replaced with actual icon */}
            <span className="text-2xl">✓</span>
          </div>
        </div>
      )}
      
      {/* Content */}
      <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
      <p className="text-brand-secondary mb-4 flex-grow">{description}</p>
      
      {/* Proof Point */}
      {proofPoint && (
        <div className="mt-2 text-sm italic border-l-2 border-brand-accent pl-3 py-1 text-brand-secondary">
          {proofPoint}
        </div>
      )}
    </div>
  );
};

interface WhyChooseUsSectionProps {
  headline: string;
  introText?: string;
  items: WhyChooseUsItemProps[];
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  headline,
  introText,
  items
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f2efec] !important">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{headline}</h2>
          {introText && (
            <p className="text-lg text-brand-secondary max-w-3xl mx-auto">
              {introText}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <WhyChooseUsItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              proofPoint={item.proofPoint}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;






