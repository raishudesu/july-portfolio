import { techStack } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Fragment } from "react";
import StackCard from "./stack-card";
import AnimationWrapper from "./animation-wrapper";
import { spaceMono } from "@/lib/fonts";

const TechStack = () => {
  return (
    <div className="mt-16 w-full rounded-xl overflow-hidden">
      <h2 className={`${spaceMono.className} mt-4 text-3xl`}>Tech Stack:</h2>
      <p className="mt-4 font-mono tracking-tight">
        🚀 These are the technologies I use on building my applications.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {techStack.map(({ path, alt, name, documentationUrl, desc }, index) => (
          <Fragment key={index}>
            <AnimationWrapper>
              <StackCard
                path={path}
                alt={alt}
                name={name}
                documentationUrl={documentationUrl}
                desc={desc}
              />
            </AnimationWrapper>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
