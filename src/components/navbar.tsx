import { Code } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import NavBtns from "./nav-btns";

const Navbar = () => {
  return (
    <nav className="bg-primary-foreground sticky z-50 top-2 w-full max-w-5xl flex justify-between items-center p-2 rounded-lg border">
      <div className="bg-muted p-2 rounded-lg flex items-center justify-center gap-2">
        <Code />
        <span className="font-mono text-sm">bnb</span>
      </div>
      <div className="hidden md:flex gap-2">
        <NavBtns />
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
