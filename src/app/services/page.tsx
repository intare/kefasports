import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import CTABlock from '@/components/ui/CTABlock';
import ConstructionProcess from '@/components/ui/ConstructionProcess';
import ServicesHero from '@/components/ui/ServicesHero';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { allServicesQuery, servicesHeroQuery } from '@/lib/queries';
import type { SanityImage } from '@/types/sanity';

type ServiceItem = {
  _id?: string;
  title: string;
  description?: string;
  slug: string;
  icon?: string;
  mainImage?: SanityImage;
};

type ServicesHeroData = {
  label?: string;
  mainHeading?: string;
  subHeading?: string;
  description?: string;
  heroImage?: SanityImage;
  ctaText?: string;
  ctaLink?: string;
};

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ServicesPage() {
  const servicesData = (await fetchSanityData<ServiceItem[]>(allServicesQuery)) ?? [];
  const servicesHeroData = (await fetchSanityData<ServicesHeroData>(servicesHeroQuery)) ?? null;

  // Fallback data if Sanity fetch fails
  const fallbackServices = [
    {
      _id: 'fallback-1',
      title: "TENNIS COURTS",
      description: "Professional tennis court construction with premium surfaces and precision installation.",
      slug: "tennis-courts",
      icon: "tennis",
      imageUrl: "/gallery/centralafrica/tennis-court-serve.jpg",
    },
    {
      _id: 'fallback-2',
      title: "PICKLEBALL COURTS",
      description: "State-of-the-art pickleball court construction designed for optimal play and durability.",
      slug: "pickleball-courts",
      icon: "pickleball",
      imageUrl: "/gallery/centralafrica/k7.jpg",
    },
    {
      _id: 'fallback-3',
      title: "BASKETBALL COURTS",
      description: "High-performance basketball court construction for indoor and outdoor facilities.",
      slug: "basketball-courts",
      icon: "basketball",
      imageUrl: "/gallery/centralafrica/k1.jpg",
    },
    {
      _id: 'fallback-4',
      title: "BOCCE COURTS",
      description: "Premium bocce court construction with authentic surfaces and professional design.",
      slug: "bocce-courts",
      icon: "bocce",
      imageUrl: "/gallery/centralafrica/k6.jpg",
    },
    {
      _id: 'fallback-5',
      title: "SPORTS EQUIPMENT & GEAR",
      description: "Complete supply of professional sports equipment and gear for all facility types.",
      slug: "equipment-gear",
      icon: "equipment",
      imageUrl: "/gallery/centralafrica/k2.jpg",
    },
    {
      _id: 'fallback-6',
      title: "CONSTRUCTION & DESIGN",
      description: "Comprehensive construction and design services for sports facilities of all types.",
      slug: "construction-design",
      icon: "construction",
      imageUrl: "/gallery/centralafrica/s2.jpg",
    },
    {
      _id: 'fallback-7',
      title: "KEFASPORTS",
      description: "Complete sports facility solutions from planning to execution.",
      slug: "kefasports",
      icon: "kefasports",
      imageUrl: "/gallery/centralafrica/k3.jpg",
    },
    {
      _id: 'fallback-8',
      title: "INSTALLATION & MAINTENANCE",
      description: "Professional installation and ongoing maintenance services for all sports facilities.",
      slug: "installation-maintenance",
      icon: "installation",
      imageUrl: "/gallery/centralafrica/k5.jpg",
    },
  ];

  const displayServices = servicesData.length > 0
    ? servicesData.map(service => ({
        ...service,
        imageUrl: service.mainImage ? urlFor(service.mainImage).width(800).height(600).url() : undefined
      }))
    : fallbackServices;

  return (
    <div className="bg-brand-white">
      {/* Services Hero Section */}
      <ServicesHero
        label={servicesHeroData?.label}
        mainHeading={servicesHeroData?.mainHeading}
        subHeading={servicesHeroData?.subHeading}
        description={servicesHeroData?.description}
        heroImage={servicesHeroData?.heroImage}
        ctaText={servicesHeroData?.ctaText}
        ctaLink={servicesHeroData?.ctaLink}
      />

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="Expert Solutions for Every Sports Environment"
            subtitle="From concept to completion, we deliver specialized construction services for a wide range of sports facilities."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {displayServices.map((service: any, index: number) => (
              <ServiceCard
                key={service._id || index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={`/services/${service.slug}`}
                linkText="SEE OUR WORK"
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process Section */}
      <ConstructionProcess />
    </div>
  );
}



