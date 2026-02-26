import { useEffect } from 'react';
import { setupLanding } from '../setupLanding.js';

export function useLandingSetup() {
  useEffect(() => {
    setupLanding();
  }, []);
}
