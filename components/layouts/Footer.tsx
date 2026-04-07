"use client";

import React from "react";
import Link from "next/link";
import { t } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";
import { hotline } from "@/config/info.config";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="text-primary mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-lg font-bold shadow-lg">
              H2N
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              H2N Taxi Services
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("footerDesc", language)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              {t("quickLinks", language)}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary text-gray-400 transition-colors"
                >
                  {t("home", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="/contract"
                  className="hover:text-primary text-gray-400 transition-colors"
                >
                  {t("contractRental", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="/long-distance"
                  className="hover:text-primary text-gray-400 transition-colors"
                >
                  {t("longDistance", language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              {t("contact", language)}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span> {hotline}
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span> info@h2ntaxi.vn
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> {t("hanoi", language)}, {t("hcmc", language)}
              </li>
              <li className="text-primary flex items-center gap-2 font-medium">
                <span>💬</span> {t("available247", language)}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              {t("hours", language)}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-gray-300">{t("monFri", language)}:</span>{" "}
                5am - 10pm
              </li>
              <li>
                <span className="text-gray-300">{t("satSun", language)}:</span>{" "}
                24/7
              </li>
              <li>
                <span className="text-gray-300">
                  {t("holidays", language)}:
                </span>{" "}
                24/7
              </li>
              <li>
                <span className="font-medium text-red-400">
                  {t("emergency", language)}:
                </span>{" "}
                {t("anytime", language)}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} H2N Taxi Services.{" "}
              {t("rightsReserved", language)}
            </p>
            <div className="mt-4 flex gap-6 md:mt-0">
              <Link href="#" className="hover:text-primary transition-colors">
                {t("privacyPolicy", language)}
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                {t("termsOfService", language)}
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                {t("contactUs", language)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// "use client";

// import React from "react";
// import Link from "next/link";
// import { t } from "@/lib/translations";
// import { useLanguage } from "@/context/LanguageContext";

// export function Footer() {
//   const { language } = useLanguage();

//   return (
//     <footer className="bg-gray-900 px-6 py-12 text-white">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
//           {/* Brand */}
//           <div>
//             <div className="bg-primary mb-3 flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold text-white">
//               H2N
//             </div>
//             <h3 className="mb-2 text-xl font-bold text-white">
//               H2N Taxi Services
//             </h3>
//             <p className="text-sm leading-relaxed text-gray-400">
//               Premium taxi services across Vietnam. Professional, reliable, and
//               affordable transportation solutions.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   href="/"
//                   className="hover:text-primary text-gray-400 transition-colors"
//                 >
//                   {t("home", language)}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contract"
//                   className="hover:text-primary text-gray-400 transition-colors"
//                 >
//                   {t("contractRental", language)}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/long-distance"
//                   className="hover:text-primary text-gray-400 transition-colors"
//                 >
//                   {t("longDistance", language)}
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="mb-4 font-semibold text-white">Contact</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>📞 +84 912 345 678</li>
//               <li>📧 info@h2ntaxi.vn</li>
//               <li>📍 Hanoi, Ho Chi Minh City</li>
//               <li>💬 Available 24/7</li>
//             </ul>
//           </div>

//           {/* Hours */}
//           <div>
//             <h4 className="mb-4 font-semibold text-white">Hours</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>Monday - Friday: 5am - 10pm</li>
//               <li>Saturday - Sunday: 24/7</li>
//               <li>Public Holidays: 24/7</li>
//               <li>Emergency: Available anytime</li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
//             <p>&copy; 2024 H2N Taxi Services. All rights reserved.</p>
//             <div className="mt-4 flex gap-6 md:mt-0">
//               <Link href="#" className="hover:text-primary transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="#" className="hover:text-primary transition-colors">
//                 Terms of Service
//               </Link>
//               <Link href="#" className="hover:text-primary transition-colors">
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
