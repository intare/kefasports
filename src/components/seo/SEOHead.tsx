import Head from 'next/head';
import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  noindex?: boolean;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "KefaSports - Professional Sports Facility Construction in Rwanda & East Africa",
  description = "Leading sports facility construction company in Rwanda. We design and build basketball courts, tennis courts, and multi-purpose sports facilities. 15+ years experience, 200+ projects completed.",
  keywords = "sports facility construction, basketball court construction, tennis court construction, sports infrastructure, Rwanda construction, East Africa sports facilities, KefaSports",
  image = "/images/og-image.jpg",
  url = "https://kefasports.com",
  type = "website",
  noindex = false,
  canonical
}) => {
  const siteTitle = "KefaSports";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
  const fullUrl = url.startsWith('http') ? url : `https://kefasports.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://kefasports.com${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="KefaSports" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="KefaSports" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@kefasports" />
      <meta name="twitter:creator" content="@kefasports" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1a365d" />
      <meta name="msapplication-TileColor" content="#1a365d" />
      
      {/* Geo Meta Tags for Local SEO */}
      <meta name="geo.region" content="RW" />
      <meta name="geo.placename" content="Kigali, Rwanda" />
      <meta name="geo.position" content="-1.9441;30.0619" />
      <meta name="ICBM" content="-1.9441, 30.0619" />
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="Kigali Business District" />
      <meta name="business:contact_data:locality" content="Kigali" />
      <meta name="business:contact_data:region" content="Kigali Province" />
      <meta name="business:contact_data:postal_code" content="00000" />
      <meta name="business:contact_data:country_name" content="Rwanda" />
      <meta name="business:contact_data:phone_number" content="+250-787-666-677" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.sanity.io" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  );
};

export default SEOHead;
