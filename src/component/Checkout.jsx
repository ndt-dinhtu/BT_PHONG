import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  // SỬA TẠI ĐÂY: Dùng cartItems thay vì cart
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Tính toán lại tổng tiền và phí ship
  const totalPrice = cartItems
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;
  const shippingFee = totalPrice > 500000 ? 0 : 30000;

  const handleOrder = (e) => {
    e.preventDefault();
    alert("🎉 Cảm ơn bạn! Q-Kitchen đã tiếp nhận đơn hàng.");
    if (clearCart) clearCart();
    navigate("/");
  };

  // Kiểm tra cartItems thay vì cart
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f2]">
        <span className="text-6xl mb-4">🛒</span>
        <h2 className="text-2xl font-black text-gray-800 mb-6 uppercase tracking-tighter">
          Giỏ hàng đang trống!
        </h2>
        <Link
          to="/product"
          className="bg-red-700 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-black transition-all"
        >
          Quay lại chọn món
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fdf8f2] min-h-screen pt-28 pb-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-10 uppercase tracking-tighter">
          Thanh toán <span className="text-red-700">.</span>
        </h1>

        <form
          onSubmit={handleOrder}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* --- CỘT TRÁI: THÔNG TIN --- */}
          <div className="lg:col-span-7 space-y-8">
            <section className="bg-white p-8 rounded-[40px] shadow-xl border border-white">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2 uppercase tracking-tighter">
                <span className="bg-red-100 text-red-700 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                  1
                </span>
                Thông tin giao hàng
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition font-bold"
                />
                <input
                  required
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition font-bold"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition md:col-span-2 font-bold"
                />
                <textarea
                  required
                  placeholder="Địa chỉ giao hàng (Số nhà, tên đường, quận...)"
                  rows="3"
                  className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition md:col-span-2 font-bold"
                ></textarea>
              </div>
            </section>

            <section className="bg-white p-8 rounded-[40px] shadow-xl border border-white">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2 uppercase tracking-tighter">
                <span className="bg-red-100 text-red-700 w-8 h-8 flex items-center justify-center rounded-full text-sm">
                  2
                </span>
                Thanh toán
              </h3>
              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition ${paymentMethod === "cod" ? "border-red-700 bg-red-50" : "border-gray-100"}`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-red-700 w-5 h-5"
                    />
                    <span className="font-black text-gray-800 text-sm uppercase">
                      Tiền mặt (COD)
                    </span>
                  </div>
                  <span className="text-2xl">💵</span>
                </label>
                <label
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition ${paymentMethod === "bank" ? "border-red-700 bg-red-50" : "border-gray-100"}`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-red-700 w-5 h-5"
                    />
                    <span className="font-black text-gray-800 text-sm uppercase">
                      Chuyển khoản / Ví MoMo
                    </span>
                  </div>
                  <span className="text-2xl">📲</span>
                </label>
              </div>
            </section>
          </div>

          {/* --- CỘT PHẢI: TÓM TẮT --- */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-white sticky top-28">
              <h3 className="text-xl font-black mb-8 uppercase tracking-widest border-b border-dashed pb-4">
                Đơn hàng của bạn
              </h3>

              <div className="max-h-60 overflow-y-auto mb-6 pr-2 space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 rounded-2xl object-cover shadow-sm"
                        />
                        <span className="absolute -top-2 -right-2 bg-black text-white w-6 h-6 rounded-full text-[10px] flex items-center justify-center font-black">
                          {item.quantity}
                        </span>
                      </div>
                      <span className="font-black text-gray-800 text-xs uppercase tracking-tighter leading-tight">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-black text-sm text-red-600 whitespace-nowrap">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-gray-100 pt-6">
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Tạm tính</span>
                  <span className="text-gray-900">
                    {totalPrice.toLocaleString()}đ
                  </span>
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Phí vận chuyển</span>
                  <span>
                    {shippingFee === 0
                      ? "Miễn phí"
                      : `${shippingFee.toLocaleString()}đ`}
                  </span>
                </div>
                <div className="flex justify-between text-2xl font-black text-gray-900 pt-5 border-t border-gray-100">
                  <span className="uppercase tracking-tighter">Tổng</span>
                  <span className="text-red-700">
                    {(totalPrice + shippingFee).toLocaleString()}đ
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] mt-8 hover:bg-black transition-all shadow-xl shadow-red-100 active:scale-95 transform"
              >
                Xác nhận thanh toán
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
