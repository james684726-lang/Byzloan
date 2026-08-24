'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      title: "Business Term Loan",
      testimonial: "Securing a Term Loan allowed us to buy the machinery upfront and lock in a fixed monthly payment. This stability made it easy to project our overhead for the next five years. We've already seen a 30% increase in production capacity thanks to that one investment.",
      author: "Sarah J",
      role: "Manufacturing",
      image: "/img/tes1.jpg"
    },
    {
      id: 2,
      title: "Business Line of Credit",
      testimonial: "Our Line of Credit is now our 'emergency' cash flow bridge. We draw from it to cover payroll on Friday and pay it back as soon as a client's invoice clears. Only paying interest on the days the money is out of the account makes this the most cost-effective way to manage our working capital.",
      author: "David C",
      role: "Tech Consulting",
      image: "/img/tes3.jpg"
    },
    {
      id: 3,
      title: "Merchant Cash Advance",
      testimonial: "We opted for a Cash Advance, and the funds were in our account the next morning. It was a lifesaver. Because the repayments fluctuate with our daily credit card sales, I didn't have to worry about a huge fixed bill during our post-holiday slow down. It kept our doors open when it mattered most.",
      author: "Marcus T",
      role: "Catering",
      image: "/img/tes2.jpg"
    }
  ];

  const totalItems = testimonials.length;

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, totalItems]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#00587E] md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-lg text-[#1A6686] font-medium">
            Real stories from real business owners
          </p>
        </div>

        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full"
                >
                  <div className="flex flex-col md:flex-row min-h-[400px]">
                    {/* Left Side - Image */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-[400px] flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Gradient Overlay for better text visibility on mobile */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white">
                      <div className="max-w-xl">
                        {/* Quote Icon */}
                        <Quote className="w-10 h-10 text-[#67D8DC] mb-4 opacity-50" />
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-[#00587E] md:text-3xl mb-4">
                          {item.title}
                        </h3>
                        
                        {/* Testimonial */}
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
                          "{item.testimonial}"
                        </p>
                        
                        {/* Author */}
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-[#00587E]/10 flex items-center justify-center text-[#00587E] font-bold text-2xl">
                            {item.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-[#00587E] text-lg">
                              {item.author}
                            </p>
                            <p className="text-[#1A6686] font-medium text-sm">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all z-10 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-[#00587E]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all z-10 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-[#00587E]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? 'w-8 bg-[#67D8DC] shadow-md'
                    : 'w-2 bg-[#00587E]/30 hover:bg-[#00587E]/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;