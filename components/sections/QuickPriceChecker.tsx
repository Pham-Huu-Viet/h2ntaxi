// components\sections\QuickPriceChecker.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonUI } from "@/components/ui/ButtonUI";
import { CardUI } from "@/components/ui/CardUI";
import { airportData } from "@/data/airport-taxi";
import { airportText as text } from "@/config/text.config";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, MapPin, Check, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { IoCallOutline } from "react-icons/io5";
import { hotline } from "@/config/info.config";

export function QuickPriceChecker() {
  const { language } = useLanguage();
  const [tripType, setTripType] = useState<"to-airport" | "from-airport">(
    "to-airport",
  );
  const [selectedLocation, setSelectedLocation] = useState("");
  const [carType, setCarType] = useState<"seats5" | "seats7">("seats5");
  const [quickPrice, setQuickPrice] = useState<number | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState<"down" | "up">(
    "down",
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const carDropdownRef = useRef<HTMLDivElement>(null);

  const lang = language || "vi";
  const isToAirport = tripType === "to-airport";
  const availableLocations = isToAirport
    ? airportData.toAirport
    : airportData.fromAirport;

  const smoothTransition = { duration: 0.4, ease: [0.32, 0.72, 0, 1] };

  const handleCall = () => {
    window.location.href = `tel:${hotline}`;
  };

  // Tính toán hướng hiển thị dropdown (Up/Down)
  const handleDropdownToggle = (type: "district" | "car") => {
    const ref = type === "district" ? dropdownRef : carDropdownRef;
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setDropdownDirection(spaceBelow < 300 ? "up" : "down");
    }
    if (type === "district") {
      setIsDropdownOpen(!isDropdownOpen);
      setIsCarDropdownOpen(false);
    } else {
      setIsCarDropdownOpen(!isCarDropdownOpen);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (selectedLocation) {
      const selected = availableLocations.find(
        (item) => item.district === selectedLocation,
      );
      if (selected) setQuickPrice(selected.price[carType]);
    } else setQuickPrice(null);
  }, [selectedLocation, carType, tripType, availableLocations]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      )
        setIsDropdownOpen(false);
      if (
        carDropdownRef.current &&
        !carDropdownRef.current.contains(event.target as Node)
      )
        setIsCarDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <CardUI
      className="w-full max-w-2xl border-none bg-white p-6 shadow-2xl md:p-8"
      isHoverable={false}
    >
      {/* TABS TRƯỢT */}
      <div className="relative mb-8 flex gap-1 rounded-2xl bg-gray-100 p-1">
        <motion.div
          layoutId="activeTab"
          className="bg-primary absolute inset-y-1 rounded-xl"
          animate={{ x: isToAirport ? "0%" : "100%" }}
          style={{ width: "calc(50% - 4px)" }}
          transition={smoothTransition}
        />
        <button
          onClick={() => {
            setTripType("to-airport");
            setSelectedLocation("");
          }}
          className={cn(
            "relative z-10 flex-1 py-3 font-bold transition-colors",
            isToAirport ? "text-white" : "text-gray-500",
          )}
        >
          {text.card.toAirport[lang]}
        </button>
        <button
          onClick={() => {
            setTripType("from-airport");
            setSelectedLocation("");
          }}
          className={cn(
            "relative z-10 flex-1 py-3 font-bold transition-colors",
            !isToAirport ? "text-white" : "text-gray-500",
          )}
        >
          {text.card.fromAirport[lang]}
        </button>
      </div>

      {/* SELECTIONS GRID */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Điểm cố định (Sân bay) */}
        <div>
          <label className="mb-2 block px-1 text-xs font-bold text-gray-400 uppercase">
            {isToAirport ? text.card.destination[lang] : text.card.pickup[lang]}
          </label>
          <div className="flex w-full items-center gap-3 rounded-xl border-2 border-gray-50 bg-gray-50 px-4 py-3 font-bold text-gray-800">
            <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />{" "}
            {/* Nội Bài Airport */}
            {text.card.airport[lang]}
          </div>
        </div>

        {/* Dropdown Quận/Huyện */}
        <div className="relative" ref={dropdownRef}>
          <label className="mb-2 block px-1 text-xs font-bold text-gray-400 uppercase">
            {isToAirport ? text.card.pickup[lang] : text.card.destination[lang]}
          </label>
          <div
            onClick={() => handleDropdownToggle("district")}
            className={cn(
              "flex cursor-pointer items-center justify-between rounded-xl border-2 px-4 py-3 font-bold transition-all",
              isDropdownOpen
                ? "border-primary ring-primary/10 bg-white ring-4"
                : "border-gray-100 bg-gray-50/50",
            )}
          >
            <div className="flex items-center gap-2 truncate text-gray-800">
              <MapPin size={18} className="text-primary" />
              {selectedLocation || text.card.selectDistrict[lang]}
            </div>
            <ChevronDown
              size={20}
              className={cn(
                "transition-transform",
                isDropdownOpen && "rotate-180",
              )}
            />
          </div>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: dropdownDirection === "down" ? 10 : -10,
                }}
                animate={{
                  opacity: 1,
                  y: dropdownDirection === "down" ? 4 : -4,
                }}
                exit={{
                  opacity: 0,
                  y: dropdownDirection === "down" ? 10 : -10,
                }}
                className={cn(
                  "absolute z-[999] w-full overflow-hidden rounded-2xl border bg-white shadow-xl",
                  dropdownDirection === "up"
                    ? "bottom-full mb-2"
                    : "top-full mt-2",
                )}
              >
                <div className="max-h-[250px] overflow-y-auto py-2">
                  {availableLocations.map((loc) => (
                    <div
                      key={loc.district}
                      onClick={() => {
                        setSelectedLocation(loc.district);
                        setIsDropdownOpen(false);
                      }}
                      className="hover:bg-primary/5 flex cursor-pointer items-center justify-between px-5 py-2 font-semibold text-gray-700"
                    >
                      {loc.district}
                      {selectedLocation === loc.district && (
                        <Check size={16} className="text-primary" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dropdown Vehicle Type */}
        <div className="relative" ref={carDropdownRef}>
          <label className="mb-2 block px-1 text-xs font-bold text-gray-400 uppercase">
            {text.card.carType[lang]}{" "}
          </label>
          <div
            onClick={() => handleDropdownToggle("car")}
            className={cn(
              "flex cursor-pointer items-center justify-between rounded-xl border-2 px-4 py-3 font-bold transition-all",
              isCarDropdownOpen
                ? "border-primary ring-primary/10 bg-white ring-4"
                : "border-gray-100 bg-gray-50/50",
            )}
          >
            <div className="flex items-center gap-2 text-gray-800">
              <Car size={18} className="text-primary" />
              {carType === "seats5"
                ? text.card.seats5[lang]
                : text.card.seats7[lang]}
            </div>
            <ChevronDown
              size={20}
              className={cn(
                "transition-transform",
                isCarDropdownOpen && "rotate-180",
              )}
            />
          </div>
          <AnimatePresence>
            {isCarDropdownOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: dropdownDirection === "down" ? 10 : -10,
                }}
                animate={{
                  opacity: 1,
                  y: dropdownDirection === "down" ? 4 : -4,
                }}
                exit={{
                  opacity: 0,
                  y: dropdownDirection === "down" ? 10 : -10,
                }}
                className={cn(
                  "absolute z-[999] w-full overflow-hidden rounded-2xl border bg-white shadow-xl",
                  dropdownDirection === "up"
                    ? "bottom-full mb-2"
                    : "top-full mt-2",
                )}
              >
                <div
                  onClick={() => {
                    setCarType("seats5");
                    setIsCarDropdownOpen(false);
                  }}
                  className="hover:bg-primary/5 flex cursor-pointer items-center justify-between px-5 py-3 font-semibold text-gray-700"
                >
                  {text.card.seats5[lang]}
                  {carType === "seats5" && (
                    <Check size={16} className="text-primary" />
                  )}
                </div>
                <div
                  onClick={() => {
                    setCarType("seats7");
                    setIsCarDropdownOpen(false);
                  }}
                  className="hover:bg-primary/5 flex cursor-pointer items-center justify-between px-5 py-3 font-semibold text-gray-700"
                >
                  {text.card.seats7[lang]}
                  {carType === "seats7" && (
                    <Check size={16} className="text-primary" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Display price and call button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {quickPrice && (
          <div className="bg-primary/5 border-primary flex h-16 flex-1 items-center rounded-2xl border-l-4 px-6">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">
                {text.card.priceFrom[lang]}
              </p>
              <p className="text-primary text-3xl font-black">
                {quickPrice.toLocaleString()} <span className="text-lg">đ</span>
              </p>
            </div>
          </div>
        )}
        <ButtonUI
          variant="primary"
          size="lg"
          className={cn(
            "h-16 flex-1 cursor-pointer rounded-2xl text-xl font-black shadow-xl",
            !selectedLocation && "opacity-50",
          )}
          disabled={!selectedLocation}
          onClick={handleCall}
        >
          <IoCallOutline size={24} className="mr-2" /> {text.card.callNow[lang]}
        </ButtonUI>
      </div>
    </CardUI>
  );
}
