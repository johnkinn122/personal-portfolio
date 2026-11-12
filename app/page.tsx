import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-100">
      <Sidebar />

      <main className="flex-1 bg-zinc-100">
        <Hero />
        <TechStack />
      </main>

    </div>
  );
}