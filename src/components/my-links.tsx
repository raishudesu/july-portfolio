import React from "react";
import { Badge } from "./ui/badge";
import Links from "./links";

const MyLinks = () => {
  return (
    <div className="w-full rounded-xl">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-between items-start">
          <Badge className="bg-zinc-100 hover:bg-zinc-200 flex gap-2">
            <div className="bg-zinc-500 h-1.5 w-1.5 rounded-full"></div>
            <span className="text-zinc-500">Links</span>
          </Badge>
        </div>
      </div>
      <h2 className="mt-4 font-medium text-3xl">Here&lsquo;s my links:</h2>
      <p className="mt-4 font-mono tracking-tight">
        You can view these links to know me more.
      </p>
      <div className="mt-6">
        <Links />
      </div>
    </div>
  );
};

export default MyLinks;
