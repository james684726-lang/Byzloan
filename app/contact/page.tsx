"use client";

import { useState } from "react";
// import { PageShell } from "@/components/nerdstack/page-shell";
// import { Reveal } from "@/components/nerdstack/reveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, Lock, CheckCircle2 } from "lucide-react";
// Import brand icons from react-icons/fa

import { PageShell } from "../components/nerdstack/page-shell";
import { Reveal } from "../components/nerdstack/reveal";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const state = formData.get("state") as string;
    const primaryGoal = formData.get("primaryGoal") as string;
    const message = formData.get("message") as string;

    const emailSubject = encodeURIComponent(
      `Mortgage Inquiry from ${firstName} ${lastName}`,
    );
    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
State: ${state}
Primary Goal: ${primaryGoal}

Message:
${message || "No additional message provided."}

---
This inquiry was sent from the Byzantine Capital website.`,
    );

    window.open(
      `mailto:info@byzloan.com?subject=${emailSubject}&body=${emailBody}`,
      "_blank",
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageShell
        eyebrow="contact"
        title="Message sent"
        description="Your email client has been opened with your inquiry pre‑filled."
      >
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="rounded-[20px] border border-border bg-lift-white p-4 text-center shadow-card-soft sm:p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#63F807]/15">
                <CheckCircle2 className="h-8 w-8 text-[#089DC8]" />
              </div>
              <h3 className="text-2xl font-bold text-midnight-ink">
                Message Ready!
              </h3>
              <p className="mt-2 text-midnight-ink/70">
                Your email client has been opened with your message pre‑filled.
              </p>
              <p className="mt-1 text-sm text-midnight-ink/50">
                If it didn't open, please contact us directly at{" "}
                <a
                  href="mailto:info@byzloan.com"
                  className="font-medium text-midnight-ink underline"
                >
                  info@byzloan.com
                </a>
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-midnight-ink text-lift-white hover:bg-midnight-ink/90"
              >
                Send Another Message
              </Button>
            </div>
          </Reveal>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      eyebrow="contact"
      title="Get in touch with Byzantine Capital"
      description="Ready for a clear, straightforward loan? Let's connect – we're here to help."
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column – contact info */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-midnight-ink sm:text-3xl">
                    A Direct Line to Expert Advice
                  </h2>
                  <p className="mt-2 text-midnight-ink/70">
                    You're not just filling out a form. You're starting a
                    conversation with an experienced real estate investor and
                    senior mortgage advisor.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-midnight-ink">
                    Why Start the Conversation?
                  </h3>
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#089DC8]" />
                    <div>
                      <h4 className="font-medium">
                        Fast, Personalized Response
                      </h4>
                      <p className="text-sm text-midnight-ink/60">
                        Get answers tailored to your situation, not a generic
                        template.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#089DC8]" />
                    <div>
                      <h4 className="font-medium">
                        No Obligation, No Pressure
                      </h4>
                      <p className="text-sm text-midnight-ink/60">
                        This is about discovery and planning. We provide
                        clarity, not a heavy sales pitch.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-lg font-semibold text-midnight-ink">
                    Other Ways to Connect
                  </h3>
                  <div className="mt-6 space-y-6">
                    <a
                      href="tel:+18007105185"
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-lift-white text-midnight-ink transition group-hover:bg-[#089DC8] group-hover:text-lift-white">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-midnight-ink transition group-hover:text-[#089DC8]">
                          (800) 710-5185
                        </p>
                        <p className="text-xs text-midnight-ink/50">
                          Call or Text for a Quick Chat, any time, 7 days a week
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@byzloan.com"
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-lift-white text-midnight-ink transition group-hover:bg-[#089DC8] group-hover:text-lift-white">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-midnight-ink group-hover:text-midnight-ink/80 break-all">
                          info@byzloan.com
                        </p>
                        <p className="text-xs text-midnight-ink/50">
                          Email for Detailed Inquiries
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-lift-white text-midnight-ink">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-bold text-midnight-ink">
                          Business Hours
                        </p>
                        <p className="text-sm text-midnight-ink/60">
                          Mon – Sun: 8:30 AM – 7:00 PM{" "}
                          <span className="block text-xs text-midnight-ink/40 sm:inline">
                            (Central Standard Time)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[midnight-ink]/50">
                    Follow &amp; Connect
                  </h3>
                  <div className="flex  justify-start items-center py-3 gap-3">
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
            </Reveal>
          </div>

          {/* Right column – form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft sm:p-10">
                <h3 className="text-2xl font-bold text-midnight-ink">
                  Send a Message
                </h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="mailto:info@byzloan.com"
                    className="inline-flex items-center gap-2 rounded-full bg-[#089DC8]/10 px-3 py-1.5 text-xs text-[#089DC8] transition hover:bg-[#089DC8]/20"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    info@byzloan.com
                  </a>
                  <a
                    href="tel:+18007105185"
                    className="inline-flex items-center gap-2 rounded-full bg-[#089DC8]/10 px-3 py-1.5 text-xs text-[#089DC8] transition hover:bg-[#089DC8]/20"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    (800) 710-5185
                  </a>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-midnight-ink">
                        First Name *
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        required
                        className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-[#089DC8]/30"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-midnight-ink">
                        Last Name *
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        required
                        className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-[#089DC8]/30"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-midnight-ink">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-[#089DC8]/30"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-midnight-ink">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="mt-1 w-full rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-[#089DC8]/30"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight-ink">
                      State *
                    </label>
                    <select
                      name="state"
                      required
                      className="mt-1 w-full rounded-lg border border-border text-gray-40 bg-gray-600 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-[#089DC8]/30"
                    >
                      <option value="">Select a state…</option>
                      {[
                        "AL",
                        "AK",
                        "AZ",
                        "AR",
                        "CA",
                        "CO",
                        "CT",
                        "DE",
                        "FL",
                        "GA",
                        "HI",
                        "ID",
                        "IL",
                        "IN",
                        "IA",
                        "KS",
                        "KY",
                        "LA",
                        "ME",
                        "MD",
                        "MA",
                        "MI",
                        "MN",
                        "MS",
                        "MO",
                        "MT",
                        "NE",
                        "NV",
                        "NH",
                        "NJ",
                        "NM",
                        "NY",
                        "NC",
                        "ND",
                        "OH",
                        "OK",
                        "OR",
                        "PA",
                        "RI",
                        "SC",
                        "SD",
                        "TN",
                        "TX",
                        "UT",
                        "VT",
                        "VA",
                        "WA",
                        "WV",
                        "WI",
                        "WY",
                      ].map((abbr) => (
                        <option key={abbr} value={abbr}>
                          {abbr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight-ink">
                      Primary Goal *
                    </label>
                    <select
                      name="primaryGoal"
                      required
                      className="mt-1 w-full rounded-lg bg-gray-600  border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-[#089DC8]/30"
                    >
                      <option value="">Select a goal…</option>
                      <option value="Home Purchase">Home Purchase</option>
                      <option value="Refinance for Lower payment">
                        Refinance for Lower Payment
                      </option>
                      <option value="Refinance for Cash out">
                        Refinance for Cash Out
                      </option>
                      <option value="Home Equity Line of Credit (HELOC)">
                        Home Equity Line of Credit (HELOC)
                      </option>
                      <option value="Investment Property (Purchase or Refinance)">
                        Investment Property (Purchase or Refinance)
                      </option>
                      <option value="Commercial Real Estate Finance options">
                        Commercial Real Estate Finance Options
                      </option>
                      <option value="General Home or Commercial Finance Questions">
                        General Home or Commercial Finance Questions
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight-ink">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="mt-1 w-full resize-none rounded-lg border border-border bg-lift-white/60 px-4 py-3 text-midnight-ink outline-none focus:ring-2 focus:ring-[#089DC8]/30"
                      placeholder="Tell me about your mortgage needs…"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#089DC8] py-6 font-semibold text-lift-white transition hover:bg-[#63F807] hover:text-black disabled:opacity-70"
                  >
                    {isSubmitting ? "Opening Email…" : "Send Message"}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-midnight-ink/40">
                    <Lock className="h-3.5 w-3.5" />
                    <span>
                      Your email client will open with your message pre‑filled
                    </span>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </PageShell>
  );
}