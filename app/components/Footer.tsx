import Image from "next/image";
import Link from "next/link";
import React from "react";

// Updated constants (removed 'Icon' since we are using inline SVGs now)
const SOCIALS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

// Existing link data
const ABOUT_LINKS = [
  { href: "#our-company", label: "Our Company" },
  { href: "#contact", label: "Contact" },
];

const LOAN_PRODUCT_LINKS = [
  { href: "#merchant-cash-advance", label: "Merchant Cash Advance" },
  { href: "#business-line-of-credit", label: "Business Line of Credit" },
  { href: "#small-business-loans", label: "Small Business Loans" },
  { href: "#asset-based-lending", label: "Asset Based Lending" },
  { href: "#sba-loans", label: "SBA Loans" },
  { href: "#all-loan-products", label: "View All Loan Products" },
];

const EDUCATION_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#common-industries", label: "Common Industries" },
  { href: "#compare-products", label: "Compare Products" },
  { href: "#funding-uses", label: "Funding Uses" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blog", label: "Blog" },
];

function Footer() {
  return (
    <footer className="bg-[#00587E]">
      <div className="mx-auto max-w-7xl px-5 pt-14 lg:px-8">
        <div className="border-t border-white/15" />

        <div className="grid gap-10 pb-14 pt-12 lg:grid-cols-[1.1fr_.7fr_.9fr_.8fr_.9fr]">
          {/* Logo + company info */}
          <div>
            <div className="relative h-8 w-full items-center justify-center">
              <Image
                src="/img/logo.png"
                alt="ByzLoan"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>

           

            <div className="mt-4 flex flex-col gap-1.5 text-sm text-white/70">
              <a href="tel:18007105185" className="transition hover:text-white">
                (800) 710-5185
              </a>
              <a
                href="mailto:info@byzloan.com"
                className="transition hover:text-white"
              >
                info@byzloan.com
              </a>
              <span>3550 Buschwood Park Dr Suite 190 Tampa, Fl 33618</span>
            </div>
          </div>

          {/* About */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">
              About
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              {ABOUT_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">
              Loan Products
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              {LOAN_PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">
              Education
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              {EDUCATION_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Socials (UPDATED SECTION) */}
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <Link href="/contact" className="w-full rounded-md bg-[#63F807] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#00587E] shadow-md transition-all hover:scale-105 hover:bg-[#63F807]/90 lg:w-auto">
              Apply Today
            </Link>

            <div className="flex items-center gap-3">
              {/* Facebook - Font Awesome */}
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>

              {/* Instagram - Font Awesome */}
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

              {/* LinkedIn - Font Awesome */}
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-0.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h0.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>

              {/* X (Twitter) - Font Awesome */}
              <a href="#" aria-label="X (Twitter)" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>

              {/* Yelp - Font Awesome */}
              <a href="#" aria-label="Yelp" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition hover:border-white hover:bg-white/10">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M42.9 240.3l99.6 48.6c4.6 2.2 6.2 7.9 3.5 12.4-9.4 15.7-38.5 63.2-97.4 95.7-30.4 16.8-65.8 11.7-85.5-18.1C-46.3 345.8-20.5 272 42.9 240.3zm196.6 24l-115.5-13.2c-5-0.6-8.7-5.1-8.2-10.1 2-19.5 8.3-73.9 28.4-134.1 10.3-31.1 43.7-48.3 74.6-37.2 38.3 13.8 42.8 63.3 20.7 104.6 0 0 0 0 0 0zm55.7 98.8c-20.3-14.5-52.7-37.8-82.2-57.8-4.2-2.9-4.3-9-0.3-12.1 13.7-10.6 56.3-42.2 112.6-61 29-9.8 60.8 6.5 66.8 40.3 4.7 26.8-27.7 60.8-96.9 90.6zM219.5 265.7L235.8 140c0 0-8.8 13-19.2 67.6-10.2 54.2 2.9 58.1 2.9 58.1zM146 257.9L93 128.1c0 0-8.8-12.5-13.5 35.6-4.7 48.2 66.5 94.2 66.5 94.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2C9FCB]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-xs text-white sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 ByzLoan Corp. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="transition hover:text-white/80">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-white/80">
              Terms & Conditions
            </a>
          </div>
          <span>Website Development & Branding by Startup Street</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;