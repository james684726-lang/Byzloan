import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Layers,
  Wallet,
  ScaleIcon,
  HelpCircle,
  Banknote,
  Package,
  Users,
  Wrench,
  Building2,
  Megaphone,
  AlertTriangle,
  RefreshCw,
  Rocket,
  FileCheck2,
  ShieldCheck,
  Quote,
  Clock,
  Sparkles,
  CheckCircle2,
  MousePointerClick,
  ClipboardCheck,
  Handshake,
  PiggyBank,
} from "lucide-react";
import { PageShell } from "../components/nerdstack/page-shell";
import { Reveal } from "../components/nerdstack/reveal";

export const metadata: Metadata = {
  title: "Education Center — ByzLoan",
  description:
    "Clear, practical guidance to help you fund and grow your business smarter. Loan types, uses, comparisons, and how ByzLoan funding works.",
};

const resourceCards = [
  {
    icon: Layers,
    eyebrow: "Loan Types",
    title: "What Loan Products Does ByzLoan Offer?",
    desc: "Merchant Cash Advance, Business Line of Credit, Asset Based Lending, Small Business Loans, and SBA Loans.",
    href: "/loan-products",
    cta: "See All Products",
  },
  {
    icon: Wallet,
    eyebrow: "Loan Uses",
    title: "What Can I Use The Loan Money For?",
    desc: "Inventory, payroll, expansion and much more. Whatever you need, we've got you covered.",
    href: "/funding-uses",
    cta: "See Funding Uses",
  },
  {
    icon: ScaleIcon,
    eyebrow: "Loan Comparison",
    title: "Which Loan Product Is Right For Me?",
    desc: "View a side-by-side comparison of each loan. We're here to help you understand each option.",
    href: "/compare-products",
    cta: "Compare Products",
  },
  {
    icon: HelpCircle,
    eyebrow: "Common Questions",
    title: "Find the Answers You're Looking For",
    desc: "Straight answers to the questions business owners ask us most.",
    href: "/faq",
    cta: "View FAQ",
  },
];

const loanProducts = [
  { name: "Merchant Cash Advance", href: "/LoanProgram" },
  { name: "Business Line of Credit", href: "/About" },
  { name: "Asset Based Lending", href: "/LoanProgram" },
  { name: "Small Business Loans", href: "/contact" },
  { name: "SBA Loans", href: "/About" },
];

const industries = [
  {
    icon: Wallet,
    title: "Working Capital / Cash Flow Gaps",
    points: [
      "Cover short-term operating expenses",
      "Smooth seasonal dips",
      "Manage slow receivables",
    ],
    fit: "Line of Credit, MCA",
  },
  {
    icon: Package,
    title: "Inventory Purchases",
    points: [
      "Seasonal inventory",
      "Bulk discounts",
      "Stocking for new contracts",
    ],
    fit: "Line of Credit, Small Business Loan, ABL (if collateral/AR/inventory eligible)",
  },
  {
    icon: Users,
    title: "Payroll & Staffing",
    points: [
      "Meet payroll during slow weeks",
      "Hire before revenue catches up",
      "Temporary labor for busy season",
    ],
    fit: "Line of Credit, MCA",
  },
  {
    icon: Wrench,
    title: "Equipment & Machinery",
    points: [
      "Replace aging equipment",
      "Purchase vehicles/tools",
      "Expand production capacity",
    ],
    fit: "Small Business Loan, Asset Based Lending, SBA Loan",
  },
  {
    icon: Building2,
    title: "Business Expansion / New Location",
    points: ["Buildout / renovations", "Additional location launch", "Franchise growth"],
    fit: "SBA Loan, Small Business Loan",
  },
  {
    icon: Megaphone,
    title: "Marketing & Customer Acquisition",
    points: ["Ad campaigns", "Website rebuild", "Promotions / lead generation"],
    fit: "Line of Credit, Small Business Loan",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Expenses / Repairs",
    points: ["Equipment failure", "Unexpected repairs", "Urgent replacement costs"],
    fit: "MCA, Line of Credit",
  },
  {
    icon: RefreshCw,
    title: "Debt Refinance / Consolidation",
    points: ["Simplify payments", "Improve cash flow timing"],
    fit: "Depends on underwriting (Small Business Loan / SBA / other term options)",
  },
  {
    icon: Rocket,
    title: "Startup / Early-Stage Needs",
    points: ["Launch costs", "Initial equipment / inventory"],
    fit: "SBA Loan / Small Business Loan",
  },
];

