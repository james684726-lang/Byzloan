'use client';

import { Key, ArrowRight } from 'lucide-react';

const FundingUsesSection = () => {
  const useCases = [
    "Purchase Inventory",
    "Cover Payroll",
    "Expand or Renovate",
    "Marketing Campaigns",
    "Stabilize cash flow",
    "Upgrade equipment",
    "Hire more employees",
    "Consolidate business debt"
  ];

  const firstColumn = useCases.slice(0, 4);
  const secondColumn = useCases.slice(4, 8);

  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-6xl p-16 rounded-2xl relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=85" 
            alt="Business funding background" 
            className="w-full h-full object-cover"
          />
          {/* Color overlay with opacity - image will show through */}
          <div className="absolute inset-0 bg-[#00587E] opacity-85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
              How Can You Use Funding From ByzLoan?
            </h2>
            <p className="mt-4 text-md md:text-xl font-semibold text-[#63F807]">
              Flexible Options. Multiple Uses.
            </p>
          </div>

          {/* Two Column List with Key Icons */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              {firstColumn.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4"
                >
                  <Key className="w-7 h-7 text-[#63F807] flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-white font-medium text-xl">{item}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {secondColumn.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4"
                >
                  <Key className="w-7 h-7 text-[#63F807] flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-white font-medium text-xl">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button with Arrow */}
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-3 bg-[#63F807] hover:bg-[#63F807]/80 text-[#00587E] font-bold px-4 py-4 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              Apply Now
              <ArrowRight className="w-7 h-7" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingUsesSection;