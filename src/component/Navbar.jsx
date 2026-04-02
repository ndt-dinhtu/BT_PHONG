import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const location = useLocation();
  const { totalItems } = useCart(); // Lấy số lượng thực tế từ Context

  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/product" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-red-700 flex items-center"
      >
        <span className="border-2 border-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-2 text-base">
          Q
        </span>
        <span className="tracking-tighter uppercase">Kitchen</span>
      </Link>

      {/* Menu */}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`transition duration-200 text-sm uppercase tracking-wide ${
                isActive
                  ? "text-red-700 font-bold border-b-2 border-red-700 pb-1"
                  : "hover:text-red-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Giỏ hàng */}
      <div className="flex items-center">
        <Link
          to="/cart"
          className="relative p-2 text-gray-700 hover:text-red-700 transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>

          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-sm">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
