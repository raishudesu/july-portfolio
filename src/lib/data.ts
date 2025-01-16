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
    projectName: "eStudev",
    projectDescription:
      "Discover a collaborative network of student developers to elevate your development skills and tech career aspirations.",
    projectImageUrl: estudevPfp,
    projectImageAlt: "devfolio-icon",
    stack: ["NextJS", "Supabase", "ShadcnUI"],
    links: {
      github: "https://github.com/raishudesu/eStudev",
      live: "https://estudev.vercel.app",
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
    desc: "The library for web and native user interfaces",
  },
  {
    path: nextJsLogo,
    alt: "next-js-icon",
    name: "NextJS",
    documentationUrl: "https://nextjs.org",
    desc: "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
  },
  {
    path: tailwindLogo,
    alt: "tailwind-icon",
    name: "Tailwind CSS",
    documentationUrl: "https://tailwindcss.com",
    desc: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
  },
  {
    path: supabaseLogo,
    alt: "supabase-icon",
    name: "Supabase",
    documentationUrl: "https://supabase.com",
    desc: "Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
  },
  {
    path: vercelLogo,
    alt: "vercel-icon",
    name: "Vercel",
    documentationUrl: "https://vercel.com/home",
    desc: "Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  },
];
