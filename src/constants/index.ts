import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  bootstrapt,
  materialui,
  git,
  figma,
  xd,
  hela,
  threejs,
  GameHup,
  issuetracker,
  add2,
  templeteone,
  ecommerce,
  HelaTech,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DOM",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Responsive Design",
    icon: backend,
  },
  {
    title: "API",
    icon: creator,
  },
];

const technologies = [
  {
    name: 'html',
    icon: html
  },
  {
    name: 'css',
    icon: css
  },
  {
    name: 'Javascript',
    icon: javascript
  },
  {
    name: 'Typescript',
    icon: typescript
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrapt,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Material UI",
    icon: materialui,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "XD",
    icon: xd,
  },
];
export interface TypeExperiences {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Hela",
    icon: hela,
    iconBg: "#0D1C22",
    date: "June 2024 - Now",
    points: [
      "Develop and maintaining  web applications and create new page the company's website using React.js and other related technologies.",
      "Collaborate with cross-functional teams including , project manager ,designers,backend developers, and other developers .",
      "Implement responsive design and ensure cross-browser compatibility.",
      "Develop and maintaining and add  new pages for dashboard",
    ],
  },
];
export interface TypeTestimonials {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Matweial UI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: HelaTech,
    source_code_link: "https://github.com/",
    website_link: "https://hela-tech.com/",
  },
  {
    name: "Ecommerce",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Matweial UI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Payments Online",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
    website_link: "https://e-commerce-store-anas-s-projects-733ce659.vercel.app/",
  },
  {
    name: "Issue Tracker",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Matweial UI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
    ],
    image: issuetracker,
    source_code_link: "https://github.com/",
    website_link: "https://issue-tracker-nine-chi.vercel.app/",
  },
  {
    name: "GameHup",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Matweial UI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Ready API",
        color: "orange-text-gradient",
      },
    ],
    image: GameHup,
    source_code_link: "https://github.com/",
    website_link: "https://game-hub-six-silk-74.vercel.app/",
  },
  {
    name: "Add2",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: add2,
    source_code_link: "https://github.com/",
    website_link: "https://add2.vercel.app/",
  },
  {
    name: "Templete",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: templeteone,
    source_code_link: "https://github.com/",
    website_link: "https://add2.vercel.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
