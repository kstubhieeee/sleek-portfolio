import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'TechMart',
    description:
      'Modern e-commerce store with complete product, transaction, and admin management.',
    image: '/project/store/Techmart.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/store.mp4',
    link: 'https://your-live-site-link.com',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/kstubhieeee/store',
    live: 'https://your-live-site-link.com',
    details: true,
    projectDetailsPageSlug: '/projects/store',
    isWorking: true,
  },
];
