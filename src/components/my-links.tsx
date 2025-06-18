import React from "react";
import Links from "./links";
import { spaceMono } from "@/lib/fonts";
import Image from "next/image";
import pfp from "@/assets/images/logo.png";

const MyLinks = () => {
  return (
    <div className="w-full rounded-xl">
      <h2 className={`${spaceMono.className} mt-4 font-semibold text-3xl`}>
        Socials:
      </h2>
      <p className="mt-4 font-mono tracking-tight">
        You can check out my socials to know me more.
      </p>
      <div className="mt-6 flex justify-center">
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
      <div className="mt-6">
        <Links />
      </div>
    </div>
  );
};

export default MyLinks;
