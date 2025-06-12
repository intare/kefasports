import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'project' | 'review';
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KefaSports",
          "description": "Professional sports facility construction and design company specializing in basketball courts, tennis courts, and multi-purpose sports facilities across Africa.",
          "url": "https://kefasports.com",
          "logo": "https://kefasports.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+250-787-666-677",
            "contactType": "customer service",
            "availableLanguage": ["English", "French", "Kinyarwanda"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "RW",
            "addressRegion": "Kigali"
          },
          "sameAs": [
            "https://facebook.com/kefasports",
            "https://linkedin.com/company/kefasports",
            "https://instagram.com/kefasports"
          ],
          "foundingDate": "2008",
          "numberOfEmployees": "50-100",
          "slogan": "Building Excellence in Sports Infrastructure"
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "KefaSports",
          "description": "Leading sports facility construction company in Rwanda and East Africa",
          "image": "https://kefasports.com/images/hero-image.jpg",
          "telephone": "+250-787-666-677",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.streetAddress || "Kigali Business District",
            "addressLocality": "Kigali",
            "addressRegion": "Kigali Province",
            "postalCode": data.postalCode || "00000",
            "addressCountry": "RW"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -1.9441,
            "longitude": 30.0619
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          },
          "priceRange": "$$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "KefaSports"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Rwanda"
          },
          "serviceType": "Sports Facility Construction",
          "category": data.category || "Construction Services"
        };

      case 'project':
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": data.title,
          "description": data.description,
          "image": data.image,
          "creator": {
            "@type": "Organization",
            "name": "KefaSports"
          },
          "dateCreated": data.year,
          "locationCreated": {
            "@type": "Place",
            "name": data.location
          },
          "about": data.category
        };

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "reviewBody": data.quote,
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "KefaSports"
          }
        };

      default:
        return {};
    }
  };

  const structuredData = generateStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
};

export default StructuredData;
