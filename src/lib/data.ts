import devfolioPfp from "@/assets/logos/devfolio.svg";
import estudevPfp from "@/assets/logos/estudev.svg";
import reveriePfp from "@/assets/logos/reverie.svg";
import quillifyPfp from "@/assets/logos/quillify.svg";
import nextJsLogo from "@/assets/tech-stack/nextjs-logo.svg";
import reactLogo from "@/assets/tech-stack/react-logo.svg";
import tailwindLogo from "@/assets/tech-stack/tailwind-logo.svg";
import vercelLogo from "@/assets/tech-stack/vercel-logo.svg";
import supabaseLogo from "@/assets/tech-stack/supabase-logo.svg";
import parksuLogo from "@/assets/logos/parksu.svg";

import neovimLogo from "@/assets/tools/neovim.svg";
import gitLogo from "@/assets/tools/git.svg";
import djangoLogo from "@/assets/tools/django.svg";
import expressLogo from "@/assets/tools/express.svg";
import firebaseLogo from "@/assets/tools/firebase.svg";
import mongodbLogo from "@/assets/tools/mongodb.svg";
import prismaLogo from "@/assets/tools/prisma.svg";
import vscodeLogo from "@/assets/tools/vscode.svg";

export const projects = [
  {
    projectName: "Devfolio",
    projectDescription:
      "A platform for developers to generate ideas with the help of a Generative AI and share their projects as development inspiration to increase their employment probability.",
    projectImageUrl: devfolioPfp,
    projectImageAlt: "quillify-pfp",
    stack: ["NextJS", "Supabase", "ShadcnUI"],
    links: {
      github: "https://github.com/raishudesu/devfolio",
      live: "https://devfolio-prod.vercel.app",
    },
  },

  {
    projectName: "Quillify",
    projectDescription:
      "Digital source for tech insights, tutorials, and community discussions.",
    projectImageUrl: quillifyPfp,
    projectImageAlt: "quillify-pfp",
    stack: ["React", "ExpressJS", "MongoDB", "MaterialTailwind"],
    links: {
      github: "https://github.com/raishudesu/quillify-client",
      live: "https://quillify.vercel.app",
    },
  },
  {
    projectName: "Reverie",
    projectDescription:
      "A web-based diary application that's accessible from both desktop and mobile browsers.",
    projectImageUrl: reveriePfp,
    projectImageAlt: "reverie-icon",
    stack: ["React", "Firebase", "ShadcnUI"],
    links: {
      github: "https://github.com/raishudesu/Reverie",
      live: "https://reverie-notes.web.app",
    },
  },
  {
    projectName: "ParkSU",
    projectDescription:
      "A Realtime Parking Monitoring System with Data Analytics and Visualization for Palawan State University campus.",
    projectImageUrl: parksuLogo,
    projectImageAlt: "parksu-icon",
    stack: ["NextJS", "Supabase", "ShadcnUI"],
    links: {
      github: null,
      live: "https://parksu.vercel.app",
    },
  },
];

export const techStack = [
  {
    path: reactLogo,
    alt: "react-icon",
    name: "React",
    documentationUrl: "https://react.dev",
    desc: "A powerful JavaScript library for building dynamic, interactive user interfaces with reusable components.",
  },
  {
    path: nextJsLogo,
    alt: "next-js-icon",
    name: "NextJS",
    documentationUrl: "https://nextjs.org",
    desc: "A React framework for server-side rendering, static site generation, and simplified routing for fast, SEO-friendly web apps.",
  },
  {
    path: tailwindLogo,
    alt: "tailwind-icon",
    name: "Tailwind CSS",
    documentationUrl: "https://tailwindcss.com",
    desc: "A utility-first CSS framework for rapidly designing custom, responsive layouts with minimal code.",
  },
  {
    path: supabaseLogo,
    alt: "supabase-icon",
    name: "Supabase",
    documentationUrl: "https://supabase.com",
    desc: "An open-source backend-as-a-service platform providing real-time databases, authentication, and APIs with PostgreSQL.",
  },
  {
    path: vercelLogo,
    alt: "vercel-icon",
    name: "Vercel",
    documentationUrl: "https://vercel.com/home",
    desc: "A deployment platform for frontend frameworks, offering seamless scaling, domain management, and automatic HTTPS.",
  },
];

export const tools = [
  {
    name: "VSCode",
    icon: vscodeLogo,
    description: "My main code editor. Can't live without my extensions.",
  },
  {
    name: "Git",
    icon: gitLogo,
    description:
      "I use Git to manage and version my projects with Github for my code repositories.",
  },
  {
    name: "Django",
    icon: djangoLogo,
    description:
      "I have experienced working with Django to build full-stack projects, utilizing MVC architecture.",
  },

  {
    name: "ExpressJS",
    icon: expressLogo,
    description:
      "One of the best lightweight libraries to build API technologies.",
  },
  {
    name: "Firebase",
    icon: firebaseLogo,
    description:
      "One of the BaaS I use for NoSQL databases and built-in authentications.",
  },
  {
    name: "MongoDB",
    icon: mongodbLogo,
    description:
      "Used with MongoDB Compass, to build applications that require NoSQL solution.",
  },
  {
    name: "Prisma",
    icon: prismaLogo,
    description:
      "My main ORM, to simplify database connections and fast typed queries.",
  },
];
