import React from "react";

import Navbar from "./Navbar";
const ProductCard = ({ name, description, price, img }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
    <img
      src={img}
      alt={name}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-red-700 font-bold text-xl">{name}</h3>
    <p className="text-gray-600 text-sm text-center my-2">{description}</p>
    <p className="font-semibold text-gray-800 mb-3">Giá: {price} / Phần</p>
    <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
      ĐẶT HÀNG
    </button>
  </div>
);

const QKitchenHome = () => {
  return (
    <div className="bg-[#fdf8f2] min-h-screen font-sans">
      {/* Hero Banner Section */}
      <div className="max-w-6xl mx-auto mt-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-700 text-white p-8 flex flex-col justify-center rounded-l-md">
            <h2 className="text-2xl font-bold">Ưu đãi giảm 20%</h2>
            <p>tất cả các món!</p>
            <p className="text-xs mt-4 italic">Giảm đến cuối tuần</p>
          </div>
          <div className="col-span-2">
            <img
              src="https://images.unsplash.com/photo-1563245332-692546982844?q=80&w=1000"
              alt="Dimsum Banner"
              className="w-full h-64 object-cover rounded-r-md"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-center text-red-700 text-2xl font-bold mb-8 uppercase tracking-widest">
          Sản phẩm của chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            name="Sủi Cảo"
            description="Vỏ mỏng, nhân thịt tươi ngon."
            price="55.000đ"
            img="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=500"
          />
          <ProductCard
            name="Há Cảo"
            description="Há cảo tôm hấp mềm mại."
            price="60.000đ"
            img="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=500"
          />
          <ProductCard
            name="Xíu Mại"
            description="Nhân thịt và tôm thơm ngon."
            price="50.000đ"
            img="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/Cach_lam_xiu_mai_truyen_thong_ac0c4575bf.png"
          />
        </div>
      </div>
    </div>
  );
};

export default QKitchenHome;
