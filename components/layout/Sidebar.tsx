"use client";

import { useState } from "react";
import { House, Code2, BriefcaseBusiness, Certificate, Mail, Layers, ExternalLink,Laptop, Sun, Moon, MapPin, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa6";
import Link from "next/link";
function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-hidden border-r border-zinc-300 bg-zinc-100 p-6">

      <h2 className="text-2xl font-bold text-zinc-900">Jason Leonardo</h2>
      
<nav
  aria-label="Main navigation"
  className="mt-8 flex flex-col gap-2 text-sm text-zinc-900"
>
  <Link
  href="#home"
  onClick={() => {
    setActiveSection("home");

    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
    activeSection === "home"
      ? "bg-zinc-200 font-semibold"
      : "hover:bg-zinc-200"
  }`}
>
  <House size={18} />
  Home
</Link>

  <a
    href="#projects"
    onClick={() => setActiveSection("projects")}
    aria-current={activeSection === "projects" ? "location" : undefined}
    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
      activeSection === "projects"
        ? "bg-zinc-200 font-semibold"
        : "hover:bg-zinc-200"
    }`}
  >
    <Code2 size={18} />
    Projects
  </a>

  <a
    href="#experience"
    onClick={() => setActiveSection("experience")}
    aria-current={activeSection === "experience" ? "location" : undefined}
    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
      activeSection === "experience"
        ? "bg-zinc-200 font-semibold"
        : "hover:bg-zinc-200"
    }`}
  >
    <BriefcaseBusiness size={18} />
    Experience
  </a>

  <a
    href="#certifications"
    onClick={() => setActiveSection("certifications")}
    aria-current={activeSection === "certifications" ? "location" : undefined}
    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
      activeSection === "certifications"
        ? "bg-zinc-200 font-semibold"
        : "hover:bg-zinc-200"
    }`}
  >
    <Certificate size={18} />
    Certifications
  </a>

  <a
    href="#contact"
    onClick={() => setActiveSection("contact")}
    aria-current={activeSection === "contact" ? "location" : undefined}
    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
      activeSection === "contact"
        ? "bg-zinc-200 font-semibold"
        : "hover:bg-zinc-200"
    }`}
  >
    <Mail size={18} />
    Contact
  </a>
</nav>


      <hr className="my-6 border-zinc-200" />
        
      <section aria-labelledby="stack-heading">
        <h3 id="stack-heading" className="text-xs font-semibold tracking-widest  text-zinc-900">STACK</h3>
        <a href="#skills" className="text-zinc-900 flex items-center gap-3 mt-3 text-sm"><Layers size={18} />Tech Stack</a>
      </section>

      <hr className="my-6 border-zinc-200" />

      <nav aria-label="Resources navigation"className="mt-6 flex flex-col gap-2 text-zinc-900">
        <h3 className="text-xs font-semibold tracking-widest  text-zinc-900">
          RESOURCES
        </h3>

        <a href="/resume.pdf" className="flex items-center gap-3 text-sm"><ExternalLink size={18}/>Resume (PDF)</a>
        <a href="https://github.com/johnkinn122" className="flex items-center gap-3 text-sm" target="_blank" rel="noopener noreferrer"><FaGithub size={18} />Github</a>
        <a href="https://www.linkedin.com/in/jleo8/" className="flex items-center gap-3 text-sm" target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} />LinkedIn</a>
      </nav>

      <hr className="my-6 border-zinc-200" />

      <section aria-labelledby="status-heading">
          <h3 id="status-heading" className="text-xs font-semibold tracking-widest  text-zinc-900">STATUS</h3>
          <div  className="mt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <p className="text-sm leading-none text-zinc-900">print(&quot;Still debugging my life.&quot;)</p>
          </div>
      </section>

      <hr className="my-6 border-zinc-200" />

      <div className="flex w-fit items-center gap-4 rounded-full border border-zinc-300 p-2 px-5 text-zinc-900 mx-4">
        <button type="button" aria-label="System theme" >
          <Laptop size={18} />
        </button>

        <button type="button" aria-label="System theme" className="border-l border-zinc-300 pl-4">
          <Sun size={18} />
        </button>

        <button type="button" aria-label="System theme" className="border-l border-zinc-300 pl-4">
          <Moon size={18} />
        </button>
      </div>

      <section
        aria-labelledby="learning-heading"
        className="mt-8 border-t border-zinc-200 pt-6 text-zinc-900"
      >
        <h3
          id="learning-heading"
          className="text-xs font-semibold tracking-widest"
        >
          CURRENTLY LEARNING
        </h3>

        <div className="mt-4 flex items-center gap-3">
          <ShieldCheck size={18} className="shrink-0" />

          <div>
            <p className="text-sm font-medium">
              Cybersecurity with AI
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Learning in progress
            </p>
          </div>
        </div>
        </section>

      <address className="mt-12 flex flex-col gap-3 not-italic text-zinc-900">
        <div className="flex items-center gap-3">
          <MapPin size={18} className="shrink-0" />
          <span className="text-sm font-medium">Iloilo City, Philippines</span>
        </div>
      </address>
    </aside>
  );
}
export default Sidebar;