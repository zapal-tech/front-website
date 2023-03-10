import dynamic from 'next/dynamic';
import { MapProvider } from 'react-map-gl';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';

const Calendly = dynamic(() => import('./components/Calendly/Calendly').then((mod) => mod.Calendly));
const Locations = dynamic(() => import('./components/Locations/Locations').then((mod) => mod.Locations));

export const Contacts: React.FC = () => (
  <AppLayout>
    <MapProvider>
      <Hero />
      <Locations />
      <Calendly />
    </MapProvider>
  </AppLayout>
);
