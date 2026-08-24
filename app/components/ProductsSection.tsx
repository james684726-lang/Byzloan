'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Phone, Clock, CheckCircle, Zap, Shield, Users, Building, TrendingUp, Sparkles, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      title: "Merchant Cash",
      titleHighlight: "Advance (MCA)",
      description: "Fast funding option, receive an advance based on revenue and repay automatically from ongoing sales/deposits.",
      icon: <Zap className="w-8 h-8 text-[#63F807]" />,
      bg: "from-[#1A6686]/5 to-[#00587E]/5",
      border: "hover:border-[#63F807]"
    },
    {
      id: 2,
      title: "Business Line",
      titleHighlight: "of Credit",
      description: "Provides you a revolving limit you can draw from, repay, and reuse as needed.",
      icon: <TrendingUp className="w-8 h-8 text-[#63F807]" />,
      bg: "from-[#00587E]/5 to-[#1A6686]/5",
      border: "hover:border-[#63F807]"
    },
    {
      id: 3,
      title: "Asset Based",
      titleHighlight: "Lending (ABL)",
      description: "Ties borrowing power to collateral value, with availability that can change as assets change.",
      icon: <Building className="w-8 h-8 text-[#63F807]" />,
      bg: "from-[#1A6686]/5 to-[#00587E]/5",
      border: "hover:border-[#63F807]"
    },
    {
      id: 4,
      title: "Small Business",
      titleHighlight: "Loans (Term Loans)",
      description: "A term loan provides a lump sum upfront and is repaid on a predictable schedule over a fixed term.",
      icon: <Shield className="w-8 h-8 text-[#63F807]" />,
      bg: "from-[#00587E]/5 to-[#1A6686]/5",
      border: "hover:border-[#63F807]"
    },
    {
      id: 5,
      title: "SBA Loans",
      titleHighlight: "(SBA 7(a))",
      description: "Long-term, structured financing with heavier documentation and a slower process for larger projects.",
      icon: <Users className="w-8 h-8 text-[#63F807]" />,
      bg: "from-[#1A6686]/5 to-[#00587E]/5",
      border: "hover:border-[#63F807]"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#f8f9fa] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#63F807]/10 text-[#63F807] rounded-full text-sm font-semibold">
              ✦ Our Products
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00587E] mb-4">
            Learn About ByzLoan Products
          </h2>
          <p className="text-xl text-[#1A6686] font-medium">
            Multiple options for every lending need. Flexible and Fast.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              whileHover="hover"
              initial="initial"
              animate="initial"
              className={`group relative bg-gradient-to-br ${product.bg} rounded-2xl   p-6 border-2 border-[#00587E]/10 ${product.border} transition-all duration-300 hover:shadow-2xl hover:shadow-[#00587E]/10`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#63F807] via-[#67D8DC] to-[#63F807] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ filter: 'blur(20px)' }}
              />
              
              {/* Icon with Animation */}
              <motion.div
                className="mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#63F807]/10 flex items-center justify-center group-hover:bg-[#63F807]/20 transition-colors duration-300">
                  {product.icon}
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#00587E] mb-1 relative z-10">
                {product.title}
                <br />
                <span className="text-[#1A6686] ">{product.titleHighlight}</span>
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 relative z-10">
                {product.description}
              </p>

              {/* Learn More Button */}
              <motion.div
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00587E] font-semibold text-sm group-hover:text-[#63F807] transition-colors duration-300"
                >
                  LEARN MORE
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              {/* Decorative Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-[#00587E]/5 select-none">
                {String(product.id).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Apply Now CTA Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00587E] to-[#1A6686] p-8 md:p-12 mb-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#67D8DC] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#63F807] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                APPLY NOW
              </h3>
              <p className="text-white/80 text-lg">
                Get funded as fast as same day with our 5 minute application.
              </p>
              <div className="flex items-center gap-3 mt-3">
                <Phone className="w-5 h-5 text-[#63F807]" />
                <a href="tel:18007105185" className="text-white font-semibold hover:text-[#63F807] transition-colors">
                  (800) 710-5185
                </a>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#63F807] text-[#00587E] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Decorative Sparkles */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <Sparkles className="w-8 h-8 text-[#63F807] opacity-30" />
          </motion.div>
        </motion.div>

        {/* Bottom Section with Compare and Testimonials */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#00587E]/10"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl"><Star/></span>
            <span className="text-[#00587E] font-medium">Compare All Loan Products</span>
            <ChevronRight className="w-5 h-5 text-[#63F807]" />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#00587E]/10 flex items-center justify-center text-[#00587E] font-bold text-xs">S</div>
              <div className="w-8 h-8 rounded-full bg-[#1A6686]/10 flex items-center justify-center text-[#1A6686] font-bold text-xs">D</div>
              <div className="w-8 h-8 rounded-full bg-[#63F807]/10 flex items-center justify-center text-[#63F807] font-bold text-xs">M</div>
            </div>
            <span className="text-[#00587E] font-medium">What Our Clients Are Saying...</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5 text-[#63F807]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;