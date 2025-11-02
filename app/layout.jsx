import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata = {
  title: "AstraPulse AI Marketing",
  description:
    "AI-powered marketing intelligence for enterprise GTM teams. Automate strategy, optimize spend, and activate across every channel."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
