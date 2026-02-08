const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const INTERESTS = [
  "Large Language Models",
  "Computer Vision",
  "MLOps",
  "Robotics",
  "Fitness & Lifting",
  "Building Side Projects",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a href="/" className="font-mono text-sm font-semibold tracking-tight">
            OY
          </a>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="flex min-h-screen flex-col justify-center pt-16">
          <div className="space-y-6">
            <div className="inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-mono text-xs text-indigo-400">
              AI Engineer
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Ojasvi Yadav
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
              I build intelligent systems and care deeply about making AI
              useful, reliable, and accessible. Currently exploring the edges of
              what&apos;s possible with language models, vision, and autonomous
              agents.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#contact"
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
              >
                View projects
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24">
          <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-400">
            About
          </h2>
          <h3 className="mb-8 text-3xl font-bold tracking-tight">
            A bit about me
          </h3>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I&apos;m an AI Engineer who loves building things that sit at the
              intersection of research and product. My days are spent wrangling
              models, designing pipelines, and shipping software that puts AI in
              people&apos;s hands.
            </p>
            <p>
              Outside of work, you&apos;ll find me at the gym, reading about
              neuroscience, or hacking on side projects that probably
              don&apos;t need to exist but are fun anyway.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="mb-4 text-sm font-semibold text-zinc-300">
              Things I&apos;m into
            </h4>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-400">
            Projects
          </h2>
          <h3 className="mb-8 text-3xl font-bold tracking-tight">
            What I&apos;ve been building
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Coming soon",
                description:
                  "Projects are being added. Check back shortly.",
                tags: ["AI", "Engineering"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
              >
                <h4 className="mb-2 text-lg font-semibold">{project.title}</h4>
                <p className="mb-4 text-sm text-zinc-400">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="py-24">
          <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-400">
            Writing
          </h2>
          <h3 className="mb-8 text-3xl font-bold tracking-tight">
            Thoughts & ideas
          </h3>
          <p className="text-zinc-400">
            Blog posts coming soon. I&apos;ll be writing about AI engineering,
            lessons from building products, and whatever else is on my mind.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-400">
            Contact
          </h2>
          <h3 className="mb-8 text-3xl font-bold tracking-tight">
            Let&apos;s connect
          </h3>
          <p className="mb-8 text-zinc-400">
            Want to collaborate, chat about AI, or just say hi? Reach out.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ojasviyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ojasviyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-zinc-600">
          Ojasvi Yadav &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
