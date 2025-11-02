"use client";

import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const metrics = [
  {
    label: "Pipeline influenced",
    value: "$34.2M",
    change: "+62%",
    detail: "Net new revenue sourced across enterprise segments."
  },
  {
    label: "Cost per acquisition",
    value: "-28%",
    change: "YoY",
    detail: "Reduced CPA with autonomous bid + creative optimization."
  },
  {
    label: "Creative velocity",
    value: "4.5 hrs",
    change: "per sprint",
    detail: "Average time to launch new persona-specific journeys."
  }
];

export function Stats() {
  const chartData = useMemo(() => {
    const gradient = (ctx) => {
      const chart = ctx.chart;
      const { ctx: context, chartArea } = chart;
      if (!chartArea) {
        return null;
      }
      const grad = context.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      grad.addColorStop(0, "rgba(140,140,255,0)");
      grad.addColorStop(1, "rgba(140,140,255,0.45)");
      return grad;
    };

    return {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
      datasets: [
        {
          label: "Conversion velocity",
          data: [12, 18, 25, 31, 46, 59],
          tension: 0.5,
          borderColor: "#8c8cff",
          borderWidth: 3,
          fill: "start",
          backgroundColor: (ctx) => gradient(ctx) || "rgba(140,140,255,0.3)",
          pointRadius: 0,
          pointHoverRadius: 6,
          pointBackgroundColor: "#ffffff",
          pointBorderWidth: 2,
          pointBorderColor: "#8c8cff"
        }
      ]
    };
  }, []);

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(15,15,15,0.9)",
          borderColor: "rgba(255,255,255,0.1)",
          borderWidth: 1,
          displayColors: false,
          padding: 12,
          titleColor: "#ffffff",
          bodyColor: "#d1d1ff"
        }
      },
      scales: {
        x: {
          grid: { color: "rgba(255,255,255,0.05)" },
          ticks: { color: "rgba(255,255,255,0.45)" }
        },
        y: {
          beginAtZero: true,
          grid: { color: "rgba(255,255,255,0.05)" },
          ticks: {
            color: "rgba(255,255,255,0.45)",
            callback: (value) => `${value}%`
          }
        }
      }
    }),
    []
  );

  return (
    <section
      id="metrics"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:px-12 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="reveal grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <Card className="relative min-h-[360px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
          <div className="relative z-10 flex h-full flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Impact telemetry
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                See the compounding effect of autonomous optimization.
              </h2>
            </div>
            <div className="h-[260px] w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </Card>
        <div className="grid gap-6">
          {metrics.map((metric) => (
            <Card
              key={metric.label}
              className="reveal relative p-8 transition-transform duration-500 hover:-translate-y-2"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                {metric.label}
              </p>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-4xl font-semibold text-white">
                  {metric.value}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-accent">
                  {metric.change}
                </span>
              </div>
              <p className="mt-4 text-sm text-white/60">{metric.detail}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
