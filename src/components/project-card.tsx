import { Link as LinkIcon, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import LinksBtn from "./links-btn";

type ProjectCard = {
  projectName: string;
  projectImageUrl: string;
  projectImageAlt: string;
  projectDescription: string;
  links: {
    live: string;
    github: string;
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
  return (
    <div className="p-4 w-full flex gap-2 items-center bg-muted rounded-lg border dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-400  transition ease-in">
      <div className="grid gap-6">
        <div className="relative h-10 w-10 rounded-full">
          <Image
            src={projectImageUrl}
            alt={projectImageAlt}
            fill
            objectFit="contain"
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
          <LinksBtn links={links} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
