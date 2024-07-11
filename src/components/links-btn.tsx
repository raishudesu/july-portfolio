"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Github, LinkIcon } from "lucide-react";

const LinksBtn = ({ links }: { links: { github: string; live: string } }) => {
  const router = useRouter();
  return (
    <>
      <Button
        size={"sm"}
        className="flex gap-2 items-center"
        onClick={() => router.push(links.live)}
      >
        <LinkIcon size={15} />
        Visit
      </Button>
      <Button
        size={"sm"}
        variant={"secondary"}
        className="flex gap-2 items-center"
        onClick={() => router.push(links.github)}
      >
        <Github size={15} />
        Github
      </Button>
    </>
  );
};

export default LinksBtn;
