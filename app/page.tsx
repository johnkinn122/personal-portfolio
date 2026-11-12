import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-100">
      <Sidebar />

      <main className="flex-1 bg-zinc-100">
        <Hero />
        <TechStack />
        <FeaturedProjects />
      </main>

    </div>
  );
}