import React from "react";

const BannerHero = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] rounded-[10px] overflow-hidden shadow-2xl border-4 border-white">
      <img
        src="/logo.png"
        alt="Dimsum Banquet"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute top-0 left-5 md:right-20 z-20">
        <div
          className="bg-[#be1e2d] text-white pt-6 pb-12 px-6 shadow-2xl border-t-0 border-r border-l border-white/20 text-center relative w-[160px]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
          }}
        >
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/10 rounded-full transition-transform hover:scale-150 duration-700"></div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">
              Q-Kitchen
            </span>
            <h2 className="text-xl md:text-2xl font-black mb-1 uppercase tracking-tighter">
              Ưu đãi
            </h2>
            <p className="text-4xl md:text-5xl font-black text-[#ffed00] mb-2 leading-none">
              Giảm 20%
            </p>
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.1em] opacity-90 leading-tight">
              Món Dimsum!
            </p>
            <div className="mt-6 pt-6 border-t border-white/20 w-full">
              <button className="w-full bg-white text-[#be1e2d] py-2.5 rounded-lg font-black text-[10px] uppercase hover:bg-black hover:text-white transition-all">
                Săn ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 text-right hidden md:block">
        <p className="text-white text-4xl font-black italic opacity-80 uppercase leading-none">
          Hương vị <br /> Quảng Đông
        </p>
      </div>
    </div>
  );
};

export default BannerHero;
