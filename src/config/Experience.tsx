import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Gmail, Java, NetBeans, Razorpay, ReCaptcha } from '@/components/technologies/svg';
import PHP from '@/components/technologies/PHP';
import MySQL from '@/components/technologies/MySQL';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'RPA Infotech',
    position: 'React JS Developer Intern',
    location: 'Gurugram, India (Remote)',
    image: '/company/rpa.png',
    description: [
      'Built *TechMart* - a complete e-commerce website from scratch using React.js, Node.js, JavaScript, and MongoDB during my internship, receiving *$5/hour* compensation.',
      'Created user authentication with login/signup, user profiles, and separate billing/shipping addresses so customers could manage their accounts easily.',
      'Developed an admin panel where store owners can add, edit, and delete products with image uploads, plus manage inventory and track sales.',
      'Built the product catalog with search, filtering, and "load more" functionality, making it easy for customers to browse and find what they need.',
      'Integrated Razorpay payment gateway for secure transactions and added reCAPTCHA to prevent spam and bot attacks on the platform.',
      'Styled everything with Tailwind CSS for a clean, responsive design that works great on both desktop and mobile devices.',
    ],
    startDate: 'February 2025',
    endDate: 'April 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      }, {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />
      },
      {
        name: 'Postman',
        href: 'https://postman.com/',
        icon: <Postman />
      },
      {
        name: 'Razorpay',
        href: 'https://razorpay.com/',
        icon: <Razorpay />
      },
      {
        name: 'ReCaptcha',
        href: 'https://www.google.com/recaptcha/intro/v3.html',
        icon: <ReCaptcha />
      },
      {
        name: 'Gmail API',
        href: 'https://developers.google.com/gmail/api',
        icon: <Gmail />
      },


    ],
    website: 'https://rpainfotech.com/',
    github: 'https://github.com/kstubhieeee/store',
  },
  {
    isCurrent: false,
    company: 'MedikaRX',
    position: 'Frontend Developer',
    location: 'Freelance',
    image: '/company/medika.png',
    description: [
      'Built *MedikaRx Labs* - a comprehensive healthcare and diagnostic services platform using Next.js, TypeScript, and Tailwind CSS as a freelance developer.',
      'Developed health monitoring tools including BMI calculator, blood pressure tracker, calorie counter, and menstrual cycle tracker for patient wellness management.',
      'Created secure user authentication system with personal health dashboards where patients can manage medical reports, schedule appointments, and track health metrics.',
      'Built appointment booking system with home sample collection services, connecting patients with diagnostic tests and medical consultations.',
      'Implemented content management with health articles, medical information resources, and category-based filtering to help users find relevant health content.',
      'Used shadcn/ui components with React Hook Form and Zod validation for robust form handling, plus Recharts for health data visualization and dark/light theme support.',
    ],
    startDate: 'May 2025',
    endDate: 'July 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />
      },
      {
        name: 'Shadcn UI',
        href: 'https://ui.shadcn.com/',
        icon: <Shadcn />
      }
    ],
    website: 'https://medikarx.vercel.app',
    github: 'https://github.com/kstubhieeee/medikarx',
  },
  {
    isCurrent: false,
    company: 'SLRTCE',
    position: 'Web Developer',
    location: 'Mira-Bhayandar, India (offline)',
    image: '/company/slrtce.png',
    description: [
      'Built *Melodify* - an innovative music streaming platform for music enthusiasts to explore, upload, and enjoy their favorite tunes using HTML, CSS, JavaScript, PHP, and MySQL.',
      'Implemented secure user authentication with sign-up/sign-in functionality and session management for both listeners and music creators.',
      'Developed intuitive navigation with sidebar and top navigation providing easy access to Home, Playlists, Albums, Artists, and Genres.',
      'Created comprehensive music library displaying trending songs with album artwork and search functionality for quick song discovery.',
      'Built custom song upload feature allowing users to upload songs with album artwork and detailed metadata.',
      'Engineered fully functional music player with play, pause, previous, next controls, progress bar, and current song display for seamless listening experience.',
    ],
    startDate: 'June 2024',
    endDate: 'September 2024',
    website: 'https://slrtce.in',
    technologies: [
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'PHP',
        href: 'https://www.php.net/',
        icon: <PHP />
      },
      {
        name: 'MySQL',
        href: 'https://www.mysql.com/',
        icon: <MySQL />
      }
    ],
    github: 'https://github.com/kstubhieeee/melodify',

  },
  {
    isCurrent: false,
    company: 'Engineering Minds',
    position: 'Java Developer',
    location: 'Borivali, India (offline)',
    image: '/company/minds.png',
    description: [
      'Developed a *Fee Management System* desktop application using Java Swing and MySQL, streamlining student fee tracking and management for educational institutes.',
      'Designed and implemented secure login authentication to restrict system access to authorized personnel.',
      'Built user-friendly interfaces for core operations including student registration, fee payment processing, and real-time fee due tracking.',
      'Automated retrieval and display of students with outstanding balances, enabling efficient follow-up and fee collection.',
      'Developed robust search functionality allowing quick lookup of student records by ID or mobile number.',
      'Integrated payment and balance management modules to update records instantly upon payment, ensuring data accuracy.',
      'Leveraged NetBeans GUI builder for rapid development of responsive and intuitive forms.',
      'Utilized JDBC for seamless database connectivity and CRUD operations with MySQL, ensuring reliable data persistence.',
    ],
    startDate: 'June 2024',
    endDate: 'September 2024',
    website: 'https://engineeringminds.in',
    technologies: [
      {
        name: 'Java',
        href: 'https://java.com/',
        icon: <Java />,
      },
      {
        name: 'MySQL',
        href: 'https://www.mysql.com/',
        icon: <MySQL />
      },
      {
        name: 'NetBeans',
        href: 'https://netbeans.apache.org/',
        icon: <NetBeans />
      }
    ],
    github: 'https://github.com/kstubhieeee/fee-management-system',

  },
];
