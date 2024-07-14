"use client";

import { CircleUserRound, House, Link2, PanelTop } from "lucide-react";
import { Button } from "./ui/button";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBtns = () => {
  return (
    <>
      <Button
        onClick={scroll.scrollToTop}
        variant="secondary"
        size="sm"
        className="flex gap-2"
      >
        <House size={15} />
        <span className="hidden md:block">Home</span>
      </Button>

      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        offset={-100}
        className="rounded-md text-sm font-medium p-2 px-3 flex gap-2 items-center bg-muted cursor-pointer"
      >
        <PanelTop size={15} />
        <span className="hidden md:block">Projects</span>
      </Link>
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
        className="rounded-md text-sm font-medium p-2 px-3 flex gap-2 items-center bg-muted cursor-pointer"
      >
        <CircleUserRound size={15} />
        <span className="hidden md:block">Contact</span>
      </Link>
      <Link
        activeClass="active"
        to="links"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        className="rounded-md text-sm font-medium p-2 px-3 flex gap-2 items-center bg-muted cursor-pointer"
      >
        <Link2 size={15} />
        <span className="hidden md:block">Links</span>
      </Link>
    </>
  );
};

export default NavBtns;
