"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type StackCard = {
  path: string;
  alt: string;
  name: string;
  documentationUrl: string;
  desc: string;
};

const StackCard = ({ path, alt, name, documentationUrl, desc }: StackCard) => {
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
        <Image src={path} alt={alt} fill objectFit="contain" />
      </div>

      <div className="mt-6">
        <Link
          href={documentationUrl}
          target="_blank"
          className="flex gap-1 items-center font-medium text-xl hover:underline"
        >
          {name}
          <ArrowUpRight size={15} />
        </Link>
      </div>
      <p className="font-mono mt-2">{desc}</p>
    </div>
  );
};

export default StackCard;
