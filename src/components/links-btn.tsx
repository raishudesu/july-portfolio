"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Github, LinkIcon } from "lucide-react";

const LinksBtn = ({
  links,
}: {
  links: { github: string | null; live: string | null };
}) => {
  const router = useRouter();
  return (
    <>
      {links.live && (
        <Button
          size={"sm"}
          className="z-10 flex gap-2 items-center"
          onClick={() => router.push(links.live as string)}
        >
          <LinkIcon size={15} />
          Visit
        </Button>
      )}
      {links.github && (
        <Button
          size={"sm"}
          variant={"secondary"}
          className="z-10 border dark:border-zinc-700 flex gap-2 items-center"
          onClick={() => router.push(links.github as string)}
        >
          <Github size={15} />
          Github
        </Button>
      )}
    </>
  );
};

export default LinksBtn;
