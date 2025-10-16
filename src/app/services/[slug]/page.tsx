import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { urlFor, fetchSanityData } from '@/lib/sanity';
import { serviceBySlugQuery } from '@/lib/queries';
import type { SanityImage } from '@/types/sanity';

interface Benefit {
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface RelatedProject {
  _id: string;
  title: string;
  slug: string;
  category: string;
  mainImage: SanityImage;
}

interface ServiceData {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: SanityImage;
  content: any[];
  benefits?: Benefit[];
  process?: ProcessStep[];
  relatedProjects?: RelatedProject[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = await fetchSanityData<ServiceData>(serviceBySlugQuery, { slug });

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.seo?.metaTitle || `${service.title} | Efa Sports`,
    description: service.seo?.metaDescription || service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await fetchSanityData<ServiceData>(serviceBySlugQuery, { slug });

  if (!service) {
    notFound();
  }

  const mainImageUrl = service.mainImage
    ? urlFor(service.mainImage).width(1200).height(600).url()
    : '/services.png';

  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="w-full h-auto order-2 lg:order-1">
              <img
                src={mainImageUrl}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-brand-dark">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-brand-secondary leading-relaxed mb-6 lg:mb-8">
                {service.description}
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white uppercase tracking-wide transition-all duration-300 hover:opacity-90 rounded"
                  style={{ backgroundColor: 'rgb(243, 108, 32)' }}
                >
                  REQUEST A QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {service.content && service.content.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <PortableText
                value={service.content}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-base sm:text-lg text-brand-secondary leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mt-8 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                  },
                  types: {
                    image: ({ value }) => {
                      const imageUrl = urlFor(value).width(800).height(600).url();
                      return (
                        <div className="my-8">
                          <img
                            src={imageUrl}
                            alt={value.alt || ''}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      );
                    },
                  },
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                Key Benefits
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-brand-offWhite rounded-lg p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#f36c20' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-brand-secondary text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                Our Process
              </h2>
              <p className="text-base sm:text-lg text-brand-secondary leading-relaxed max-w-3xl mx-auto">
                We follow a proven approach to ensure your project is delivered on time and beyond expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#F36C20' }}
                    >
                      <span
                        className="text-white text-2xl sm:text-3xl font-bold"
                        style={{
                          WebkitTextStroke: '2px white',
                          textStroke: '2px white',
                          paintOrder: 'stroke fill',
                        }}
                      >
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#f36c20' }}>
                    {step.title}
                  </h3>
                  <p className="text-brand-secondary text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects Section */}
      {service.relatedProjects && service.relatedProjects.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                Related Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {service.relatedProjects.map((project) => {
                const projectImageUrl = project.mainImage
                  ? urlFor(project.mainImage).width(600).height(400).url()
                  : '/placeholder.jpg';
                return (
                  <Link
                    key={project._id}
                    href={`/projects/${project.slug}`}
                    className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={projectImageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-semibold text-brand-secondary uppercase mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold text-brand-dark group-hover:text-[#f36c20] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-offWhite">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary leading-relaxed mb-8">
            Contact us today to discuss your {service.title.toLowerCase()} project and get a free quote.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white uppercase tracking-wide transition-all duration-300 hover:opacity-90 rounded"
            style={{ backgroundColor: 'rgb(243, 108, 32)' }}
          >
            GET A FREE QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
