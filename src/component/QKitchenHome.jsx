import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// --- COMPONENT CARD SẢN PHẨM ---
const ProductCard = ({
  id,
  name,
  description,
  price,
  img,
  isPromo = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-md transition-all duration-300 relative overflow-hidden rounded-sm">
      {isPromo && (
        <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase z-10">
          Combo Tiết Kiệm
        </div>
      )}

      {/* Khung ảnh cố định tỷ lệ */}
      <div className="w-full h-44 overflow-hidden mb-4 bg-gray-50">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Nội dung Text - Dùng flex-grow để đẩy các phần dưới xuống */}
      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-[#a51c1c] font-black text-lg mb-2 uppercase line-clamp-1">
          {name}
        </h3>

        {/* Quan trọng: line-clamp và min-h để đồng đều chiều cao mô tả */}
        <p className="text-gray-500 text-[13px] mb-4 leading-snug line-clamp-2 min-h-[32px]">
          {description}
        </p>

        <div className="mt-auto">
          <p className="text-sm font-medium text-gray-800 mb-4">
            Giá:{" "}
            <span className="font-bold text-[#a51c1c]">
              {typeof price === "number" ? price.toLocaleString() : price}
            </span>{" "}
            / Phần
          </p>

          <button
            onClick={() => navigate(`/product/${id}`)}
            className="w-full bg-[#e22d2d] cursor-pointer text-white py-2.5 text-xs font-black rounded-sm shadow-[0_4px_0_rgb(165,28,28)] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-wider"
          >
            ĐẶT HÀNG NGAY
          </button>
        </div>
      </div>
    </div>
  );
};

const QKitchenHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      id: 3,
      name: "Sủi Cảo Tứ Xuyên (Sốt Cay)",
      description: "Sủi cảo luộc rưới sốt sa tế cay nồng đậm đà.",
      price: 60000,
      img: "https://hfood.com.vn/images/images/S%E1%BB%A7i_c%E1%BA%A3o_t%C3%B4m_th%E1%BB%8Bt_tr%E1%BB%99n_d%E1%BA%A7u_%E1%BB%9Bt_cay_ki%E1%BB%83u_T%E1%BB%A9_Xuy%C3%AAn_%C4%91%E1%BA%B7c_bi%E1%BB%87t.jpg",
    },
    {
      id: 7,
      name: "Sủi Cảo Bào Ngư",
      description: "Nhân hải sản cao cấp với miếng bào ngư nhỏ tươi ngon.",
      price: 95000,
      img: "https://kenh14cdn.com/2020/8/30/4-1598772127011517482639.jpg",
    },
    {
      id: 15,
      name: "Há Cảo Tôm Hấp",
      description: "Vỏ trong suốt, nhân tôm tươi nguyên con ngọt lịm.",
      price: 60000,
      img: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=500",
    },
    {
      id: 17,
      name: "Há Cảo Than Tre Tôm Thịt",
      description:
        "Vỏ tinh than tre đen tuyền, nhân hải sản độc lạ, sang trọng.",
      price: 68000,
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-u4g9t6oed9jv20@resize_w900_nl.webp",
    },
    {
      id: 21,
      name: "Xíu Mại Gạch Cua",
      description: "Nhân tôm thịt, phủ gạch cua vàng óng thơm nồng.",
      price: 50000,
      img: "https://cdn.tgdd.vn/2022/05/CookDish/xiu-mai-la-gi-nguon-goc-va-cach-lam-xiu-mai-thom-ngon-don-avt-1200x676-1.jpg",
    },
    {
      id: 29,
      name: "Xíu Mại HK Trứng Muối",
      description: "Xíu mại bọc trứng muối bùi béo tan chảy.",
      price: 55000,
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mcp19h7mhdil9c@resize_w900_nl.webp",
    },
    {
      id: 46,
      name: "Bánh Bao Kim Sa",
      description: "Nhân trứng muối tan chảy óng ánh béo ngậy.",
      price: 45000,
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m6vaeo9h995t1e.webp",
    },
    {
      id: 48,
      name: "Bánh Bao Than Tre",
      description: "Vỏ than tre, nhân sữa trứng đặc biệt thơm ngon.",
      price: 48000,
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mjaz8jvs3aiv34.webp",
    },
  ];

  // Mỗi lần show 3 item trên Desktop
  const itemsPerPage = 3;
  const maxSlides = products.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3000); // 3 giây chuyển 1 lần cho khách kịp nhìn
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <div className="bg-[#f2efe9] min-h-screen pt-24 pb-20 px-4 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* --- SECTION 1: HERO BANNER (KHUYẾN MÃI DẠNG CỜ ĐÈ LÊN ẢNH) --- */}

        <div className="relative h-[400px] md:h-[500px] rounded-[10px] overflow-hidden shadow-2xl border-4 border-white">
          {/* 1. Ảnh nền khổng lồ */}

          <img
            src="/logo.png"
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

                width: "160px", 
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
        {/* --- SECTION 2: AUTO-PLAY SLIDER --- */}
        <section className="relative">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[2px] bg-[#a51c1c]/20 w-12 md:w-24"></div>
            <h2 className="text-[#a51c1c] text-3xl font-black uppercase tracking-widest text-center">
              Gợi Ý Hôm Nay
            </h2>
            <div className="h-[2px] bg-[#a51c1c]/20 w-12 md:w-24"></div>
          </div>

          <div
            className="relative group max-w-5xl mx-auto px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border-2 border-[#a51c1c] text-[#a51c1c] hover:bg-[#a51c1c] hover:text-white transition-all flex items-center justify-center shadow-lg"
            >
              <svg
                className="w-5 h-5"
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

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
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

            <button
              onClick={nextSlide}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border-2 border-[#a51c1c] text-[#a51c1c] hover:bg-[#a51c1c] hover:text-white transition-all flex items-center justify-center shadow-lg"
            >
              <svg
                className="w-5 h-5"
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

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxSlides + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-[#a51c1c]" : "w-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </section>

        {/* --- SECTION 3: COMBO TIẾT KIỆM --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-10">
          <div className="md:col-span-4 bg-[#be1e2d] p-10 text-white flex flex-col justify-center relative overflow-hidden rounded-sm shadow-xl min-h-[350px]">
            <div className="relative z-10">
              <h3 className="text-4xl font-black italic mb-4 uppercase leading-none">
                Combo <br /> Gia Đình
              </h3>
              <p className="text-lg opacity-90 mb-8 font-medium">
                Thưởng thức trọn vẹn tinh hoa Quảng Đông với chi phí tiết kiệm
                nhất.
              </p>
              <Link
                to="/product"
                className="inline-block bg-white text-[#be1e2d] px-8 py-3 font-black text-xs uppercase hover:bg-yellow-400 hover:text-black transition-colors shadow-lg"
              >
                Xem danh sách Combo
              </Link>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProductCard
              id={1}
              isPromo={true}
              name="Sủi Cảo Viên Mix"
              description="Tổng hợp các loại sủi cảo bán chạy nhất, vỏ mỏng nhân dày."
              price={70000}
              img="https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mizr4q8lfif64c@resize_w900_nl.webp"
            />
            <ProductCard
              id={11}
              isPromo={true}
              name="Há Cảo Thủy Tinh"
              description="Sự lựa chọn hoàn hảo cho người thích tôm tươi và vỏ bánh dai."
              price={62000}
              img="https://product.hstatic.net/200000299178/product/5_fc7c9024ca044bc1939ace90406015ef_1024x1024.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QKitchenHome;
