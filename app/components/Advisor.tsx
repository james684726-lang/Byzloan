import { Mail, Phone, Users } from "lucide-react";
import Image from "next/image";

function Advisor() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F2]">
      {/* Soft brand-tinted glow, replaces the peach gradient in the reference */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-[#63F807]/10 via-[#00587E]/5 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        {/* Left column */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#00587E] shadow-sm">
            <Users className="h-3.5 w-3.5 text-[#63F807]" strokeWidth={2.5} />
            100K+ Satisfied Customers
          </div>

          {/* Eyebrow */}
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-black/40">
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h2 className="mt-2 text-balance text-5xl font-black leading-[0.95] tracking-tight text-[#0B1B23] sm:text-6xl lg:text-[4.2rem]">
            Jonathan
            <br />
            Ravens,
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-xl font-semibold text-[#00587E] sm:text-2xl">
            Your Local Mortgage Expert
          </p>

          {/* Body copy */}
          <p className="mt-4 max-w-md text-sm leading-7 text-black/55 sm:text-base">
            Jonathan Ravens, Owner of ByzLoan Corp., has been in the lending
            industry since 2003. Over the years, he has emerged as a trusted
            funding adviser to consumers and businesses across the country.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-md bg-[#00587E] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-[#00587E]/90">
              <Phone className="h-4 w-4" />
              Schedule Intro Call
              <span aria-hidden>&rarr;</span>
            </button>
            <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-6 py-3.5 text-sm font-bold text-[#0B1B23] shadow-sm transition-all hover:scale-105 hover:bg-black/5">
              <Phone className="h-4 w-4" />
              Call Us
            </button>
          </div>
        </div>

        {/* Right column: photo + floating contact card */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[#00587E]/90">
            <Image 
            src="/img/dp1.png" 
            alt="Business funding background" 
            fill
            className="object-cover"
          />
          </div>
          <div className="absolute inset-x-4 bottom-8 rounded-2xl border border-black/5 bg-white p-5 shadow-xl sm:inset-x-6 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-base font-bold text-[#0B1B23]">
                  Jonathan Ravens
                </p>
                <p className="text-xs font-medium text-black/45">
                  Senior Mortgage Advisor
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-black/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#63F807]" />
                  NMLS #811655
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="tel:18007105185"
                  aria-label="Call Jonathan Ravens"
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#00587E]/5 text-[#00587E] transition hover:bg-[#00587E]/10"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href="mailto:jonathan@byzloan.com"
                  aria-label="Email Jonathan Ravens"
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#00587E]/5 text-[#00587E] transition hover:bg-[#00587E]/10"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advisor;