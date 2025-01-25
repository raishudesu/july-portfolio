import { Coffee, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const links = [
  {
    link: "https://x.com/rijndael_dev",
    icon: <Twitter size={20} />,
  },
  {
    link: "https://www.linkedin.com/in/baryshbacaltos/",
    icon: <Linkedin size={20} />,
  },
  {
    link: "https://github.com/raishudesu",
    icon: <Github size={20} />,
  },
  {
    link: "https://www.buymeacoffee.com/bacaltosbarysh",
    icon: <Coffee size={20} />,
  },
];

const Links = () => {
  return (
    <div id="links" className="w-full border rounded-lg px-4 py-2">
      <div className="flex items-center justify-between">
        <h3 className="flex gap-1 items-center font-medium text-lg">
          Follow Me
        </h3>
        <div className="flex gap-2">
          {links.map(({ link, icon }, index) => (
            <Link
              key={index}
              href={link}
              target="_blank"
              className="p-4 rounded-lg border"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
