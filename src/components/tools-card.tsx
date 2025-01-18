"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactElement } from "react";

type ToolCard = {
  name: string;
  icon: ReactElement;
  description: string;
};

const ToolsCard = ({ name, icon, description }: ToolCard) => {
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
    <div className="relative p-4 w-full h-full gap-2 items-center bg-muted rounded-lg ">
      <motion.div
        className="absolute inset-0 border border-zinc-900 dark:border-zinc-300 rounded-lg"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="relative h-10 w-10 overflow-hidden">
        <Image src={icon} alt="tool-icon" fill objectFit="contain" />
      </div>
      <div className="mt-4">
        <h3 className="font-medium text-xl">{name}</h3>
        <p className="font-mono mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ToolsCard;
