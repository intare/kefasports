"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SlideData {
  id: number;
  category: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
  bgClass: string;
}

interface HeroSliderProps {
  slides?: SlideData[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides: providedSlides }) => {
  // Default slide data matching the CSS structure
  const defaultSlides: SlideData[] = [
    {
      id: 1,
      category: 'BASKETBALL COURTS',
      title: 'Building Champions: World-Class Basketball Facilities',
      buttonText: 'VIEW PROJECTS',
      buttonLink: '/projects',
      image: '/slides/slide12.jpg',
      backgroundColor: '#2a73d9',
      bgClass: 'bg-blue'
    },
    {
      id: 2,
      category: 'SWIMMING POOLS',
      title: 'Dive Into Excellence: Premium Aquatic Facilities',
      buttonText: 'EXPLORE POOLS',
      buttonLink: '/projects',
      image: '/slides/slide9.jpg',
      backgroundColor: '#1a845c',
      bgClass: 'bg-darker-green'
    },
    {
      id: 3,
      category: 'SPORTS INFRASTRUCTURE',
      title: 'Innovation in Sports: Modern Athletic Facilities',
      buttonText: 'OUR SERVICES',
      buttonLink: '/services',
      image: '/slides/slide11.jpg',
      backgroundColor: '#f3be0a',
      bgClass: 'bg-turmeric'
    },
    {
      id: 4,
      category: 'QUALITY CONSTRUCTION',
      title: 'Excellence in Every Detail: Premium Sports Facilities',
      buttonText: 'SEE GALLERY',
      buttonLink: '/gallery',
      image: '/slides/slide1.jpg',
      backgroundColor: '#ed6631',
      bgClass: 'bg-stantec-orange'
    },
    {
      id: 5,
      category: 'AFRICAN EXPERTISE',
      title: 'Across Africa: Building Sports Dreams Continent-Wide',
      buttonText: 'CONTACT US',
      buttonLink: '/contact',
      image: '/slides/slide6.jpg',
      backgroundColor: '#f4b5b5',
      bgClass: 'bg-himalayan-salt'
    }
  ];

  // Use provided slides or default slides
  const slides = providedSlides && providedSlides.length > 0 ? providedSlides : defaultSlides;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const slideChangeRef = useRef<(direction: 1 | -1) => void>(() => {});

  // Touch gesture state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const SLIDE_DURATION = 6000; // 6 seconds per slide to match CSS timing
  const PROGRESS_INTERVAL = 50; // Update progress every 50ms
  const MIN_SWIPE_DISTANCE = 50; // Minimum distance for a swipe to register

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const restartTimer = useCallback(() => {
    if (slides.length === 0) {
      return;
    }

    setProgress(0);
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          slideChangeRef.current(1);
          return 0;
        }
        return Math.min(prev + (100 / (SLIDE_DURATION / PROGRESS_INTERVAL)), 100);
      });
    }, PROGRESS_INTERVAL);
  }, [slides.length]);

  const changeSlide = useCallback(
    (direction: 1 | -1) => {
      if (isTransitioning || slides.length === 0) {
        return;
      }

      setIsTransitioning(true);
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }

      setTimeout(() => {
        setCurrentSlide((prev) => {
          if (slides.length === 0) {
            return prev;
          }
          const nextIndex = (prev + direction + slides.length) % slides.length;
          return nextIndex;
        });
        setIsTransitioning(false);
        restartTimer();
      }, 1000);
    },
    [isTransitioning, restartTimer, slides.length],
  );

  useEffect(() => {
    slideChangeRef.current = changeSlide;
  }, [changeSlide]);

  const nextSlide = useCallback(() => {
    changeSlide(1);
  }, [changeSlide]);

  const prevSlide = useCallback(() => {
    changeSlide(-1);
  }, [changeSlide]);

  // Initialize first slide
  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      restartTimer();
    }, 1000); // Initial delay to show first slide

    return () => clearTimeout(timer);
  }, [restartTimer]);

  // Clean up intervals
  useEffect(() => {
    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, []);

  // Format the slide number with leading zero
  const formatSlideNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  // Circular progress component
  const CircularProgress = ({ progress, size = 48 }: { progress: number; size?: number }) => {
    const radius = (size - 4) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="w-full h-full flex items-center justify-center">
        <svg
          className="-rotate-90"
          width={size}
          height={size}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(237, 102, 49, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#ed6631"
            strokeWidth="2"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-100 ease-linear"
          />
        </svg>
      </div>
    );
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="full-width-animated-hero">
        <div className="full-width-animated-hero__container max-w-[1800px] mx-auto">
          <div className="full-width-animated-hero__slider relative h-[600px] md:h-[700px]" style={{ backgroundColor: defaultSlides[0].backgroundColor }}>
            {/* Static first slide for SSR */}
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: defaultSlides[0].backgroundColor }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="full-width-animated-hero border-b border-gray-300 shadow-sm">
      <div className="full-width-animated-hero__container max-w-[1800px] mx-auto">
        <div
          ref={sliderRef}
          className="full-width-animated-hero__slider relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Render all slides with proper layering */}
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            const slideVisibility = isActive ? 'opacity-100 z-30' : 'opacity-0 z-20 pointer-events-none';

            return (
              <div
                key={slide.id}
                className={`full-width-animated-hero__item full-width-animated-hero__item--${isActive ? 'current' : 'hidden'} absolute inset-0 grid grid-cols-12 transition-opacity duration-1000 ${slideVisibility}`}
                style={{ backgroundColor: slide.backgroundColor }}
              >
                {/* Text Content */}
                <div className={`full-width-animated-hero__item-text relative col-span-12 lg:col-span-4 flex flex-col justify-center p-6 sm:p-8 lg:p-16 transition-all duration-1000 ${
                  isActive ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'
                }`}>
                  <div className="full-width-animated-hero__description-link relative z-10">
                    <p className="full-width-animated-hero__eyebrow text-white text-xs font-bold tracking-wider mb-3 sm:mb-4 uppercase">
                      {slide.category}
                    </p>
                    <h2 className="full-width-animated-hero__description text-white text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8">
                      {slide.title}
                    </h2>
                    <Link
                      href={slide.buttonLink}
                      className="full-width-animated-hero__cta inline-block bg-transparent border-2 border-white rounded-full text-white px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-600 touch-manipulation"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`full-width-animated-hero__item-media-wrapper col-span-12 lg:col-span-8 relative overflow-hidden rounded-bl-[80px] lg:rounded-bl-[160px] transition-all duration-1000 ${
                  isActive ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'
                }`}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="full-width-animated-hero__item-media object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== '/gallery/court1.jpg') {
                        target.src = '/gallery/court1.jpg';
                      }
                    }}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority={index === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="full-width-animated-hero__controls flex justify-between items-center p-3 sm:p-4">
          {/* Progress Counter */}
          <div className="full-width-animated-hero__progress flex items-center gap-1.5 sm:gap-2">
            <span className="full-width-animated-hero__progress-current text-black text-base sm:text-lg font-bold">
              {formatSlideNumber(currentSlide + 1)}
            </span>
            <hr className="full-width-animated-hero__progress-separator w-16 sm:w-24 h-px bg-gray-400 border-0" />
            <span className="full-width-animated-hero__progress-total text-gray-400 text-base sm:text-lg font-bold">
              {formatSlideNumber(slides.length)}
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="full-width-animated-hero__btn-wrapper flex gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              className="full-width-animated-hero__btn full-width-animated-hero__btn--prev relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 touch-manipulation active:scale-95"
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              <span className="full-width-animated-hero__btn-span w-full h-full flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </span>
            </button>

            <div className="full-width-animated-hero__timeout-indicator relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <button
                onClick={nextSlide}
                className="full-width-animated-hero__btn full-width-animated-hero__btn--next w-full h-full bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 relative z-10 touch-manipulation active:scale-95"
                aria-label="Next slide"
                disabled={isTransitioning}
              >
                <span className="full-width-animated-hero__btn-span w-full h-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </span>
              </button>
              <div className="absolute inset-0 z-0">
                <CircularProgress progress={progress} size={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;






