import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function Peopleoverpaperwork() {
  return (
    <>
      <section id="about" className="bg-[#089DC8  ] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-brand-lime">People over paperwork</p>
            <h2 className="section-title text-white">
              Your business is
              <br />
              more than a <span className="text-brand-lime">number.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              We believe access to capital should feel human. That means
              listening first, making things clear, and giving ambitious owners
              a fair shot at what&apos;s next.
            </p>
            <Button>Meet ByzLoan</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="quote-card">
              <Star className="size-5 fill-brand-lime text-brand-lime" />
              <p>
                &quot;They made the process feel incredibly simple. We had the
                cash to open our second location when it mattered most.&quot;
              </p>
              <span>— Maya, hospitality owner</span>
            </div>
            <div className="quote-card bg-brand-lime text-brand-ink">
              <Image
                src="/img/mb.png"
                alt="Description of image"
                width={800}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Peopleoverpaperwork;



