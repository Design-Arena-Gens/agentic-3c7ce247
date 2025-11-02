import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(255,255,255,0.15)]",
        secondary:
          "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
        ghost: "bg-transparent text-white/70 hover:text-white"
      },
      size: {
        default: "px-5 py-3",
        lg: "px-7 py-4 text-base",
        sm: "px-4 py-2 text-xs"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export const Button = forwardRef(function Button(
  { className, variant, size, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </button>
  );
});
