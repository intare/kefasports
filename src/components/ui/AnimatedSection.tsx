'use client';

import React from 'react';
import { useScrollAnimation, useStaggeredAnimation, useCountAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'none';
  delay?: number;
  duration?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 'duration-700'
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay });

  const animationClasses = {
    fadeIn: `transition-opacity ${duration} ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
    slideUp: `transition-all ${duration} ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
    slideLeft: `transition-all ${duration} ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`,
    slideRight: `transition-all ${duration} ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`,
    scaleIn: `transition-all ${duration} ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
    none: ''
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

interface StaggeredGridProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'scaleIn';
  duration?: string;
}

export const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className = '',
  staggerDelay = 100,
  animation = 'slideUp',
  duration = 'duration-500'
}) => {
  const { elementRef, visibleItems } = useStaggeredAnimation(
    children.length,
    staggerDelay
  );

  const animationClasses = {
    fadeIn: (isVisible: boolean) => 
      `transition-opacity ${duration} ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
    slideUp: (isVisible: boolean) => 
      `transition-all ${duration} ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
    scaleIn: (isVisible: boolean) => 
      `transition-all ${duration} ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`
  };

  return (
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={animationClasses[animation](visibleItems[index])}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  formatter?: (value: number) => string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  formatter
}) => {
  const { elementRef, currentValue } = useCountAnimation(endValue, duration);

  const formatValue = (value: number) => {
    if (formatter) return formatter(value);
    return value.toLocaleString();
  };

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formatValue(currentValue)}{suffix}
    </span>
  );
};

interface StatCardProps {
  number: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

export const AnimatedStatCard: React.FC<StatCardProps> = ({
  number,
  label,
  suffix = '',
  prefix = '',
  className = '',
  delay = 0
}) => {
  const numericValue = typeof number === 'string' ? 
    parseInt(number.replace(/\D/g, '')) : number;

  return (
    <AnimatedSection 
      animation="slideUp" 
      delay={delay}
      className={`text-center ${className}`}
    >
      <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">
        {typeof number === 'number' ? (
          <AnimatedCounter 
            endValue={numericValue} 
            suffix={suffix} 
            prefix={prefix}
          />
        ) : (
          `${prefix}${number}${suffix}`
        )}
      </div>
      <div className="text-sm md:text-base text-gray-600">
        {label}
      </div>
    </AnimatedSection>
  );
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const [offset, setOffset] = React.useState(0);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;

      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
