import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import NextJs from '@/components/technologies/NextJs';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'AI Financial Advisor',
    description:
      'An intelligent financial advisory platform powered by AI that helps users manage their investments, track portfolios, and receive personalized financial guidance.',
    image: '/project/financial/findash.png',
    video: 'https://ik.imagekit.io/kstubhie/AI%20financial%20advisor%20using%20Next%20JS.mp4',
    link: 'https://youtu.be/UyRYWzAS7-4',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/kstubhieeee/ai-financial-advisor',
    live: 'https://youtu.be/UyRYWzAS7-4',
    details: true,
    projectDetailsPageSlug: '/projects/ai-financial-advisor',
    isWorking: true,
  },
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
