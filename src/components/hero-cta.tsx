"use client";

import { Button } from "./ui/button";
import { CirclePlus, Copy } from "lucide-react";
import { Link } from "react-scroll";
import { toast } from "sonner";

const HeroCta = () => {
  const email = "bacaltosbaryshnikov@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);

      toast("Email copied to clipboard ✅");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        offset={-100}
        className="rounded-md text-sm font-medium p-2 px-3 flex gap-2 justify-center items-center bg-primary text-primary-foreground cursor-pointer"
      >
        <CirclePlus size={15} />
        Hire Me
      </Link>
      <Button
        onClick={copyToClipboard}
        size={"sm"}
        variant={"secondary"}
        className="flex gap-2 items-center"
      >
        <Copy size={15} />
        Copy Email
      </Button>
    </>
  );
};

export default HeroCta;
