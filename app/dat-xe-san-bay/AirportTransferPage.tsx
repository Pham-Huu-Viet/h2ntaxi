// app\dat-xe-san-bay\AirportTransferPage.tsx

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CardUI } from "@/components/ui/CardUI";
import { airportData } from "@/data/airport-taxi";
import { airportText as text } from "@/config/text.config";
import { useLanguage } from "@/context/LanguageContext";
import { QuickPriceChecker } from "@/components/sections/QuickPriceChecker";

const pxTable = "px-1 md:px-6";
const pxSTT = "px-1 md:px-4";

// --- Constant Velocity Configuration ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Shorter beats for a smoother feel.
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4, // Short duration allows for decisive movement.
      ease: "linear", // Absolutely no acceleration
    },
  },
};

export default function AirportTransferPage() {
  const { language, isLoading } = useLanguage();
  const lang = language || "vi";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isLoading || !mounted) return <div className="min-h-screen bg-white" />;

  const PriceTable = ({
    title,
    data,
  }: {
    title: string;
    data: typeof airportData.toAirport;
  }) => (
    <div className="flex flex-col gap-6">
      <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800">
        <div className="bg-primary h-8 w-2 rounded-full" />
        {title}
      </h3>
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl md:rounded-3xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className={`py-4 text-center${pxSTT}`}>
                  {text.table.colNo[lang]}
                </th>
                <th className={`py-4 text-center${pxTable}`}>
                  {text.table.colDistrict[lang]}
                </th>
                <th className={`py-4 text-center${pxTable}`}>
                  {lang === "vi" ? "Xe 5 chỗ" : "5-Seater"}
                </th>
                <th className={`py-4 text-center${pxTable}`}>
                  {lang === "vi" ? "Xe 7 chỗ" : "7-Seater"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((item, idx) => (
                <tr key={idx} className="hover:bg-primary/5 transition-colors">
                  <td className={`py-3 text-center text-gray-400 ${pxSTT}`}>
                    {idx + 1}
                  </td>
                  <td className={`py-3 text-gray-800 ${pxTable}`}>
                    {item.district}
                  </td>
                  <td className={`text-primary py-3 text-center ${pxTable}`}>
                    {item.price.seats5.toLocaleString()}đ
                  </td>
                  <td className={`text-primary py-3 text-center ${pxTable}`}>
                    {item.price.seats7.toLocaleString()}đ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section
        className="relative h-[calc(100vh-60px)] bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg-airport.png)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-5">
          <div className="flex flex-col gap-12">
            {/* TEXT: Slide LEFT IN - Linear */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h1
                variants={itemVariants}
                className="leading-tight font-bold text-white"
              >
                {text.hero.title[lang]}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="max-w-2xl text-white/90"
              >
                {text.hero.subTitle[lang]}
              </motion.p>

              <div className="space-y-3 text-white/85">
                {text.hero.checkpoints.map((item, idx) => (
                  <motion.p
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex-shrink-0 font-bold text-green-400">
                      ✓
                    </span>
                    <span>{item[lang]}</span>
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* CHECKER: Slide BOTTOM UP - Linear, Simultaneously */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "linear",
                delay: 0.3,
              }}
            >
              <QuickPriceChecker />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRICE LIST SECTION --- */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center font-bold text-gray-900">
            {text.table.title[lang]}
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <PriceTable
              title={
                lang === "vi"
                  ? "Chiều đi: Hà Nội → Nội Bài"
                  : "Route: Hanoi → Noi Bai"
              }
              data={airportData.toAirport}
            />
            <PriceTable
              title={
                lang === "vi"
                  ? "Chiều về: Nội Bài → Hà Nội"
                  : "Route: Noi Bai → Hanoi"
              }
              data={airportData.fromAirport}
            />
          </div>
        </div>
      </section>

      {/* Why choose H2N? */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center font-light text-gray-900">
            {text.features.sectionTitle[lang]}
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {text.features.items.map((feature, idx) => {
              // Get the Icon component from the data
              const Icon = feature.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CardUI className="group h-full border-none bg-gray-50 p-10 text-center transition-all hover:shadow-2xl">
                    <div className="bg-primary shadow-primary/30 mx-auto mb-6 flex h-16 w-16 -rotate-6 transform items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-0">
                      {Icon && (
                        <Icon size={32} strokeWidth={1.2} absoluteStrokeWidth />
                      )}
                    </div>
                    <h5 className="mb-4 font-bold text-gray-900">
                      {feature.title[lang]}
                    </h5>
                    <p className="leading-relaxed text-gray-600">
                      {feature.desc[lang]}
                    </p>
                  </CardUI>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