const steps = [
  {
    step: "01",
    title: "Apply in Minutes",
    desc: "Complete a short online application with basic business details. No long forms, no wasted time. There's no obligation and we're happy to help you with your loan options.",
    href: "/apply",
    linkLabel: "Start your application",
  },
  {
    step: "02",
    title: "Verify Your Revenue",
    desc: "Securely connect your business bank account or submit recent statements. We focus on real performance, not just credit score.",
  },
  {
    step: "03",
    title: "Get Personalized Offers",
    desc: "We analyze your cash flow and match you with funding options built around your business. Clear terms. Transparent cost. No guesswork.",
  },
  {
    step: "04",
    title: "Choose the Right Fit",
    desc: "Select the offer that aligns with your goals, timeline, and cash flow. You stay in control of the decision.",
  },
  {
    step: "05",
    title: "Receive Capital Fast",
    desc: "Once approved, funds are deposited directly into your business account. Many clients receive funding within 24 to 48 hours.",
  },
  {
    step: "06",
    title: "Repay with Confidence and Grow",
    desc: "Payments are structured and automated based on your agreement. As your business scales, you may qualify for additional funding to fuel the next stage of growth.",
  },
];

const featurePills = [
  { icon: MousePointerClick, label: "Fast and Easy", sub: "Application" },
  { icon: FileCheck2, label: "Transparent", sub: "Terms" },
  { icon: Handshake, label: "Expert", sub: "Consultation" },
  { icon: Banknote, label: "Fast", sub: "Funding" },
];

const useColumnOne = [
  "Purchase Inventory",
  "Cover Payroll",
  "Expand or Renovate",
  "Marketing Campaigns",
];

const useColumnTwo = [
  "Stabilize Cash Flow",
  "Upgrade Equipment",
  "Hire More Employees",
  "Consolidate Business Debt",
];

const differentiators = [
  {
    icon: Handshake,
    title: "We work for you, not the bank",
    desc: "We compare lenders and negotiate on your behalf so you get the strongest terms available for your situation.",
  },
  {
    icon: ShieldCheck,
    title: "No hard inquiry until you choose",
    desc: "You can review your options with a soft pull first. Your credit is only impacted if you decide to move forward.",
  },
  {
    icon: ClipboardCheck,
    title: "Multiple offers, one application",
    desc: "Submit your information once and we match you with qualified lending partners that fit your profile.",
  },
  {
    icon: PiggyBank,
    title: "Transparent terms",
    desc: "Clear rates, clear fees, clear expectations. No surprises and no hidden fine print.",
  },
];

