import React from 'react';
import HeroSlider from '@/components/ui/HeroSlider';
import ServiceCard from '@/components/ui/ServiceCard';
// import ProjectCard from '@/components/ui/ProjectCard';
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

export default function Home() {
  // Sample data - would be fetched from Sanity CMS in production
  const services = [
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

  const featuredProjects = [
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
    },
    {
      title: "South Africa Jr NBA Indoor Court",
      category: "Basketball Courts",
      location: "South Africa",
      imageUrl: "/gallery/s1.jpg",
      projectUrl: "/projects/south-africa-jr-nba-indoor-court"
    },
    {
      title: "Swimming Pool Project",
      category: "Swimming Pools",
      location: "Kigali, Rwanda",
      imageUrl: "/gallery/swim-k1.jpg",
      projectUrl: "/projects/swimming-pool-project"
    },
    {
      title: "IPRC HUYE Basketball Court",
      category: "Basketball Courts",
      location: "Huye, Rwanda",
      imageUrl: "/gallery/k5.jpg",
      projectUrl: "/projects/iprc-huye-basketball-court"
    },
    {
      title: "Central African Republic Basketball Federation Court",
      category: "Basketball Courts",
      location: "Central African Republic",
      imageUrl: "/gallery/k7.jpg",
      projectUrl: "/projects/central-african-republic-basketball-federation-court"
    },
    {
      title: "South Sudan Basketball Federation Indoor Court",
      category: "Basketball Courts",
      location: "South Sudan",
      imageUrl: "/gallery/k8.jpg",
      projectUrl: "/projects/south-sudan-basketball-federation-indoor-basketball-court"
    },
    {
      title: "Nyandungu Great Lake Complex Basketball Court",
      category: "Basketball Courts",
      location: "Kigali, Rwanda",
      imageUrl: "/gallery/k6.jpg",
      projectUrl: "/projects/nyandungu-great-lake-complex-basketball-court"
    },
    {
      title: "Professional Basketball Arena",
      category: "Basketball Courts",
      location: "East Africa",
      imageUrl: "/gallery/s2.jpg",
      projectUrl: "/projects/professional-basketball-arena"
    }
  ];

  const testimonials = [
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

  const whyChooseUs = [
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
        {/* Hero Slider - NEW COMPONENT */}
        <HeroSlider />
      
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
      
      {/* Statistics Section */}
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
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">200+</div>
                  <div className="text-sm md:text-base text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">15+</div>
                  <div className="text-sm md:text-base text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">98%</div>
                  <div className="text-sm md:text-base text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">50+</div>
                  <div className="text-sm md:text-base text-gray-300">Organizations Served</div>
                </div>
              </div>
            }>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <AnimatedStatCard
                  number={200}
                  label="Projects Completed"
                  suffix="+"
                  delay={300}
                />
                <AnimatedStatCard
                  number={15}
                  label="Years Experience"
                  suffix="+"
                  delay={450}
                />
                <AnimatedStatCard
                  number={98}
                  label="Client Satisfaction"
                  suffix="%"
                  delay={600}
                />
                <AnimatedStatCard
                  number={50}
                  label="Organizations Served"
                  suffix="+"
                  delay={750}
                />
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
      
      {/* Client Logos Section */}
      <ClientLogoSection
        headline="Trusted By Leading Organizations"
        logos={[
          { name: "FERWABA", logoUrl: "/clients/ferwaba.jpg" },
          { name: "Giants of Africa", logoUrl: "/clients/giants.jpg" },
          { name: "Kepler University", logoUrl: "/clients/kepler.jpg" },
          { name: "Ministry of Sports", logoUrl: "/clients/min-sports.jpg" },
          { name: "Rwanda Defence Force", logoUrl: "/clients/rdf.jpg" },
          { name: "Stecol Corporation", logoUrl: "/clients/stecol.jpg" },
          { name: "Basketball Africa League", logoUrl: "/clients/bal.jpg" },
          { name: "Imbuto Foundation", logoUrl: "/clients/imbuto.jpg" }
        ]}
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



