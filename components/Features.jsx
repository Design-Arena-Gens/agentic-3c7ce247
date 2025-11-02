"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, Target, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Synchronized Intelligence",
    description:
      "Fuse audience, spend, and creative telemetry with an adaptive AI conductor that optimizes every impression in real time.",
    icon: Brain
  },
  {
    title: "Autonomous Activation",
    description:
      "Launch multi-channel sequences with automated guardrails for compliance, pacing, and personalized content generation.",
    icon: Workflow
  },
  {
    title: "Predictive Foresight",
    description:
      "Simulate campaign lift and forecast ROI with scenario planning powered by proprietary generative propensity models.",
    icon: Target
  },
  {
    title: "Creative Copilot",
    description:
      "Translate complex briefs into on-brand, channel-ready creative with approval flows, asset governance, and A/B suggestions.",
    icon: Sparkles
  }
];

export function Features() {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="absolute inset-x-0 top-14 -z-10 h-[480px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_rgba(5,5,5,0))] blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="reveal text-xs uppercase tracking-[0.3em] text-white/50">
          Platform architecture
        </span>
        <h2 className="reveal mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
          An intelligent operating layer for marketing teams.
        </h2>
        <p className="reveal mt-6 text-base text-white/60 sm:text-lg">
          Unify AI decisioning, workflow automation, and generative creative
          inside a premium workspace built for scale.
        </p>
      </motion.div>
      <div className="reveal mt-16 grid gap-8 md:grid-cols-2">
        {features.map(({ title, description, icon: Icon }) => (
          <Card
            key={title}
            className="group relative overflow-hidden p-10 transition-transform duration-500 hover:-translate-y-3"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-sm text-white/60">{description}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Explore →
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
