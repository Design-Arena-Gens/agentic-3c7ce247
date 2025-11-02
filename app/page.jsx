"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Page() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 60 },
          {
            duration: 1.1,
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%"
            }
          }
        );
      });

      gsap.to(".hero", {
        scrollTrigger: {
          trigger: ".hero",
          start: "bottom top+=100",
          onEnter: () => {
            gsap.to(window, {
              duration: 1.4,
              ease: "power3.out",
              scrollTo: "#features"
            });
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col space-y-0 overflow-hidden">
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
