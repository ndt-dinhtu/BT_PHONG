import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;
  const maxSlides = products.length - itemsPerPage;

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxSlides ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxSlides : prev - 1));

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <section className="relative">
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-[2px] bg-[#a51c1c]/20 w-12 md:w-24"></div>
        <h2 className="text-[#a51c1c] text-3xl font-black uppercase tracking-widest text-center">Gợi Ý Hôm Nay</h2>
        <div className="h-[2px] bg-[#a51c1c]/20 w-12 md:w-24"></div>
      </div>

      <div className="relative group max-w-5xl mx-auto px-4" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <button onClick={prevSlide} className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border-2 border-[#a51c1c] text-[#a51c1c] hover:bg-[#a51c1c] hover:text-white transition-all flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
            {products.map((product) => (
              <div key={product.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border-2 border-[#a51c1c] text-[#a51c1c] hover:bg-[#a51c1c] hover:text-white transition-all flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxSlides + 1 }).map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-[#a51c1c]" : "w-2 bg-gray-300"}`} />
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;