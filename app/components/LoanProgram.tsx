import Image from "next/image";
import { ArrowRight, Sparkles, Zap, TrendingUp, Shield, Building2, Coins, RefreshCw, CalendarCheck, ChartPie, Flag } from "lucide-react";

export default function LoanPrograms() {
  const loans = [
    {
      id: "mca",
      title: "Merchant Cash Advance",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      badge: "Same Day Funding",
      badgeIcon: <Zap className="w-3 h-3" />,
      description:
        "Fast funding based on revenue, repaid automatically from sales or deposits.",
      features: [
        "Revenue‑based approval",
        "Automatic remittances (daily/weekly)",
        "Factor‑rate pricing",
        "Flexible repayment with sales volume",
      ],
      image: "/images/mca-hero.jpg",
      imageAlt: "Merchant Cash Advance illustration",
    },
    {
      id: "loc",
      title: "Business Line of Credit",
      icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
      badge: "Revolving",
      badgeIcon: <RefreshCw className="w-3 h-3" />,
      description:
        "Revolving limit — draw, repay, and reuse as needed. Interest only on drawn amount.",
      features: [
        "Draw anytime for short‑term needs",
        "Reusable funds as you repay",
        "Pay for what you use",
        "Secured or unsecured",
      ],
      image: "/images/loc-hero.jpg",
      imageAlt: "Business Line of Credit illustration",
    },
    {
      id: "term",
      title: "Small Business Loans",
      icon: <CalendarCheck className="w-8 h-8 text-blue-600" />,
      badge: "Term Loans",
      badgeIcon: <CalendarCheck className="w-3 h-3" />,
      description:
        "Lump‑sum funding with predictable payments over a fixed term. Ideal for growth.",
      features: [
        "Lump‑sum for planned investments",
        "Predictable payments & clear term",
        "Lower rates than short‑term",
        "Fixed or variable rate",
      ],
      image: "/images/term-loan-hero.jpg",
      imageAlt: "Small Business Loans illustration",
    },
    {
      id: "abl",
      title: "Asset Based Lending",
      icon: <ChartPie className="w-8 h-8 text-blue-600" />,
      badge: "Collateral‑driven",
      badgeIcon: <TrendingUp className="w-3 h-3" />,
      description:
        "Borrowing power tied to collateral value — receivables, inventory, equipment.",
      features: [
        "Collateral‑driven limit",
        "Unlock more capital",
        "Reporting & monitoring",
        "Strong balance sheet suited",
      ],
      image: "/images/abl-hero.jpg",
      imageAlt: "Asset Based Lending illustration",
    },
    {
      id: "sba",
      title: "SBA Loans (7(a))",
      icon: <Flag className="w-8 h-8 text-blue-600" />,
      badge: "SBA backed",
      badgeIcon: <Shield className="w-3 h-3" />,
      description:
        "Long‑term structured financing for big‑ticket projects with competitive rates.",
      features: [
        "Longer terms (multi‑year)",
        "Expansion & acquisition",
        "More paperwork, slower process",
        "Wide range of business uses",
      ],
      image: "/images/sba-hero.jpg",
      imageAlt: "SBA Loans illustration",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Funding American Small Business Owners Since 2018
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              Our Loan Options
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, flexible business funding · $25k to $5M · 24–48 hours
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              1000+ Funded Businesses
            </span>
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
              <Coins className="w-4 h-4 text-blue-600" />
              $175M Lending Since 2018
            </span>
          </div>
        </div>

        {/* Animated Wave Graphic */}
        <div className="flex justify-center gap-1.5 mb-12">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="w-2.5 bg-gradient-to-t from-blue-400 to-blue-600 rounded-full animate-wave"
              style={{
                height: `${20 + Math.sin(i * 1.2) * 18 + 12}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loans.map((loan, index) => (
            <div
              key={loan.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-gray-100/50 hover:border-blue-200/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <Image
                  src={loan.image}
                  alt={loan.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Badge on image */}
                <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-white/50">
                  {loan.badgeIcon}
                  {loan.badge}
                </div>
                {/* Icon overlay */}
                <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2.5 rounded-2xl shadow-lg border border-white/50 group-hover:scale-110 transition-transform duration-300">
                  {loan.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {loan.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {loan.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {loan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex-1 justify-center group/btn">
                    LEARN MORE
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-full transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:-translate-y-0.5 flex-1 justify-center">
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider with animated dots */}
        <div className="flex items-center justify-center gap-6 my-16">
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-blue-300" />
          <div className="flex gap-3">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full bg-blue-500 animate-pulse-dot"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-blue-300" />
        </div>

        {/* Stats Banner with motion */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl shadow-blue-900/20 animate-float-glow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl">
                <Users className="w-7 h-7 text-blue-300" />
              </div>
              <div>
                <div className="text-2xl font-extrabold">1000+</div>
                <div className="text-sm text-blue-200/80">Funded Business Owners</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl">
                <DollarSign className="w-7 h-7 text-blue-300" />
              </div>
              <div>
                <div className="text-2xl font-extrabold">$175M</div>
                <div className="text-sm text-blue-200/80">Lending Since 2018</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl">
                <Clock className="w-7 h-7 text-blue-300" />
              </div>
              <div>
                <div className="text-2xl font-extrabold">24-48h</div>
                <div className="text-sm text-blue-200/80">Fast Funding</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl">
                <Star className="w-7 h-7 text-yellow-400" />
              </div>
              <div>
                <div className="text-2xl font-extrabold">4.9/5</div>
                <div className="text-sm text-blue-200/80">Client Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial teaser */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-white rounded-full px-5 py-2.5 shadow-md border border-gray-100 flex items-center gap-3">
            <span className="text-xl">“</span>
            <span className="text-sm font-medium text-gray-700">
              Our Line of Credit is our emergency cash flow bridge.
            </span>
            <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold">
              David C, Tech Consulting
            </span>
          </div>
          <div className="bg-white rounded-full px-5 py-2.5 shadow-md border border-gray-100 flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200/60">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            fast, flexible business funding · $25k to $5M · 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
}

// Icons not imported yet — add these to your imports
import {
  Users,
  DollarSign,
  Clock,
  Star,
} from "lucide-react";