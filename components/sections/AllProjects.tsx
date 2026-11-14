"use client";

import { useState } from "react";
import { 
    ArrowUpRight, 
    GitBranch,
    Play,
    Layers,
    Code2,
    Server,
    Workflow,
    Database,
    Shield,
    Brain, } 
from "lucide-react";

import Image from "next/image";

const categories = [
  "Full-Stack",
  "Backend",
  "AI Automation",
  "Data Engineering",
  "Cybersecurity",
  "AI/ML",
] as const;

type Category = (typeof categories)[number];
const categoryIcons: Record<Category, typeof Layers> = {
  "Full-Stack": Code2,
  Backend: Server,
  "AI Automation": Workflow,
  "Data Engineering": Database,
  Cybersecurity: Shield,
  "AI/ML": Brain,
};

type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  category: Category;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
};

// SAMPLE DATA ONLY.
// Replace these entries with projects you actually built.
const projects: Project[] = [
  {
    id: "task-manager",
    title: "Task Manager",
    type: "FULL-STACK APP",
    description:
      "A task management app with CRUD, filtering, and local storage to organize daily tasks.",
    tags: ["React", "TypeScript", "Node.js", "Local Storage"],
    category: "Full-Stack",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    type: "FULL-STACK APP",
    description:
      "Track income and expenses with charts and summaries to build better spending habits.",
    tags: ["React", "Node.js", "Express", "SQL"],
    category: "Full-Stack"
  },
  {
    id: "user-management",
    title: "User Management API",
    type: "BACKEND PROJECT",
    description:
      "A REST API with authentication, role-based access, and CRUD operations for managing users.",
    tags: ["Node.js", "Express", "SQL"],
    category: "Backend"
  },
];

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
        <Image
          src={project.image}
          alt={`${project.title} application screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  const isTasks = project.id === "task-manager";
  const isExpenses = project.id === "expense-tracker";
  const isUsers = project.id === "user-management";

  const menu = isTasks
    ? ["Tasks", "Today", "Upcoming", "Completed"]
    : isExpenses
      ? ["Dashboard", "Transactions", "Categories", "Reports"]
      : isUsers
        ? ["Users", "Roles", "API Docs"]
        : ["Overview", "Details", "Settings"];

  return (
    <div
      aria-hidden="true"
      className="aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-200 p-3 sm:p-5"
    >
      <div className="grid h-full grid-cols-[35%_1fr] gap-3 text-[10px] text-zinc-900">
        <div className="min-w-0 space-y-4">
          <p className="truncate text-xs font-bold sm:text-sm">
            {isTasks
              ? "TaskFlow"
              : isExpenses
                ? "ExpenseTracker"
                : isUsers
                  ? "User Management"
                  : project.title}
          </p>

          <div className="space-y-2">
            {menu.map((item, index) => (
              <div
                key={item}
                className={`truncate rounded-md px-2 py-1.5 ${
                  index === 0
                    ? "bg-white font-semibold shadow-sm"
                    : "text-zinc-600"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 rounded-lg bg-white p-3 shadow-sm">
          {isExpenses ? (
            <>
              <p className="mb-3 font-bold">Overview</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded bg-zinc-100 p-2">
                  <p className="text-[8px]">Income</p>
                  <p className="font-bold">₱45,000</p>
                </div>
                <div className="rounded bg-zinc-100 p-2">
                  <p className="text-[8px]">Expenses</p>
                  <p className="font-bold">₱18,750</p>
                </div>
              </div>
              <div className="mt-3 flex h-20 items-end gap-1.5">
                {[25, 32, 45, 40, 58, 70, 85, 95].map(
                  (height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}%` }}
                      className="w-full rounded-t-sm bg-zinc-400"
                    />
                  )
                )}
              </div>
            </>
          ) : isUsers ? (
            <>
              <p className="mb-3 font-bold">Users</p>
              <div className="space-y-2">
                {["Ana Reyes", "Mark Cruz", "Jules Santos"].map(
                  (name, index) => (
                    <div
                      key={name}
                      className="flex items-center justify-between gap-2 border-b border-zinc-100 pb-2"
                    >
                      <span className="truncate">{name}</span>
                      <span className="rounded-full bg-zinc-100 px-2 py-1">
                        {index === 0 ? "Admin" : "User"}
                      </span>
                    </div>
                  )
                )}
              </div>
            </>
          ) : isTasks ? (
            <>
              <p className="mb-4 font-bold">My Tasks</p>
              <div className="space-y-3">
                {[
                  "Finish project proposal",
                  "Build task manager UI",
                  "Deploy to GitHub",
                ].map((task, index) => (
                  <div
                    key={task}
                    className="flex items-center gap-2"
                  >
                    <span className="flex size-3 shrink-0 items-center justify-center rounded-sm border border-zinc-400">
                      {index === 1 ? "✓" : ""}
                    </span>
                    <span className="truncate">{task}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-center text-zinc-500">
              Project preview coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AllProjects() {
     const [activeCategory, setActiveCategory] =
      useState<Category | null>("Full-Stack");

      const filteredProjects = projects.filter(
        (project) => project.category === activeCategory
      );

  return (
    <section
      id="projects"
      aria-labelledby="all-projects-heading"
      className="w-full py-12 text-zinc-900 sm:py-4"
    >
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 lg:pl-24 lg:pr-16">
        {/* Divider Line */}
      <div className="mb-4 border-t border-zinc-300" />
        <header className="mb-8">
          <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-900">
            <Code2 size={18} aria-hidden="true" />
            PROJECTS
          </p>
        </header>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="mb-4 flex flex-wrap gap-2"
          >
            {categories.map((category) => {
              const Icon = categoryIcons[category];

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 ${
                    activeCategory === category
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  <Icon size={14} aria-hidden="true" />
                  {category}
                </button>
              );
            })}
          </div>

        <div >
          {filteredProjects.length === 0 ? (
            <p className="mt-2 text-sm text-zinc-500">
              {activeCategory === null
              ? "Select a category to explore my projects."
               : "No projects available in this category yet."}
            </p>
            ) : (
            filteredProjects.map((project) => (
              <article
                key={project.id}
                className="grid gap-6 border-b border-zinc-200 py-4 md:grid-cols-2 md:items-center lg:gap-10"
              >
                <ProjectPreview project={project} />

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                    {project.type}
                  </p>

                  <h2 className="mt-1 font-serif text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-200/70 px-3 py-1 text-xs text-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-700"
                      >
                        <Play size={14} />
                        Live Demo
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-xs text-white opacity-50">
                        <Play size={14} />
                        Demo soon
                      </span>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs font-medium hover:bg-zinc-100"
                      >
                        <GitBranch size={14} />
                        GitHub
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs text-zinc-500">
                        <GitBranch size={14} />
                        GitHub soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
