import React from 'react';
import Link from 'next/link';
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
import { AnimatedSection, StaggeredGrid } from '@/components/ui/AnimatedSection';
import ClientOnly from '@/components/ui/ClientOnly';
import HowWeWorkSection from '@/components/ui/HowWeWorkSection';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { homePageQuery } from '@/lib/queries';
import type { SanityImage, WhyChooseUsItem } from '@/types/sanity';

type CtaLink = {
  text?: string;
  href?: string;
};

type HeroSlide = {
  _id: string;
  headline?: string;
  subheadline?: string;
  backgroundImage?: SanityImage;
  primaryCTA?: CtaLink;
  secondaryCTA?: CtaLink;
  trustSignal?: string;
};

type Statistic = {
  _id: string;
  label: string;
  number: number;
  suffix?: string;
  prefix?: string;
  icon?: string;
  color?: string;
};

type HomeService = {
  _id: string;
  title: string;
  description?: string;
  slug?: string;
  icon?: string;
  mainImage?: SanityImage;
};

type FeaturedProjectSummary = {
  _id: string;
  title: string;
  category?: string;
  slug?: string;
  location?: string;
  mainImage?: SanityImage;
};

type TestimonialSummary = {
  _id: string;
  quote: string;
  author: string;
  title?: string;
  company?: string;
  image?: SanityImage;
};

type ClientLogoSummary = {
  _id: string;
  name: string;
  logo?: SanityImage;
};

type AccordionEntry = {
  title: string;
  content: string;
};

type HowWeWorkItem = {
  _id: string;
  title: string;
  description: string;
  image?: SanityImage;
  accordionItems: AccordionEntry[];
  order?: number;
};

interface HomePageQueryResult {
  heroSlides?: HeroSlide[];
  statistics?: Statistic[];
  services?: HomeService[];
  featuredProjects?: FeaturedProjectSummary[];
  testimonials?: TestimonialSummary[];
  whyChooseUs?: WhyChooseUsItem[];
  clientLogos?: ClientLogoSummary[];
  howWeWorkItems?: HowWeWorkItem[];
}

type HeroSliderSlide = {
  id: number;
  category: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
  bgClass: string;
};

type ServiceDisplay = {
  title: string;
  description?: string;
  icon?: string;
  link: string;
  imageUrl?: string;
};

type ProjectDisplay = {
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  projectUrl: string;
};

type TestimonialDisplay = {
  quote: string;
  author: string;
  title?: string;
  company?: string;
  imageUrl?: string;
};

