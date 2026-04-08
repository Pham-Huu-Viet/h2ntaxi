"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { hotline } from "@/config/info.config";

export function Header() {
  const { language, changeLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // State để lưu vị trí và chiều rộng của thanh gạch chân
  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t("home", language), href: "/thue-xe-hop-dong" },
    { label: t("airportTransfer", language), href: "/dat-xe-san-bay" },
    { label: t("longDistance", language), href: "/dat-xe-duong-dai" },
  ];

  // Hàm cập nhật vị trí thanh gạch chân
  useEffect(() => {
    const updateActiveStyle = () => {
      if (!navRef.current) return;

      // Tìm thẻ <a> đang active dựa trên href
      const activeLink = navRef.current.querySelector(
        `a[href="${pathname}"]`,
      ) as HTMLElement;

      if (activeLink) {
        // Lấy vị trí của link so với container navRef
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        setActiveStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    };

    // Chạy khi pathname thay đổi hoặc khi resize cửa sổ
    updateActiveStyle();
    window.addEventListener("resize", updateActiveStyle);
    return () => window.removeEventListener("resize", updateActiveStyle);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 h-15 border-b border-gray-200 bg-white/80 px-6 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-primary rounded-md bg-transparent p-1 text-2xl font-extrabold tracking-tighter">
            H2N
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          ref={navRef}
          className="relative hidden h-full items-center gap-8 md:flex"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex h-full items-center text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-primary" : "hover:text-primary text-gray-600"
                }`}
              >
                <span className="px-1">{link.label}</span>
              </Link>
            );
          })}

          {/* Thanh gạch chân duy nhất di chuyển qua lại */}
          <motion.div
            className="bg-primary absolute bottom-2 h-[3px] rounded-full"
            initial={false}
            animate={{
              left: activeStyle.left,
              width: activeStyle.width,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          />
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
            {["en", "vi"].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng as any)}
                className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${
                  language === lng
                    ? "text-primary bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          <HotlineButton className="hidden rounded-full px-4 py-1.5 text-sm sm:block" />

          {/* Mobile Toggle (Giữ nguyên logic của bạn) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 md:hidden"
          >
            <div className="space-y-1.5">
              <motion.div
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 8 : 0,
                }}
                className="h-0.5 w-6 bg-current"
              />
              <motion.div
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className="h-0.5 w-6 bg-current"
              />
              <motion.div
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -8 : 0,
                }}
                className="h-0.5 w-6 bg-current"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Giữ nguyên) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium ${pathname === link.href ? "text-primary" : "text-gray-600"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

const HotlineButton = ({ className = "" }: { className?: string }) => {
  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${hotline}`;
  };

  return (
    <div
      onClick={handleCall}
      className={`relative cursor-pointer overflow-hidden bg-gradient-to-r from-red-800 to-red-600 font-bold text-white shadow-[0_4px_15px_rgba(185,28,28,0.3)] transition-transform select-none active:scale-95 ${className}`}
    >
      <span className="relative z-10">Hotline: {hotline}</span>
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="animate-mirror reflection-glow absolute top-0 h-full w-[40%]" />
      </div>
      <div className="absolute inset-0 z-0 bg-black/5" />
    </div>
  );
};

// Giữ nguyên component HotlineButton của bạn bên dưới...

// // components\layouts\Header.tsx

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { t } from "@/lib/translations";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLanguage } from "@/context/LanguageContext";
// import { hotline } from "@/config/info.config";

// export function Header() {
//   const { language, changeLanguage } = useLanguage();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { label: t("home", language), href: "/thue-xe-hop-dong" },
//     { label: t("airportTransfer", language), href: "/dat-xe-san-bay" },
//     { label: t("longDistance", language), href: "/dat-xe-duong-dai" },
//   ];

//   // Uniform motion configuration variable
//   const smoothTransition = {
//     type: "tween",
//     duration: 0.3,
//     ease: [0, 0.55, 0.45, 1], // circOut
//   };

//   return (
//     <header className="sticky top-0 z-50 h-15 border-b border-gray-200 bg-white/80 px-6 shadow-sm backdrop-blur-md">
//       <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <div className="text-primary rounded-md bg-transparent p-1 text-2xl font-extrabold tracking-tighter">
//             H2N
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden h-full items-center gap-8 md:flex">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`relative flex h-full items-center text-sm font-semibold transition-colors duration-300 ${
//                   isActive ? "text-primary" : "hover:text-primary text-gray-600"
//                 }`}
//               >
//                 <span className="relative z-10 px-1">{link.label}</span>

//                 {/* Underline bar runs at the bottom */}
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeTabHeader"
//                     className="bg-primary absolute right-0 bottom-2 left-0 h-[3px] rounded-full"
//                     transition={smoothTransition}
//                   />
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
//             {["en", "vi"].map((lng) => (
//               <button
//                 key={lng}
//                 onClick={() => changeLanguage(lng as any)}
//                 className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${
//                   language === lng
//                     ? "text-primary bg-white shadow-sm"
//                     : "text-gray-500 hover:text-gray-900"
//                 }`}
//               >
//                 {lng.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           <HotlineButton className="hidden rounded-full px-4 py-1.5 text-sm sm:block" />

//           {/* Mobile Menu Toggle - Change the transition to linear for consistency */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="p-2 text-gray-700 md:hidden"
//           >
//             <div className="space-y-1.5">
//               <motion.div
//                 animate={{
//                   rotate: mobileMenuOpen ? 45 : 0,
//                   y: mobileMenuOpen ? 8 : 0,
//                 }}
//                 transition={{ ease: "linear", duration: 0.2 }}
//                 className="h-0.5 w-6 bg-current"
//               />
//               <motion.div
//                 animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
//                 transition={{ ease: "linear", duration: 0.1 }}
//                 className="h-0.5 w-6 bg-current"
//               />
//               <motion.div
//                 animate={{
//                   rotate: mobileMenuOpen ? -45 : 0,
//                   y: mobileMenuOpen ? -8 : 0,
//                 }}
//                 transition={{ ease: "linear", duration: 0.2 }}
//                 className="h-0.5 w-6 bg-current"
//               />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.nav
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ ease: "linear", duration: 0.3 }}
//             className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
//           >
//             <div className="flex flex-col space-y-4 p-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`text-lg font-medium ${pathname === link.href ? "text-primary" : "text-gray-600"}`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// // Component con cho Hotline
// const HotlineButton = ({ className = "" }: { className?: string }) => {
//   const handleCall = (e: React.MouseEvent) => {
//     e.preventDefault();
//     window.location.href = `tel:${hotline}`;
//   };

//   return (
//     <div
//       onClick={handleCall}
//       className={`relative cursor-pointer overflow-hidden bg-gradient-to-r from-red-800 to-red-600 font-bold text-white shadow-[0_4px_15px_rgba(185,28,28,0.3)] transition-transform select-none active:scale-95 ${className}`}
//     >
//       <span className="relative z-10">Hotline: {hotline}</span>

//       {/* Mirror layer glides through */}
//       <div className="pointer-events-none absolute inset-0 z-20">
//         <div className="animate-mirror reflection-glow absolute top-0 h-full w-[40%]" />
//       </div>

//       {/* Overlay highlight */}
//       <div className="absolute inset-0 z-0 bg-black/5" />
//     </div>
//   );
// };
