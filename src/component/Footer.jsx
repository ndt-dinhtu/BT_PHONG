import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Cột 1: Giới thiệu & CTA */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="border-l-4 border-y-4 border-[#f3b340] p-1">
              <span className="font-bold text-xl leading-tight block text-center">SỦI CẢO<br/>HOÀNG GIA</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Xưởng bánh gia truyền chuyên cung cấp sủi cảo, há cảo tươi ngon mỗi ngày. Mang hương vị ẩm thực Trung Hoa đích thực đến tận bàn ăn nhà bạn.
          </p>
          <button className="bg-[#f3b340] text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors text-sm uppercase">
            Đặt Hàng Ngay →
          </button>
        </div>

        {/* Cột 2: Sản phẩm chính */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f3b340] inline-block pb-1">Danh Mục Sản Phẩm</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-[#f3b340] cursor-pointer">Sủi Cảo Nhân Thịt Hẹ</li>
            <li className="hover:text-[#f3b340] cursor-pointer">Há Cảo Tôm Tươi</li>
            <li className="hover:text-[#f3b340] cursor-pointer">Hoành Thánh Quảng Đông</li>
            <li className="hover:text-[#f3b340] cursor-pointer">Set Combo Gia Đình</li>
          </ul>
          <div className="mt-6">
            <p className="text-white font-bold text-xl italic">Google Reviews</p>
            <div className="flex text-[#f3b340] mt-1">
              <span>★★★★★</span>
              <span className="text-gray-400 text-xs ml-2 self-center">(4.9/5)</span>
            </div>
          </div>
        </div>

        {/* Cột 3: Góc ẩm thực */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f3b340] inline-block pb-1">Góc Chia Sẻ</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-[#f3b340] cursor-pointer">Cách Hấp Bánh Ngon</li>
            <li className="hover:text-[#f3b340] cursor-pointer">Bí Quyết Pha Nước Chấm</li>
            <li className="hover:text-[#f3b340] cursor-pointer">Lưu Trữ Bánh Đông Lạnh</li>
            <li className="hover:text-[#f3b340] cursor-pointer">Nguyên Liệu Sạch</li>
            <li className="hover:text-[#f3b340] cursor-pointer">Chính Sách Giao Hàng</li>
          </ul>
        </div>

        {/* Cột 4: Liên hệ & Mạng xã hội */}
        <div className="relative">
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f3b340] inline-block pb-1">Liên Hệ</h3>
          <div className="space-y-3 text-gray-400 text-sm mb-8">
            <p className="flex items-center gap-2">
              <span className="text-[#f3b340]">✉</span> lienhe@suicaohoanggia.vn
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#f3b340]">📍</span> Quận 5, TP. Hồ Chí Minh
            </p>
          </div>

          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f3b340] inline-block pb-1">Theo Dõi Chúng Tôi</h3>
          <div className="flex gap-4">
            <div className="bg-[#2a2a2a] p-3 rounded hover:bg-[#f3b340] hover:text-black cursor-pointer transition-all">
              <FaTwitter size={18} />
            </div>
            <div className="bg-[#2a2a2a] p-3 rounded hover:bg-[#f3b340] hover:text-black cursor-pointer transition-all">
              <FaYoutube size={18} />
            </div>
            <div className="bg-[#2a2a2a] p-3 rounded hover:bg-[#f3b340] hover:text-black cursor-pointer transition-all">
              <FaFacebook size={18} />
            </div>
          </div>

          {/* Nút Lên đầu trang */}
          <div className="absolute bottom-0 right-0 bg-[#f3b340] p-3 rounded-full text-black cursor-pointer hover:bg-yellow-500 transition-colors shadow-lg">
            <FaChevronUp size={20} />
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© Bản quyền thuộc về Sủi Cảo Hoàng Gia 2026</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <p className="hover:text-white cursor-pointer text-[#f3b340]">Chính sách bảo mật</p>
          <p className="hover:text-white cursor-pointer">Điều khoản dịch vụ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;