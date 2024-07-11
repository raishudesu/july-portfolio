import { techStack } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Fragment } from "react";
import StackCard from "./stack-card";

const TechStack = () => {
  return (
    <div className="w-full rounded-xl">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-between items-start">
          <Badge className="bg-zinc-100 hover:bg-zinc-200 flex gap-2">
            <div className="bg-zinc-500 h-1.5 w-1.5 rounded-full"></div>
            <span className="text-zinc-500">Tech Stack</span>
          </Badge>
        </div>
      </div>
      <h2 className="mt-4 font-medium text-3xl">My Tech Stack:</h2>
      <p className="mt-4 font-mono tracking-tight">
        🚀 These are the technologies I use on building my applications.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {techStack.map(({ path, alt, name, documentationUrl, desc }, index) => (
          <Fragment key={index}>
            <StackCard
              path={path}
              alt={alt}
              name={name}
              documentationUrl={documentationUrl}
              desc={desc}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
