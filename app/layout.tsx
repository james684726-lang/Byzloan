import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ByzLoan — Make your big move",
  description:
    "Flexible business funding built around your goals, your timeline, and the work you put in every day.",
  generator: "v0.app",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0d2632",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-brand-ink">
      <body className="antialiased">
          <Nav/>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Footer />
      </body>
    </html>
  );
}
