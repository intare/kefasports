import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABlock from '@/components/ui/CTABlock';

export default function TestimonialsPage() {
  // Sample data - would be fetched from Sanity CMS in production
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
    },
    {
      quote: "The playground they designed and built for our elementary school has transformed our outdoor space. The attention to safety, accessibility, and fun has made it the highlight of our campus renovation.",
      author: "Michael Thompson",
      title: "Principal",
      company: "Oakridge Elementary",
      imageUrl: "/images/placeholder-testimonial-3.jpg"
    },
    {
      quote: "As a professional soccer club, we demanded the highest standards for our training facility. The fields they constructed have perfect drainage, consistent playing surfaces, and have significantly reduced our maintenance costs.",
      author: "Carlos Rodriguez",
      title: "Facilities Manager",
      company: "Metro United FC",
      imageUrl: "/images/placeholder-testimonial-4.jpg"
    },
    {
      quote: "The comprehensive equipment package they provided for our recreation center included everything we needed, perfectly installed and integrated. Their expertise saved us time and prevented costly mistakes.",
      author: "Jennifer Lee",
      title: "Community Center Director",
      company: "Westside Community Services",
      imageUrl: "/images/placeholder-testimonial-5.jpg"
    },
    {
      quote: "Our multi-purpose arena was a complex project with many stakeholders. Their design-build approach streamlined the process and delivered a facility that has become the pride of our community.",
      author: "Robert Martinez",
      title: "City Manager",
      company: "Riverside County",
      imageUrl: "/images/placeholder-testimonial-6.jpg"
    }
  ];

  return (
    <div className="bg-brand-white">
      {/* Page Header */}
      <div className="bg-brand-dark text-brand-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-brand-lighterGray">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>
      </div>

      {/* Featured Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-brand-white p-8 md:p-12 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-w-1 aspect-h-1 bg-brand-lighterGray rounded-full overflow-hidden">
                  {/* Placeholder for testimonial image */}
                  <div className="flex items-center justify-center h-full text-brand-secondary">
                    [Client Photo]
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <svg className="h-12 w-12 text-brand-accent mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-xl md:text-2xl text-brand-dark mb-6">
                  &ldquo;From the initial consultation to the final walkthrough, the entire team demonstrated exceptional professionalism and expertise. Our new sports complex has exceeded all expectations and has become a centerpiece for our community.&rdquo;
                </p>
                
                <div>
                  <p className="font-bold text-brand-dark">Thomas Anderson</p>
                  <p className="text-brand-secondary">Development Director, Northridge Community Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Read more success stories from organizations who have trusted us with their sports facility projects"
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
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto">
          <SectionHeading
            title="Trusted By Leading Organizations"
            subtitle="We're proud to have worked with these respected institutions and organizations"
            alignment="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-brand-white p-6 rounded-lg flex items-center justify-center">
                <div className="text-brand-secondary">
                  [Client Logo {index}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        headline="Ready to Join Our Satisfied Clients?"
        description="Contact us today to discuss your sports facility project and experience our exceptional service firsthand."
        buttonText="Start Your Project"
        buttonLink="/contact"
        appearance="primary"
      />
    </div>
  );
}
