// Types for Sanity content
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  icon?: string;
  mainImage?: SanityImage;
}

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  category: string;
  mainImage: SanityImage;
  images?: SanityImage[];
  client?: string;
  location?: string;
  year?: number;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  testimonial?: Testimonial;
}

export interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  title?: string;
  company?: string;
  image?: SanityImage;
  featured?: boolean;
}

export interface ClientLogo {
  _id: string;
  name: string;
  logo: SanityImage;
}

export interface WhyChooseUsItem {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  proofPoint?: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  title: string;
  bio?: string;
  image?: SanityImage;
}

export interface SiteSettings {
  title: string;
  description?: string;
  contactInfo: {
    email: string;
    phone: string;
    address?: string;
  };
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}
