import { Outfit, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const outfit = Outfit({ subsets: ["latin"] });

export const textGradientEffect = `animate-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text font-black text-transparent`;
