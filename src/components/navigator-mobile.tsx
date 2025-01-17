"use client";

import { CircleUserRound, House, Link2, PanelTop } from "lucide-react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "./ui/button";

export const routes = [
  {
    to: "home",
    icon: <House />,
    name: "Home",
  },
  {
    to: "projects",
    icon: <PanelTop />,
    name: "Projects",
  },
  {
    to: "contact",
    icon: <CircleUserRound />,
    name: "Contacts",
  },
  {
    to: "links",
    icon: <Link2 />,
    name: "Links",
  },
];

const NavigatorMobile = () => {
  return (
    <div className="z-10 bottom-0 sticky md:hidden w-full flex items-center justify-center backdrop-blur-sm border-t py-4">
      <div className="w-full grid grid-cols-4 gap-2 place-items-center">
        {routes.map(({ to, icon, name }, index) => (
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
              className="rounded-md text-sm font-medium p-4 flex gap-2 items-center justify-center bg-muted cursor-pointer"
            >
              {icon}
              <span className="hidden md:block">{name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigatorMobile;
