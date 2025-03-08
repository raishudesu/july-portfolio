import { spaceMono } from "@/lib/fonts";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-6 mt-6 w-full border-t rounded-lg">
      <div className="flex justify-center items-center">
        <p className={`${spaceMono.className} flex text-center items-center`}>
          <Copyright className="h-4 w-4" />
          2025 barysh.dev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
