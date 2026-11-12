import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

// Add your completed projects here in the future.
const projects: Project[] = [
  // Example:
  // {
  //   title: "My First Project",
  //   description: "A short description of my project.",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   image: "/projects/my-first-project.png",
  //   githubUrl: "https://github.com/your-username/project",
  //   liveUrl: "https://your-project.vercel.app",
  // },
];

const MAX_PROJECTS = 4;

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, MAX_PROJECTS);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-3xl px-6 py-4 text-zinc-900 md:px-0"
    >
      {/* Section Header */}
      <div className="mb-10 flex items-center justify-between gap-4">
        <h2
          id="projects-heading"
          className="text-xs font-bold tracking-widest text-zinc-900"
        >
          FEATURED PROJECTS
        </h2>

        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 transition-colors hover:text-zinc-500"
        >
          View All Projects
          <ArrowUpRight size={15} />
        </Link>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-zinc-200">
        {Array.from({ length: MAX_PROJECTS }, (_, index) => {
          const project = featuredProjects[index];

          return (
            <article
              key={project?.title ?? index}
              className="grid gap-6 py-8 first:pt-0 md:grid-cols-2 md:items-center md:gap-10"
            >
              {/* Project Preview */}
              <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
                {project ? (
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col p-4">
                    <div className="flex items-center gap-1.5 border-b border-zinc-200 pb-3">
                      <span className="h-2 w-2 rounded-full bg-zinc-300" />
                      <span className="h-2 w-2 rounded-full bg-zinc-300" />
                      <span className="h-2 w-2 rounded-full bg-zinc-300" />
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center gap-3">
                      <span className="text-xs font-medium tracking-widest text-zinc-400">
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-zinc-500">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    {project?.title ?? `Future Project ${index + 1}`}
                  </h3>

                  {project?.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="transition-colors hover:text-zinc-500"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                <p className="text-sm leading-7 text-zinc-600">
                  {project?.description ??
                    "A new project will be featured here soon. Stay tuned for updates."}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project ? (
                    project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Project Links */}
                {project?.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    View Source Code
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
