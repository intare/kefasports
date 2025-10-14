'use client';

import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enabled?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/logo-white.png',
        '/gallery/court1.jpg',
        '/slides/slide12.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images with Intersection Observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px'
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Prefetch next page resources on hover
    const prefetchOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        }, { once: true });
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical scripts
      const delayedScripts = [
        'https://www.googletagmanager.com/gtag/js'
      ];

      const loadDelayedScripts = () => {
        delayedScripts.forEach(src => {
          if (!document.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.head.appendChild(script);
          }
        });
      };

      // Load after user interaction or 3 seconds
      let loaded = false;
      const load = () => {
        if (!loaded) {
          loaded = true;
          loadDelayedScripts();
        }
      };

      ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, load, { once: true, passive: true });
      });

      setTimeout(load, 3000);
    };

    // Optimize fonts
    const optimizeFonts = () => {
      // Preload critical fonts
      const criticalFonts = [
        '/fonts/inter-var.woff2'
      ];

      criticalFonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        link.href = font;
        document.head.appendChild(link);
      });
    };

    // Reduce layout shifts
    const reduceLayoutShifts = () => {
      // Add aspect ratio to images without dimensions
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        const aspectRatio = imageElement.naturalWidth / imageElement.naturalHeight;
        if (aspectRatio && !isNaN(aspectRatio)) {
          imageElement.style.setProperty('aspect-ratio', aspectRatio.toString());
        }
      });
    };

    // Memory management
    const optimizeMemory = () => {
      // Clean up unused event listeners
      const cleanupInterval = setInterval(() => {
        // Remove unused observers
        const unusedObservers = document.querySelectorAll('[data-observer-cleanup]');
        unusedObservers.forEach(element => {
          element.remove();
        });
      }, 30000); // Every 30 seconds

      return () => clearInterval(cleanupInterval);
    };

    // Service Worker registration
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      }
    };

    // Connection-aware loading
    const adaptToConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as { connection?: { effectiveType?: string } }).connection;
        
        if (connection) {
          // Reduce quality on slow connections
          if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            document.documentElement.classList.add('slow-connection');
          }
          
          // Preload more on fast connections
          if (connection.effectiveType === '4g') {
            document.documentElement.classList.add('fast-connection');
          }
        }
      }
    };

    // Initialize optimizations
    const init = () => {
      preloadCriticalResources();
      optimizeImages();
      prefetchOnHover();
      optimizeThirdPartyScripts();
      optimizeFonts();
      reduceLayoutShifts();
      registerServiceWorker();
      adaptToConnection();
      
      const memoryCleanup = optimizeMemory();
      
      return memoryCleanup;
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      const cleanup = init();
      return cleanup;
    }
  }, [enabled]);

  // This component doesn't render anything
  return null;
};

export default PerformanceOptimizer;
