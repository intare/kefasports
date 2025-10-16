'use client';

import React, { useState, useEffect } from 'react';

interface SocialProofProps {
  className?: string;
  variant?: 'banner' | 'inline' | 'floating';
}

const SocialProof: React.FC<SocialProofProps> = ({ 
  className = '', 
  variant = 'banner' 
}) => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    {
      number: "200+",
      label: "Projects Completed",
      icon: "🏗️"
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: "⭐"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: "😊"
    },
    {
      number: "50+",
      label: "Organizations Served",
      icon: "🤝"
    }
  ];

  // Rotate stats every 3 seconds for floating variant
  useEffect(() => {
    if (variant === 'floating') {
      const interval = setInterval(() => {
        setCurrentStat((prev) => (prev + 1) % stats.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [variant, stats.length]);

  if (variant === 'floating') {
    return (
      <div className={`hidden lg:block fixed bottom-6 left-6 z-40 ${className}`}>
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs transform transition-all duration-500 hover:scale-105">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{stats[currentStat].icon}</div>
            <div>
              <div className="text-2xl font-bold text-brand-accent">
                {stats[currentStat].number}
              </div>
              <div className="text-sm text-gray-600">
                {stats[currentStat].label}
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Trusted by organizations across Africa
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">
              {stat.number}
            </div>
            <div className="text-sm md:text-base text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Banner variant (default) - Hidden on mobile to prevent overlap
  return (
    <div className={`hidden md:block bg-brand-accent text-white py-3 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-center">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🏆</span>
            <span className="font-semibold">Trusted by 50+ Organizations</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">⚡</span>
            <span className="font-semibold">200+ Projects Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">⭐</span>
            <span className="font-semibold">15+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">📞</span>
            <a
              href="tel:+250787666677"
              className="font-semibold hover:text-yellow-200 transition-colors"
            >
              +250 787 666 677
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
