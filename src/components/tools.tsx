import { Fragment } from "react";
import { tools } from "@/lib/data";
import AnimationWrapper from "@/components/animation-wrapper";

import ToolsCard from "@/components/tools-card";
import { spaceMono } from "@/lib/fonts";
import Link from "next/link";

const Tools = () => {
  return (
    <div className="mt-16 w-full rounded-xl overflow-hidden">
      <h2 className={`${spaceMono.className} mt-4 font-medium text-3xl`}>
        Other Technologies:
      </h2>
      <p className="mt-4 font-mono tracking-tight">
        ⚙️ These are some of the technologies/tools I also use to build, manage,
        and monitor applications. You can visit my{" "}
        <Link
          href={"https://github.com/raishudesu"}
          className="font-bold text-blue-500 hover:underline"
        >
          Github
        </Link>{" "}
        to view more.
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
