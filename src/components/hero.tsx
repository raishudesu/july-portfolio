import { Badge } from "./ui/badge";
import Image from "next/image";
import pfp from "@/assets/images/pfp.jpg";
import HeroCta from "./hero-cta";
import { spaceMono } from "@/lib/fonts";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="mt-6 flex flex-col-reverse md:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between items-start">
            <Badge className="bg-zinc-100 hover:bg-zinc-200 flex gap-2">
              <div className="bg-zinc-500 h-1.5 w-1.5 rounded-full"></div>
              <span className="text-zinc-500 font-mono">
                Software Developer
              </span>
            </Badge>
          </div>
          <h1
            className={`${spaceMono.className} font-medium text-7xl tracking-wider`}
          >
            Always think outside the box.
          </h1>
          <span className="gap-2">
            <p className="font-mono text-lg tracking-tight">
              Hey there! I am Barysh Bacaltos, a Software Developer.
            </p>
          </span>
        </div>
        <div className="p-2 border-2 rounded-full dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-400  transition ease-in ">
          <div className="relative rounded-full overflow-hidden h-52 w-52 ">
            <Image
              src={pfp}
              alt="pfp"
              fill
              objectFit="contain"
              className="rounded-full hover:scale-125 transition ease-in"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 grid md:flex gap-2">
        <HeroCta />
      </div>
    </div>
  );
};

export default Hero;
