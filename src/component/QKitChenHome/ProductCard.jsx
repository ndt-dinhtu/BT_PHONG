import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  description,
  price,
  img,
  isPromo = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-md transition-all duration-300 relative overflow-hidden rounded-sm">
      {isPromo && (
        <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase z-10">
          Combo Tiết Kiệm
        </div>
      )}

      <div className="w-full h-44 overflow-hidden mb-4 bg-gray-50">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-[#a51c1c] font-black text-lg mb-2 uppercase line-clamp-1">
          {name}
        </h3>

        <p className="text-gray-500 text-[13px] mb-4 leading-snug line-clamp-2 min-h-[32px]">
          {description}
        </p>

        <div className="mt-auto">
          <p className="text-sm font-medium text-gray-800 mb-4">
            Giá:{" "}
            <span className="font-bold text-[#a51c1c]">
              {typeof price === "number" ? price.toLocaleString() : price}
            </span>{" "}
            / Phần
          </p>

          <button
            onClick={() => navigate(`/product/${id}`)}
            className="w-full bg-[#e22d2d] cursor-pointer text-white py-2.5 text-xs font-black rounded-sm shadow-[0_4px_0_rgb(165,28,28)] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-wider"
          >
            ĐẶT HÀNG NGAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
