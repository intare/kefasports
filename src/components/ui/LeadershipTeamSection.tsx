"use client";

import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { SanityImage } from '@/types/sanity';

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string | SanityImage | null; // Can be either a URL string or Sanity image object
  accentColor?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  imageUrl,
  accentColor = "#e74c3c" // Default to the orange/red accent color
}) => {
  // Handle both Sanity images and regular URLs
  const getImageSrc = () => {
    if (typeof imageUrl === 'string') {
      return imageUrl; // Regular URL
    } else if (imageUrl && typeof imageUrl === 'object') {
      return urlFor(imageUrl).width(400).height(400).url(); // Sanity image
    }
    return '/team/placeholder.jpg'; // Fallback
  };

  return (
    <div className="team-member relative overflow-hidden border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-square relative bg-gray-100 overflow-hidden">
        <Image
          src={getImageSrc()}
          alt={`${name} - ${title}`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 relative bg-white">
        {/* Accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ backgroundColor: accentColor }}
        ></div>
        <h3 className="text-lg font-bold pl-3 text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 pl-3">{title}</p>
      </div>
    </div>
  );
};

interface LeadershipTeamSectionProps {
  headline?: string;
  teamMembers: TeamMemberProps[];
}

const LeadershipTeamSection: React.FC<LeadershipTeamSectionProps> = ({
  headline = "Our Leadership Team",
  teamMembers
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 pb-4 border-b border-gray-200">{headline}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              imageUrl={member.imageUrl}
              accentColor={member.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamSection;


