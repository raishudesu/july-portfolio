"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Badge } from "./ui/badge";
import LinksBtn from "./links-btn";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type ProjectCard = {
  projectName: string;
  projectImageUrl: string;
  projectImageAlt: string;
  projectDescription: string;
  links: {
    live: string | null;
    github: string | null;
  };
  stack: string[];
};

const ProjectCard = ({
  projectName,
  projectImageUrl,
  projectImageAlt,
  projectDescription,
  links,
  stack,
}: ProjectCard) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(125px 125px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();

      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative p-4 w-full h-full flex gap-2 items-center bg-muted rounded-lg border ">
      <motion.div
        className="absolute inset-0 border border-zinc-900 dark:border-zinc-300 rounded-lg"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="grid gap-6">
        <div className="relative h-10 w-10 rounded-full">
          <Image
            src={projectImageUrl}
            alt={projectImageAlt}
            fill
          //objectFit="contain"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-4 md:flex-row md:items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-xl">{projectName}</h3>
            <p className="font-mono">{projectDescription}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {stack.map((stack, index) => (
                <Fragment key={index}>
                  <Badge
                    variant={"outline"}
                    className="border dark:border-zinc-700"
                  >
                    {stack}
                  </Badge>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="px-1 grid md:flex gap-2">
          <LinksBtn links={links || ""} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
