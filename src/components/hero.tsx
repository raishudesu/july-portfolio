import { CirclePlus, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import pfp from "@/assets/images/pfp.jpg";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="mt-6 flex flex-col-reverse md:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between items-start">
            <Badge className="bg-zinc-100 hover:bg-zinc-200 flex gap-2">
              <div className="bg-zinc-500 h-1.5 w-1.5 rounded-full"></div>
              <span className="text-zinc-500">Software Developer</span>
            </Badge>
            <Badge className="bg-green-100 dark:bg-green-200 hover:bg-green-200 flex gap-2">
              <div className="bg-green-500 dark:bg-green-600 h-1.5 w-1.5 rounded-full animate-pulse"></div>
              <span className="text-green-500 dark:text-green-600">
                Available for work
              </span>
            </Badge>
          </div>
          <h1 className="font-medium text-7xl tracking-wider">
            I&lsquo;m Barysh Bacaltos
          </h1>
          <span className="gap-2">
            <p className="font-mono text-lg tracking-tight">
              An aspiring software developer from the Philippines📍.
              <br />
              Currently looking for experiences.
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
        <Button size={"sm"} className="flex gap-2 items-center">
          <CirclePlus size={15} />
          Hire me
        </Button>
        <Button
          size={"sm"}
          variant={"secondary"}
          className="flex gap-2 items-center"
        >
          <Copy size={15} />
          Copy email
        </Button>
      </div>
    </div>
  );
};

export default Hero;
