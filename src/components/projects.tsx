import { projects } from "@/lib/data";
import ProjectCard from "./project-card";
import { Badge } from "./ui/badge";
import { Fragment } from "react";

const Projects = () => {
  return (
    <div className="w-full rounded-xl">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-between items-start">
          <Badge className="bg-zinc-100 hover:bg-zinc-200 flex gap-2">
            <div className="bg-zinc-500 h-1.5 w-1.5 rounded-full"></div>
            <span className="text-zinc-500">Projects</span>
          </Badge>
        </div>
      </div>
      <h2 className="mt-4 font-medium text-3xl">
        Projects I&lsquo;ve worked on:
      </h2>
      <p className="mt-4 font-mono tracking-tight">
        ✨ Discover my personal projects across my development journey.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-4 rounded-xl">
        {projects.map(
          (
            {
              projectName,
              projectImageUrl,
              projectImageAlt,
              projectDescription,
              links,
              stack,
            },
            index
          ) => (
            <Fragment key={index}>
              <ProjectCard
                projectName={projectName}
                projectImageUrl={projectImageUrl}
                projectImageAlt={projectImageAlt}
                projectDescription={projectDescription}
                links={links}
                stack={stack}
              />
            </Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