export default function EducationPage() {
  return (
    <PageShell
      eyebrow="Education Center"
      title="Confidence At Your Fingertips"
      description="Clear, practical guidance to help you fund and grow your business smarter."
    >
      <div className="mx-auto max-w-[1100px] space-y-20">
        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[32px] border border-border bg-[#089DC8] shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#63F807]/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#63F807]/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row lg:justify-between">
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white">
                  Learn Before You Borrow
                </span>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Fund Smarter,
                  <br />
                  Grow With Confidence
                </h1>
                <p className="max-w-2xl text-sm text-white/80 sm:text-base">
                  From step-by-step breakdowns to transparent comparisons and
                  real answers, everything you need to understand your
                  funding options lives here.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
                  <Link href="/loan-products">
                    <Button className="bg-black text-white shadow-md transition-all duration-300 hover:bg-[#63F807] hover:text-black hover:shadow-lg">
                      Explore Loan Products
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-white text-white transition-all duration-300 hover:bg-white hover:text-[#089DC8]"
                    >
                      Talk to an Advisor
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="shrink-0">
                <div className="relative h-52 w-full max-w-sm overflow-hidden rounded-[24px] border-4 border-white/20 shadow-xl sm:h-64 lg:h-80 lg:w-96">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                    alt="Small business owner reviewing funding options"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── RESOURCE QUICK-LINK CARDS ────────────────────────────── */}
        <div>
          <Reveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#089DC8]">
                Start Here
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Four Questions, Answered
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resourceCards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 70}>
                <Link href={card.href} className="group block h-full">
                  <div className="flex h-full flex-col rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#089DC8]/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#089DC8]/10 text-[#089DC8] transition-colors duration-300 group-hover:bg-[#089DC8] group-hover:text-white">
                      <card.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#089DC8]">
                      {card.eyebrow}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-midnight-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-midnight-ink/60">
                      {card.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#089DC8] transition-transform duration-300 group-hover:translate-x-1">
                      {card.cta}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ─── LOAN PRODUCTS STRIP ──────────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Loan products overview"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
              <div className="flex-1 p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#089DC8]">
                  Loan Types
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  Five Ways to Fund Your Business
                </h2>
                <p className="mt-3 text-sm text-midnight-ink/70 leading-relaxed">
                  Every business is different, so we offer a full range of
                  products built for different needs and stages of growth.
                </p>
                <ul className="mt-5 space-y-2">
                  {loanProducts.map((product) => (
                    <li key={product.name}>
                      <Link
                        href={product.href}
                        className="group flex items-center justify-between rounded-xl border border-border bg-lift-white/50 px-4 py-3 text-sm font-medium text-midnight-ink transition-all duration-300 hover:border-[#089DC8]/40 hover:bg-[#089DC8]/5"
                      >
                        {product.name}
                        <ArrowRight className="h-4 w-4 text-[#089DC8] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/loan-products">
                  <Button className="mt-6 bg-[#089DC8] text-white shadow-md transition-all duration-300 hover:bg-[#63F807] hover:text-black hover:shadow-lg">
                    View All Loan Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── COMMON INDUSTRIES / USE CASES ───────────────────────── */}
        <div>
          <Reveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#089DC8]">
                Common ByzLoan Uses
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Helping Businesses Put Capital to Work
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-midnight-ink/70">
                Where it matters most — see which product fits your
                situation.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, idx) => (
              <Reveal key={industry.title} delay={idx * 50}>
                <div className="flex h-full flex-col rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#089DC8]/10 text-[#089DC8]">
                    <industry.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-midnight-ink">
                    {industry.title}
                  </h3>
                  <ul className="mt-3 flex-1 space-y-1.5">
                    {industry.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-midnight-ink/60"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#63F807]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-lg bg-[#089DC8]/5 px-3 py-2 text-xs font-medium text-[#089DC8]">
                    Best fit: {industry.fit}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <section className="relative overflow-hidden rounded-[24px] border border-border bg-[#089DC8] p-8 text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#63F807]/40 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#63F807]/40 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
                  Our Mission — Founded 2018
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Take Your Business <br />
                  to the Next Level.
                </h2>
                <p className="mt-4 max-w-2xl text-base text-white/80 leading-relaxed">
                  Our mission is to push your business to the next level by
                  making the business line of credit available to you
                  without sweating it.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/how-it-works">
                  <Button className="bg-black text-white shadow-md transition-all duration-300 hover:bg-[#63F807] hover:text-black hover:shadow-lg">
                    How It Works
                  </Button>
                </Link>
                <Link href="/compare-products">
                  <Button
                    variant="outline"
                    className="border-white text-[#63F807] transition-all duration-300 hover:bg-white hover:text-[#089DC8]"
                  >
                    Compare Loans
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── HOW BYZLOAN WORKS ────────────────────────────────────── */}
        <div>
          <Reveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#089DC8]">
                How ByzLoan Works
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Six Steps, From Application to Growth
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-midnight-ink/70">
                Understand the steps to secure funding, from application to
                repayment.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-4">
            {steps.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 60}>
                <div className="flex flex-col gap-4 rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:gap-1">
                    <span className="font-display text-3xl font-bold text-[#089DC8]/25 sm:text-4xl">
                      {s.step}
                    </span>
                    {idx < steps.length - 1 && (
                      <span className="hidden h-full w-px flex-1 bg-border sm:block" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-midnight-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-midnight-ink/70 leading-relaxed">
                      {s.desc}
                      {s.href && (
                        <>
                          {" "}
                          <Link
                            href={s.href}
                            className="font-semibold text-[#089DC8] underline underline-offset-2 hover:text-[#63F807]"
                          >
                            {s.linkLabel}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ─── FEATURE PILLS ────────────────────────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featurePills.map((pill, idx) => (
            <Reveal key={pill.label} delay={idx * 60}>
              <div className="flex items-center gap-4 rounded-[20px] border border-border bg-lift-white p-5 shadow-card-soft transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#63F807]/15 text-[#089DC8]">
                  <pill.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold leading-tight text-midnight-ink">
                    {pill.label}
                  </p>
                  <p className="text-sm text-midnight-ink/60">{pill.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ─── HOW CAN YOU USE FUNDING ─────────────────────────────── */}
        <Reveal>
          <section className="overflow-hidden rounded-[24px] border border-border bg-lift-white shadow-card-soft transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-2/5">
                <Image
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Business owner planning how to use funding"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
              <div className="flex-1 p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#089DC8]">
                  Flexible Options, Multiple Uses
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                  How Can You Use Funding From ByzLoan?
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                  {[...useColumnOne, ...useColumnTwo].map((use) => (
                    <div key={use} className="flex items-center gap-2.5 py-1.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#63F807]" />
                      <span className="text-sm text-midnight-ink/80">{use}</span>
                    </div>
                  ))}
                </div>
                <Link href="/funding-uses">
                  <Button className="mt-6 bg-[#089DC8] text-white shadow-md transition-all duration-300 hover:bg-[#63F807] hover:text-black hover:shadow-lg">
                    See All Funding Uses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── WHAT MAKES BYZLOAN DIFFERENT ────────────────────────── */}
        <div>
          <Reveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#089DC8]">
                What Makes ByzLoan Different
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-midnight-ink">
                Financing Doesn't Have to Be Complicated
              </h2>
              <p className="mt-1 text-sm text-midnight-ink/60">
                It just needs to be done right.
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-8 flex flex-col items-center gap-4 rounded-[24px] border border-border bg-[#089DC8]/5 p-8 text-center sm:p-10">
              <Quote className="h-8 w-8 text-[#089DC8]" />
              <p className="max-w-2xl font-display text-xl font-medium text-midnight-ink sm:text-2xl">
                "We work for you, not the bank — that changed how we think
                about financing our dealership."
              </p>
              <span className="text-sm font-semibold uppercase tracking-wider text-midnight-ink/50">
                Jake, Dealership Owner
              </span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {differentiators.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 70}>
                <div className="flex gap-4 rounded-[20px] border border-border bg-lift-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#089DC8]/10 text-[#089DC8]">
                    <item.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-midnight-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-midnight-ink/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ─── FINAL CTA ────────────────────────────────────────────── */}
        <Reveal>
          <section className="relative overflow-hidden rounded-[32px] border border-border bg-midnight-ink p-8 text-center text-white shadow-card-soft transition-all duration-300 hover:-translate-y-1 sm:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#089DC8]/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#63F807]/20 blur-3xl" />
            <div className="relative">
              <Sparkles className="mx-auto h-8 w-8 text-[#63F807]" />
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Ready to Put This Into Action?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
                Learn more about who we are, browse every loan product, or
                connect directly with an advisor to talk through your
                options — no pressure, no obligation.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href="/loan-products">
                  <Button className="bg-[#089DC8] text-white shadow-md transition-all duration-300 hover:bg-[#63F807] hover:text-black hover:shadow-lg">
                    View Loan Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-white/40 bg-[#089DC8] text-[#63F807] transition-all duration-300 hover:bg-white hover:text-midnight-ink"
                  >
                    About ByzLoan
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white/40 bg-[#089DC8] text-[#63F807] transition-all duration-300 hover:bg-white hover:text-midnight-ink"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}