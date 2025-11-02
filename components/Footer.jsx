import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-24">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">AstraPulse</h3>
          <p className="max-w-md text-sm text-white/50">
            Cinematic AI marketing platform engineered for precision growth. We
            help revenue teams automate activation with intelligence and
            creative excellence.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <Button className="w-full sm:w-auto">Book strategy session</Button>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} AstraPulse Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
