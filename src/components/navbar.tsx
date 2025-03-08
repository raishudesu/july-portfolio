import { spaceMono } from "@/lib/fonts";
import { ModeToggle } from "./mode-toggle";
import NavBtns from "./nav-btns";
import NavSheet from "./nav-sheet";

const Navbar = () => {
  return (
    <nav className="bg-primary-foreground border-b sticky z-50 top-2 w-full  flex justify-center items-center">
      <div className="w-full max-w-5xl flex justify-between items-center p-2">
        <span className={`${spaceMono.className} text-lg`}>barysh.dev</span>
        <div className="flex gap-2">
          <div className="hidden md:flex items-center">
            <NavBtns />
          </div>
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <NavSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
