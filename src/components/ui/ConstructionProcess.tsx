import React from 'react';
import Link from 'next/link';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ConstructionProcessProps {
  steps?: ProcessStep[];
}

const ConstructionProcess: React.FC<ConstructionProcessProps> = ({ steps }) => {
  const defaultSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Introduction Phase",
      description: "Client Relations Manager meets to discuss basketball court needs, conducts a site survey, and provides a quote.",
    },
    {
      number: 2,
      title: "Pre-Construction Phase",
      description: "Documentation and permits for basketball court construction are prepared.",
    },
    {
      number: 3,
      title: "Construction Phase",
      description: "The basketball court site is prepped, materials are sourced, flatwork is completed, and hoops are installed.",
    },
    {
      number: 4,
      title: "Cure Times & Surface Preparation",
      description: "Basketball court lines are painted and the court is prepped for games.",
    },
    {
      number: 5,
      title: "Hand Over to Client",
      description: "The basketball court is ready for games.",
    },
  ];

  const displaySteps = steps && steps.length > 0 ? steps : defaultSteps;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Our Process
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
            We follow a proven, collaborative approach to ensure your project is delivered on time, on budget, and beyond expectations.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {displaySteps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-lg p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Orange Circle Badge */}
              <div className="mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#F36C20' }}
                >
                  <span className="text-white text-2xl sm:text-3xl font-bold" style={{
                    WebkitTextStroke: '2px white',
                    textStroke: '2px white',
                    paintOrder: 'stroke fill'
                  }}>
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#f36c20' }}>
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-brand-secondary text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Card */}
        <div className="bg-white rounded-lg p-8 lg:p-12 shadow-md text-center max-w-md mx-auto lg:float-right lg:ml-8 lg:mt-[-120px]">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
            Ready to Get Started?
          </h3>
          <Link
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white uppercase tracking-wide transition-all duration-300 hover:opacity-90 rounded"
            style={{ backgroundColor: 'rgb(243, 108, 32)' }}
          >
            REQUEST A QUOTE
          </Link>
        </div>

        <div className="clear-both"></div>
      </div>
    </section>
  );
};

export default ConstructionProcess;
