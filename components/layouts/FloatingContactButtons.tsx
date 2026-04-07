"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { SiZalo } from "react-icons/si";
import { hotline } from "@/config/info.config";

export function FloatingContactButtons() {
  const handleCall = () => {
    window.location.href = `tel:${hotline}`;
  };

  const handleZalo = () => {
    window.open(`https://zalo.me/${hotline}`, "_blank");
  };

  return (
    <motion.div
      className="fixed right-8 bottom-8 z-40 flex flex-col gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Call Button */}
      <motion.button
        onClick={handleCall}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="from-primary to-accent group relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br text-2xl text-white shadow-lg select-none"
      >
        {/* Icon PhoneCall với hiệu ứng lắc */}
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 10, 0], // Xoay qua lại
          }}
          transition={{
            duration: 0.5, // Chạy nhanh trong 0.5 giây
            repeat: Infinity, // Lặp vô hạn
            repeatDelay: 0, // Nghỉ 0 giây trước khi lắc lại
            ease: "easeInOut",
          }}
          className="flex items-center justify-center"
        >
          <PhoneCall size={32} strokeWidth={1.2} />
        </motion.div>

        {/* Hiệu ứng vòng sóng lan tỏa giữ nguyên */}
        <motion.div
          className="border-primary pointer-events-none absolute inset-0 rounded-full border-2"
          animate={{ scale: [1.2, 1.4], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>

      {/* Zalo Button */}
      <motion.button
        onClick={handleZalo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-2xl text-white shadow-lg select-none"
      >
        <SiZalo size={32} />
      </motion.button>
    </motion.div>
  );
}
