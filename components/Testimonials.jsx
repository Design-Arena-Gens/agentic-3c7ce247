"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "We replaced six disconnected point solutions with AstraPulse. The orchestration engine unlocked 33% faster revenue recognition across enterprise segments.",
    name: "Mara Lennox",
    role: "Chief Growth Officer, Vaultline",
    logo: "Vaultline"
  },
  {
    quote:
      "Our GTM edge now comes from cinematic experiences that adapt on the fly. The creative co-pilot keeps every touch on-brand at global scale.",
    name: "Anders Cho",
    role: "VP Global Demand, Helix Synapse",
    logo: "Helix Synapse"
  },
  {
    quote:
      "Insight, governance, and generative storytelling in one workspace. The leadership team now sees the complete impact path in real time.",
    name: "Elena Duarte",
    role: "CMO, Quanta Orbit",
    logo: "Quanta Orbit"
  }
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="reveal mx-auto max-w-3xl text-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">
          Trusted by revenue leaders
        </span>
        <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
          Teams scaling cinematic marketing movements choose AstraPulse.
        </h2>
      </motion.div>
      <div className="reveal mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="relative h-full p-8">
              <div className="space-y-6">
                <p className="text-sm text-white/70">{item.quote}</p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {item.role}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
