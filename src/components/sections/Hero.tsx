"use client";

import { motion } from "motion/react";
import HeroSceneWrapper from "@/components/scene/HeroSceneWrapper";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <HeroSceneWrapper />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-4 text-sm uppercase tracking-[0.3em] text-fg-muted"
      >
        Data Science &amp; Full-Stack Developer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 font-display text-5xl font-semibold leading-tight sm:text-7xl"
      >
        Anurag
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 mt-6 max-w-xl text-base text-fg-muted sm:text-lg"
      >
        I build data-driven products and premium web experiences — from
        machine learning models to full-stack applications.
      </motion.p>
    </section>
  );
}