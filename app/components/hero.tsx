import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="relative  bg-gradient-to-r from-[#1A6686] to-[#00587E] py-10">
      <div className="absolute inset-0 z-0">
         <Image 
                    src="/img/hroban.png" 
                    alt="Business funding background" 
                    fill
                    className="object-cover"
                  />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A6686]/85 to-[#00587E]/85 "/>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-white sm:text-base">
            Funding American Small Business Owners Since 2018
          </p>
          <span className="mt-3 block h-[3px] w-10 bg-white/60" />

          {/* Heading */}
          <h1 className="mt-6 text-balance text-xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-2xl">
            Fast, Flexible Business Funding
          </h1>
          <p className="mt-2 text-xl font-black uppercase leading-tight text-white sm:text-xl lg:text-2xl">
            $25K to $5M in 24 - 48 Hours
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <button className="rounded-md bg-[#2C9FCB] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:scale-105 hover:bg-[#2C9FCB]/90">
              View Loan Types
            </button>
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#63F807] transition-all hover:scale-105 hover:text-[#63F807]/90">
              Begin Application
              <span aria-hidden>&rarr;</span>
            </button>
          </div>

          {/* Footnote */}
          <p className="mt-6 text-xs text-white/60">
            ** Conditions apply. Please consult your loan officer for more
            details.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;