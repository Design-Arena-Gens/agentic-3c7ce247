"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle } from "lucide-react";

const ThreeBackdrop = dynamic(() => import("@/components/ThreeBackdrop"), {
  ssr: false
});

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.2, staggerChildren: 0.1, duration: 1.1 }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section
      id="hero"
      className="hero relative flex min-h-screen flex-col overflow-hidden px-6 pb-24 pt-32 sm:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(140,140,255,0.35),_rgba(5,5,5,0))] blur-3xl" />
      <div className="absolute inset-0 opacity-90">
        <ThreeBackdrop />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center text-center text-balance"
      >
        <motion.span
          variants={childVariants}
          className="fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 backdrop-blur"
        >
          <Sparkle className="h-4 w-4 text-accent" />
          Introducing AstraPulse 2.0
        </motion.span>
        <motion.h1
          variants={childVariants}
          className="fade-up text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
        >
          Orchestrate intelligent marketing journeys with cinematic AI precision.
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="fade-up mt-8 max-w-3xl text-lg text-white/70 sm:text-xl"
        >
          AstraPulse unifies data, creative, and channel activation in a single
          motion toolkit. Automate decisions, predict impact, and deliver
          adaptive storytelling at enterprise scale.
        </motion.p>
        <motion.div
          variants={childVariants}
          className="fade-up mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" className="shadow-glass" aria-label="Request demo">
            Request a demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="secondary" size="lg" aria-label="Play overview">
            Watch overview
          </Button>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="fade-up mt-16 grid w-full gap-6 sm:grid-cols-3"
        >
          {[
            { label: "Realtime Creative Intelligence", value: "Generative Mesh" },
            { label: "Campaign Lift", value: "+37%" },
            { label: "Activation Speed", value: "12x faster" }
          ].map((item) => (
            <div
              key={item.label}
              className="glass relative rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-left backdrop-blur-lg"
            >
              <div className="noise absolute inset-0 rounded-2xl opacity-100" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur">
          <div className="h-3 w-px animate-pulse rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
