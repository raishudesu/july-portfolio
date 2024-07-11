import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type StackCard = {
  path: string;
  alt: string;
  name: string;
  documentationUrl: string;
  desc: string;
};

const StackCard = ({ path, alt, name, documentationUrl, desc }: StackCard) => {
  return (
    <div className="p-4 w-full gap-2 items-center bg-muted dark:bg-zinc-800 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-900 transition ease-in">
      <div className="relative h-10 w-10 overflow-hidden">
        <Image src={path} alt={alt} fill objectFit="contain" />
      </div>

      <div className="mt-6">
        <Link
          href={documentationUrl}
          target="_blank"
          className="flex gap-1 items-center font-medium text-xl hover:underline"
        >
          {name}
          <ArrowUpRight size={15} />
        </Link>
      </div>
      <p className="font-mono mt-2">{desc}</p>
    </div>
  );
};

export default StackCard;
