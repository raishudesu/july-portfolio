"use client";

import { Button } from "./ui/button";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBtns = () => {
  return (
    <>
      <Button onClick={scroll.scrollToTop} variant="ghost" size="sm">
        Home
      </Button>

      <Button variant={"ghost"} size={"sm"} asChild>
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
          className="rounded-md text-sm font-medium p-2 px-3 flex gap-2 items-center cursor-pointer"
        >
          <span className="hidden md:block">Projects</span>
        </Link>
      </Button>
      <Button variant={"ghost"} size={"sm"} asChild>
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
          className="rounded-md text-sm font-medium p-2 px-3 flex gap-2 items-center cursor-pointer"
        >
          <span className="hidden md:block">Contact</span>
        </Link>
      </Button>

      <Button variant={"ghost"} size={"sm"} asChild>
        <Link
          activeClass="active"
          to="links"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          className="rounded-md text-sm font-medium p-2 px-3 flex gap-2 items-center cursor-pointer"
        >
          <span className="hidden md:block">Links</span>
        </Link>
      </Button>
    </>
  );
};

export default NavBtns;
