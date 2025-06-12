'use client'

import React from 'react';
import Image from 'next/image';
import TeamSectionWrapper from '@/components/ui/TeamSectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABlock from '@/components/ui/CTABlock';

export default function AboutPage() {
  // Fallback data if Sanity is not available
  const fallbackTeamMembers = [
    {
      name: "Kefa",
      title: "CEO & Founder",
      imageUrl: "/team/kefa.jpg",
      accentColor: "#e74c3c"
    },
    {
      name: "Willy",
      title: "Finance Manager",
      imageUrl: "/team/Will.png",
      accentColor: "#e74c3c"
    },
    {
      name: "Shami",
      title: "Strategic Advisor",
      imageUrl: "/team/Shami.png",
      accentColor: "#e74c3c"
    },
    {
      name: "Jimmy",
      title: "Logistics Manager",
      imageUrl: "/team/Jimmy.png",
      accentColor: "#e74c3c"
    },
    {
      name: "Clenny",
      title: "Assistant Manager",
      imageUrl: "/team/Clenny.png",
      accentColor: "#e74c3c"
    },
    {
      name: "Sy",
      title: "Sports Director",
      imageUrl: "/team/Sy.png",
      accentColor: "#e74c3c"
    },
    {
      name: "Bruce",
      title: "Architect & Designer",
      imageUrl: "/team/Bruce.png",
      accentColor: "#e74c3c"
    },
    {
      name: "Donat",
      title: "Head Technician",
      imageUrl: "/team/Donat.png",
      accentColor: "#e74c3c"
    }
  ];

  return (
    <main className="bg-brand-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-brand-secondary">
              We&apos;re a team of dedicated professionals committed to building exceptional sports facilities that inspire performance and community.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="Building champions since 2019"
                alignment="left"
              />
              
              <div className="mt-6 space-y-6 text-brand-secondary">
                <p>
                 KefaSports is a premier Sports facilities construction firm, founded in 2019 with a passionate team of young professionals and certified experts. 
                </p>
                <p>
                  Our experienced team is dedicated to providing the highest level of service and craftsmanship for each individual customer.
                </p>
              </div>
            </div>
            
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/children.jpg"
                alt="Our company team - Building champions since 2019"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="The principles that guide everything we do"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Excellence</h3>
              <p className="text-brand-secondary">
                We are committed to delivering the highest quality in every aspect of our work, from materials and construction techniques to client communication and project management.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Innovation</h3>
              <p className="text-brand-secondary">
                We continuously seek new technologies, materials, and methods to enhance the performance, sustainability, and user experience of the facilities we build.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Integrity</h3>
              <p className="text-brand-secondary">
                We operate with transparency, honesty, and ethical standards in all our dealings, building trust with clients, partners, and communities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Collaboration</h3>
              <p className="text-brand-secondary">
                We believe in the power of teamwork, partnering closely with clients, architects, engineers, and stakeholders to achieve shared goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Community Impact</h3>
              <p className="text-brand-secondary">
                We recognize that sports facilities are more than structures, they are platforms for positive change. We are catalysts for community development, public health, and social connection.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Sustainability</h3>
              <p className="text-brand-secondary">
                We design and build with environmental responsibility in mind, minimizing ecological impact while maximizing resource efficiency and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section - Using TeamSectionWrapper */}
      <TeamSectionWrapper
        headline="Our Leadership Team"
        fallbackTeamMembers={fallbackTeamMembers}
      />
      
      {/* CTA Section */}
      <CTABlock
        headline="Ready to Work With Our Team?"
        description="Contact us today to discuss your sports facility project and discover how our expertise can bring your vision to life."
        buttonText="Get in Touch"
        buttonLink="/contact"
        appearance="primary"
      />
    </main>
  );
}
