"use client";

import { motion } from "motion/react";

const links = [
  { label: "GitHub", href: "https://github.com/anuragY77" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-4 text-sm uppercase tracking-[0.3em] text-fg-muted"
      >
        Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="font-display text-4xl font-semibold sm:text-5xl"
      >
        Let&apos;s work together.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-6"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-sm text-fg-muted transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}