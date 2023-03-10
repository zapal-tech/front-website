import dynamic from 'next/dynamic';

import { ProjectPreview } from 'types/projects';

import { AppLayout } from 'layouts';

import { Hero } from './components/Hero/Hero';

const AboutUs = dynamic(() => import('./components/AboutUs/AboutUs').then((mod) => mod.AboutUs));
const Services = dynamic(() => import('./components/Services/Services').then((mod) => mod.Services));
const Technologies = dynamic(() => import('./components/Technologies/Technologies').then((mod) => mod.Technologies));
const Partners = dynamic(() => import('./components/Partners/Partners').then((mod) => mod.Partners));
const Projects = dynamic(() => import('./components/Projects/Projects').then((mod) => mod.Projects));
const Team = dynamic(() => import('./components/Team/Team').then((mod) => mod.Team));

export type HomeProps = {
  projects: ProjectPreview[];
};

export const HomePage: React.FC<HomeProps> = ({ projects }) => (
  <AppLayout>
    <Hero />
    <AboutUs />
    <Services />
    <Technologies />
    <Projects projects={projects} />
    <Partners />
    <Team />
  </AppLayout>
);
