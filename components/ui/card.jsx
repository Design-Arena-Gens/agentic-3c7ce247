import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "glass relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-8 shadow-glass",
        className
      )}
      {...props}
    >
      <div className="noise absolute inset-0 rounded-3xl opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
