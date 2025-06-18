import { projects } from "@/lib/data";
import ProjectCard from "./project-card";
import { Fragment } from "react";
import AnimationWrapper from "./animation-wrapper";
import { spaceMono } from "@/lib/fonts";

const Projects = () => {
  return (
    <div id="projects" className="w-full overflow-hidden rounded-xl ">
      <h2 className={`${spaceMono.className} mt-4 font-medium text-3xl`}>
        Projects:
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
              <AnimationWrapper>
                <ProjectCard
                  projectName={projectName}
                  projectImageUrl={projectImageUrl}
                  projectImageAlt={projectImageAlt}
                  projectDescription={projectDescription}
                  links={links}
                  stack={stack}
                />
              </AnimationWrapper>
            </Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
