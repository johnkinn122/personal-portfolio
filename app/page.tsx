import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-100">
      <Sidebar />

      <main className="flex-1 bg-zinc-100">
      </main>
    </div>
  );
}