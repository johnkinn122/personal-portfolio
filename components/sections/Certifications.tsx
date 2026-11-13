"use client";
import { useState } from "react";
import { Certificate } from "lucide-react";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  LayoutGrid,
  Shield,
  type LucideIcon,
} from "lucide-react";

type Category =
  | "Development"
  | "Data Engineering"
  | "Cybersecurity"
  | "AI Automation"
  | "Cloud & DevOps";

type Filter = "All Certifications" | Category;

type Certification = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  credentialUrl?: string;
  category: Category;
  icon: LucideIcon;
  imageUrl?: string;
};

const filters: { label: Filter; icon: LucideIcon }[] = [
  { label: "All Certifications", icon: LayoutGrid },
  { label: "Development", icon: Code2 },
  { label: "Data Engineering", icon: Database },
  { label: "Cybersecurity", icon: Shield },
  { label: "Cloud & DevOps", icon: Cloud },
];

// DEMO DATA ONLY.
// Replace these with certifications you have actually earned.
// Add your real credential ID and verification URL.

const certifications: Certification[] = [
  {
    id: "development-backend",
    title: "Udemy Backend Development Bootcamp",
    issuer: "Udemy",
    issued: "Sept 2025",
    credentialId: "",
    credentialUrl: "/certifications/development.jpg",
    imageUrl: "/certifications/development.jpg",
    category: "Development",
    icon: Code2,
  },
  {
    id: "ai-fluency",
    title: "AI Fluency: Frameworks & Foundations",
    issuer: "Anthropic",
    issued: "2026",
    credentialId: "",
    credentialUrl: "/certifications/ai-1.pdf",
    category: "Development",
    icon: Code2,
  },
  {
    id: "ai-claude-code",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "2026",
    credentialId: "",
    credentialUrl: "/certifications/ai-2.pdf",
    category: "Development",
    icon: Code2,
  },
  {
    id: "ai-cowork",
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    issued: "2026",
    credentialId: "",
    credentialUrl: "/certifications/ai-3.pdf",
    category: "Development",
    icon: Code2,
  },
  {
    id: "ai-claude-2",
    title: "Claude Code 101",
    issuer: "Anthropic",
    issued: "2026",
    credentialId: "",
    credentialUrl: "/certifications/ai-4.pdf",
    category: "Development",
    icon: Code2,
  },
  {
    id: "ai-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    issued: "2026",
    credentialId: "",
    credentialUrl: "/certifications/ai-5.pdf",
    category: "Development",
    icon: Code2,
  },
  {
    id: "data-engineer",
    title: "Understanding Data Engineering",
    issuer: "DataCamp",
    issued: "2026",
    credentialId: "",
    credentialUrl: "/certifications/data-engineer.pdf",
    category: "Data Engineering",
    icon: Database,
  },
  {
    id: "python-101",
    title: "Intermediate Python",
    issuer: "DataCamp",
    issued: "2026",
    credentialId: "",
    credentialUrl: "/certifications/intermediate-python.pdf",
    category: "Data Engineering",
    icon: Database,
  },
  {
    id: "python-intro",
    title: "Python Introduction",
    issuer: "DataCamp",
    issued: "2026",
    credentialId: "",
    credentialUrl: "/certifications/intro-python.pdf",
    category: "Data Engineering",
    icon: Database,
  },
];

