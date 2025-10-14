import React from 'react';
import HeroSlider from '@/components/ui/HeroSlider';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABlock from '@/components/ui/CTABlock';
import WhyChooseUsSection from '@/components/ui/WhyChooseUsSection';
import ClientLogoSection from '@/components/ui/ClientLogoSection';
import SectionHeading from '@/components/ui/SectionHeading';
import FeaturedProjects from '@/components/ui/FeaturedProjects';
import SocialProof from '@/components/conversion/SocialProof';
import SEOHead from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import ConversionOptimizer from '@/components/conversion/ConversionOptimizer';
import { AnimatedSection, StaggeredGrid, AnimatedStatCard } from '@/components/ui/AnimatedSection';
import ClientOnly from '@/components/ui/ClientOnly';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { homePageQuery } from '@/lib/queries';

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  // Fetch all homepage data from Sanity
  const data = await fetchSanityData(homePageQuery);

  // Fallback data if Sanity fetch fails
  const fallbackData = {
    heroSlides: [],
    statistics: [],
    services: [],
    featuredProjects: [],
    testimonials: [],
    whyChooseUs: [],
    clientLogos: []
  };

  const {
    heroSlides = fallbackData.heroSlides,
    statistics = fallbackData.statistics,
    services: sanityServices = fallbackData.services,
    featuredProjects: sanityProjects = fallbackData.featuredProjects,
    testimonials: sanityTestimonials = fallbackData.testimonials,
    whyChooseUs: sanityWhyChooseUs = fallbackData.whyChooseUs,
    clientLogos: sanityClientLogos = fallbackData.clientLogos
  } = data || fallbackData;

  // Transform hero slides for the HeroSlider component
  const transformedSlides = heroSlides.length > 0 ? heroSlides.map((slide: any, index: number) => ({
    id: index + 1,
    category: slide.headline?.split(':')[0] || 'SPORTS FACILITIES',
    title: slide.headline || '',
    buttonText: slide.primaryCTA?.text || 'VIEW PROJECTS',
    buttonLink: slide.primaryCTA?.href || '/projects',
    image: slide.backgroundImage ? urlFor(slide.backgroundImage).width(1200).height(800).url() : '/gallery/court1.jpg',
    backgroundColor: '#ed6631',
    bgClass: 'bg-stantec-orange'
  })) : [];

  // Transform or use fallback services data
  const services = sanityServices.length > 0 ? sanityServices.map((service: any) => ({
    title: service.title,
    description: service.description,
    icon: service.icon || 'basketball',
    link: `/services#${service.slug}`
  })) : [
    {
      title: "High-Performance Basketball Courts",
      description: "Indoor or outdoor, competition-grade or recreational—we build durable, high-performance courts designed for optimal play and longevity.",
      icon: "basketball",
      link: "/services#basketball-courts"
    },
    {
      title: "Commercial & Residential Pools",
      description: "From Olympic-sized competition pools to community leisure centers and private residential installations, we construct safe, state-of-the-art aquatic facilities.",
      icon: "pool",
      link: "/services#pools"
    },
    {
      title: "Innovative & Safe Playgrounds",
      description: "Create engaging, safe, and imaginative play spaces that foster community development and stand the test of time.",
      icon: "playground",
      link: "/services#playgrounds"
    },
    {
      title: "Professional Soccer Fields",
      description: "Natural or artificial turf, engineered for peak performance and durability, meeting the demands of athletes at every level.",
      icon: "soccer",
      link: "/services#soccer-fields"
    }
  ];

  // Transform or use fallback projects data
  const featuredProjects = sanityProjects.length > 0 ? sanityProjects.map((project: any) => ({
    title: project.title,
    category: project.category,
    location: project.location || '',
    imageUrl: project.mainImage ? urlFor(project.mainImage).width(600).height(400).url() : '/gallery/court1.jpg',
    projectUrl: `/projects/${project.slug}`
  })) : [
    {
      title: "Kepler University Indoor Basketball Court",
      category: "Basketball Courts",
      location: "Kigali, Rwanda",
      imageUrl: "/gallery/k1.jpg",
      projectUrl: "/projects/kepler-university-indoor-basketball-court"
    },
    {
      title: "Giants of Africa Outdoor Basketball Court",
      category: "Basketball Courts",
      location: "Kigali, Rwanda",
      imageUrl: "/gallery/court1.jpg",
      projectUrl: "/projects/giants-of-africa-outdoor-basketball-court"
    },
    {
      title: "LDK Jr. NBA Indoor Basketball Court",
      category: "Basketball Courts",
      location: "Kigali, Rwanda",
      imageUrl: "/sports/LDK-Gymnasium-scaled.jpeg",
      projectUrl: "/projects/ldk-jr-nba-indoor-basketball-court"
    }
  ];

  // Transform or use fallback testimonials data
  const testimonials = sanityTestimonials.length > 0 ? sanityTestimonials.map((testimonial: any) => ({
    quote: testimonial.quote,
    author: testimonial.author,
    title: testimonial.title,
    company: testimonial.company,
    imageUrl: testimonial.image ? urlFor(testimonial.image).width(100).height(100).url() : '/images/placeholder-testimonial-1.jpg'
  })) : [
    {
      quote: "Working with this team was a game-changer for our university athletic program. They delivered our basketball courts and swimming facility on time and on budget, with exceptional quality that our athletes and coaches love.",
      author: "Dr. James Wilson",
      title: "Athletic Director",
      company: "State University",
      imageUrl: "/images/placeholder-testimonial-1.jpg"
    },
    {
      quote: "Our community pool project had complex requirements and a tight timeline. This team not only met every challenge but exceeded our expectations with innovative solutions and transparent communication throughout.",
      author: "Sarah Johnson",
      title: "Parks & Recreation Director",
      company: "Lakeside Municipality",
      imageUrl: "/images/placeholder-testimonial-2.jpg"
    }
  ];

  // Transform or use fallback Why Choose Us data
  const whyChooseUs = sanityWhyChooseUs.length > 0 ? sanityWhyChooseUs : [
    {
      title: "Unmatched Expertise",
      description: "With decades of combined experience in sports facility construction, our team brings specialized knowledge to every project, ensuring optimal results.",
      proofPoint: "Over 200+ successful sports facility projects completed nationwide."
    },
    {
      title: "End-to-End Partnership",
      description: "From initial concept to final handover, we provide comprehensive services that eliminate the need for multiple contractors and ensure seamless project execution.",
      proofPoint: "Single point of contact throughout your entire project journey."
    },
    {
      title: "Commitment to Quality",
      description: "We use only premium materials and proven construction techniques, adhering to the highest industry standards to deliver facilities built to last.",
      proofPoint: "Our facilities maintain 98% satisfaction ratings after 5+ years of use."
    },
    {
      title: "Proven Reliability",
      description: "Our track record speaks for itself—projects delivered on time, on budget, and with transparent communication throughout the process.",
      proofPoint: "95% of our projects completed within original timeline and budget."
    }
  ];

  // Transform statistics data
  const transformedStats = statistics.length > 0 ? statistics : [
    { number: 200, label: "Projects Completed", suffix: "+", prefix: "" },
    { number: 15, label: "Years Experience", suffix: "+", prefix: "" },
    { number: 98, label: "Client Satisfaction", suffix: "%", prefix: "" },
    { number: 50, label: "Organizations Served", suffix: "+", prefix: "" }
  ];

  // Transform client logos data
  const clientLogos = sanityClientLogos.length > 0 ? sanityClientLogos.map((logo: any) => ({
    name: logo.name,
    logoUrl: logo.logo ? urlFor(logo.logo).width(200).height(100).url() : '/clients/placeholder.jpg'
  })) : [
    { name: "FERWABA", logoUrl: "/clients/ferwaba.jpg" },
    { name: "Giants of Africa", logoUrl: "/clients/giants.jpg" },
    { name: "Kepler University", logoUrl: "/clients/kepler.jpg" },
    { name: "Ministry of Sports", logoUrl: "/clients/min-sports.jpg" },
    { name: "Rwanda Defence Force", logoUrl: "/clients/rdf.jpg" },
    { name: "Stecol Corporation", logoUrl: "/clients/stecol.jpg" },
    { name: "Basketball Africa League", logoUrl: "/clients/bal.jpg" },
    { name: "Imbuto Foundation", logoUrl: "/clients/imbuto.jpg" }
  ];

  return (
    <>
      {/* SEO and Structured Data */}
      <SEOHead
        title="KefaSports - Professional Sports Facility Construction in Rwanda & East Africa"
        description="Leading sports facility construction company in Rwanda. We design and build basketball courts, tennis courts, and multi-purpose sports facilities. 15+ years experience, 200+ projects completed."
        keywords="sports facility construction, basketball court construction, tennis court construction, sports infrastructure, Rwanda construction, East Africa sports facilities, KefaSports"
      />
      <StructuredData
        type="organization"
        data={{}}
      />
      <StructuredData
        type="localBusiness"
        data={{
          streetAddress: "Kigali Business District",
          postalCode: "00000"
        }}
      />

      {/* Social Proof Banner */}
      <SocialProof variant="banner" />

      <main className="bg-brand-white">
        {/* Hero Slider - Dynamic from Sanity */}
        {transformedSlides.length > 0 ? (
          <HeroSlider slides={transformedSlides} />
        ) : (
          <HeroSlider />
        )}

      {/* Services Section */}
      <AnimatedSection animation="fadeIn">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <AnimatedSection animation="slideUp" delay={200}>
              <SectionHeading
                title="Our Services"
                subtitle="Comprehensive sports facility construction solutions tailored to your specific needs."
                alignment="center"
              />
            </AnimatedSection>

            <StaggeredGrid
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
              staggerDelay={150}
              animation="slideUp"
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </StaggeredGrid>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Statistics Section - Dynamic from Sanity */}
      <AnimatedSection animation="fadeIn">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white">
          <div className="container mx-auto">
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
                <p className="text-xl text-gray-300">Numbers that speak for our expertise and commitment</p>
              </div>
            </AnimatedSection>

            <ClientOnly fallback={
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {transformedStats.map((stat: any, index: number) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">
                      {stat.prefix}{stat.number}{stat.suffix}
                    </div>
                    <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {transformedStats.map((stat: any, index: number) => (
                  <AnimatedStatCard
                    key={index}
                    number={stat.number}
                    label={stat.label}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    delay={300 + (index * 150)}
                  />
                ))}
              </div>
            </ClientOnly>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection animation="slideUp">
        <WhyChooseUsSection
          headline="Why Choose Us"
          introText="We're more than just builders. We're partners committed to bringing your vision to life with expertise, quality, and reliability."
          items={whyChooseUs}
        />
      </AnimatedSection>
      
      {/* Featured Projects Section */}
      <FeaturedProjects projects={featuredProjects} />
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Hear what our clients have to say about their experience working with us"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                company={testimonial.company}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/testimonials"
              className="inline-block border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Read More Testimonials
            </a>
          </div>
        </div>
      </section>
      
      {/* Client Logos Section - Dynamic from Sanity */}
      <ClientLogoSection
        headline="Trusted By Leading Organizations"
        logos={clientLogos}
      />
      
      {/* CTA Section */}
      <CTABlock
        headline="Ready to Build Your Sports Facility?"
        description="Contact our team today to discuss your project and discover how our expertise can bring your vision to life."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
        appearance="primary"
      />

      {/* Floating Social Proof */}
      <ClientOnly>
        <SocialProof variant="floating" />
      </ClientOnly>

      {/* Conversion Optimization */}
      <ClientOnly>
        <ConversionOptimizer enabled={true} />
      </ClientOnly>
    </main>
    </>
  );
}



