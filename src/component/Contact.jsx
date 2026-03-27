import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập gửi form
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#fdf8f2] min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
            Kết Nối Với <span className="text-red-700">Q-Kitchen</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto italic font-medium">
            Mọi ý kiến đóng góp của bạn là động lực để chúng tôi hoàn thiện
            hương vị mỗi ngày.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* CỘT TRÁI: THÔNG TIN TRỰC TIẾP */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150 duration-700"></div>

              <h3 className="text-2xl font-black text-gray-800 mb-8 relative z-10">
                THÔNG TIN LIÊN HỆ
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-sm uppercase">
                      Địa chỉ trụ sở
                    </p>
                    <p className="text-gray-500 text-sm">
                      123 Đường Dimsum, Phường Bến Nghé, Quận 1, TP. HCM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-sm uppercase">
                      Hotline đặt món
                    </p>
                    <p className="text-red-700 font-black text-xl">
                      090 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-2xl">
                    📩
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-sm uppercase">
                      Email hỗ trợ
                    </p>
                    <p className="text-gray-500 text-sm font-medium">
                      support@qkitchen.vn
                    </p>
                  </div>
                </div>
              </div>

              {/* Mạng xã hội */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                  Theo dõi chúng tôi
                </p>
                <div className="flex space-x-3">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="w-11 h-11 bg-gray-50 flex items-center justify-center rounded-xl text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all duration-300 border border-gray-100 shadow-sm group"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-11 h-11 bg-gray-50 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all duration-300 border border-gray-100 shadow-sm group"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="#"
                    className="w-11 h-11 bg-gray-50 flex items-center justify-center rounded-xl text-gray-600 hover:bg-black hover:text-white transition-all duration-300 border border-gray-100 shadow-sm group"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31 0 2.591.214 3.794.608V7.17c-1.196-.693-2.583-1.09-4.06-1.09-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8V0h-7.734zM18.525 0h.016v.016h-.016V0zm-1.127 10.174c1.196.693 2.583 1.09 4.06 1.09V6.023a8.163 8.163 0 0 1-4.06-1.09v5.241z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Box Khiếu nại nhanh */}
            <div className="bg-black rounded-[35px] p-8 text-white flex items-center justify-between group cursor-pointer">
              <div>
                <p className="text-red-500 font-bold text-xs uppercase mb-1">
                  Dành cho đối tác
                </p>
                <h4 className="font-black text-lg group-hover:underline">
                  Hợp tác kinh doanh & Nhượng quyền
                </h4>
              </div>
              <span className="text-3xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </div>
          </div>

          {/* CỘT PHẢI: FORM GỬI TIN NHẮN */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-10 rounded-[45px] shadow-2xl shadow-red-100/50 border border-white h-full relative">
              {submitted && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-[45px] z-50 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-4 animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Gửi Thành Công!
                  </h3>
                  <p className="text-gray-500">
                    Cảm ơn bạn. Q-Kitchen sẽ phản hồi lại trong vòng 24h tới.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase ml-2">
                      Họ và tên
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all font-medium text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase ml-2">
                      Số điện thoại
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="09xx xxx xxx"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all font-medium text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase ml-2">
                    Địa chỉ Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all font-medium text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase ml-2">
                    Nội dung lời nhắn
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Bạn muốn chia sẻ điều gì với Q-Kitchen?"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all font-medium text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-black text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-red-200 uppercase tracking-widest text-sm"
                >
                  Gửi lời nhắn ngay
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* PHẦN FAQ NHỎ (CÂU HỎI THƯỜNG GẶP) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              q: "Thời gian giao hàng?",
              a: "Q-Kitchen cam kết giao trong 30-45 phút bán kính 10km.",
            },
            {
              q: "Có đơn hàng tối thiểu?",
              a: "Đơn hàng tối thiểu từ 150.000đ để áp dụng mã Freeship.",
            },
            {
              q: "Thanh toán bằng cách nào?",
              a: "Hỗ trợ Tiền mặt (COD), Chuyển khoản, MoMo và thẻ tín dụng.",
            },
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-red-700 pl-6 py-2">
              <h5 className="font-black text-gray-800 mb-2 uppercase text-xs">
                {item.q}
              </h5>
              <p className="text-gray-500 text-xs leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
