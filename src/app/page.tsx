import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MyLinks from "@/components/my-links";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 md:py-12 p-2">
      <Navbar />
      <div id="home"></div>
      <div className="mt-6 z-10 w-full max-w-5xl items-center justify-between text-sm flex flex-col gap-40">
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
        <MyLinks />
        <Footer />
      </div>
    </main>
  );
}
