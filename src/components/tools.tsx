import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";
import { tools } from "@/lib/data";
import AnimationWrapper from "@/components/animation-wrapper";

import ToolsCard from "@/components/tools-card";

const Tools = () => {
  return (
    <div className="mt-16 w-full rounded-xl overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-between items-start">
          <Badge className="bg-zinc-100 hover:bg-zinc-200 flex gap-2">
            <div className="bg-zinc-500 h-1.5 w-1.5 rounded-full"></div>
            <span className="text-zinc-500">Tools</span>
          </Badge>
        </div>
      </div>
      <h2 className="mt-4 font-medium text-3xl">Tools I Use</h2>
      <p className="mt-4 font-mono tracking-tight">
        These are the tools I use to build applications.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {tools.map(({ name, icon, description }, index) => (
          <Fragment key={index}>
            <AnimationWrapper>
              <ToolsCard name={name} icon={icon} description={description} />
            </AnimationWrapper>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tools;
