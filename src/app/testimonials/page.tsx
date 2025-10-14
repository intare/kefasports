import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABlock from '@/components/ui/CTABlock';
import { fetchSanityData, urlFor } from '@/lib/sanity';
import { testimonialsQuery } from '@/lib/queries';

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TestimonialsPage() {
  // Fetch testimonials from Sanity
  const sanityTestimonials = await fetchSanityData(testimonialsQuery);

  // Transform testimonials data
  const testimonials = sanityTestimonials && sanityTestimonials.length > 0
    ? sanityTestimonials.map((testimonial: any) => ({
        quote: testimonial.quote,
        author: testimonial.author,
        title: testimonial.title,
        company: testimonial.company,
        imageUrl: testimonial.image ? urlFor(testimonial.image).width(150).height(150).url() : '/images/placeholder-testimonial-1.jpg'
      }))
    : [
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

  const featuredTestimonial = testimonials[0];
  const otherTestimonials = testimonials.slice(1);

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
      {featuredTestimonial && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-brand-white p-8 md:p-12 rounded-lg shadow-md">
              <div className="flex flex-col items-center text-center">
                <svg className="h-12 w-12 text-brand-accent mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <p className="text-xl md:text-2xl text-brand-dark mb-6">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>

                <div>
                  <p className="font-bold text-brand-dark">{featuredTestimonial.author}</p>
                  <p className="text-brand-secondary">{featuredTestimonial.title}</p>
                  <p className="text-brand-secondary">{featuredTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Grid */}
      {otherTestimonials.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Read more success stories from organizations who have trusted us with their sports facility projects"
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {otherTestimonials.map((testimonial: any, index: number) => (
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
      )}

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
