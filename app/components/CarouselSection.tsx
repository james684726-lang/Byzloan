'use client';

import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize FlyonUI carousel
    const initCarousel = async () => {
      if (typeof window !== 'undefined') {
        // Import FlyonUI
        const FlyonUI = await import('flyonui');
        if (carouselRef.current) {
          FlyonUI.createCarousel(carouselRef.current, {
            loadingClasses: 'opacity-0',
            isAutoPlay: true,
            speed: 1000,
            interval: 3000 // Auto-play interval in milliseconds
          });
        }
      }
    };

    initCarousel();

    // Cleanup
    return () => {
      if (typeof window !== 'undefined' && carouselRef.current) {
        const FlyonUI = require('flyonui');
        FlyonUI.destroyCarousel(carouselRef.current);
      }
    };
  }, []);

  const carouselItems = [
    {
      id: 1,
      title: "Flexible Repayment Terms",
      description: "Choose repayment options that work best for your business cash flow",
      bg: "bg-[#1A6686]/10"
    },
    {
      id: 2,
      title: "1000+ Funded Business Owners",
      description: "Join thousands of successful business owners who trusted ByzLoan",
      bg: "bg-[#00587E]/10"
    },
    {
      id: 3,
      title: "$175M in Lending Since 2018",
      description: "Over $175 million in funding delivered to growing businesses",
      bg: "bg-[#1A6686]/10"
    },
    {
      id: 4,
      title: "Quick & Easy Application",
      description: "Simple application process with fast decisions in 24-48 hours",
      bg: "bg-[#00587E]/10"
    },
    {
      id: 5,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprises or hidden charges",
      bg: "bg-[#1A6686]/10"
    },
    {
      id: 6,
      title: "Dedicated Support",
      description: "Speak directly to a ByzLoan representative whenever you need",
      bg: "bg-[#00587E]/10"
    }
  ];

  return (
    <div className="mt-16">
      {/* FlyonUI Carousel */}
      <div 
        id="auto-play" 
        ref={carouselRef}
        data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 1000, "interval": 3000 }' 
        className="relative w-full"
      >
        <div className="carousel h-80">
          <div className="carousel-body opacity-0 h-full">
            {carouselItems.map((item) => (
              <div key={item.id} className="carousel-slide">
                <div className={`${item.bg} flex h-full justify-center p-6 rounded-2xl border border-[#00587E]/10`}>
                  <div className="self-center text-center max-w-2xl">
                    <h3 className="text-2xl font-bold text-[#00587E] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-base sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Slide Button */}
        <button 
          type="button" 
          className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all absolute top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft className="w-5 h-5 text-[#00587E]" />
          <span className="sr-only">Previous</span>
        </button>

        {/* Next Slide Button */}
        <button 
          type="button" 
          className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all absolute top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight className="w-5 h-5 text-[#00587E]" />
          <span className="sr-only">Next</span>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {carouselItems.map((_, idx) => (
          <button
            key={idx}
            className="h-2 w-2 rounded-full bg-[#00587E]/30 hover:bg-[#00587E]/50 transition-all data-[active]:w-8 data-[active]:bg-[#67D8DC]"
            data-carousel-dot={idx + 1}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;