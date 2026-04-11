import React from "react";
import { Link } from "react-router-dom"; // Import Link để điều hướng
import { FaTwitter, FaYoutube, FaFacebook, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { id: 1, icon: <FaTwitter size={18} />, url: "https://twitter.com/" },
    { id: 2, icon: <FaYoutube size={18} />, url: "https://youtube.com/" },
    { id: 3, icon: <FaFacebook size={18} />, url: "https://facebook.com/" },
  ];

  // Dữ liệu cho các cột danh mục
  const productLinks = [
    { name: "Sủi Cảo Nhân Chiên", path: "/product/5" },
    { name: "Há Cảo Tôm Hấp", path: "/product/2" },
    { name: "Bánh Bao Kim Sa", path: "/product/4" },
    { name: "Set Combo Gia Đình", path: "/combo" },
  ];

  const blogLinks = [
    { name: "Cách Hấp Bánh Ngon", path: "/blog/cach-hap-banh" },
    { name: "Bí Quyết Pha Nước Chấm", path: "/blog/nuoc-cham" },
    { name: "Lưu Trữ Bánh Đông Lạnh", path: "/huong-dan/bao-quan" },
    { name: "Chính Sách Giao Hàng", path: "/chinh-sach-giao-hang" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-6 md:px-16 font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Cột 1: Giới thiệu */}
        <div className="space-y-6">
          <Link
            to="/"
            className="inline-block border-l-4 border-y-4 border-[#f3b340] p-1"
          >
            <span className="font-bold text-xl leading-tight block text-center">
              SỦI CẢO
              <br />Q KITCHEN
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Xưởng bánh gia truyền chuyên cung cấp sủi cảo tươi ngon mỗi ngày.
          </p>
          <Link to="/product">
            <button
              className="group border-2 border-[#f3b340] text-[#f3b340] font-bold py-3 px-8 rounded-md 
    hover:cursor-pointer hover:bg-[#f3b340] hover:text-black transition-all duration-500 
    text-sm uppercase mt-4 relative overflow-hidden animate-heartbeat" // Sử dụng hiệu ứng đập nhịp tim
            >
              <span className="relative z-10 flex items-center">
                Đặt Hàng Ngay
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Cột 2: Sản phẩm chính */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f3b340] inline-block pb-1">
            Danh Mục Sản Phẩm
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {productLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-[#f3b340] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 3: Góc ẩm thực */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f3b340] inline-block pb-1">
            Góc Chia Sẻ
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {blogLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-[#f3b340] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 4: Liên hệ & Mạng xã hội */}
        <div className="relative">
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f3b340] inline-block pb-1">
            Liên Hệ
          </h3>
          <div className="space-y-3 text-gray-400 text-sm mb-8">
            <p className="flex items-center gap-2">
              <span className="text-[#f3b340]">✉</span>{" "}
              Q_Chicken@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f3b340]">📍</span> 01 Phan Xích Long, Phú
              Nhuận, TP. HCM
            </p>
          </div>

          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f3b340] inline-block pb-1">
            Theo Dõi Chúng Tôi
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2a2a2a] p-3 rounded hover:bg-[#f3b340] hover:text-black transition-all flex items-center justify-center"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Nút Lên đầu trang (Đặt ở góc dưới cột 4) */}
          <button
            onClick={scrollToTop}
            className="absolute -bottom-4 right-0 bg-[#f3b340] p-3 rounded-full text-black cursor-pointer hover:bg-yellow-500 transition-colors shadow-lg"
          >
            <FaChevronUp size={20} />
          </button>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© Bản quyền thuộc về Sủi Cảo Q KitChen 2026</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-[#f3b340]">
            Chính sách bảo mật
          </Link>
          <Link to="/terms" className="hover:text-white">
            Điều khoản dịch vụ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
