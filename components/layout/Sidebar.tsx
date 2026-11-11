import { House, Folder, BriefcaseBusiness, Certificate, Mail } from "lucide-react";
function Sidebar() {
  return (
    <aside className="bg-zinc-100 p-6 min-h-screen w-64 shrink-0">
      <h2 className="text-2xl font-bold text-zinc-900">Jason Leonardo</h2>
      <p className="text-zinc-600 mt-2">Software Engineer</p>
      <nav  aria-label="Main navigation" className="mt-8 flex flex-col gap-2 text-zinc-900">
        <a href="/" className="flex items-center gap-2"><House size={20} />Home</a>
        <a href="#projects" className="flex items-center gap-2"><Folder size={20} />Projects</a>
        <a href="#experience" className="flex items-center gap-2"><BriefcaseBusiness size={20} />Experience</a>
        <a href="#Certifications" className="flex items-center gap-2"><Certificate size={20} />Certifications</a>
        <a href="#contact" className="flex items-center gap-2"><Mail size={20} />Contact</a>
      </nav>
    </aside>
  );
}
export default Sidebar;