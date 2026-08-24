"use client";

import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/About", label: "About us" },
  { href: "/LoanProgram", label: "LoanProgram" },
  { href: "/Education", label: "Education" },
  { href: "/contact", label: "contact us" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-md shadow-black/5"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between  px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex items-center gap-3 sm:gap-6">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className={`flex items-center gap-2 rounded-full py-1 pl-1 pr-2 text-sm font-semibold transition-colors sm:pl-0 ${
                  scrolled ? "text-[#00587E]" : "text-white"
                }`}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Menu</span>
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex w-[85vw] max-w-sm flex-col bg-white p-0 sm:max-w-md"
            >
              <SheetHeader className="border-b border-black/10 px-2 py-2 text-left">
                <SheetTitle>
                  <Link href="/">
                  <div className="relative h-20 w-42">
                    <Image
                      src="/img/logo.png"
                      alt="ByzLoan"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-1 px-6 py-6 text-base font-semibold text-[#00587E]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 transition hover:bg-[#00587E]/5 hover:text-[#00587E]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 border-t border-black/10 px-6 py-6">
                <a
                  href="tel:18007105185"
                  className="flex items-center gap-2 text-sm font-bold text-[#00587E]"
                >
                  <Phone className="h-4 w-4 text-[#63F807]" />
                  (800) 710-5185
                </a>
                <Link href="/contact"><button className="w-full rounded-md bg-[#63F807] px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#00587E] shadow-md transition-transform hover:scale-[1.02]">
                  Start Application
                </button></Link>
                <div className="w-full rounded-full bg-[#63F807] px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#00587E] shadow-md transition-transform hover:scale-[1.02]">
                  <div className="flex  justify-center items-center gap-3">
                    {/* Facebook - Font Awesome */}
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white bg-[#089DC8]/80"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        />
                      </svg>
                    </a>

                    {/* Instagram - Font Awesome */}
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white bg-[#089DC8]/80"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </a>

                    {/* LinkedIn - Font Awesome */}
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white bg-[#089DC8]/80"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-0.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h0.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        />
                      </svg>
                    </a>

                    {/* X (Twitter) - Font Awesome */}
                    <a
                      href="#"
                      aria-label="X (Twitter)"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white bg-[#089DC8]/80"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                        />
                      </svg>
                    </a>

                    {/* Yelp - Font Awesome */}
                    <a
                      href="#"
                      aria-label="Yelp"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white bg-[#089DC8]/80"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M42.9 240.3l99.6 48.6c4.6 2.2 6.2 7.9 3.5 12.4-9.4 15.7-38.5 63.2-97.4 95.7-30.4 16.8-65.8 11.7-85.5-18.1C-46.3 345.8-20.5 272 42.9 240.3zm196.6 24l-115.5-13.2c-5-0.6-8.7-5.1-8.2-10.1 2-19.5 8.3-73.9 28.4-134.1 10.3-31.1 43.7-48.3 74.6-37.2 38.3 13.8 42.8 63.3 20.7 104.6 0 0 0 0 0 0zm55.7 98.8c-20.3-14.5-52.7-37.8-82.2-57.8-4.2-2.9-4.3-9-0.3-12.1 13.7-10.6 56.3-42.2 112.6-61 29-9.8 60.8 6.5 66.8 40.3 4.7 26.8-27.7 60.8-96.9 90.6zM219.5 265.7L235.8 140c0 0-8.8 13-19.2 67.6-10.2 54.2 2.9 58.1 2.9 58.1zM146 257.9L93 128.1c0 0-8.8-12.5-13.5 35.6-4.7 48.2 66.5 94.2 66.5 94.2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 flex w-full justify-center sm:justify-start">
          <div className="relative h-16 w-38 shrink-0 sm:h-16 sm:w-full">
             <Link href="/"><Image
              src="/img/logo.png"
              alt="ByzLoan"
              fill
              className={`object-contain transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            /></Link>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className={`hidden flex-col items-end text-right md:flex ${
              scrolled ? "text-[#00587E]" : "text-white"
            }`}
          >
            <span
              className={`text-xs font-medium ${
                scrolled ? "text-[#00587E]/70" : "text-white/70"
              }`}
            >
              Speak Directly to a ByzLoan Representative:
            </span>
            <a
              href="tel:18007105185"
              className="text-sm font-bold transition hover:text-[#63F807]"
            >
              (800) 710-5185
            </a>
          </div>

          <button className="whitespace-nowrap rounded-md bg-[#63F807] p-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-[#00587E] shadow-md transition-all hover:scale-105 hover:bg-[#63F807]/90 sm:px-5 sm:py-2.5 sm:text-xs">
            Start Application
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
