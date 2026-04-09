"use client";

import { hotline } from "@/config/info.config";
import { useLanguage } from "@/context/LanguageContext";
import { longDistanceData, LongDistanceRoute } from "@/data/long-distance";
import { motion } from "framer-motion";

const pxTable = "px-4 md:px-6";

export default function LongDistancePage() {
  const { language } = useLanguage();
  const lang = (language as "vi" | "en") || "vi";

  const handleCall = () => {
    window.location.href = `tel:${hotline}`;
  };

  const PriceTable = ({ carKey }: { carKey: "car5" | "car7" }) => {
    const data = longDistanceData[carKey];

    const formatRouteName = (route: LongDistanceRoute) => {
      const from = route.from[lang];
      const to = route.to[lang];
      if (from === to) return from;
      if (from === "Liên tỉnh" || from === "Interprovincial") {
        return `${from} ${to.toLowerCase()}`;
      }
      return `${from} — ${to}`;
    };

    return (
      <div className="mb-16">
        <div className="mb-6 flex flex-col gap-4">
          <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <div className="bg-primary h-8 w-2 rounded-full" />
            {data.title[lang]}
          </h3>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl md:rounded-3xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className={`py-5 text-center ${pxTable}`}>
                    {lang === "en" ? "Route" : "Quãng đường"}
                  </th>
                  <th className={`py-5 text-center ${pxTable}`}>
                    {lang === "en" ? "Price" : "Đơn giá"}
                  </th>
                  <th className={`py-5 text-center ${pxTable}`}>
                    {lang === "en" ? "Limit" : "Số Km/Giờ"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.routes.map((route, idx) => {
                  const currentName = formatRouteName(route);
                  let rowSpan = 1;
                  const isFirstOfGroup =
                    idx === 0 ||
                    formatRouteName(data.routes[idx - 1]) !== currentName;

                  if (isFirstOfGroup) {
                    let j = idx + 1;
                    while (
                      j < data.routes.length &&
                      formatRouteName(data.routes[j]) === currentName
                    ) {
                      rowSpan++;
                      j++;
                    }
                  }

                  return (
                    <tr
                      key={idx}
                      className="group transition-colors hover:bg-red-50/40"
                    >
                      {isFirstOfGroup && (
                        <td
                          rowSpan={rowSpan}
                          className={`border-r border-gray-50 bg-white py-3 font-medium text-gray-800 transition-colors group-hover:bg-red-50/40 ${pxTable}`}
                        >
                          {currentName}
                        </td>
                      )}
                      <td
                        className={`text-primary py-3 text-center font-semibold transition-colors ${pxTable}`}
                      >
                        {route.price.toLocaleString()}đ
                      </td>
                      <td
                        className={`py-3 text-center text-gray-600 transition-colors ${pxTable}`}
                      >
                        {route.limit}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative flex h-80 items-center justify-center bg-cover bg-center md:h-100"
        style={{ backgroundImage: "url(/hero-bg-contract.png)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-white md:text-6xl">
              {language === "en"
                ? "Long Distance Travel"
                : "Taxi Đường Dài Giá Rẻ"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              {language === "en"
                ? "Comfortable and safe transportation across provinces"
                : "Dịch vụ taxi liên tỉnh chuyên nghiệp, xe đời mới, tài xế tận tâm, đưa đón tận nhà."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <PriceTable carKey="car5" />
          <PriceTable carKey="car7" />

          {/* Benefits Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                {lang === "en" ? "Service Benefits" : "Lợi ích dịch vụ tại H2N"}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  {lang === "en"
                    ? "New cars with AC"
                    : "Dàn xe đời mới (2023-2025), sạch sẽ, không mùi."}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  {lang === "en"
                    ? "Punctual & Professional"
                    : "Tài xế chuyên nghiệp, giàu kinh nghiệm đường trường."}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  {lang === "en"
                    ? "Door-to-door service"
                    : "Đưa đón tận nơi theo yêu cầu, không bắt khách dọc đường."}
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
              <div>
                <h4 className="mb-4 text-xl font-bold text-gray-900">
                  {lang === "en" ? "Support" : "Hỗ trợ đặt xe 24/7"}
                </h4>
                <p className="text-gray-600">
                  {lang === "en"
                    ? "Contact us for detailed quotes on specific routes."
                    : "Đội ngũ tổng đài luôn sẵn sàng tư vấn và báo giá chi tiết cho mọi hành trình liên tỉnh của bạn."}
                </p>
              </div>
              <button
                onClick={handleCall}
                className="bg-primary shadow-primary/30 mt-6 cursor-pointer rounded-full px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                Gọi ngay: {hotline}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHẦN NỘI DUNG SEO CHI TIẾT --- */}
      <section className="border-t border-gray-100 bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <article className="prose prose-red max-w-none leading-relaxed text-gray-700">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">
                Dịch Vụ Taxi Đường Dài Hà Nội Đi Tỉnh{" "}
                <br className="hidden md:block" /> Giá Rẻ - Xe Riêng - An Toàn
              </h2>
              <div className="bg-primary mx-auto h-1.5 w-24 rounded-full"></div>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="border-primary border-l-4 pl-4 text-2xl font-bold text-gray-900">
                    Taxi liên tỉnh - Giải pháp về quê và du lịch tối ưu
                  </h3>
                  <p className="text-justify text-lg">
                    Nhu cầu di chuyển từ Hà Nội đi các tỉnh thành như{" "}
                    <strong>
                      Quảng Ninh, Hải Phòng, Nam Định, Thái Bình, hay Thanh Hóa
                    </strong>{" "}
                    luôn rất lớn. Thay vì phải phụ thuộc vào giờ giấc của xe
                    khách hay chịu đựng sự chật chội, dịch vụ{" "}
                    <strong>taxi đường dài</strong> của H2N Taxi mang đến sự
                    riêng tư và thoải mái tuyệt đối. Chúng tôi cung cấp các dòng
                    xe 4 chỗ và 7 chỗ đời mới, phù hợp cho cả nhu cầu về quê
                    thăm thân lẫn đi du lịch, công tác.
                  </p>
                  <p className="text-justify text-lg">
                    Với mức giá cước được tính toán tối ưu, quý khách sẽ nhận
                    được dịch vụ chất lượng cao với chi phí vô cùng phải chăng.
                    Đặc biệt, khi đặt xe đi tỉnh hai chiều, H2N Taxi luôn có
                    những chính sách giảm giá sâu cho chiều về, giúp chuyến đi
                    của bạn thêm phần tiết kiệm.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-8">
                  <h4 className="mb-4 text-xl font-bold text-gray-900">
                    Các dòng xe phục vụ đường dài:
                  </h4>
                  <p className="mb-6">
                    Chúng tôi tuyển chọn những mẫu xe có độ ổn định cao, khoang
                    ngồi rộng rãi để đảm bảo sự thoải mái cho hành trình xa:
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 font-medium">
                      ● Toyota Vios
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      ● Hyundai Accent
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      ● Mitsubishi Xpander
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      ● Toyota Veloz
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      ● Nissan Terra
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      ● VinFast Limo Green
                    </li>
                  </ul>
                  <p className="mt-6 text-sm text-gray-500 italic">
                    * Tất cả xe đều được vệ sinh sạch sẽ, không mùi thuốc lá và
                    bảo trì thường xuyên.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Tại sao nên chọn đặt xe đường dài tại H2N Taxi?
                </h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h5 className="text-primary mb-3 font-bold">
                      Giá cước minh bạch
                    </h5>
                    <p className="text-sm">
                      Báo giá trọn gói ngay khi đặt xe, cam kết không phát sinh
                      chi phí ẩn trong suốt hành trình.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h5 className="text-primary mb-3 font-bold">
                      Tài xế kinh nghiệm
                    </h5>
                    <p className="text-sm">
                      Đội ngũ lái xe am hiểu các tuyến đường tỉnh, có kinh
                      nghiệm chạy đường trường, lái xe an toàn và điềm đạm.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h5 className="text-primary mb-3 font-bold">
                      Đưa đón tận nơi
                    </h5>
                    <p className="text-sm">
                      Dù bạn ở ngõ nhỏ hay nhà cao tầng, tài xế luôn sẵn sàng
                      đón tận cửa và trả khách đúng điểm dừng yêu cầu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-10 rounded-[2.5rem] bg-gray-900 p-10 text-white md:flex-row">
                <div className="flex-1 space-y-4">
                  <h3 className="text-primary text-2xl font-bold">
                    Cam kết về chất lượng hành trình
                  </h3>
                  <p className="opacity-90">
                    H2N Taxi không chỉ cung cấp một phương tiện di chuyển, chúng
                    tôi mang đến sự an tâm. Mọi chuyến{" "}
                    <strong>taxi đường dài Hà Nội</strong> đều được theo dõi qua
                    hệ thống GPS để đảm bảo an toàn. Tài xế của chúng tôi luôn
                    giữ thái độ lịch sự, hỗ trợ hành khách mang vác hành lý và
                    sẵn sàng dừng đỗ nghỉ ngơi theo yêu cầu của quý khách trên
                    dọc đường đi.
                  </p>
                </div>
                <div className="flex-shrink-0 space-y-2 text-center">
                  <p className="text-sm tracking-widest uppercase opacity-60">
                    Hotline đặt xe 24/7
                  </p>
                  <p className="text-3xl font-bold text-white">{hotline}</p>
                  <p className="text-xs italic opacity-60">
                    Gọi ngay để nhận báo giá ưu đãi nhất
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-10 text-center">
                <h4 className="text-primary mb-4 text-2xl font-bold italic">
                  H2N Taxi - "Đồng hành tin cậy trên mọi nẻo đường"
                </h4>
                <p className="mx-auto max-w-4xl text-gray-600">
                  Hãy để chuyến về quê hay kỳ nghỉ du lịch của bạn trở nên trọn
                  vẹn hơn với dịch vụ <strong>taxi đường dài giá rẻ</strong> của
                  chúng tôi. Với đội xe đa dạng từ sedan 4 chỗ đến SUV 7 chỗ,
                  H2N Taxi tự tin đáp ứng mọi tiêu chuẩn khắt khe nhất của hành
                  khách.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

// // app\dat-xe-duong-dai\LongDistancePage.tsx

// "use client";

// import { hotline } from "@/config/info.config";
// import { useLanguage } from "@/context/LanguageContext";
// import { longDistanceData, LongDistanceRoute } from "@/data/long-distance";
// import { motion } from "framer-motion";

// const pxTable = "px-4 md:px-6";

// export default function LongDistancePage() {
//   const { language } = useLanguage();
//   const lang = (language as "vi" | "en") || "vi";

//   const handleCall = () => {
//     window.location.href = `tel:${hotline}`;
//   };

//   const PriceTable = ({ carKey }: { carKey: "car5" | "car7" }) => {
//     const data = longDistanceData[carKey];

//     const formatRouteName = (route: LongDistanceRoute) => {
//       const from = route.from[lang];
//       const to = route.to[lang];
//       if (from === to) return from;
//       if (from === "Liên tỉnh" || from === "Interprovincial") {
//         return `${from} ${to.toLowerCase()}`;
//       }
//       return `${from} — ${to}`;
//     };

//     return (
//       <div className="mb-16">
//         <div className="mb-6 flex flex-col gap-4">
//           <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800">
//             <div className="bg-primary h-8 w-2 rounded-full" />
//             {data.title[lang]}
//           </h3>
//         </div>

//         <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl md:rounded-3xl">
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-800 text-white">
//                   <th className={`py-5 text-center ${pxTable}`}>
//                     {lang === "en" ? "Route" : "Quãng đường"}
//                   </th>
//                   <th className={`py-5 text-center ${pxTable}`}>
//                     {lang === "en" ? "Price" : "Đơn giá"}
//                   </th>
//                   <th className={`py-5 text-center ${pxTable}`}>
//                     {lang === "en" ? "Limit" : "Số Km/Giờ"}
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {data.routes.map((route, idx) => {
//                   const currentName = formatRouteName(route);

//                   // Tính toán rowSpan cho nhóm trùng tên
//                   let rowSpan = 1;
//                   const isFirstOfGroup =
//                     idx === 0 ||
//                     formatRouteName(data.routes[idx - 1]) !== currentName;

//                   if (isFirstOfGroup) {
//                     let j = idx + 1;
//                     while (
//                       j < data.routes.length &&
//                       formatRouteName(data.routes[j]) === currentName
//                     ) {
//                       rowSpan++;
//                       j++;
//                     }
//                   }

//                   return (
//                     <tr
//                       key={idx}
//                       className="group transition-colors hover:bg-red-50/40"
//                     >
//                       {isFirstOfGroup && (
//                         <td
//                           rowSpan={rowSpan}
//                           className={`border-r border-gray-50 bg-white py-3 font-medium text-gray-800 transition-colors group-hover:bg-red-50/40 ${pxTable}`}
//                         >
//                           {currentName}
//                         </td>
//                       )}
//                       <td
//                         className={`text-primary py-3 text-center transition-colors ${pxTable}`}
//                       >
//                         {route.price.toLocaleString()}đ
//                       </td>
//                       <td
//                         className={`py-3 text-center text-gray-600 transition-colors ${pxTable}`}
//                       >
//                         {route.limit}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <section
//         className="relative flex h-80 items-center justify-center bg-cover bg-center md:h-100"
//         style={{ backgroundImage: "url(/hero-bg-contract.png)" }}
//       >
//         <div className="absolute inset-0 bg-black/55" />
//         <div className="z-10 mx-auto max-w-7xl text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="mb-4 font-bold text-white md:text-6xl">
//               {language === "en" ? "Long Distance Travel" : "Đặt xe đường dài"}
//             </h1>
//             <p className="text-white/90">
//               {language === "en"
//                 ? "Comfortable transportation"
//                 : "Vận chuyển đường dài chuyên nghiệp"}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="bg-gray-50 px-6 py-20">
//         <div className="mx-auto max-w-5xl">
//           <PriceTable carKey="car5" />
//           <PriceTable carKey="car7" />

//           {/* Benefits Cards */}
//           <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
//               <h4 className="mb-4 text-xl font-bold text-gray-900">
//                 {lang === "en" ? "Service Benefits" : "Lợi ích dịch vụ"}
//               </h4>
//               <ul className="space-y-3 text-gray-600">
//                 <li>
//                   ✓{" "}
//                   {lang === "en"
//                     ? "New cars with AC"
//                     : "Xe đời mới, điều hòa mát mẻ"}
//                 </li>
//                 <li>
//                   ✓{" "}
//                   {lang === "en"
//                     ? "Punctual & Professional"
//                     : "Đúng giờ & Chuyên nghiệp"}
//                 </li>
//                 <li>
//                   ✓ {lang === "en" ? "Door-to-door service" : "Đưa đón tận nơi"}
//                 </li>
//               </ul>
//             </div>
//             <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
//               <h4 className="mb-4 text-xl font-bold text-gray-900">
//                 {lang === "en" ? "Support" : "Hỗ trợ"}
//               </h4>
//               <p className="text-gray-600">
//                 {lang === "en"
//                   ? "Contact us for detailed quotes on specific routes."
//                   : "Liên hệ để nhận báo giá chi tiết cho các tuyến đường cụ thể."}
//               </p>
//               <button
//                 onClick={handleCall}
//                 className="bg-primary mt-4 cursor-pointer rounded-full px-6 py-2 font-bold text-white"
//               >
//                 Hotline: {hotline}
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
