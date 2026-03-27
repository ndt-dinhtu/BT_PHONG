import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; // Nếu bạn dùng React Router

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden text-white font-sans">
      
      {/* Hiệu ứng các vì sao lấp lánh đằng sau */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Số 404 khổng lồ với hiệu ứng Floating */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.h1 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-800"
        >
          404
        </motion.h1>

        {/* Thông điệp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Oops! Bạn đã lạc vào khoảng không vô định.
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Trang bạn đang tìm kiếm đã trôi dạt ra ngoài vũ trụ hoặc không còn tồn tại nữa.
          </p>
        </motion.div>

        {/* Nút điều hướng */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <Home size={18} />
              Về trang chủ
            </motion.button>
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            <ArrowLeft size={18} />
            Quay lại
          </button>
        </div>
      </motion.div>

      {/* Một cái hành tinh mờ mờ cho đẹp */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-900/20 rounded-full blur-[100px] z-0" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-900/20 rounded-full blur-[100px] z-0" />
    </div>
  );
};

export default NotFound;