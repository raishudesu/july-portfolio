import { Github } from "lucide-react";
import Link from "next/link";

const Links = () => {
  return (
    <div id="links" className="w-full border rounded-lg px-4 py-2">
      <div className="flex items-center justify-between">
        <h3 className="flex gap-1 items-center font-medium text-lg">
          Follow Me
        </h3>
        <div className="flex gap-2">
          <Link
            href={"https://github.com/raishudesu"}
            target="_blank"
            className="p-4 rounded-lg border "
          >
            <Github size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
