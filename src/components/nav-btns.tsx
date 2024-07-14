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
        Home
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
        className="text-sm font-medium p-2 flex gap-2 items-center bg-muted cursor-pointer"
      >
        <PanelTop size={15} />
        Projects
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
        className="text-sm font-medium p-2 flex gap-2 items-center bg-muted cursor-pointer"
      >
        <CircleUserRound size={15} />
        Contact
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
        // offset={-100}
        className="text-sm font-medium p-2 flex gap-2 items-center bg-muted cursor-pointer"
      >
        <Link2 size={15} />
        Links
      </Link>
    </>
  );
};

export default NavBtns;
