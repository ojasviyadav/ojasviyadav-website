const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const INTERESTS = [
  "Large Language Models",
  "Computer Vision",
  "MLOps & Infra",
  "Autonomous Agents",
  "Fitness & Lifting",
  "Side Projects",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-[var(--bg)]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="font-[family-name:var(--font-instrument)] text-lg text-[var(--terracotta)]"
          >
            OY
          </a>
          <div className="flex gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-2xl px-6">
        {/* Hero */}
        <section className="pb-20 pt-40">
          <h1 className="font-[family-name:var(--font-instrument)] text-5xl tracking-tight">
            Ojasvi <span className="italic text-[var(--terracotta)]">Yadav</span>
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            AI Engineer. I build intelligent systems and care deeply about
            making AI useful, reliable, and accessible.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <a
              href="#contact"
              className="rounded-full bg-[var(--terracotta)] px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[var(--terracotta-dark)]"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="text-[13px] text-[var(--text-secondary)] underline underline-offset-4 transition-colors hover:text-[var(--text)]"
            >
              View projects
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <div className="h-px bg-[var(--border)]" />
          <div className="pt-16">
            <h2 className="font-[family-name:var(--font-instrument)] text-2xl italic">
              About
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              <p>
                I&apos;m an AI Engineer who loves building things at the
                intersection of research and product. My days are spent
                wrangling models, designing pipelines, and shipping software
                that puts AI in people&apos;s hands.
              </p>
              <p>
                Outside of work, you&apos;ll find me at the gym, reading about
                neuroscience, or hacking on side projects that probably
                don&apos;t need to exist but are fun anyway.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-[12px] text-[var(--text-secondary)]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <div className="h-px bg-[var(--border)]" />
          <div className="pt-16">
            <h2 className="font-[family-name:var(--font-instrument)] text-2xl italic">
              Projects
            </h2>
            <div className="mt-8 rounded-xl border border-[var(--border)] p-6">
              <p className="text-[15px] font-medium">Coming soon</p>
              <p className="mt-1 text-[14px] text-[var(--text-secondary)]">
                Projects are being added. Check back shortly.
              </p>
            </div>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="py-16">
          <div className="h-px bg-[var(--border)]" />
          <div className="pt-16">
            <h2 className="font-[family-name:var(--font-instrument)] text-2xl italic">
              Writing
            </h2>
            <p className="mt-6 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              Blog posts coming soon. I&apos;ll be writing about AI
              engineering, lessons from building products, and whatever else is
              on my mind.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="h-px bg-[var(--border)]" />
          <div className="pt-16">
            <h2 className="font-[family-name:var(--font-instrument)] text-2xl italic">
              Let&apos;s connect
            </h2>
            <p className="mt-4 text-[15px] text-[var(--text-secondary)]">
              Want to collaborate, chat about AI, or just say hi?
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { label: "GitHub", href: "https://github.com/ojasviyadav" },
                { label: "LinkedIn", href: "https://linkedin.com/in/ojasviyadav" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[var(--text-secondary)] underline underline-offset-4 transition-colors hover:text-[var(--terracotta)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6">
          <p className="text-[12px] text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} Ojasvi Yadav
          </p>
          <a
            href="/"
            className="font-[family-name:var(--font-instrument)] text-sm italic text-[var(--terracotta)]"
          >
            OY
          </a>
        </div>
      </footer>
    </div>
  );
}
