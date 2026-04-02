import React from "react";
import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, setCartItems, totalItems } = useCart();
  const navigate = useNavigate(); // 2. Khởi tạo navigate

  // Hàm tăng/giảm số lượng (Giữ nguyên)
  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  // Hàm xóa sản phẩm (Giữ nguyên)
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Tính toán tiền bạc
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  // Cập nhật logic ship: Miễn phí đơn trên 500k như banner quảng cáo bên dưới
  const shipping = subtotal > 500000 || subtotal === 0 ? 0 : 30000;
  const total = subtotal + shipping;

  // 3. Hàm xử lý chuyển sang trang thanh toán
  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#fdf8f2] pt-32 pb-20 flex flex-col items-center justify-center px-4 text-center">
        <div className="text-6xl mb-6">🥡</div>
        <h2 className="text-2xl font-black text-gray-800 uppercase mb-4">
          Giỏ hàng đang trống
        </h2>
        <p className="text-gray-500 mb-8">
          Có vẻ như bạn chưa chọn món ăn nào cho bữa tiệc Dimsum của mình.
        </p>
        <Link
          to="/product"
          className="bg-red-700 text-white px-8 py-4 rounded-2xl font-black uppercase hover:bg-black transition-all shadow-lg shadow-red-100"
        >
          Khám phá thực đơn ngay
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fdf8f2] min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
            Giỏ hàng của bạn{" "}
            <span className="text-red-600">({totalItems})</span>
          </h1>
          <Link
            to="/product"
            className="text-sm font-bold text-red-700 hover:underline"
          >
            + Thêm món khác
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* DANH SÁCH MÓN ĂN (Giữ nguyên) */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 md:p-6 rounded-[30px] shadow-sm border border-white flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-[20px] shadow-md"
                />

                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-black text-gray-800 uppercase text-lg mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 uppercase tracking-widest">
                    {item.category}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center bg-gray-50 rounded-xl border border-gray-100 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition font-bold"
                      >
                        -
                      </button>
                      <span className="px-4 font-black text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs font-bold text-gray-300 hover:text-red-600 uppercase tracking-tighter transition"
                    >
                      Xóa
                    </button>
                  </div>
                </div>

                <div className="text-right sm:min-w-[120px]">
                  <p className="text-xl font-black text-red-600">
                    {(item.price * item.quantity).toLocaleString()}đ
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
                    {item.price.toLocaleString()}đ / phần
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TÓM TẮT THANH TOÁN */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[35px] shadow-xl border border-white sticky top-32">
              <h2 className="text-xl font-black uppercase mb-8 text-gray-900 border-b pb-4">
                Đơn hàng
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm font-bold text-gray-500">
                  <span>Tạm tính</span>
                  <span className="text-gray-900">
                    {subtotal.toLocaleString()}đ
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-500">
                  <span>Phí vận chuyển</span>
                  <span className="text-gray-900">
                    {shipping === 0
                      ? "Miễn phí"
                      : `${shipping.toLocaleString()}đ`}
                  </span>
                </div>
                <div className="pt-4 border-t border-dashed border-gray-200 flex justify-between items-end">
                  <span className="font-black text-gray-900 uppercase">
                    Tổng cộng
                  </span>
                  <div className="text-right">
                    <p className="text-3xl font-black text-red-700 leading-none">
                      {total.toLocaleString()}đ
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-2 italic">
                      Đã bao gồm VAT
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. CẬP NHẬT: Thêm sự kiện onClick */}
              <button
                onClick={handleGoToCheckout}
                className="w-full bg-red-700 hover:bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-red-100 transform active:scale-95"
              >
                Thanh toán ngay
              </button>

              <div className="mt-8 p-4 bg-red-50 rounded-2xl flex items-center gap-3">
                <span className="text-xl">🛵</span>
                <p className="text-[10px] font-bold text-red-800 leading-tight uppercase">
                  {subtotal < 500000
                    ? `Mua thêm ${(500000 - subtotal).toLocaleString()}đ để được Freeship`
                    : "Đơn hàng của bạn đã được Miễn phí giao hàng!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
