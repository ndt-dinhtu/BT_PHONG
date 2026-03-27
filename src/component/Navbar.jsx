import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/product" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-10 py-4 flex items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-red-700 flex items-center">
        <span className="border-2 border-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">
          Q
        </span>
        KITCHEN
      </div>

      {/* Menu */}
      <div className="flex-1 flex justify-center space-x-8 text-gray-700 font-medium">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`transition duration-200 ${
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
    </nav>
  );
};

export default Navbar;
