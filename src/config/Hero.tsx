
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  TailwindCss: TailwindCss,
};

export const heroConfig = {
  // Personal Information
  name: 'Kaustubh',
  title: 'A Full Stack web developer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      component: 'TailwindCss',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I craft scalable digital solutions using {skills:0} {skills:1} {skills:2} {skills:3} {skills:4} and {skills:5}. Passionate about crafting intuitive <b>user experiences .</b> Love exploring <b>modern web technologies</b>, always eager to learn and innovate.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/kstubhie',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kstubhie/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/kstubhieeee',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:banekaustubh27@gmail.com',
    icon: <Mail />,
  },
];
