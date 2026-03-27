import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const ProductCard = ({ name, description, price, img, isPromo = false }) => (
  <div className="bg-white p-5 shadow-sm border border-gray-100 flex flex-col items-center group hover:shadow-md transition-shadow relative overflow-hidden">
    {isPromo && (
      <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase">
        Combo Tiết Kiệm
      </div>
    )}
    <div className="w-full h-44 overflow-hidden mb-4">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h3 className="text-[#a51c1c] font-black text-xl mb-1">{name}</h3>
    <p className="text-gray-500 text-[13px] text-center mb-3 leading-tight">
      {description}
    </p>
    <p className="text-sm font-medium text-gray-800 mb-4">
      Giá: <span className="font-bold text-[#a51c1c]">{price}</span> / Phần
    </p>
    <button className="bg-[#e22d2d] cursor-pointer text-white px-10 py-2 text-xs font-black rounded-sm shadow-[0_4px_0_rgb(165,28,28)] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-tighter">
      ĐẶT HÀNG
    </button>
  </div>
);

const QKitchenHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const products = [
    {
      id: 1,
      name: "Sủi Cảo",
      description: "Vỏ mỏng, nhân thịt tươi ngon.",
      price: "55.000đ",
      img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=500",
    },
    {
      id: 2,
      name: "Há Cảo",
      description: "Há cảo tôm hấp mềm mại.",
      price: "60.000đ",
      img: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=500",
    },
    {
      id: 3,
      name: "Xíu Mại",
      description: "Nhân thịt và tôm thơm ngon.",
      price: "50.000đ",
      img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/Cach_lam_xiu_mai_truyen_thong_ac0c4575bf.png",
    },
    {
      id: 4,
      name: "Bánh Bao Kim Sa",
      description: "Nhân trứng muối tan chảy đậm đà.",
      price: "45.000đ",
      img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=500",
    },
    {
      id: 5,
      name: "Chân Gà Tàu Xì",
      description: "Hầm mềm, thấm đẫm gia vị truyền thống.",
      price: "65.000đ",
      img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=500",
    },
    {
      id: 6,
      name: "Sủi Cảo",
      description: "Vỏ mỏng, nhân thịt tươi ngon.",
      price: "55.000đ",
      img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=500",
    },
    {
      id: 7,
      name: "Há Cảo",
      description: "Há cảo tôm hấp mềm mại.",
      price: "60.000đ",
      img: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=500",
    },
    {
      id: 8,
      name: "Xíu Mại",
      description: "Nhân thịt và tôm thơm ngon.",
      price: "50.000đ",
      img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/Cach_lam_xiu_mai_truyen_thong_ac0c4575bf.png",
    },
    {
      id: 9,
      name: "Bánh Bao Kim Sa",
      description: "Nhân trứng muối tan chảy đậm đà.",
      price: "45.000đ",
      img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=500",
    },
    {
      id: 10,
      name: "Chân Gà Tàu Xì",
      description: "Hầm mềm, thấm đẫm gia vị truyền thống.",
      price: "65.000đ",
      img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=500",
    },
  ];

  return (
    <div className="bg-[#f2efe9] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* --- SECTION 1: HERO BANNER (KHUYẾN MÃI DẠNG CỜ ĐÈ LÊN ẢNH) --- */}
        <div className="relative h-[400px] md:h-[500px] rounded-[10px] overflow-hidden shadow-2xl border-4 border-white">
          {/* 1. Ảnh nền khổng lồ */}
          <img
            src={logo}
            alt="Dimsum Banquet"
            className="w-full h-full object-cover"
          />

          {/* Lớp phủ tối nhẹ để chữ dễ đọc hơn */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* 2. Phần Khuyến mãi */}
          <div className="absolute top-0 left-5 md:right-20 z-20">
            <div
              className="bg-[#be1e2d] text-white pt-6 pb-12 px-6 shadow-2xl border-t-0 border-r border-l border-white/20 text-center relative"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
                width: "160px", // Cố định chiều rộng để nó "nhỏ lại và dài ra"
              }}
            >
              {/* Decor vòng tròn chìm */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/10 rounded-full transition-transform hover:scale-350 duration-700"></div>

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
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.1em] opacity-90 leading-tight max-w-[140px]">
                  Tất cả các món Dimsum!
                </p>

                <div className="mt-6 pt-6 border-t border-white/20 w-full">
                  <span className="text-[10px] md:text-xs font-medium italic block mb-3">
                    * Hết tuần này
                  </span>
                  <button className="w-full cursor-pointer bg-white text-[#be1e2d] py-2.5 rounded-lg font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                    Săn ngay
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slogan góc dưới */}
          <div className="absolute bottom-10 right-10 text-right hidden md:block">
            <p className="text-white text-4xl font-black italic opacity-80 uppercase leading-none">
              Hương vị <br /> Quảng Đông
            </p>
          </div>
        </div>

        {/* --- SECTION 2: SẢN PHẨM CỦA CHÚNG TÔI (SMOOTH SLIDER) --- */}
        <section className="relative overflow-visible">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] bg-gray-300 w-12 md:w-24"></div>
            <h2 className="text-[#a51c1c] text-2xl font-black uppercase tracking-[0.2em] text-center">
              Sản phẩm nổi bật của chúng tôi
            </h2>
            <div className="h-[1px] bg-gray-300 w-12 md:w-24"></div>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            {/* Nút TRÁI */}
            <button
              onClick={prevSlide}
              className={`absolute cursor-pointer left-[-30px] md:left-[-60px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-xl bg-white border-2 border-[#a51c1c] text-[#a51c1c] active:scale-90
                ${currentIndex === 0 ? "opacity-0 invisible" : "opacity-100 visible hover:bg-[#a51c1c] hover:text-white"}`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* KHUNG NHÌN (VIEWPORT) */}
            <div className="overflow-hidden px-2">
              <div
                className="flex transition-transform duration-700 ease-in-out" // Cốt lõi của hiệu ứng trượt từ từ
                style={{
                  // Dịch chuyển 33.33% cho mỗi index (vì hiển thị 3 cột)
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="w-full md:w-1/3 flex-shrink-0 px-3"
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Nút PHẢI */}
            <button
              onClick={nextSlide}
              className={`absolute cursor-pointer right-[-30px] md:right-[-60px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-xl bg-white border-2 border-[#a51c1c] text-[#a51c1c] active:scale-90
                ${currentIndex >= products.length - 3 ? "opacity-0 invisible" : "opacity-100 visible hover:bg-[#a51c1c] hover:text-white"}`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Nút xem tất cả (Giữ nguyên) */}
          <div className="flex justify-center mt-12">
            <Link
              to="/product"
              className="group flex items-center gap-3 bg-white border-2 border-[#a51c1c] text-[#a51c1c] px-8 py-3 font-black text-sm uppercase rounded-full hover:bg-[#a51c1c] hover:text-white transition-all shadow-lg"
            >
              Tất cả sản phẩm
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* --- SECTION 3: COMBO TIẾT KIỆM (Dàn trang đặc biệt bên dưới) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
          {/* Banner quảng cáo Combo trái */}
          <div className="md:col-span-4 bg-[#be1e2d] p-8 text-white flex flex-col justify-center items-start relative min-h-[300px]">
            <h3 className="text-3xl font-black italic leading-none mb-2">
              Combo Tiết Kiệm
            </h3>
            <p className="text-lg font-medium opacity-90 mb-6">
              Mua 3 phần tặng 1 phần
            </p>
            <button className="bg-white cursor-pointer text-[#be1e2d] px-6 py-2 font-black text-sm uppercase rounded-sm hover:bg-gray-100 transition">
              Khám phá ngay
            </button>
            <img
              src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=200"
              className="absolute -bottom-4 -right-4 w-40 opacity-20 rotate-12"
              alt="deco"
            />
          </div>

          {/* 2 Sản phẩm combo */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProductCard
              name="Há Cảo Thập Cẩm"
              description="Nhân thịt và tôm thơm ngon."
              price="60.000đ"
              img="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-matx4hd44cldc6.webp"
            />
            <ProductCard
              name="Há Cảo Tôm"
              description="Nhân thịt và tôm thơm ngon."
              price="50.000đ"
              img="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QKitchenHome;
