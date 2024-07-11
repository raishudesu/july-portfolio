import { CircleUserRound, House, PanelTop } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full max-w-5xl flex justify-between items-center p-2 rounded-lg border">
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" className="flex gap-2">
          <House size={15} />
          Home
        </Button>
        <Button variant="secondary" size="sm" className="flex gap-2">
          <PanelTop size={15} />
          Projects
        </Button>
        <Button variant="secondary" size="sm" className="flex gap-2">
          <CircleUserRound size={15} />
          Contact
        </Button>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
