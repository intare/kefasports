'use client';

import { useEffect, useState } from 'react';

interface UseExitIntentOptions {
  enabled?: boolean;
  delay?: number;
  onExitIntent?: () => void;
}

export const useExitIntent = ({ 
  enabled = true, 
  delay = 3000,
  onExitIntent 
}: UseExitIntentOptions = {}) => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!enabled || hasTriggered) return;

    let timeoutId: NodeJS.Timeout;

    // Activate exit intent detection after delay
    timeoutId = setTimeout(() => {
      setIsActive(true);
    }, delay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [enabled, hasTriggered, delay]);

  useEffect(() => {
    if (!isActive || hasTriggered) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the page
      if (e.clientY <= 0) {
        setHasTriggered(true);
        onExitIntent?.();
      }
    };

    const handleBeforeUnload = () => {
      if (!hasTriggered) {
        setHasTriggered(true);
        onExitIntent?.();
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isActive, hasTriggered, onExitIntent]);

  const reset = () => {
    setHasTriggered(false);
    setIsActive(false);
  };

  return {
    hasTriggered,
    reset
  };
};
