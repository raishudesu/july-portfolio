import { ModeToggle } from "./mode-toggle";
import NavBtns from "./nav-btns";

const Navbar = () => {
  return (
    <nav className="bg-primary-foreground sticky z-50 top-2 w-full max-w-5xl flex justify-between items-center p-2 rounded-lg border">
      <div className="flex gap-2">
        <NavBtns />
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
