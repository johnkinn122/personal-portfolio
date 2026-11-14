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
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "next-themes";

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
        ? "bg-zinc-200 font-semibold text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50"
        : "text-zinc-900 hover:bg-zinc-200 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
    }`;

  const { setTheme } = useTheme();


  function handleNavigation(section: string) {
    setActiveSection(section);
    setIsMenuOpen(false);
  }

  return (
    <aside className="sticky top-0 z-50 w-full shrink-0 border-b border-zinc-300 bg-zinc-100 lg:flex lg:h-screen lg:w-64 lg:flex-col lg:overflow-hidden lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">

      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4 lg:block lg:px-6 lg:pt-6 lg:pb-0">
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            <h2 className="text-xl font-bold text-zinc-900 transition-colors hover:text-zinc-600 lg:text-2xl dark:text-zinc-100 dark:hover:text-zinc-300">
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
                    ? "bg-zinc-200 font-semibold text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50"
                    : "text-zinc-900 hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                }`}

              >
                <Icon size={18} className="shrink-0" />
                {item.label}
              </a>
            );
          })}
        </nav>

        <hr className="my-6 border-zinc-200 lg:my-3 dark:border-zinc-600" />

        {/* TECH STACK */}
        <section aria-labelledby="stack-heading">
          <h3
            id="stack-heading"
            className="text-xs font-semibold tracking-widest text-zinc-900 dark:text-zinc-100"
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

        <hr className="my-6 border-zinc-200 lg:my-3 dark:border-zinc-600" />

        {/* RESOURCES */}
        
            <nav
              aria-label="Resources navigation"
              className="flex flex-col gap-3 text-zinc-900 dark:text-zinc-100"
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
                className={sidebarLinkClass("resume")}
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
                className={sidebarLinkClass("github")}
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
                className={sidebarLinkClass("linkedin")}
              >
                <FaLinkedin size={18} className="shrink-0" />
                LinkedIn
              </a>
            </nav>

        <hr className="my-6 border-zinc-200 lg:my-3 dark:border-zinc-600" />
        
          {/* STATUS */}
          <section aria-labelledby="status-heading">
            <h3
              id="status-heading"
              className="text-xs font-semibold tracking-widest text-zinc-900 dark:text-zinc-100"
            >
              STATUS
            </h3>

            <div className="mt-3 flex items-start gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <p className="min-w-0 break-words text-sm leading-snug text-zinc-900 dark:text-zinc-300">
                print(&quot;Still debugging my life.&quot;)
              </p>
            </div>
          </section>

        <hr className="my-12 border-zinc-200 lg:my-3 dark:border-zinc-600 " />

        
          {/* THEME CONTROLS */}
          <div className="mx-auto my-3 flex w-fit items-center gap-4 rounded-full border border-zinc-300 px-5 py-2 text-zinc-900 dark:border-zinc-700 dark:text-zinc-100 mt-8">
            <button
              type="button"
              onClick={() => setTheme("system")}
              aria-label="Use system theme"
              className="cursor-pointer transition-colors hover:text-zinc-500"
            >
              <Laptop size={18} />
            </button>

            <button
              type="button"
              onClick={() => setTheme("light")}
              aria-label="Use light theme"
              className="cursor-pointer border-l border-zinc-300 pl-4 transition-colors hover:text-zinc-500"
            >
              <Sun size={18} />
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              aria-label="Use dark theme"
              className="cursor-pointer border-l border-zinc-300 pl-4 transition-colors hover:text-zinc-500"
            >
              <Moon size={18} />
            </button>
          </div>

        {/* CURRENTLY LEARNING */}
        
        <section
          aria-labelledby="learning-heading"
          className="mt-8 border-t border-zinc-200 pt-6 text-zinc-900 dark:border-zinc-600 dark:text-zinc-100"
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

              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Learning in progress
              </p>
            </div>
          </div>
        </section>

      </div>
    </aside>
  );
}
