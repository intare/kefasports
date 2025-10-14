import React from 'react';
import Image from 'next/image';
import TeamSectionWrapper from '@/components/ui/TeamSectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABlock from '@/components/ui/CTABlock';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { aboutPageQuery } from '@/lib/queries';

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AboutPage() {
  // Fetch about page data from Sanity
  const data = await fetchSanityData(aboutPageQuery);

  const about = data?.about || null;
  const team = data?.team || [];
  const whyChooseUs = data?.whyChooseUs || [];

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

  // Transform team data or use fallback
  const teamMembers = team.length > 0 ? team.map((member: any) => ({
    name: member.name,
    title: member.title,
    imageUrl: member.image ? urlFor(member.image).width(300).height(300).url() : '/team/placeholder.jpg',
    accentColor: member.accentColor || '#e74c3c',
    bio: member.bio
  })) : fallbackTeamMembers;

  // Default values
  const heroImageUrl = about?.heroImage ? urlFor(about.heroImage).width(800).height(600).url() : '/gallery/children.jpg';
  const pageTitle = about?.title || 'About Us';
  const pageSubtitle = about?.subtitle || "We're a team of dedicated professionals committed to building exceptional sports facilities that inspire performance and community.";
  const storyTitle = about?.story?.title || 'Our Story';
  const storySubtitle = about?.story?.subtitle || 'Building champions since 2019';
  const storyContent = about?.story?.content || [
    { _type: 'block', children: [{ _type: 'span', text: 'KefaSports is a premier Sports facilities construction firm, founded in 2019 with a passionate team of young professionals and certified experts.' }] },
    { _type: 'block', children: [{ _type: 'span', text: 'Our experienced team is dedicated to providing the highest level of service and craftsmanship for each individual customer.' }] }
  ];

  const values = about?.values || [
    { title: "Excellence", description: "We are committed to delivering the highest quality in every aspect of our work, from materials and construction techniques to client communication and project management." },
    { title: "Innovation", description: "We continuously seek new technologies, materials, and methods to enhance the performance, sustainability, and user experience of the facilities we build." },
    { title: "Integrity", description: "We operate with transparency, honesty, and ethical standards in all our dealings, building trust with clients, partners, and communities." },
    { title: "Collaboration", description: "We believe in the power of teamwork, partnering closely with clients, architects, engineers, and stakeholders to achieve shared goals." },
    { title: "Community Impact", description: "We recognize that sports facilities are more than structures, they are platforms for positive change. We are catalysts for community development, public health, and social connection." },
    { title: "Sustainability", description: "We design and build with environmental responsibility in mind, minimizing ecological impact while maximizing resource efficiency and longevity." }
  ];

  return (
    <main className="bg-brand-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageTitle}</h1>
            <p className="text-xl text-brand-secondary">
              {pageSubtitle}
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
                title={storyTitle}
                subtitle={storySubtitle}
                alignment="left"
              />

              <div className="mt-6 space-y-6 text-brand-secondary">
                {Array.isArray(storyContent) ? (
                  storyContent.map((block: any, index: number) => (
                    <p key={index}>
                      {block.children?.map((child: any) => child.text).join('') || ''}
                    </p>
                  ))
                ) : (
                  <>
                    <p>KefaSports is a premier Sports facilities construction firm, founded in 2019 with a passionate team of young professionals and certified experts.</p>
                    <p>Our experienced team is dedicated to providing the highest level of service and craftsmanship for each individual customer.</p>
                  </>
                )}
              </div>
            </div>

            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={heroImageUrl}
                alt="Our company team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      {about?.mission && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-brand-lighterGray leading-relaxed">
              {about.mission}
            </p>
          </div>
        </section>
      )}

      {/* Vision Statement */}
      {about?.vision && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">Our Vision</h2>
            <p className="text-xl text-brand-secondary leading-relaxed">
              {about.vision}
            </p>
          </div>
        </section>
      )}

      {/* Mission & Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="The principles that guide everything we do"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                {value.icon && (
                  <div className="text-4xl mb-4">{value.icon}</div>
                )}
                <h3 className="text-xl font-bold mb-4 text-brand-primary">{value.title}</h3>
                <p className="text-brand-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      {about?.stats && about.stats.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {about.stats.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-brand-lighterGray mb-1">{stat.label}</div>
                  {stat.description && (
                    <div className="text-sm text-gray-400">{stat.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Leadership Team Section */}
      <TeamSectionWrapper
        headline="Our Leadership Team"
        fallbackTeamMembers={teamMembers}
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
