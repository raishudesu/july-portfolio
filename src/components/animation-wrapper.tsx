"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimationWrapper = ({ children }: { children: ReactNode }) => {
  const section = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div style={{ opacity, rotateX, transformPerspective: "800px" }}>
      <div ref={section} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimationWrapper;
