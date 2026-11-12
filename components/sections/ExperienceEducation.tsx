"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Layers,
  Code2,
  Workflow,
  Megaphone,
  Box,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

type Category =
  | "All Experience"
  | "Software Development"
  | "AI Automation"
  | "Digital Marketing"
  | "3D Art"
  | "Teaching";

type TimelineItem = {
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  highlights: string[];
  skills: string[];
  category?: Exclude<Category, "All Experience">;
};

const filters: { label: Category; icon: LucideIcon }[] = [
  { label: "All Experience", icon: Layers },
  { label: "Software Development", icon: Code2 },
  { label: "AI Automation", icon: Workflow },
  { label: "Digital Marketing", icon: Megaphone },
  { label: "3D Art", icon: Box },
  { label: "Teaching", icon: BookOpen },
];

const education: TimelineItem[] = [
  {
    title: "Master's Degree in Mechanical Engineering",
    organization: "Western Institute of Technology",
    location: "Iloilo, Philippines",
    date: "Aug 2023 – Aug 2024",
    description:
      "Graduate studies in Mechanical Engineering.",
    highlights: [],
    skills: ["Artificial Intelligence", "Advanced Math"],
  },
  {
    title: "Bachelor's Degree in Mechanical Engineering",
    organization: "University of San Agustin",
    location: "Iloilo, Philippines",
    date: "Jun 2015 – May 2020",
    description:
      "Undergraduate studies in Mechanical Engineering.",
    highlights: [],
    skills: ["Problem Solving", "C++"],
  },
];

const experiences: TimelineItem[] = [
  {
    title: "Automation Specialist",
    organization: "Freelance · Contract",
    location: "Philippines · Remote",
    date: "Mar 2024 – Present",
    category: "AI Automation",
    description:
      "Designing, implementing, and maintaining automated processes to improve efficiency, accuracy, and consistency.",
    highlights: [
      "Analyzing manual workflows to identify automation opportunities.",
      "Developing and maintaining automated workflows.",
    ],
    skills: ["Python", "n8n", "Workflow Automation"],
  },
  {
    title: "Software Engineer",
    organization: "Freelance · Contract",
    location: "Remote",
    date: "Jun 2022 – Nov 2025",
    category: "Software Development",
    description:
      "Working on software development projects using modern web technologies.",
    highlights: [
      "Developing and maintaining software applications.",
      "Working with JavaScript and Node.js technologies.",
    ],
    skills: ["JavaScript", "Node.js", "Web Development"],
  },
  {
    title: "Digital Marketing Specialist",
    organization: "Freelance",
    location: "Remote",
    date: "Oct 2022 – Jun 2025",
    category: "Digital Marketing",
    description:
      "Working on digital marketing initiatives involving search engine optimization and email marketing.",
    highlights: [
      "Supporting search engine optimization activities.",
      "Working with email marketing campaigns.",
    ],
    skills: ["SEO", "Email Marketing", "Digital Marketing"],
  },
  {
    title: "3D Artist",
    organization: "Freelance",
    location: "Remote",
    date: "Nov 2024 – Mar 2025",
    category: "3D Art",
    description:
      "Creating 3D content and visual assets using creative tools.",
    highlights: [
      "Working on 3D-related visual projects.",
      "Using Unreal Engine and Adobe Photoshop.",
    ],
    skills: ["Unreal Engine", "Adobe Photoshop", "3D Art"],
  },
  {
    title: "Faculty Member",
    organization: "University of San Agustin · Part-time",
    location: "Iloilo, Philippines · Hybrid",
    date: "Aug 2022 – Jun 2024",
    category: "Teaching",
    description:
      "Teaching academic subjects and supporting student learning.",
    highlights: [
      "Teaching mathematics-related subjects.",
      "Supporting students in academic learning.",
    ],
    skills: ["Teaching", "Advanced Math", "Education"],
  },
];

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="ml-2 space-y-5 border-l border-zinc-300 pl-6">
      {items.map((item) => (
        <li
          key={`${item.title}-${item.date}`}
          className="relative"
        >
          
          {/* Timeline Dot */}
          <span
            aria-hidden="true"
            className="absolute -left-7 top-6 flex h-2.5 w-2.5 items-center justify-center"
          >
            {item.title === "Automation Specialist" ? (
              <>
                {/* Green blinking animation */}
                <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />

                {/* Solid green dot */}
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-zinc-100" />
              </>
            ) : (
              /* Normal black dot */
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-900 ring-4 ring-zinc-100" />
            )}
          </span>

          {/* Timeline card */}
          <article className="min-w-0 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-xl font-bold leading-snug text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-600">
                  {item.organization}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {item.location}
                </p>
              </div>

              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                {item.date}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              {item.description}
            </p>

            {item.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-700">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default function ExperienceEducation() {
  const [activeFilter, setActiveFilter] =
    useState<Category>("All Experience");

  const visibleExperiences =
    activeFilter === "All Experience"
      ? experiences
      : experiences.filter(
          (item) => item.category === activeFilter
        );

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-0 text-zinc-900 sm:px-0">

      {/* =========================
          EDUCATION SECTION
      ========================= */}
      <section
        id="education"
        aria-labelledby="education-heading"
        className="scroll-mt-8 border-t border-zinc-200 pt-4 mt-0"
      >
        <div className="mt-0  pt-0">
          <div className="mb-7 flex items-center gap-3">
            <GraduationCap
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <h3 className="text-xs font-bold tracking-widest text-zinc-900">
              ACADEMIC HISTORY
            </h3>
          </div>

          <Timeline items={education} />
        </div>
      </section>

      {/* =========================
          WORK EXPERIENCE SECTION
      ========================= */}
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="mt-12 scroll-mt-8 border-t border-zinc-200 pt-4"
      >

        
    {/* Professional Experience */}
    <div className="mt-0 pt-0">

      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">
        <BriefcaseBusiness
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />

        <h3 className="text-xs font-bold tracking-widest text-zinc-900">
          PROFESSIONAL EXPERIENCE
        </h3>
      </div>

      {/* Category Filters */}
      <div
        aria-label="Filter work experience"
        className="mb-8 flex flex-wrap items-center gap-2"
      >
        {filters.map(({ label, icon: Icon }) => {
          const isActive = activeFilter === label;

          return (
            <button
              key={label}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(label)}
              className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-2 text-[11px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 ${
                isActive
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              <Icon size={13} aria-hidden="true" />
              {label}
            </button>
          );
        })}
      </div>

      {/* Experience Timeline */}
      <Timeline items={visibleExperiences} />

    </div>

          </section>
        </div>
      );
}
