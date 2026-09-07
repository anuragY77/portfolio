"use client";

import { motion } from "motion/react";

const skills = [
  "Python",
  "Machine Learning",
  "Data Analysis",
  "React / Next.js",
  "Node.js",
  "SQL",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-3 text-sm uppercase tracking-[0.3em] text-fg-muted"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="font-display text-3xl font-semibold leading-snug sm:text-4xl"
      >
        CSE (Data Science) student building at the intersection of ML and
        full-stack engineering.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-6 max-w-2xl text-base text-fg-muted sm:text-lg"
      >
        I work on data-driven products — from predictive models to
        production-ready web applications — with a focus on shipping things
        that are actually useful, not just technically impressive.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border px-4 py-1.5 text-sm text-fg-muted"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}