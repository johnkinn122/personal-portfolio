
"use client";

import { useState } from "react";
import {
  House,
  Code2,
  BriefcaseBusiness,
  Certificate,
  Mail,
  Layers,
  ExternalLink,
  Laptop,
  Sun,
  Moon,
  MapPin,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const navigationLinks = [
  { id: "home", label: "Home", icon: House },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "certifications", label: "Certifications", icon: Certificate },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarLinkClass = (section: string) =>
  `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
    activeSection === section
      ? "bg-zinc-200 font-semibold text-zinc-950"
      : "text-zinc-900 hover:bg-zinc-200 hover:text-zinc-950"
  }`;


  function handleNavigation(section: string) {
    setActiveSection(section);
    setIsMenuOpen(false);
  }

  return (
    <aside className="sticky top-0 z-50 w-full shrink-0 border-b border-zinc-300 bg-zinc-100 lg:h-screen lg:w-64 lg:overflow-y-auto lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden lg:border-r lg:border-b-0">

      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4 lg:block lg:px-6 lg:pt-6 lg:pb-0">
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            <h2 className="text-xl font-bold text-zinc-900 transition-colors hover:text-zinc-600 lg:text-2xl">
              Jason Leonardo
            </h2>
          </a>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="sidebar-content"
          className="rounded-lg border border-zinc-300 p-2 text-zinc-900 transition-colors hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 lg:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* SIDEBAR CONTENT */}
      <div
        id="sidebar-content"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } max-h-[calc(100dvh-70px)] overflow-y-auto border-t border-zinc-200 px-5 pb-6 lg:block lg:max-h-none lg:overflow-visible lg:border-t-0 lg:px-6 lg:pb-6`}
      >

        {/* MAIN NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="mt-6 flex flex-col gap-2 text-sm text-zinc-900 lg:mt-8"
        >
          {navigationLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavigation(item.id)}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  activeSection === item.id
                    ? "bg-zinc-200 font-semibold"
                    : "hover:bg-zinc-200"
                }`}
              >
                <Icon size={18} className="shrink-0" />
                {item.label}
              </a>
            );
          })}
        </nav>

        <hr className="my-6 border-zinc-200" />

        {/* TECH STACK */}
        <section aria-labelledby="stack-heading">
          <h3
            id="stack-heading"
            className="text-xs font-semibold tracking-widest text-zinc-900"
          >
            STACK
          </h3>

              <a
                href="#tech-stack"
                onClick={(e) => {
                  e.preventDefault();

                  setActiveSection("tech-stack");
                  setIsMenuOpen(false);

                  requestAnimationFrame(() => {
                    document.getElementById("tech-stack")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  });
                }}
                className={`${sidebarLinkClass("tech-stack")} mt-3`}
              >
                <Layers size={18} />
                Tech Stack
              </a>


        </section>

        <hr className="my-6 border-zinc-200" />

        {/* RESOURCES */}
        <nav
          aria-label="Resources navigation"
          className="flex flex-col gap-3 text-zinc-900"
        >
          <h3 className="text-xs font-semibold tracking-widest">
            RESOURCES
          </h3>

            {/* Resume PDF */}
            <a
              href="/resume_leonardo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveSection("resume")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                activeSection === "resume"
                  ? "bg-zinc-200 font-semibold text-zinc-950"
                  : "text-zinc-900 hover:bg-zinc-200 hover:text-zinc-950"
              }`}
            >
              <ExternalLink size={18} className="shrink-0" />
              Resume (PDF)
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/johnkinn122"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveSection("github")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                activeSection === "github"
                  ? "bg-zinc-200 font-semibold text-zinc-950"
                  : "text-zinc-900 hover:bg-zinc-200 hover:text-zinc-950"
              }`}
            >
              <FaGithub size={18} className="shrink-0" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jleo8/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveSection("linkedin")}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                activeSection === "linkedin"
                  ? "bg-zinc-200 font-semibold text-zinc-950"
                  : "text-zinc-900 hover:bg-zinc-200 hover:text-zinc-950"
              }`}
            >
              <FaLinkedin size={18} className="shrink-0" />
              LinkedIn
            </a>

        </nav>

        <hr className="my-6 border-zinc-200" />

        {/* STATUS */}
        <section aria-labelledby="status-heading">
          <h3
            id="status-heading"
            className="text-xs font-semibold tracking-widest text-zinc-900"
          >
            STATUS
          </h3>

          <div className="mt-3 flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
            <p className="min-w-0 break-words text-sm leading-snug text-zinc-900">
              print(&quot;Still debugging my life.&quot;)
            </p>
          </div>
        </section>

        <hr className="my-6 border-zinc-200" />

        {/* THEME CONTROLS - FUNCTIONALITY COMING LATER */}
        <div className="mx-auto flex w-fit items-center gap-4 rounded-full border border-zinc-300 px-5 py-2 text-zinc-900">
          <button
            type="button"
            disabled
            aria-label="System theme (coming soon)"
            className="cursor-not-allowed"
          >
            <Laptop size={18} />
          </button>

          <button
            type="button"
            disabled
            aria-label="Light theme (coming soon)"
            className="cursor-not-allowed border-l border-zinc-300 pl-4"
          >
            <Sun size={18} />
          </button>

          <button
            type="button"
            disabled
            aria-label="Dark theme (coming soon)"
            className="cursor-not-allowed border-l border-zinc-300 pl-4"
          >
            <Moon size={18} />
          </button>
        </div>

        {/* CURRENTLY LEARNING */}
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

        {/* LOCATION */}
        <address className="mt-12 flex flex-col gap-3 not-italic text-zinc-900">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="shrink-0" />
            <span className="text-sm font-medium">
              Iloilo City, Philippines
            </span>
          </div>
        </address>
      </div>
    </aside>
  );
}
