"use client";

import { motion } from "motion/react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description: "Placeholder description — replace with a real project once ready.",
    tags: ["Python", "ML"],
  },
  {
    title: "Project Two",
    description: "Placeholder description — replace with a real project once ready.",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Project Three",
    description: "Placeholder description — replace with a real project once ready.",
    tags: ["Node.js", "PostgreSQL"],
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto min-h-screen max-w-6xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-3 text-sm uppercase tracking-[0.3em] text-fg-muted"
      >
        Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="font-display text-3xl font-semibold sm:text-4xl"
      >
        Selected projects
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href ?? "#"}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-accent"
          >
            <div>
              <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-fg-muted">{project.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-fg-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}