export default function Certifications() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("All Certifications");

  const filteredCertifications =
    activeFilter === "All Certifications"
      ? certifications
      : certifications.filter(
          (certification) =>
            certification.category === activeFilter
        );

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="min-h-screen w-full scroll-mt-0 px-4 pb-12 sm:px-6 lg:px-10"
    >
      <div className="mx-auto w-full max-w-3xl lg:pl-8">

        {/* SECTION HEADING */}
        <div className="mb-8 flex items-center gap-2">
          <Certificate
            size={17}
            strokeWidth={1.8}
            className="text-zinc-900"
            aria-hidden="true"
          />

          <h2
            id="certifications-heading"
            className="text-xs font-bold tracking-widest text-zinc-900"
          >
            CERTIFICATIONS
          </h2>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center gap-2">
            {filters.map(({ label, icon: Icon }) => {
              const isActive = activeFilter === label;

              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(label)}
                  className={`inline-flex items-center gap-2
                    rounded-lg border px-3 py-2
                    text-xs font-medium transition-colors
                    ${
                      isActive
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100"
                    }`}
                >
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </button>
              );
            })}
          </div>

        {/* SUMMARY */}
        <div className="mt-5 border-y border-zinc-200 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex shrink-0 items-center gap-5">
              <h2
                id="certifications-heading"
                className="text-xs font-bold tracking-[0.15em] text-zinc-900"
              >
                TOTAL CERTIFICATIONS
              </h2>

              <span className="text-4xl font-bold text-zinc-900">
                {certifications.length}
              </span>
            </div>

            <div className="hidden h-12 w-px bg-zinc-300 sm:block" />

            <p className="max-w-lg text-sm leading-relaxed italic text-zinc-600">
              Industry-recognized certifications and specialized
              courses that strengthen my technical foundation
              and practical skills.
            </p>
          </div>
        </div>

        {/* FILTER RESULT COUNT */}
        <div
          className="mt-5 text-xs text-zinc-500"
          aria-live="polite"
        >
          Showing {filteredCertifications.length}{" "}
          {filteredCertifications.length === 1
            ? "certification"
            : "certifications"}
          {activeFilter !== "All Certifications" &&
            ` in ${activeFilter}`}
        </div>

        {/* CERTIFICATION CARDS */}
        {filteredCertifications.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredCertifications.map(
              ({
                id,
                title,
                issuer,
                issued,
                credentialId,
                credentialUrl,
                imageUrl,
                icon: IssuerIcon,
              }) => (
                <article
                  key={id}
                  className="flex h-full flex-col rounded-xl border
                    border-zinc-200 bg-white p-5
                    transition-shadow hover:shadow-md"
                >
                  
                    {/* CARD HEADER */}
                    <div className="flex items-start gap-4">

                      {/* CERTIFICATE IMAGE */}
                      <div
                        className="flex h-20 w-24 shrink-0 items-center
                          justify-center overflow-hidden rounded-xl
                          border border-zinc-200 bg-zinc-50"
                      >
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={`${title} certificate preview`}
                            width={160}
                            height={120}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <Award
                            size={38}
                            strokeWidth={1.2}
                            className="text-zinc-800"
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      {/* CERTIFICATION INFORMATION */}
                      <div className="min-w-0 flex-1">

                        {/* ISSUER */}
                        <div className="flex items-center gap-2">
                          <IssuerIcon
                            size={20}
                            className="shrink-0 text-zinc-700"
                            aria-hidden="true"
                          />
                          <span className="text-xs font-semibold text-zinc-700">
                            {issuer}
                          </span>
                        </div>

                        {/* CERTIFICATE TITLE */}
                        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                          {title}
                        </h3>

                      </div>
                    </div>

                  {/* CARD DETAILS */}
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-zinc-600">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={15}
                          aria-hidden="true"
                        />
                        <span>Issued: {issued}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <BadgeCheck
                          size={15}
                          aria-hidden="true"
                        />
                        <span>
                          Credential ID: {credentialId}
                        </span>
                      </div>
                    </div>

                    {/* CREDENTIAL BUTTON */}
                    <div className="mt-5">
                      {credentialUrl ? (
                        <a
                          href={credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2
                            rounded-lg bg-zinc-900 px-4 py-2.5
                            text-xs font-medium text-white
                            transition-colors hover:bg-zinc-700"
                        >
                          <ExternalLink
                            size={15}
                            aria-hidden="true"
                          />
                          View Credential
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          title="Add your credential verification URL"
                          className="inline-flex cursor-not-allowed
                            items-center gap-2 rounded-lg
                            bg-zinc-900 px-4 py-2.5
                            text-xs font-medium text-white opacity-60"
                        >
                          <ExternalLink
                            size={15}
                            aria-hidden="true"
                          />
                          View Credential
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
            <Award
              size={32}
              className="mx-auto text-zinc-400"
              aria-hidden="true"
            />
            <h3 className="mt-4 text-base font-semibold text-zinc-900">
              No certifications yet
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              No certifications found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
