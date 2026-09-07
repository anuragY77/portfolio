"use client";

import { motion } from "motion/react";

export default function RevealSection({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  return (
    <section id={id} className="flex min-h-screen items-center justify-center">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-fg-muted"
      >
        {label}
      </motion.p>
    </section>
  );
}