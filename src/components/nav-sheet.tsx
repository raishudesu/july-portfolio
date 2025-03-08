"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { spaceMono } from "@/lib/fonts";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";

export const routes = [
  {
    to: "home",
    name: "Home",
  },
  {
    to: "projects",
    name: "Projects",
  },
  {
    to: "contact",
    name: "Contact",
  },
  {
    to: "links",
    name: "Links",
  },
];

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-start">
          <SheetTitle className={spaceMono.className}>barysh.dev</SheetTitle>
          <SheetDescription>Navigate</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {routes.map(({ to, name }, index) => (
            <div key={index} className="w-full">
              <Link
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                offset={-100}
                className="rounded-md text-sm font-medium py-4 flex gap-2 items-center justify-start cursor-pointer"
              >
                <span className="">{name}</span>
              </Link>
            </div>
          ))}
        </div>
        <SheetFooter>
          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
