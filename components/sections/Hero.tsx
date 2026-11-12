import { Code2, ArrowUpRight, FileDown } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="px-6 py-10 text-zinc-900 md:px-10 pb-0">

      {/* CENTERED HERO CONTAINER */}
      <div className="mx-auto w-full max-w-3xl">

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_200px]">

          {/* LEFT: HERO CONTENT */}
          <div className="min-w-0">

            <p className="text-xs font-semibold tracking-[0.2em]">
              HELLO, I&apos;M
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight">
              Jason Leonardo
            </h1>

            <p className="mt-1 font-serif text-lg italic">
              Software Engineer
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600">
              I am a software engineer with a passion for
              creating innovative and efficient solutions.
              I specialize in web development, and I am
              always eager to learn new technologies and
              improve my skills.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex flex-wrap items-center gap-3">

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-2 text-xs font-medium text-white transition-transform duration-200 hover:bg-zinc-800 motion-safe:hover:scale-[1.02]"
              >
                <Code2 size={14} />
                View Projects
                <ArrowUpRight size={14} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 transition-transform duration-200 hover:bg-zinc-50 motion-safe:hover:scale-[1.02]"
              >
                <FileDown size={14} />
                Download Resume
              </a>

            </div>
          </div>

          {/* RIGHT: PROFILE PICTURE PLACEHOLDER */}
          <div
            aria-hidden="true"
            className="aspect-4/5 w-full max-w-200px justify-self-center rounded-lg bg-zinc-200 lg:justify-self-end"
          />

        </div>

        {/* BOTTOM DIVIDER */}
        <div className="mt-8 border-t border-zinc-200" />

      </div>
    </section>
  );
}

export default Hero;
