import React from "react";

const About = () => {
  return (
    <div className="bg-[#fdf8f2] min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* --- PHẦN 1: HERO SECTION (TIÊU ĐỀ & SLOGAN) --- */}
        <div className="text-center mb-20">
          <span className="text-red-700 font-black tracking-[0.3em] uppercase text-sm">
            Chào mừng đến với Q-Kitchen
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mt-4 mb-6 leading-tight">
            Nghệ Thuật Dimsum <br />{" "}
            <span className="text-red-700">Chạm Đến Trái Tim</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">
            "Chúng tôi không chỉ bán món ăn, chúng tôi mang đến trải nghiệm ẩm
            thực Quảng Đông nguyên bản ngay tại hiên nhà bạn."
          </p>
        </div>

        {/* --- PHẦN 2: CÂU CHUYỆN THƯƠNG HIỆU --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-red-700 rounded-[40px] z-0"></div>
            <img
              src="/about.jpg"
              alt="Dimsum Chef"
              className="relative z-10 rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tighter">
              Hành Trình 5 Năm Gìn Giữ Hương Vị
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bắt đầu từ một căn bếp nhỏ vào năm 2021,{" "}
              <strong>Q-Kitchen</strong> ra đời với khao khát mang những xửng
              Dimsum nóng hổi, chuẩn vị Hong Kong đến với mọi gia đình Việt.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mỗi chiếc Há Cảo hay Xíu Mại tại đây đều được nhào nặn thủ công
              bởi những nghệ nhân có hơn 10 năm kinh nghiệm. Chúng tôi tin rằng,
              chỉ có đôi tay con người mới truyền tải được hết hơi ấm và sự trân
              trọng vào từng món ăn.
            </p>
            <div className="pt-4 flex gap-8">
              <div>
                <span className="block text-3xl font-black text-red-700">
                  15,000+
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase">
                  Khách hàng tin dùng
                </span>
              </div>
              <div>
                <span className="block text-3xl font-black text-red-700">
                  35+
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase">
                  Món ăn đặc trưng
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- PHẦN 3: GIÁ TRỊ CỐT LÕI (3 SẠCH) --- */}
        <div className="bg-white rounded-[50px] p-12 shadow-sm border border-gray-50 mb-32">
          <h2 className="text-center text-3xl font-black text-gray-800 mb-16 uppercase tracking-widest">
            Triết Lý "Tam Tâm"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "🌿",
                title: "Tâm Nguyên Liệu",
                desc: "Tôm tươi loại 1, thịt heo sạch đạt chuẩn VietGAP, rau củ nhập mới mỗi sáng sớm.",
              },
              {
                icon: "🔥",
                title: "Tâm Chế Biến",
                desc: "Không chất bảo quản, không phẩm màu. Vị ngọt thanh hoàn toàn từ nước dùng xương hầm 12 tiếng.",
              },
              {
                icon: "🚚",
                title: "Tâm Phục Vụ",
                desc: "Giao hàng thần tốc 30 phút. Đảm bảo món ăn đến tay bạn vẫn còn bốc khói như vừa rời xửng hấp.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- PHẦN 4: QUY TRÌNH LÀM BÁNH (TIMELINE) --- */}
        <div className="mb-32">
          <h2 className="text-center text-3xl font-black text-gray-800 mb-16 uppercase tracking-widest">
            Quy Trình Thủ Công
          </h2>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Chọn lọc tinh túy",
                content:
                  "Mỗi con tôm được kiểm tra độ chắc thịt, mỗi thớ thịt được lọc sạch mỡ thừa.",
              },
              {
                step: "02",
                title: "Nhào nặn tỉ mỉ",
                content:
                  "Vỏ bánh được cán mỏng đến mức có thể nhìn thấy nhân bên trong nhưng vẫn đảm bảo độ dai.",
              },
              {
                step: "03",
                title: "Hấp nhiệt chuẩn xác",
                content:
                  "Canh thời gian và nhiệt độ hơi nước hoàn hảo để giữ trọn dưỡng chất và độ mọng nước.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-8 border-l-2 border-red-100 pl-8 relative"
              >
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-red-700 rounded-full border-4 border-white"></div>
                <div>
                  <span className="text-5xl font-black text-red-50/50 absolute right-0 -mt-4">
                    {item.step}
                  </span>
                  <h4 className="text-xl font-black text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 max-w-xl">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PHẦN 5: LIÊN HỆ & BẢN ĐỒ --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-700 rounded-[40px] p-10 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-black mb-6 uppercase">
              Ghé Thăm Chúng Tôi
            </h2>
            <div className="space-y-4 text-sm opacity-90 font-medium">
              <p className="flex items-center">
                <span className="mr-3">📍</span> 01 Phan Xích Long, Phú Nhuận,
                TP. Hồ Chí Minh
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span> Hotline: 090 123 4567
              </p>
              <p className="flex items-center">
                <span className="mr-3">⏰</span> Mở cửa: 07:00 - 22:00 (Hàng
                ngày)
              </p>
              <p className="flex items-center">
                <span className="mr-3">📧</span> Email:
                phanthanhphong01@gmail.com
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/01+Phan+X%C3%ADch+Long,+Ph%C6%B0%E1%BB%9Dng+4,+%C4%90%E1%BB%A9c+Nhu%E1%BA%ADn,+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.801849,106.6802141,17z/data=!3m1!4b1!4m6!3m5!1s0x317528da1af7faf9:0x6b39e23613e77d4c!8m2!3d10.801849!4d106.682789!16s%2Fg%2F11x6xskt76?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="mt-8 bg-white text-red-700 px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition shadow-2xl">
                Chỉ đường ngay
              </button>
            </a>
          </div>
          <div className="h-[400px] bg-gray-200 rounded-[40px] overflow-hidden shadow-inner relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.005404182988!2d106.6687477992401!3d10.811207729433212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528da1af7faf9%3A0x6b39e23613e77d4c!2zMDEgUGhhbiBYw61jaCBMb25nLCBQaMaw4budbmcgNCwgxJDhu6ljIE5odeG6rW4sIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1775112934196!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
