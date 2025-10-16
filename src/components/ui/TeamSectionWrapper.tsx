'use client'

import React, { useEffect, useState } from 'react';
import LeadershipTeamSection from './LeadershipTeamSection';
import { fetchSanityData } from '@/lib/sanity';
import { teamMembersQuery } from '@/lib/queries';
import type { TeamMember as SanityTeamMember, SanityImage } from '@/types/sanity';

type TeamMemberWithAccent = SanityTeamMember & {
  accentColor?: string;
};

type TeamMemberDisplay = {
  name: string;
  title: string;
  imageUrl: string | SanityImage | null;
  accentColor?: string;
  bio?: string;
};

interface TeamSectionWrapperProps {
  headline?: string;
  fallbackTeamMembers: TeamMemberDisplay[];
}

const TeamSectionWrapper: React.FC<TeamSectionWrapperProps> = ({ 
  headline = "Our Leadership Team",
  fallbackTeamMembers 
}) => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberDisplay[]>(fallbackTeamMembers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchSanityData<TeamMemberWithAccent[]>(teamMembersQuery);
        
        if (data && data.length > 0) {
          const transformedData: TeamMemberDisplay[] = data.map((member) => ({
            name: member.name,
            title: member.title,
            imageUrl: member.image ?? null,
            accentColor: member.accentColor || "#e74c3c",
            bio: member.bio,
          }));
          setTeamMembers(transformedData);
        }
      } catch (err) {
        console.error('Error fetching team data:', err);
        setError('Failed to load team data from CMS');
        // Keep fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 pb-4 border-b border-gray-200">{headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 mx-4">
          <p className="text-yellow-800 text-sm">
            <strong>Note:</strong> {error}. Showing cached team information.
          </p>
        </div>
      )}
      <LeadershipTeamSection 
        headline={headline}
        teamMembers={teamMembers}
      />
    </div>
  );
};

export default TeamSectionWrapper;