type ClientLogoDisplay = {
  name: string;
  logoUrl: string;
};

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const data = await fetchSanityData<HomePageQueryResult>(homePageQuery);

  const heroSlides = data?.heroSlides ?? [];
  const sanityServices = data?.services ?? [];
  const sanityProjects = data?.featuredProjects ?? [];
  const sanityTestimonials = data?.testimonials ?? [];
  const sanityWhyChooseUs = data?.whyChooseUs ?? [];
  const sanityClientLogos = data?.clientLogos ?? [];
  const howWeWorkItems = data?.howWeWorkItems ?? [];

  // Color palette for slides
  const slideColors = [
    { backgroundColor: '#2a73d9', bgClass: 'bg-blue' },           // Blue
    { backgroundColor: '#1a845c', bgClass: 'bg-darker-green' },   // Green
    { backgroundColor: '#f3be0a', bgClass: 'bg-turmeric' },       // Yellow
    { backgroundColor: '#ed6631', bgClass: 'bg-stantec-orange' }, // Orange
    { backgroundColor: '#f4b5b5', bgClass: 'bg-himalayan-salt' }  // Pink
  ];

  // Transform hero slides for the HeroSlider component
  const transformedSlides: HeroSliderSlide[] = heroSlides.length > 0
    ? heroSlides.map((slide, index) => {
        const colorIndex = index % slideColors.length;
        const buttonText = slide.primaryCTA?.text ?? 'VIEW PROJECTS';
        const buttonLink = slide.primaryCTA?.href ?? '/projects';
        return {
          id: index + 1,
          category: slide.headline?.split(':')[0] || 'SPORTS FACILITIES',
          title: slide.headline || '',
          buttonText,
          buttonLink,
          image: slide.backgroundImage
            ? urlFor(slide.backgroundImage).width(1200).height(800).url()
            : '/gallery/court1.jpg',
          backgroundColor: slideColors[colorIndex].backgroundColor,
          bgClass: slideColors[colorIndex].bgClass,
        };
      })
    : [];

  // Transform or use fallback services data
  const services: ServiceDisplay[] = sanityServices.length > 0
    ? sanityServices.map((service) => ({
        title: service.title,
        description: service.description,
        icon: service.icon || 'basketball',
        link: service.slug ? `/services/${service.slug}` : '/services',
        imageUrl: service.mainImage ? urlFor(service.mainImage).width(800).height(600).url() : undefined,
      }))
    : [
        {
          title: "TENNIS COURTS",
          description: "Professional tennis court construction with premium surfaces and precision installation.",
          icon: "tennis",
          link: "/services/tennis-courts",
          imageUrl: "/gallery/centralafrica/tennis-court-serve.jpg",
        },
        {
          title: "PICKLEBALL COURTS",
          description: "State-of-the-art pickleball court construction designed for optimal play and durability.",
          icon: "pickleball",
          link: "/services/pickleball-courts",
          imageUrl: "/gallery/centralafrica/k7.jpg",
        },
        {
          title: "BASKETBALL COURTS",
          description: "High-performance basketball court construction for indoor and outdoor facilities.",
          icon: "basketball",
          link: "/services/basketball-courts",
          imageUrl: "/gallery/centralafrica/k1.jpg",
        },
        {
          title: "BOCCE COURTS",
          description: "Premium bocce court construction with authentic surfaces and professional design.",
          icon: "bocce",
          link: "/services/bocce-courts",
          imageUrl: "/gallery/centralafrica/k6.jpg",
        },
        {
          title: "SPORTS EQUIPMENT & GEAR",
          description: "Complete supply of professional sports equipment and gear for all facility types.",
          icon: "equipment",
          link: "/services/equipment-gear",
          imageUrl: "/gallery/centralafrica/k2.jpg",
        },
        {
          title: "CONSTRUCTION & DESIGN",
          description: "Comprehensive construction and design services for sports facilities of all types.",
          icon: "construction",
          link: "/services/construction-design",
          imageUrl: "/gallery/centralafrica/s2.jpg",
        },
        {
          title: "KEFASPORTS",
          description: "Complete sports facility solutions from planning to execution.",
          icon: "kefasports",
          link: "/services/kefasports",
          imageUrl: "/gallery/centralafrica/k3.jpg",
        },
        {
          title: "INSTALLATION & MAINTENANCE",
          description: "Professional installation and ongoing maintenance services for all sports facilities.",
          icon: "installation",
          link: "/services/installation-maintenance",
          imageUrl: "/gallery/centralafrica/k5.jpg",
        },
      ];

  // Transform or use fallback projects data
  const featuredProjects: ProjectDisplay[] = sanityProjects.length > 0
    ? sanityProjects.map((project) => ({
        title: project.title,
        category: project.category || "Sports Facility",
        location: project.location || "",
        imageUrl: project.mainImage
          ? urlFor(project.mainImage).width(600).height(400).url()
          : '/gallery/court1.jpg',
        projectUrl: project.slug ? `/projects/${project.slug}` : '/projects',
      }))
    : [
        {
          title: "Kepler University Indoor Basketball Court",
          category: "Basketball Courts",
          location: "Kigali, Rwanda",
          imageUrl: "/gallery/k1.jpg",
          projectUrl: "/projects/kepler-university-indoor-basketball-court",
        },
        {
          title: "Giants of Africa Outdoor Basketball Court",
          category: "Basketball Courts",
          location: "Kigali, Rwanda",
          imageUrl: "/gallery/court1.jpg",
          projectUrl: "/projects/giants-of-africa-outdoor-basketball-court",
        },
        {
          title: "LDK Jr. NBA Indoor Basketball Court",
          category: "Basketball Courts",
          location: "Kigali, Rwanda",
          imageUrl: "/sports/LDK-Gymnasium-scaled.jpeg",
          projectUrl: "/projects/ldk-jr-nba-indoor-basketball-court",
        },
      ];

  // Transform or use fallback testimonials data
  const testimonials: TestimonialDisplay[] = sanityTestimonials.length > 0
    ? sanityTestimonials.map((testimonial) => ({
        quote: testimonial.quote,
        author: testimonial.author,
        title: testimonial.title,
        company: testimonial.company,
        imageUrl: testimonial.image
          ? urlFor(testimonial.image).width(100).height(100).url()
          : '/images/placeholder-testimonial-1.jpg',
      }))
    : [
        {
          quote: "Working with this team was a game-changer for our university athletic program. They delivered our basketball courts and swimming facility on time and on budget, with exceptional quality that our athletes and coaches love.",
          author: "Dr. James Wilson",
          title: "Athletic Director",
          company: "State University",
          imageUrl: "/images/placeholder-testimonial-1.jpg",
        },
        {
          quote: "Our community pool project had complex requirements and a tight timeline. This team not only met every challenge but exceeded our expectations with innovative solutions and transparent communication throughout.",
          author: "Sarah Johnson",
          title: "Parks & Recreation Director",
          company: "Lakeside Municipality",
          imageUrl: "/images/placeholder-testimonial-2.jpg",
        },
      ];

  // Transform or use fallback Why Choose Us data
  const whyChooseUs = sanityWhyChooseUs.length > 0
    ? sanityWhyChooseUs
    : [
        {
          title: "Unmatched Expertise",
          description: "With decades of combined experience in sports facility construction, our team brings specialized knowledge to every project, ensuring optimal results.",
          proofPoint: "Over 200+ successful sports facility projects completed nationwide.",
        },
        {
          title: "End-to-End Partnership",
          description: "From initial concept to final handover, we provide comprehensive services that eliminate the need for multiple contractors and ensure seamless project execution.",
          proofPoint: "Single point of contact throughout your entire project journey.",
        },
        {
          title: "Commitment to Quality",
          description: "We use only premium materials and proven construction techniques, adhering to the highest industry standards to deliver facilities built to last.",
          proofPoint: "Our facilities maintain 98% satisfaction ratings after 5+ years of use.",
        },
        {
          title: "Proven Reliability",
          description: "Our track record speaks for itself - projects delivered on time, on budget, and with transparent communication throughout the process.",
          proofPoint: "95% of our projects completed within original timeline and budget.",
        },
      ];

  // Transform client logos data
  const clientLogos: ClientLogoDisplay[] = sanityClientLogos.length > 0
    ? sanityClientLogos.map((logo) => ({
        name: logo.name,
        logoUrl: logo.logo
          ? urlFor(logo.logo).width(200).height(100).url()
          : '/clients/placeholder.jpg',
      }))
    : [
        { name: "FERWABA", logoUrl: "/clients/ferwaba.jpg" },
        { name: "Giants of Africa", logoUrl: "/clients/giants.jpg" },
        { name: "Kepler University", logoUrl: "/clients/kepler.jpg" },
        { name: "Ministry of Sports", logoUrl: "/clients/min-sports.jpg" },
        { name: "Rwanda Defence Force", logoUrl: "/clients/rdf.jpg" },
        { name: "Stecol Corporation", logoUrl: "/clients/stecol.jpg" },
        { name: "Basketball Africa League", logoUrl: "/clients/bal.jpg" },
        { name: "Imbuto Foundation", logoUrl: "/clients/imbuto.jpg" },
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            {/* Custom Section Header */}
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <p className="text-sm sm:text-base font-semibold tracking-widest text-gray-600 uppercase mb-3">
                  OUR SERVICES
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  <span style={{ color: '#f36c20' }}>Our Sports Facility</span>{' '}
                  <span className="text-gray-900">Construction Services</span>
                </h2>
              </div>
            </AnimatedSection>

            <StaggeredGrid
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 sm:mt-12"
              staggerDelay={150}
              animation="slideUp"
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  icon={service.icon}
                  link={service.link}
                  imageUrl={service.imageUrl}
                />
              ))}
            </StaggeredGrid>
          </div>
        </section>
      </AnimatedSection>

      {/* How We Work Section - Dynamic from Sanity */}
      {howWeWorkItems && howWeWorkItems.length > 0 && (
        <AnimatedSection animation="fadeIn">
          <HowWeWorkSection items={howWeWorkItems} />
        </AnimatedSection>
      )}

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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Hear what our clients have to say about their experience working with us"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
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

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/testimonials"
              className="inline-block border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-medium py-3 px-6 sm:px-8 rounded-md transition-colors text-sm sm:text-base touch-manipulation"
            >
              Read More Testimonials
            </Link>
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


