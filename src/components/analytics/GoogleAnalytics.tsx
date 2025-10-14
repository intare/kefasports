'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalyticsInner: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

      window.gtag('config', measurementId, {
        page_location: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams, measurementId]);

  return null; // This component doesn't render anything visible
};

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_location: window.location.href,
              page_title: document.title,
              // Enhanced ecommerce and conversion tracking
              custom_map: {
                'custom_parameter_1': 'lead_source',
                'custom_parameter_2': 'project_type'
              }
            });

            // Track scroll depth
            let scrollDepth = 0;
            window.addEventListener('scroll', function() {
              const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
              if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
                scrollDepth = scrollPercent;
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: scrollPercent + '%',
                  value: scrollPercent
                });
              }
            });

            // Track time on page
            let startTime = Date.now();
            window.addEventListener('beforeunload', function() {
              const timeOnPage = Math.round((Date.now() - startTime) / 1000);
              gtag('event', 'time_on_page', {
                event_category: 'engagement',
                event_label: 'seconds',
                value: timeOnPage
              });
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsInner measurementId={measurementId} />
      </Suspense>
    </>
  );
};

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    event_category: 'conversion',
    event_label: conversionType,
    value: value || 1
  });
};

export const trackLeadGeneration = (source: string, projectType?: string) => {
  trackEvent('generate_lead', {
    event_category: 'lead_generation',
    lead_source: source,
    project_type: projectType || 'unknown'
  });
};

export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    event_category: 'contact',
    event_label: 'header_phone_click'
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', {
    event_category: 'form',
    event_label: formType
  });
};

export default GoogleAnalytics;
