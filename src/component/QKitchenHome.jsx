import React from "react";
import { Link } from "react-router-dom";
import BannerHero from "./QKitChenHome/BannerHero";
import ProductSlider from "./QKitChenHome/ProductSlider";
import ProductCard from "./QKitChenHome/ProductCard";
import {productsData} from "../dataHome.js";

const QKitchenHome = () => {
  return (
    <div className="bg-[#f2efe9] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <BannerHero />

        <ProductSlider products={productsData} />

        {/* Section Combo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-10">
          <div className="md:col-span-4 bg-[#be1e2d] p-10 text-white flex flex-col justify-center relative overflow-hidden rounded-sm shadow-xl min-h-[350px]">
            <div className="relative z-10">
              <h3 className="text-4xl font-black italic mb-4 uppercase">
                Combo <br /> Gia Đình
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Thưởng thức trọn vẹn tinh hoa Quảng Đông tiết kiệm nhất.
              </p>
              <Link
                to="/product"
                className="inline-block bg-white text-[#be1e2d] px-8 py-3 font-black text-xs uppercase hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Khám phá ngay
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProductCard
              id={1}
              isPromo
              name="Sủi Cảo Viên Mix"
              description="Tổng hợp các loại sủi cảo bán chạy nhất."
              price={70000}
              img="https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mizr4q8lfif64c@resize_w900_nl.webp"
            />
            <ProductCard
              id={11}
              isPromo
              name="Há Cảo Thủy Tinh"
              description="Sự lựa chọn hoàn hảo cho người thích tôm tươi."
              price={62000}
              img="https://product.hstatic.net/200000299178/product/5_fc7c9024ca044bc1939ace90406015ef_1024x1024.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QKitchenHome;
