import React from "react";
import { Badge } from "./ui/badge";
import Links from "./links";
import { spaceMono } from "@/lib/fonts";

const MyLinks = () => {
  return (
    <div className="w-full rounded-xl">
      <h2 className={`${spaceMono.className} mt-4 font-medium text-3xl`}>
        Socials:
      </h2>
      <p className="mt-4 font-mono tracking-tight">
        You can check out my socials to know me more.
      </p>
      <div className="mt-6">
        <Links />
      </div>
    </div>
  );
};

export default MyLinks;
