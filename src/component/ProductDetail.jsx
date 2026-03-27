import React, { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { dimsumProducts } from "../data.js";
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // 1. Tìm sản phẩm dựa trên ID từ URL
  const product = useMemo(() => {
    return dimsumProducts.find((p) => p.id === parseInt(id));
  }, [id]);

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f2]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Món ăn không tồn tại!
        </h2>
        <Link
          to="/product"
          className="bg-red-700 text-white px-6 py-2 rounded-full font-bold shadow-lg"
        >
          Quay lại Menu
        </Link>
      </div>
    );
  }

  // 2. Các hàm xử lý số lượng
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-[#fdf8f2] min-h-screen pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Nút Quay lại & Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-red-700">
            Trang chủ
          </Link>
          <span>/</span>
          <Link to="/product" className="hover:text-red-700">
            Sản phẩm
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-bold">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[40px] p-6 lg:p-12 shadow-xl border border-white">
          {/* --- BÊN TRÁI: HÌNH ẢNH --- */}
          <div className="w-full lg:w-1/2 group">
            <div className="relative overflow-hidden rounded-[30px] aspect-square shadow-inner bg-gray-50">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 bg-red-700 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">
                {product.category}
              </div>
            </div>
          </div>

          {/* --- BÊN PHẢI: THÔNG TIN ĐẶT HÀNG --- */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
              {product.name}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-black text-red-600">
                {product.price.toLocaleString()}đ
              </span>
              <span className="text-gray-400 line-through text-lg">
                {(product.price + 15000).toLocaleString()}đ
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg italic">
              "{product.description}"
            </p>

            {/* Chọn số lượng & Đặt hàng */}
            <div className="space-y-6 mt-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center border-2 border-gray-100 rounded-2xl p-1 bg-gray-50">
                  <button
                    onClick={decreaseQty}
                    className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-white rounded-xl transition shadow-sm"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-black text-xl">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQty}
                    className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-white rounded-xl transition shadow-sm"
                  >
                    +
                  </button>
                </div>

                <button className="flex-1 w-full bg-red-700 hover:bg-black text-white py-4 rounded-2xl font-black text-lg transition-all transform active:scale-95 shadow-xl shadow-red-100 uppercase tracking-tighter">
                  Thêm vào giỏ - {(product.price * quantity).toLocaleString()}đ
                </button>
              </div>

              {/* Cam kết của nhà hàng */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔥</span>
                  <span className="text-xs font-bold text-gray-500">
                    Giao nóng 30p
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌿</span>
                  <span className="text-xs font-bold text-gray-500">
                    Nguyên liệu sạch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TABS THÔNG TIN CHI TIẾT --- */}
        <div className="mt-12 bg-white rounded-[30px] p-8 shadow-sm border border-gray-50">
          <div className="flex space-x-8 border-b border-gray-100 mb-8">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-4 text-sm font-black uppercase tracking-widest transition ${activeTab === "description" ? "text-red-700 border-b-2 border-red-700" : "text-gray-400"}`}
            >
              Mô tả chi tiết
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`pb-4 text-sm font-black uppercase tracking-widest transition ${activeTab === "shipping" ? "text-red-700 border-b-2 border-red-700" : "text-gray-400"}`}
            >
              Giao hàng & Hoàn trả
            </button>
          </div>

          <div className="text-gray-600 leading-relaxed max-w-4xl">
            {activeTab === "description" ? (
              <div className="space-y-4">
                <p>
                  Món <strong>{product.name}</strong> tại Q-Kitchen được chế
                  biến theo công thức gia truyền với lớp vỏ bột mỏng nhưng dai
                  mịn, bao bọc phần nhân tươi ngon đậm đà.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Thành phần chính: Thịt tươi, gia vị Hong Kong, tôm nõn (tùy
                    loại).
                  </li>
                  <li>Không sử dụng phẩm màu hóa học.</li>
                  <li>
                    Sản phẩm được đóng gói trong hộp giấy thân thiện với môi
                    trường.
                  </li>
                </ul>
              </div>
            ) : (
              <p>
                Chúng tôi hỗ trợ giao hàng trong bán kính 10km quanh khu vực
                TP.HCM. Cam kết giao hàng nóng hổi trong 30-45 phút tùy mật độ
                giao thông. Nếu sản phẩm bị nguội hoặc biến dạng do vận chuyển,
                hãy liên hệ Hotline để được đổi mới miễn phí.
              </p>
            )}
          </div>
        </div>

        {/* --- PHẦN MÓN ĂN GỢI Ý --- */}
        <div className="mt-20">
          <h2 className="text-2xl font-black text-gray-800 mb-8 uppercase">
            Bạn cũng sẽ thích
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dimsumProducts
              .filter(
                (p) => p.category === product.category && p.id !== product.id,
              )
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group"
                >
                  <div className="bg-white p-4 rounded-3xl border border-gray-100 hover:shadow-lg transition">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-2xl mb-4"
                    />
                    <h4 className="font-bold text-gray-800 text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-red-600 font-bold mt-1">
                      {item.price.toLocaleString()}đ
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
