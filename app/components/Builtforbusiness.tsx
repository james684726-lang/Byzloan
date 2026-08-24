"use client";

import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Building2,
  ChevronLeft,
  ChevronRight,
  Laptop,
  Package,
  Sparkles,
  Stethoscope,
  Store,
  Utensils,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const GAP_PX = 20; // matches Tailwind's gap-5

const INDUSTRIES = [
  {
    id: 1,
    title: "Restaurants & Bars",
    description: "Revenue-based funding to grow online sales.",
    icon: Utensils,
    image:"/img/bar.png",  },
  {
    id: 2,
    title: "Retail Stores",
    description: "Inventory financing & seasonal capital solutions.",
    icon: Store,
    image:"/img/shop.png"
  },
  {
    id: 3,
    title: "E-Commerce",
    description: "Revenue-based funding to grow online sales.",
    icon: Laptop,
    image:"img/lep.png"  },
  {
    id: 4,
    title: "Construction & GC",
    description: "Project financing and equipment capital support.",
    icon: Wrench,
    image:"/img/cons.png"  
  },
  {
    id: 5,
    title: "Medical & Dental",
    description: "Practice expansion and equipment loans.",
    icon: Stethoscope,
    image:"/img/med.png"  },
  {
    id: 6,
    title: "Automotive",
    description: "Inventory and service financing for garages and dealerships.",
    icon: Building2,
    image:"/img/car.png"  },
  {
    id: 7,
    title: "Professional Services",
    description: "Flexible capital for agencies and consultants.",
    icon: Briefcase,
    image:"/img/storeofic.png"  },
  {
    id: 8,
    title: "Wholesale",
    description: "Order financing and inventory capital support.",
    icon: Package,
    image:
      "/img/store.png",
  },
];

function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);

  // Measure the actual rendered pixel width of the visible viewport, and
  // recompute on resize. This is the single source of truth for all slide
  // math below — no percentage-of-self ambiguity, no drift.
  useEffect(() => {
    const measure = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);

      if (viewportRef.current) {
        setContainerWidth(viewportRef.current.offsetWidth);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(0, INDUSTRIES.length - itemsPerView);

  // Clamp currentIndex whenever itemsPerView changes (e.g. resizing from
  // desktop to mobile shrinks maxIndex) so it can never point past the end.
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const pause = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    pause();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    pause();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    pause();
  };

  // Exact pixel width of one card slot, and the exact pixel distance one
  // step should travel (card width + the gap that sits next to it).
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - GAP_PX * (itemsPerView - 1)) / itemsPerView
      : 0;
  const stepPx = cardWidth + GAP_PX;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#63F807]" />
            <span className="text-sm font-bold uppercase tracking-wider text-[#63F807]">
              Industries We Serve
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-black text-[#00587E] md:text-5xl">
            Common Industries
          </h2>

          <p className="max-w-2xl text-lg text-[#1A6686]">
            We provide fast, flexible funding solutions tailored to the
            industries we know best.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: GAP_PX }}
              animate={{ x: -currentIndex * stepPx }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {INDUSTRIES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="shrink-0 grow-0"
                    style={{ width: cardWidth || `${100 / itemsPerView}%` }}
                  >
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#00587E]/10 bg-gradient-to-br from-[#1A6686]/5 to-[#00587E]/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00587E]/40 via-transparent to-transparent" />
                        <div className="absolute -bottom-6 left-5 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white bg-[#63F807]/90 shadow-lg">
                          <Icon className="h-6 w-6 text-[#00587E]" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col gap-1.5 p-5 pt-8">
                        <h3 className="text-lg font-bold text-[#00587E]">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`rounded-full border-2 p-2.5 transition-all sm:p-3 ${
                  currentIndex === 0
                    ? "cursor-not-allowed border-gray-200 text-gray-300"
                    : "border-[#00587E] text-[#00587E] hover:bg-[#00587E] hover:text-white"
                }`}
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className={`rounded-full border-2 p-2.5 transition-all sm:p-3 ${
                  currentIndex === maxIndex
                    ? "cursor-not-allowed border-gray-200 text-gray-300"
                    : "border-[#00587E] bg-[#00587E] text-white hover:bg-[#1A6686]"
                }`}
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-gray-200 sm:w-32">
                <motion.div
                  className="h-full rounded-full bg-[#63F807]"
                  animate={{
                    width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="min-w-[60px] text-xs font-bold text-[#00587E]/60 sm:min-w-[70px] sm:text-sm">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(maxIndex + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#63F807] shadow-md shadow-[#63F807]/30"
                    : "w-2 bg-[#00587E]/20 hover:bg-[#00587E]/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;