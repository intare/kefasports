'use client';

import React, { useState } from 'react';
import type { SanityImage } from '@/types/sanity';

interface AccordionItem {
  title: string;
  content: string;
}

interface HowWeWorkItemData {
  _id: string;
  title: string;
  description: string;
  image?: SanityImage;
  accordionItems: AccordionItem[];
}

interface HowWeWorkSectionProps {
  items: HowWeWorkItemData[];
}

const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: number | null }>({});

  if (!items || items.length === 0) {
    return null;
  }

  const toggleAccordion = (itemId: string, index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] === index ? null : index,
    }));
  };

  return (
    <>
      {/* Section Heading */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              How We Work
            </h2>
            <p className="text-base sm:text-lg text-brand-secondary max-w-3xl mx-auto">
              Our comprehensive approach ensures every project is executed with precision and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Items */}
      <section className="space-y-0">
        {items.map((item) => (
          <div
            key={item._id}
            className="relative min-h-[500px] lg:min-h-[600px] w-full overflow-hidden"
            style={{
              backgroundImage: 'url(/how-we-work.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
              {/* Content Grid */}
              <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-12 sm:py-16 lg:py-20 min-h-[500px] lg:min-h-[600px] items-center">
                {/* Left Side - Title and Description */}
                <div className="flex flex-col justify-center text-white">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/95">
                    {item.description}
                  </p>
                </div>

                {/* Right Side - White Accordion Card */}
                <div className="flex flex-col justify-center">
                  <div
                    className="bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-10"
                    style={{ borderBottom: '4px solid #ed6631' }}
                  >
                    <div className="space-y-0">
                      {item.accordionItems.map((accordionItem, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-300 last:border-b-0"
                        >
                          {/* Accordion Header */}
                          <button
                            onClick={() => toggleAccordion(item._id, index)}
                            className="w-full flex items-center justify-between text-left py-4 sm:py-5 group transition-colors"
                            aria-expanded={expandedItems[item._id] === index}
                          >
                            <span
                              className="text-base sm:text-lg lg:text-xl font-semibold pr-4 flex-1"
                              style={{ color: '#1f2937' }}
                            >
                              {accordionItem.title}
                            </span>
                            <div
                              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ${
                                expandedItems[item._id] === index ? 'rotate-180' : ''
                              }`}
                              style={{ backgroundColor: '#ed6631' }}
                            >
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>

                          {/* Accordion Content */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              expandedItems[item._id] === index
                                ? 'max-h-96 opacity-100 pb-4'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                              {accordionItem.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
      </section>
    </>
  );
};

export default HowWeWorkSection;
