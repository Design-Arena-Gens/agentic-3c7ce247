"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Launch",
    price: "$2,400",
    cadence: "monthly",
    description:
      "Best for emerging teams launching ABM programs with intelligent automation.",
    highlights: [
      "Realtime AI orchestration",
      "3 workspace seats",
      "Creative co-pilot canvas",
      "Adaptive attribution dashboard"
    ],
    cta: "Start pilot",
    popular: false
  },
  {
    name: "Scale",
    price: "$6,900",
    cadence: "monthly",
    description:
      "Ideal for global marketing orgs integrating multi-channel motion control.",
    highlights: [
      "Omnichannel activation suite",
      "Unlimited persona journeys",
      "Predictive scenario modeling",
      "Dedicated strategy partner"
    ],
    cta: "Talk to sales",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "engagement",
    description:
      "Bespoke activation layer with on-premise data residency and governance.",
    highlights: [
      "Sovereign data cloud sync",
      "Custom guardrails + policies",
      "Priority creative lab access",
      "24/7 global response team"
    ],
    cta: "Request scoping",
    popular: false
  }
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="reveal text-xs uppercase tracking-[0.3em] text-white/50">
          Pricing architecture
        </span>
        <h2 className="reveal mt-6 text-4xl font-semibold sm:text-5xl">
          Launch fast, then scale orchestration across the enterprise.
        </h2>
        <p className="reveal mt-6 text-base text-white/60 sm:text-lg">
          Align the plan to your GTM velocity. Every tier unlocks cinematic
          experiences, first-party data safety, and global support.
        </p>
      </motion.div>
      <div className="reveal mt-16 grid gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`relative flex h-full flex-col gap-6 p-10 ${
              tier.popular ? "border-white/30 bg-white/[0.08]" : ""
            }`}
          >
            {tier.popular ? (
              <div className="absolute right-10 top-10 rounded-full border border-accent/40 px-4 py-1 text-xs uppercase tracking-[0.25em] text-accent">
                Most popular
              </div>
            ) : null}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                {tier.name}
              </p>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-4xl font-semibold text-white">
                  {tier.price}
                </span>
                <span className="text-sm text-white/50">/{tier.cadence}</span>
              </div>
              <p className="mt-5 text-sm text-white/60">{tier.description}</p>
            </div>
            <ul className="flex flex-1 flex-col gap-4">
              {tier.highlights.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-white/70">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={tier.popular ? "primary" : "secondary"}
              className="w-full"
            >
              {tier.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
