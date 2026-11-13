import { Camera, Database } from "lucide-react";
import Image from "next/image";

const devicon = "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons";
const simpleIcons = "https://cdn.simpleicons.org";

const technologies = [
  { name: "TypeScript", icon: `${devicon}/typescript/typescript-original.svg` },
  { name: "Node.js", icon: `${devicon}/nodejs/nodejs-original.svg` },
  { name: "Express", icon: `${devicon}/express/express-original.svg` },
  { name: "PostgreSQL", icon: `${devicon}/postgresql/postgresql-original.svg` },
  { name: "Docker", icon: `${devicon}/docker/docker-original.svg` },
  {
    name: "AWS",
    icon: `${devicon}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  { name: "Git", icon: `${devicon}/git/git-original.svg` },
  { name: "Python", icon: `${devicon}/python/python-original.svg` },
  {
    name: "HighLevel",
    icon: "https://assets.cdn.filesafe.space/zELBHkVp0JPbbLvKIlF5/media/690a5f4a57ea175183408da2.png",
  },
  {
    name: "n8n",
    icon: "https://guidelines.n8n.design/downloads/logo/symbol/n8n-symbol-accent.svg",
  },
  { name: "SQL", icon: null },
  // AI Coding Tools
{
  name: "Claude Code",
  icon: `${simpleIcons}/claudecode`,
},
{
  name: "Codex",
  icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/codex/default.svg",
},

// Web Development
{
  name: "Next.js",
  icon: `${devicon}/nextjs/nextjs-original.svg`,
},
{
  name: "NestJS",
  icon: `${devicon}/nestjs/nestjs-original.svg`,
},
{
  name: "FastAPI",
  icon: `${devicon}/fastapi/fastapi-original.svg`,
},

// Data Science
{
  name: "Matplotlib",
  icon: `${devicon}/matplotlib/matplotlib-original.svg`,
},
{
  name: "Pandas",
  icon: `${devicon}/pandas/pandas-original.svg`,
},
{
  name: "NumPy",
  icon: `${devicon}/numpy/numpy-original.svg`,
},

// Machine Learning
{
  name: "PyTorch",
  icon: `${devicon}/pytorch/pytorch-original.svg`,
},
{
  name: "Scikit-learn",
  icon: `${devicon}/scikitlearn/scikitlearn-original.svg`,
},
{
  name: "TensorFlow",
  icon: `${devicon}/tensorflow/tensorflow-original.svg`,
},

// Development & Computer Vision
{
  name: "GitHub",
  icon: `${devicon}/github/github-original.svg`,
},
{
  name: "OpenCV",
  icon: `${devicon}/opencv/opencv-original.svg`,
},
{
  name: "Hugging Face",
  icon: `${simpleIcons}/huggingface`,
},
{
  name: "SimpleCV",
  icon: null,
},

// AI Frameworks
{
  name: "LangChain",
  icon: `${simpleIcons}/langchain`,
},
{
  name: "LangGraph",
  icon: `${simpleIcons}/langgraph`,
},

// Data Analytics & Engineering
{
  name: "Tableau",
  icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tableau/default.svg",
},
{
  name: "Apache Spark",
  icon: `${devicon}/apachespark/apachespark-original.svg`,
},
{
  name: "Snowflake",
  icon: `${simpleIcons}/snowflake`,
},
{
  name: "Apache Airflow",
  icon: `${devicon}/apacheairflow/apacheairflow-original.svg`,
}
];

function TechStack() {
  return (
    <section id="tech-stack" className="w-full scroll-mt-6 px-6 pt-4 pb-0">
      <div className="mx-auto w-full max-w-3xl">
        {/* Heading */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xs font-bold tracking-widest text-zinc-900">
            TOOLS & TECHNOLOGIES
          </h2>

          <p className="text-sm italic text-zinc-500">
            Tools I use to build, ship, and collaborate.
          </p>
        </div>

        {/* Single-row animated logos */}
        <div className="tech-marquee mt-5 overflow-hidden">
          <div className="tech-track flex w-max flex-nowrap">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 flex-nowrap items-center gap-5 pr-5"
              >
                {technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className={`flex shrink-0 flex-col items-center gap-2 text-center ${
                      technology.name === "HighLevel"
                        ? "w-28"
                        : "w-20"
                    }`}
                  >
                    <div className="flex h-10 items-center justify-center">
                      {technology.icon ? (
                        
                      <Image
                        src={technology.icon}
                        alt=""
                        width={technology.name === "HighLevel" ? 96 : 32}
                        height={32}
                        className={
                          technology.name === "HighLevel"
                            ? "h-8 w-24 object-contain"
                            : "h-8 w-8 object-contain"
                        }
                        loading="lazy"
                        draggable={false}
                        unoptimized
                      />
                      ) : technology.name === "SimpleCV" ? (
                        <Camera
                          size={30}
                          className="text-zinc-900"
                          aria-hidden="true"
                        />
                      ) : (
                        <Database
                          size={30}
                          className="text-zinc-900"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <span className="whitespace-nowrap text-xs text-zinc-700">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-6 border-b border-zinc-200" />
      </div>
    </section>
  );
}

export default TechStack;
