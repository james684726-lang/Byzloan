import { ArrowRight, ShieldCheck } from "lucide-react";
import React, {  useState } from "react";

function Findyourfit() {
      const [amount, setAmount] = useState(75000)
      const monthly = React.useMemo(() => Math.round(amount * 0.024), [amount])
    
  return (
    <>
      <section
        id="apply"
        className="bg-brand-lime py-20 text-brand-ink lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow">Find your fit</p>
            <h2 className="section-title">
              How much could
              <br />
              you{" "}
              <span className="underline decoration-brand-coral decoration-4 underline-offset-8">
                move?
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-brand-ink/65">
              Explore an estimate in seconds. Your actual offer is tailored to
              your business.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm font-bold">
              <ShieldCheck className="size-5" /> Checking your options
              won&apos;t affect your credit score
            </div>
          </div>
          <div className="rounded-[2rem] bg-brand-ink p-7 text-white shadow-2xl sm:p-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white/55">
                  I&apos;m looking for
                </p>
                <p className="mt-1 text-4xl font-black text-brand-lime sm:text-6xl">
                  ${amount.toLocaleString()}
                </p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/60">
                estimated
              </span>
            </div>
            <input
              aria-label="Loan amount"
              type="range"
              min="10000"
              max="250000"
              step="5000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-10 w-full accent-brand-lime"
            />
            <div className="mt-2 flex justify-between text-xs text-white/45">
              <span>$10k</span>
              <span>$250k</span>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs text-white/45">
                  Estimated monthly payment
                </p>
                <p className="mt-1 text-2xl font-black">
                  ${monthly.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-white/45">Potential term</p>
                <p className="mt-1 text-2xl font-black">12–24 mo.</p>
              </div>
            </div>
            <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand-lime px-6 py-4 font-bold text-brand-ink transition hover:bg-white">
              Start my application <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Findyourfit;
