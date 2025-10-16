import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
  title?: string;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  title,
  imageUrl
}) => {
  return (
    <div className="bg-brand-white rounded-lg shadow-md p-6 flex flex-col">
      {/* Quote Icon */}
      <div className="text-brand-accent mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Quote Text */}
      <p className="text-brand-secondary mb-6 italic flex-grow">
        &ldquo;{quote}&rdquo;
      </p>
      
      {/* Author Info */}
      <div className="flex items-center mt-4">
        {imageUrl && (
          <div className="flex-shrink-0 mr-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-brand-lighterGray">
              {/* Would be replaced with actual Image component */}
              <div className="h-full w-full bg-brand-accent bg-opacity-20 flex items-center justify-center text-brand-accent">
                {author.charAt(0)}
              </div>
            </div>
          </div>
        )}
        <div>
          <p className="font-bold text-brand-dark">{author}</p>
          {(company || title) && (
            <p className="text-sm text-brand-secondary">
              {title && <span>{title}</span>}
              {title && company && <span>, </span>}
              {company && <span>{company}</span>}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
