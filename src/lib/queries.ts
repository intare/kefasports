// GROQ queries for Sanity content

// Homepage queries
export const homePageQuery = `{
  "heroSlides": *[_type == "heroSlide" && active == true] | order(order asc) {
    _id,
    headline,
    subheadline,
    backgroundImage,
    primaryCTA,
    secondaryCTA,
    trustSignal
  },
  "statistics": *[_type == "statistic" && active == true] | order(order asc) {
    _id,
    label,
    number,
    suffix,
    prefix,
    icon,
    color
  },
  "services": *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    "slug": slug.current,
    icon,
    mainImage
  },
  "featuredProjects": *[_type == "project" && featured == true] | order(_createdAt desc)[0...3] {
    _id,
    title,
    "category": category->name,
    "slug": slug.current,
    mainImage
  },
  "testimonials": *[_type == "testimonial" && featured == true][0...2] {
    _id,
    quote,
    author,
    title,
    company,
    image
  },
  "whyChooseUs": *[_type == "whyChooseUsItem"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    proofPoint
  },
  "clientLogos": *[_type == "clientLogo"] | order(_createdAt asc) {
    _id,
    name,
    logo
  },
  "howWeWorkItems": *[_type == "howWeWorkItem"] | order(order asc) {
    _id,
    title,
    description,
    image,
    accordionItems,
    order
  }
}`;

// Services queries
export const allServicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  "slug": slug.current,
  icon,
  mainImage
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  description,
  "slug": slug.current,
  mainImage,
  content,
  benefits,
  process,
  seo,
  "relatedProjects": *[_type == "project" && references(^._id)] {
    _id,
    title,
    "slug": slug.current,
    "category": category->name,
    mainImage
  },
  "testimonials": *[_type == "testimonial" && service._ref == ^._id] {
    _id,
    quote,
    author,
    title,
    company
  }
}`;

// Projects queries
export const allProjectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  "category": category->name,
  mainImage
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "category": category->name,
  mainImage,
  images,
  client,
  location,
  year,
  description,
  challenge,
  solution,
  results,
  projectDetails,
  seo,
  "testimonial": testimonial->{
    _id,
    quote,
    author,
    title,
    company,
    image
  },
  "relatedProjects": *[_type == "project" && _id != ^._id && category._ref == ^.category._ref][0...3] {
    _id,
    title,
    "slug": slug.current,
    "category": category->name,
    mainImage
  }
}`;

// Gallery query
export const galleryQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  "category": category->name,
  mainImage,
  images
}`;

// Testimonials query
export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  quote,
  author,
  title,
  company,
  image
}`;

// About page queries
export const aboutPageQuery = `{
  "about": *[_type == "about"][0] {
    title,
    subtitle,
    heroImage,
    story,
    mission,
    vision,
    values,
    stats,
    seo
  },
  "team": *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    title,
    bio,
    image,
    accentColor,
    email,
    phone,
    specialties,
    socialLinks
  },
  "whyChooseUs": *[_type == "whyChooseUsItem"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    proofPoint
  }
}`;

// Team members only query
export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  title,
  bio,
  image,
  accentColor,
  email,
  phone,
  specialties,
  socialLinks,
  order
}`;

// Site settings query
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  title,
  description,
  contactInfo,
  socialLinks
}`;

// Services hero query
export const servicesHeroQuery = `*[_type == "servicesHero"][0] {
  label,
  mainHeading,
  subHeading,
  description,
  heroImage,
  ctaText,
  ctaLink
}`;
