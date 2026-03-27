import { Link } from "react-router-dom";
import React, { useState, useMemo } from "react";
// Thêm dòng này:
import { dimsumProducts } from "../data.js";

const formatPrice = (price) => {
  return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

const ProductList = () => {
  // 1. STATES
  const [searchTerm, setSearchTerm] = useState(""); // Tìm kiếm
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [priceRange, setPriceRange] = useState("all"); // Lọc khoảng giá
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // 2. LOGIC LẤY DANH MỤC
  const categories = useMemo(() => {
    return ["Tất cả", ...new Set(dimsumProducts.map((p) => p.category))];
  }, []);

  // 3. LOGIC LỌC TỔNG HỢP (Tìm kiếm + Danh mục + Giá + Sắp xếp)
  const filteredProducts = useMemo(() => {
    let result = [...dimsumProducts];

    // Lọc theo tên (Search)
    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Lọc theo danh mục
    if (activeCategory !== "Tất cả") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Lọc theo khoảng giá
    if (priceRange === "under50")
      result = result.filter((p) => p.price < 50000);
    if (priceRange === "50to100")
      result = result.filter((p) => p.price >= 50000 && p.price <= 100000);
    if (priceRange === "over100")
      result = result.filter((p) => p.price > 100000);

    // Sắp xếp
    if (sortOrder === "asc") result.sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") result.sort((a, b) => b.price - a.price);

    return result;
  }, [searchTerm, activeCategory, priceRange, sortOrder]);

  // 4. PHÂN TRANG
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Reset trang khi lọc
  const handleFilterReset = (type, value) => {
    if (type === "cat") setActiveCategory(value);
    if (type === "price") setPriceRange(value);
    if (type === "search") setSearchTerm(value);
    setCurrentPage(1);
  };



  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* --- SIDEBAR BÊN TRÁI --- */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
          {/* Box Danh Mục */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-black text-gray-800 mb-4 uppercase tracking-widest border-b pb-2">
              Danh Mục
            </h3>
            <nav className="flex flex-col space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterReset("cat", cat)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-sm ${
                    activeCategory === cat
                      ? "bg-red-50 text-red-700 font-bold"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span>{cat}</span>
                  <span className="text-[10px] opacity-50">
                    {
                      dimsumProducts.filter((p) =>
                        cat === "Tất cả" ? true : p.category === cat,
                      ).length
                    }
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Box Lọc Khoảng Giá */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-black text-gray-800 mb-4 uppercase tracking-widest border-b pb-2">
              Khoảng Giá
            </h3>
            <div className="space-y-3">
              {[
                { label: "Tất cả giá", value: "all" },
                { label: "Dưới 50.000đ", value: "under50" },
                { label: "50.000đ - 100.000đ", value: "50to100" },
                { label: "Trên 100.000đ", value: "over100" },
              ].map((range) => (
                <label
                  key={range.value}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === range.value}
                    onChange={() => handleFilterReset("price", range.value)}
                    className="w-4 h-4 accent-red-600"
                  />
                  <span
                    className={`text-sm ${priceRange === range.value ? "text-red-700 font-bold" : "text-gray-500 group-hover:text-gray-800"}`}
                  >
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* --- KHU VỰC CHÍNH BÊN PHẢI --- */}
        <main className="flex-1">
          {/* Thanh Tìm Kiếm & Sắp Xếp */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Tìm món ăn (vd: Há cảo, tôm...)"
                  value={searchTerm}
                  onChange={(e) => handleFilterReset("search", e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all text-sm"
                />
                <svg
                  className="w-5 h-5 absolute left-4 top-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Sort Buttons */}
              <div className="flex bg-gray-50 p-1 rounded-xl w-full md:w-auto">
                {["asc", "desc"].map((order) => (
                  <button
                    key={order}
                    onClick={() => setSortOrder(order)}
                    className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold transition ${sortOrder === order ? "bg-white text-red-600 shadow-sm" : "text-gray-400"}`}
                  >
                    Giá {order === "asc" ? "Thấp ↑" : "Cao ↓"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hiển thị sản phẩm */}
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="block h-44 overflow-hidden relative"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 line-clamp-1 group-hover:text-red-700 transition">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-[11px] mt-1 line-clamp-2 h-8">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-black text-red-600">
                        {product.price.toLocaleString()}đ
                      </span>
                      <button className="bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-black transition shadow-lg shadow-red-100">
                        THÊM +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-400">
                Không tìm thấy món ăn phù hợp với yêu cầu của bạn 🥡
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("Tất cả");
                  setPriceRange("all");
                }}
                className="mt-4 text-red-600 font-bold underline"
              >
                Xóa tất cả bộ lọc
              </button>
            </div>
          )}

          {/* Phân trang */}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 disabled:opacity-30 hover:bg-gray-50 flex items-center justify-center transition shadow-sm"
              >
                &lsaquo;
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                    currentPage === i + 1
                      ? "bg-red-700 text-white shadow-md shadow-red-200"
                      : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-400 disabled:opacity-30 hover:bg-gray-50 flex items-center justify-center transition shadow-sm"
              >
                &rsaquo;
              </button>
            </div>
          )}

          {/* Phân trang (Giống bản trước) */}
          {/* ... (Phần Pagination giữ nguyên như code cũ) */}
        </main>
      </div>
    </div>
  );
};

export default ProductList;
