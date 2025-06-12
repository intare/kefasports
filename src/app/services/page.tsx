import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import CTABlock from '@/components/ui/CTABlock';

export default function ServicesPage() {
  // Sample data - would be fetched from Sanity CMS in production
  const services = [
    {
      title: "High-Performance Basketball Courts",
      description: "Indoor or outdoor, competition-grade or recreational—we build durable, high-performance courts designed for optimal play and longevity. Our courts meet or exceed all relevant safety and performance standards, ensuring a superior playing experience for athletes at every level.",
      link: "/services/basketball-courts",
      linkText: "Design Your Court"
    },
    {
      title: "Commercial & Residential Pools",
      description: "From Olympic-sized competition pools to community leisure centers and private residential installations, we construct safe, state-of-the-art aquatic facilities. Our designs incorporate the latest in filtration technology, energy efficiency, and aesthetic appeal.",
      link: "/services/swimming-pools",
      linkText: "Explore Pool Solutions"
    },
    {
      title: "Innovative & Safe Playgrounds",
      description: "Create engaging, safe, and imaginative play spaces that foster community development and stand the test of time. We design playgrounds that balance safety with adventure, encouraging physical activity and social interaction for children of all ages and abilities.",
      link: "/services/playgrounds",
      linkText: "Plan Your Playground"
    },
    {
      title: "Professional Soccer Fields",
      description: "Natural or artificial turf, engineered for peak performance and durability, meeting the demands of athletes at every level. Our soccer fields feature proper drainage, irrigation systems, and turf selection tailored to your specific climate and usage requirements.",
      link: "/services/soccer-fields",
      linkText: "Learn About Field Construction"
    },
    {
      title: "Sports Equipment & Gear Supply",
      description: "Complete your facility with high-quality sports equipment and gear. We source, supply, and install everything from basketball hoops and swimming lane lines to playground equipment and soccer goals, ensuring seamless integration with your facility.",
      link: "/services/equipment-supply",
      linkText: "View Equipment Options"
    },
    {
      title: "Arena Design-Build",
      description: "Comprehensive design-build services for multi-purpose sports arenas and complexes. Our end-to-end approach ensures cohesive design, efficient construction, and facilities that serve the diverse needs of your community or organization.",
      link: "/services/arena-design",
      linkText: "Discuss Your Arena Project"
    }
  ];

  return (
    <div className="bg-brand-white">
      {/* Page Header */}
      <div className="bg-brand-dark text-brand-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-brand-lighterGray">
            Comprehensive sports facility construction solutions tailored to your specific needs.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Expert Solutions for Every Sports Environment"
            subtitle="From concept to completion, we deliver specialized construction services for a wide range of sports facilities."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                linkText={service.linkText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Process"
            subtitle="We follow a proven, collaborative approach to ensure your project is delivered on time, on budget, and beyond expectations."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-accent text-brand-white font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Consultation & Planning</h3>
              <p className="text-brand-secondary">We begin with a thorough consultation to understand your vision, requirements, and constraints, followed by detailed planning and feasibility studies.</p>
            </div>
            
            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-accent text-brand-white font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Design & Engineering</h3>
              <p className="text-brand-secondary">Our expert team creates comprehensive designs and engineering plans that balance aesthetics, functionality, safety, and budget considerations.</p>
            </div>
            
            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-accent text-brand-white font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Construction</h3>
              <p className="text-brand-secondary">With meticulous project management and quality control, we execute the construction phase efficiently while maintaining open communication.</p>
            </div>
            
            <div className="bg-brand-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-accent text-brand-white font-bold text-xl mb-4">4</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Completion & Support</h3>
              <p className="text-brand-secondary">After thorough testing and quality assurance, we provide comprehensive training, documentation, and ongoing support for your new facility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        headline="Ready to Discuss Your Project?"
        description="Contact our team today to schedule a consultation and learn how we can bring your sports facility vision to life."
        buttonText="Get in Touch"
        buttonLink="/contact"
        appearance="primary"
      />
    </div>
  );
}
