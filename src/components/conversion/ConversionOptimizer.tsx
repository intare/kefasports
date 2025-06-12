'use client';

import React, { useState, useEffect } from 'react';
import LeadMagnetPopup from './LeadMagnetPopup';
import { useExitIntent } from '@/hooks/useExitIntent';

interface ConversionOptimizerProps {
  enabled?: boolean;
}

const ConversionOptimizer: React.FC<ConversionOptimizerProps> = ({ enabled = true }) => {
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Exit intent detection
  useExitIntent({
    enabled: enabled && !hasShownPopup,
    delay: 5000, // Wait 5 seconds before activating
    onExitIntent: () => {
      if (!hasShownPopup) {
        setShowLeadMagnet(true);
        setHasShownPopup(true);
      }
    }
  });

  // Time-based popup (backup trigger)
  useEffect(() => {
    if (!enabled || hasShownPopup) return;

    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowLeadMagnet(true);
        setHasShownPopup(true);
      }
    }, 45000); // Show after 45 seconds if no exit intent

    return () => clearTimeout(timer);
  }, [enabled, hasShownPopup]);

  // Check if user has already seen popup (localStorage)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenPopup = localStorage.getItem('kefasports_lead_magnet_shown');
      const lastShown = localStorage.getItem('kefasports_lead_magnet_date');
      
      if (hasSeenPopup && lastShown) {
        const daysSinceShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
        if (daysSinceShown < 7) { // Don't show again for 7 days
          setHasShownPopup(true);
        }
      }
    }
  }, []);

  const handleLeadMagnetSubmit = async (email: string, name: string) => {
    try {
      // Track conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'lead_generation',
          lead_source: 'exit_intent_popup',
          value: 1
        });
      }

      // Here you would typically send the data to your CRM or email service
      // For now, we'll just log it and show success
      console.log('Lead magnet submission:', { email, name });
      
      // You could integrate with services like:
      // - Mailchimp
      // - ConvertKit
      // - HubSpot
      // - Your own API endpoint
      
      // Example API call:
      // await fetch('/api/lead-magnet', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, name, source: 'exit_intent' })
      // });

      // Mark as shown in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('kefasports_lead_magnet_shown', 'true');
        localStorage.setItem('kefasports_lead_magnet_date', Date.now().toString());
      }

      return Promise.resolve();
    } catch (error) {
      console.error('Error submitting lead magnet:', error);
      throw error;
    }
  };

  const handleClosePopup = () => {
    setShowLeadMagnet(false);
    
    // Mark as shown even if closed without submitting
    if (typeof window !== 'undefined') {
      localStorage.setItem('kefasports_lead_magnet_shown', 'true');
      localStorage.setItem('kefasports_lead_magnet_date', Date.now().toString());
    }
  };

  return (
    <>
      <LeadMagnetPopup
        isOpen={showLeadMagnet}
        onClose={handleClosePopup}
        onSubmit={handleLeadMagnetSubmit}
      />
    </>
  );
};

export default ConversionOptimizer;
