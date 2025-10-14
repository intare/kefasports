import { fetchSanityData } from '@/lib/sanity';
import { homePageQuery } from '@/lib/queries';

// Custom hook for fetching homepage data
export async function getHomePageData() {
  const data = await fetchSanityData(homePageQuery);
  
  // Fallback data in case Sanity fetch fails
  if (!data) {
    return {
      hero: {
        headline: "Build Facilities That Inspire Performance & Community",
        subheadline: "We partner with you from concept to completion, delivering world-class sports environments engineered for excellence and built to last.",
        backgroundImage: "/images/placeholder-hero.jpg",
      },
      services: [
        {
          _id: "service-1",
          title: "Construction & Design",
          description: "Indoor or outdoor, competition-grade or recreational—we build durable, high-performance courts designed for optimal play and longevity.",
          slug: "basketball-courts",
          icon: "🏀"
        },
        {
          _id: "service-2",
          title: "Commercial & Residential Pools",
          description: "From Olympic-sized competition pools to community leisure centers, we construct safe, state-of-the-art aquatic facilities.",
          slug: "swimming-pools",
          icon: "🏊"
        },
        {
          _id: "service-3",
          title: "Innovative & Safe Playgrounds",
          description: "Create engaging, safe, and imaginative play spaces that foster community development and stand the test of time.",
          slug: "playgrounds",
          icon: "🛝"
        },
        {
          _id: "service-4",
          title: "Sports Equipment & Gear",
          description: "Natural or artificial turf, engineered for peak performance and durability, meeting the demands of athletes at every level.",
          slug: "soccer-fields",
          icon: "⚽"
        }
      ],
      featuredProjects: [
        {
          _id: "project-1",
          title: "University Athletic Complex",
          category: "Basketball Courts",
          slug: "university-athletic-complex",
          mainImage: { _type: 'image', asset: { _ref: '', _type: 'reference' } }
        },
        {
          _id: "project-2",
          title: "Community Aquatic Center",
          category: "Swimming Pools",
          slug: "community-aquatic-center",
          mainImage: { _type: 'image', asset: { _ref: '', _type: 'reference' } }
        },
        {
          _id: "project-3",
          title: "Municipal Sports Park",
          category: "Soccer Fields",
          slug: "municipal-sports-park",
          mainImage: { _type: 'image', asset: { _ref: '', _type: 'reference' } }
        }
      ],
      testimonials: [
        {
          _id: "testimonial-1",
          quote: "Their understanding of NCAA regulations was invaluable. The basketball courts they built for our university exceed all expectations for performance and durability.",
          author: "John Smith",
          title: "Athletic Director",
          company: "State University"
        },
        {
          _id: "testimonial-2",
          quote: "On time, on budget, and exceptional quality. Our community pool has become the centerpiece of our recreation program.",
          author: "Sarah Johnson",
          title: "Parks & Recreation Director",
          company: "Lakeside Municipality"
        }
      ],
      whyChooseUs: [
        {
          _id: "why-1",
          title: "Decades of Specialized Experience",
          description: "Sports facility construction isn't just something we do – it's all we do. Our team possesses deep knowledge of specific surface technologies, safety regulations, and the unique demands of athletic environments.",
          proofPoint: "\"Their understanding of NCAA regulations was invaluable.\" - State University"
        },
        {
          _id: "why-2",
          title: "Your Vision, Seamlessly Delivered",
          description: "From initial design and site planning through construction and final handover, we manage every detail. You get a single point of contact, transparent communication, and a streamlined process.",
          proofPoint: "Successfully completed over 200 design-build projects."
        },
        {
          _id: "why-3",
          title: "Built to Perform, Built to Last",
          description: "We utilize premium materials and proven construction techniques to build facilities that withstand rigorous use and harsh weather, reducing your long-term maintenance costs and maximizing facility lifespan.",
          proofPoint: "Offering industry-leading warranties on all installations."
        },
        {
          _id: "why-4",
          title: "On Time, On Budget, Every Time",
          description: "We understand the importance of timelines and fiscal responsibility, especially for institutional and municipal clients. Our project management discipline ensures predictable schedules and adherence to your budget.",
          proofPoint: "95% of projects completed on or ahead of schedule in the past year."
        }
      ],
      clientLogos: [
        { _id: "logo-1", name: "State University", logo: { _type: 'image', asset: { _ref: '', _type: 'reference' } } },
        { _id: "logo-2", name: "Lakeside Municipality", logo: { _type: 'image', asset: { _ref: '', _type: 'reference' } } },
        { _id: "logo-3", name: "Sports Club", logo: { _type: 'image', asset: { _ref: '', _type: 'reference' } } },
        { _id: "logo-4", name: "School District", logo: { _type: 'image', asset: { _ref: '', _type: 'reference' } } },
        { _id: "logo-5", name: "Development Corp", logo: { _type: 'image', asset: { _ref: '', _type: 'reference' } } }
      ]
    };
  }
  
  return data;
}
