'use client';

import { useEffect } from 'react';

interface WebVitalsProps {
  enabled?: boolean;
}

const WebVitals: React.FC<WebVitalsProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Import web-vitals dynamically to avoid SSR issues
    import('web-vitals').then((webVitals) => {
      const { onCLS, onINP, onFCP, onLCP, onTTFB } = webVitals;
      // Core Web Vitals
      onCLS((metric) => {
        // Track Cumulative Layout Shift
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000),
            custom_parameter_1: metric.rating,
          });
        }
        console.log('CLS:', metric);
      });

      onINP((metric) => {
        // Track Interaction to Next Paint (replaces FID in v5)
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'INP',
            value: Math.round(metric.value),
            custom_parameter_1: metric.rating,
          });
        }
        console.log('INP:', metric);
      });

      onFCP((metric) => {
        // Track First Contentful Paint
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'FCP',
            value: Math.round(metric.value),
            custom_parameter_1: metric.rating,
          });
        }
        console.log('FCP:', metric);
      });

      onLCP((metric) => {
        // Track Largest Contentful Paint
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'LCP',
            value: Math.round(metric.value),
            custom_parameter_1: metric.rating,
          });
        }
        console.log('LCP:', metric);
      });

      onTTFB((metric) => {
        // Track Time to First Byte
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'TTFB',
            value: Math.round(metric.value),
            custom_parameter_1: metric.rating,
          });
        }
        console.log('TTFB:', metric);
      });
    }).catch((error) => {
      console.error('Failed to load web-vitals:', error);
    });

    // Additional performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          
          // Track page load time
          const loadTime = navEntry.loadEventEnd - navEntry.navigationStart;
          if (window.gtag && loadTime > 0) {
            window.gtag('event', 'page_load_time', {
              event_category: 'performance',
              event_label: 'total_load_time',
              value: Math.round(loadTime),
            });
          }

          // Track DOM content loaded time
          const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.navigationStart;
          if (window.gtag && domContentLoaded > 0) {
            window.gtag('event', 'dom_content_loaded', {
              event_category: 'performance',
              event_label: 'dom_ready_time',
              value: Math.round(domContentLoaded),
            });
          }
        }
      });
    });

    // Observe navigation timing
    observer.observe({ entryTypes: ['navigation'] });

    // Track resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Track slow resources (> 1 second)
          if (resourceEntry.duration > 1000) {
            if (window.gtag) {
              window.gtag('event', 'slow_resource', {
                event_category: 'performance',
                event_label: resourceEntry.name,
                value: Math.round(resourceEntry.duration),
              });
            }
          }
        }
      });
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    // Cleanup observers
    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, [enabled]);

  return null; // This component doesn't render anything
};

export default WebVitals;
