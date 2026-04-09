"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CardUI } from "@/components/ui/CardUI";
import { airportData } from "@/data/airport-taxi";
import { airportText as text } from "@/config/text.config";
import { useLanguage } from "@/context/LanguageContext";
import { QuickPriceChecker } from "@/components/sections/QuickPriceChecker";

// Các variants giữ nguyên như cũ
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "linear" },
  },
};

export default function AirportTransferPage() {
  const { language, isLoading } = useLanguage();
  const lang = (language as "vi" | "en") || "vi";
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
                <th className="px-1 py-4 text-center md:px-4">
                  {text.table.colNo[lang]}
                </th>
                <th className="px-1 py-4 text-center md:px-6">
                  {text.table.colDistrict[lang]}
                </th>
                <th className="px-1 py-4 text-center md:px-6">
                  {lang === "vi" ? "Xe 5 chỗ" : "5-Seater"}
                </th>
                <th className="px-1 py-4 text-center md:px-6">
                  {lang === "vi" ? "Xe 7 chỗ" : "7-Seater"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((item, idx) => (
                <tr key={idx} className="hover:bg-primary/5 transition-colors">
                  <td className="px-1 py-3 text-center text-gray-400 md:px-4">
                    {idx + 1}
                  </td>
                  <td className="px-1 py-3 text-gray-800 md:px-6">
                    {item.district}
                  </td>
                  <td className="text-primary px-1 py-3 text-center font-semibold md:px-6">
                    {item.price.seats5.toLocaleString()}đ
                  </td>
                  <td className="text-primary px-1 py-3 text-center font-semibold md:px-6">
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
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h1
                variants={itemVariants}
                className="leading-tight text-white md:text-6xl"
              >
                {text.hero.title[lang]}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="max-w-2xl text-lg text-white/90"
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
            >
              <QuickPriceChecker />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRICE LIST SECTION --- */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-3xl font-bold text-gray-900">
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
          <h2 className="mb-20 text-center text-3xl font-light text-gray-900">
            {text.features.sectionTitle[lang]}
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {text.features.items.map((feature, idx) => {
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

      {/* --- PHẦN NỘI DUNG SEO CHI TIẾT --- */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <article className="prose prose-red max-w-none leading-relaxed text-gray-700">
            {/* Header chuyên nghiệp */}
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                Dịch Vụ Taxi Sân Bay Nội Bài Trọn Gói{" "}
                <br className="hidden md:block" /> Giải Pháp Di Chuyển Thông
                Minh 24/7
              </h2>
              <div className="bg-primary mx-auto mb-8 h-2 w-24 rounded-full"></div>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 italic">
                H2N Taxi cam kết mang đến trải nghiệm di chuyển an toàn, đúng
                giờ với mức giá cạnh tranh nhất thị trường Hà Nội.
              </p>
            </div>

            <div className="space-y-16">
              {/* Khối 1: Giới thiệu & Địa bàn phục vụ */}
              <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="border-primary border-l-4 pl-4 text-2xl font-bold text-gray-900">
                    Kết nối Thủ đô và Sân bay Nội Bài
                  </h3>
                  <p className="text-justify text-lg">
                    Việc di chuyển ra sân bay luôn đòi hỏi sự chuẩn xác tuyệt
                    đối về thời gian. <strong>H2N Taxi</strong> thấu hiểu điều
                    đó và đã thiết kế dịch vụ{" "}
                    <strong>taxi sân bay Nội Bài giá rẻ</strong> nhằm tối ưu hóa
                    hành trình cho mọi khách hàng. Chúng tôi phục vụ đón trả
                    khách tại tất cả các quận huyện thuộc Hà Nội như{" "}
                    <strong>
                      Cầu Giấy, Nam Từ Liêm, Ba Đình, Hoàn Kiếm, Thanh Xuân
                    </strong>{" "}
                    và các vùng lân cận.
                  </p>
                  <p className="text-justify text-lg">
                    Với hệ thống xe túc trực 24/7, quý khách có thể dễ dàng{" "}
                    <strong>đặt xe sân bay</strong> cho các chuyến bay đêm hoặc
                    sáng sớm mà không lo thiếu xe hay tăng giá đột ngột. Mức giá
                    trọn gói chỉ từ 250.000đ giúp bạn tiết kiệm tối đa ngân sách
                    di chuyển.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl">
                  <h4 className="mb-6 text-xl font-bold text-gray-900 italic">
                    Điểm khác biệt tại H2N Taxi:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <span className="text-xs text-green-600">✓</span>
                      </div>
                      <span className="text-gray-700">
                        <strong>Xe Sạch Sẽ:</strong> Đảm bảo không gian thoáng
                        mát, không mùi thuốc lá.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <span className="text-xs text-green-600">✓</span>
                      </div>
                      <span className="text-gray-700">
                        <strong>Đúng Hẹn:</strong> Tài xế liên hệ trước và đến
                        điểm đón sớm hơn dự kiến.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <span className="text-xs text-green-600">✓</span>
                      </div>
                      <span className="text-gray-700">
                        <strong>Lịch Sự:</strong> Đội ngũ tài xế văn minh, hỗ
                        trợ hành lý tận tình.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Khối 2: Đội xe đa dạng - Trình bày dạng Grid Card */}
              <section className="space-y-8">
                <h3 className="text-center text-2xl font-bold text-gray-900">
                  Dàn Xe Đời Mới - Đa Dạng Lựa Chọn
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <h4 className="text-primary mb-2 font-bold">
                      Xe 4-5 Chỗ Tiết Kiệm
                    </h4>
                    <p className="text-sm text-gray-600">
                      Phù hợp cho cá nhân hoặc nhóm 3 người. Các dòng xe:{" "}
                      <strong>Toyota Vios, Hyundai Accent, Kia K3...</strong>
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <h4 className="text-primary mb-2 font-bold">
                      Xe 7 Chỗ Phổ Thông
                    </h4>
                    <p className="text-sm text-gray-600">
                      Không gian rộng rãi cho gia đình. Các dòng xe:{" "}
                      <strong>Mitsubishi Xpander, Toyota Veloz...</strong>
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <h4 className="text-primary mb-2 font-bold">
                      Xe 7 Chỗ SUV & Hiện Đại
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ưu tiên sự mạnh mẽ và êm ái. Các dòng xe:{" "}
                      <strong>Nissan Terra, VinFast Limo Green...</strong>
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-center text-gray-500 italic">
                  Tất cả phương tiện đều là đời mới, được bảo trì định kỳ để đảm
                  bảo an toàn tuyệt đối.
                </p>
              </section>

              {/* Khối 3: Lợi ích kinh tế & Quy trình - Layout 2 cột lệch */}
              <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Tối Ưu Ngân Sách Với Gói Khứ Hồi
                  </h3>
                  <p className="text-justify text-lg">
                    Để hỗ trợ khách hàng tốt nhất, H2N Taxi khuyến khích sử dụng
                    gói dịch vụ <strong>taxi Nội Bài</strong> khứ hồi. Việc đặt
                    trước cả hai chiều không chỉ giúp bạn yên tâm có xe ngay khi
                    vừa hạ cánh mà còn giúp giảm thiểu đáng kể chi phí chiều về.
                    Chúng tôi cam kết mức giá cạnh tranh, ổn định, không thu
                    thêm phụ phí ngoài hợp đồng. Đối với khách hàng doanh
                    nghiệp, H2N cung cấp đầy đủ hóa đơn chứng từ, giúp việc
                    quyết toán trở nên đơn giản và nhanh chóng.
                  </p>
                  <div className="bg-primary/5 border-primary rounded-2xl border-l-4 p-6">
                    <p className="font-medium text-gray-800 italic">
                      "Chúng tôi không chỉ bán một chuyến đi, chúng tôi trao gửi
                      sự an tâm trên từng kilomet."
                    </p>
                  </div>
                </div>
                <div className="rounded-[2rem] bg-gray-900 p-8 text-white">
                  <h4 className="text-primary mb-6 text-xl font-bold">
                    Kinh nghiệm đặt xe:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-90">
                    <li className="border-b border-white/10 pb-2">
                      ● Đặt xe trước ít nhất 2 giờ để được phục vụ tốt nhất.
                    </li>
                    <li className="border-b border-white/10 pb-2">
                      ● Thông báo số hiệu chuyến bay để tài xế theo dõi giờ hạ
                      cánh.
                    </li>
                    <li className="border-b border-white/10 pb-2">
                      ● Chọn xe 7 chỗ nếu có nhiều vali lớn.
                    </li>
                    <li>● Kiểm tra kỹ hành lý trước khi rời xe.</li>
                  </ul>
                </div>
              </section>

              {/* Khối 4: Cam kết & Pháp lý */}
              <section className="space-y-8 py-10 text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  Uy Tín Được Khẳng Định Qua Từng Hành Trình
                </h3>
                <div className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
                  <p>
                    Mọi hành trình cùng H2N Taxi đều được đảm bảo bởi quy trình
                    vận hành chuyên nghiệp, tuân thủ nghiêm ngặt các chỉ dẫn an
                    toàn của <strong>Bộ Giao thông Vận tải</strong>. Chúng tôi
                    tự hào là đối tác vận chuyển tin cậy của nhiều khách sạn,
                    văn phòng và các gia đình tại Hà Nội. Sự tin tưởng của quý
                    khách là động lực để chúng tôi không ngừng hoàn thiện dịch
                    vụ, từ việc nâng cấp dàn xe đến việc đào tạo đội ngũ nhân sự
                    tận tâm.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 pt-6">
                  <div className="flex flex-col items-center">
                    <span className="text-primary text-3xl font-bold">
                      100%
                    </span>
                    <span className="text-sm tracking-widest text-gray-500 uppercase">
                      Hài lòng
                    </span>
                  </div>
                  <div className="hidden h-12 w-px bg-gray-200 sm:block"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-primary text-3xl font-bold">
                      24/7
                    </span>
                    <span className="text-sm tracking-widest text-gray-500 uppercase">
                      Hỗ trợ
                    </span>
                  </div>
                  <div className="hidden h-12 w-px bg-gray-200 sm:block"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-primary text-3xl font-bold">0đ</span>
                    <span className="text-sm tracking-widest text-gray-500 uppercase">
                      Phí ẩn
                    </span>
                  </div>
                </div>
              </section>

              {/* Footer Bài viết */}
              <section className="space-y-4 text-center">
                <h4 className="text-primary text-2xl font-bold italic">
                  H2N Taxi - "Vạn dặm bình an, trọn tình phục vụ"
                </h4>
                <p className="mx-auto max-w-4xl text-gray-600">
                  Đừng để nỗi lo về phương tiện làm ảnh hưởng đến tinh thần
                  chuyến đi của bạn. Hãy trải nghiệm sự khác biệt từ dàn xe{" "}
                  <strong>Sạch - Mới - Đa Dạng</strong> cùng đội ngũ tài xế tận
                  tâm của H2N Taxi ngay hôm nay. Chúng tôi luôn sẵn sàng phục vụ
                  bạn 24/7 với mức giá <strong>taxi Nội Bài</strong> rẻ nhất,
                  chất lượng tốt nhất!
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

// // app\dat-xe-san-bay\AirportTransferPage.tsx

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { CardUI } from "@/components/ui/CardUI";
// import { airportData } from "@/data/airport-taxi";
// import { airportText as text } from "@/config/text.config";
// import { useLanguage } from "@/context/LanguageContext";
// import { QuickPriceChecker } from "@/components/sections/QuickPriceChecker";

// const pxTable = "px-1 md:px-6";
// const pxSTT = "px-1 md:px-4";

// // --- Constant Velocity Configuration ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08, // Shorter beats for a smoother feel.
//       delayChildren: 0.05,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -30 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.4, // Short duration allows for decisive movement.
//       ease: "linear", // Absolutely no acceleration
//     },
//   },
// };

// export default function AirportTransferPage() {
//   const { language, isLoading } = useLanguage();
//   const lang = language || "vi";
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (isLoading || !mounted) return <div className="min-h-screen bg-white" />;

//   const PriceTable = ({
//     title,
//     data,
//   }: {
//     title: string;
//     data: typeof airportData.toAirport;
//   }) => (
//     <div className="flex flex-col gap-6">
//       <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800">
//         <div className="bg-primary h-8 w-2 rounded-full" />
//         {title}
//       </h3>
//       <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl md:rounded-3xl">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-800 text-white">
//                 <th className={`py-4 text-center${pxSTT}`}>
//                   {text.table.colNo[lang]}
//                 </th>
//                 <th className={`py-4 text-center${pxTable}`}>
//                   {text.table.colDistrict[lang]}
//                 </th>
//                 <th className={`py-4 text-center${pxTable}`}>
//                   {lang === "vi" ? "Xe 5 chỗ" : "5-Seater"}
//                 </th>
//                 <th className={`py-4 text-center${pxTable}`}>
//                   {lang === "vi" ? "Xe 7 chỗ" : "7-Seater"}
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {data.map((item, idx) => (
//                 <tr key={idx} className="hover:bg-primary/5 transition-colors">
//                   <td className={`py-3 text-center text-gray-400 ${pxSTT}`}>
//                     {idx + 1}
//                   </td>
//                   <td className={`py-3 text-gray-800 ${pxTable}`}>
//                     {item.district}
//                   </td>
//                   <td className={`text-primary py-3 text-center ${pxTable}`}>
//                     {item.price.seats5.toLocaleString()}đ
//                   </td>
//                   <td className={`text-primary py-3 text-center ${pxTable}`}>
//                     {item.price.seats7.toLocaleString()}đ
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white">
//       {/* --- HERO SECTION --- */}
//       <section
//         className="relative h-[calc(100vh-60px)] bg-cover bg-center"
//         style={{ backgroundImage: "url(/hero-bg-airport.png)" }}
//       >
//         <div className="absolute inset-0 bg-black/55" />
//         <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-5">
//           <div className="flex flex-col gap-12">
//             {/* TEXT: Slide LEFT IN - Linear */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="space-y-6"
//             >
//               <motion.h1
//                 variants={itemVariants}
//                 className="leading-tight font-bold text-white"
//               >
//                 {text.hero.title[lang]}
//               </motion.h1>

//               <motion.p
//                 variants={itemVariants}
//                 className="max-w-2xl text-white/90"
//               >
//                 {text.hero.subTitle[lang]}
//               </motion.p>

//               <div className="space-y-3 text-white/85">
//                 {text.hero.checkpoints.map((item, idx) => (
//                   <motion.p
//                     key={idx}
//                     variants={itemVariants}
//                     className="flex items-start gap-3"
//                   >
//                     <span className="mt-1 flex-shrink-0 font-bold text-green-400">
//                       ✓
//                     </span>
//                     <span>{item[lang]}</span>
//                   </motion.p>
//                 ))}
//               </div>
//             </motion.div>

//             {/* CHECKER: Slide BOTTOM UP - Linear, Simultaneously */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.3,
//                 ease: "linear",
//                 delay: 0.3,
//               }}
//             >
//               <QuickPriceChecker />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* --- PRICE LIST SECTION --- */}
//       <section className="bg-gray-50 px-6 py-24">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="mb-16 text-center font-bold text-gray-900">
//             {text.table.title[lang]}
//           </h2>
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//             <PriceTable
//               title={
//                 lang === "vi"
//                   ? "Chiều đi: Hà Nội → Nội Bài"
//                   : "Route: Hanoi → Noi Bai"
//               }
//               data={airportData.toAirport}
//             />
//             <PriceTable
//               title={
//                 lang === "vi"
//                   ? "Chiều về: Nội Bài → Hà Nội"
//                   : "Route: Noi Bai → Hanoi"
//               }
//               data={airportData.fromAirport}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Why choose H2N? */}
//       <section className="bg-white px-6 py-24">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="mb-20 text-center font-light text-gray-900">
//             {text.features.sectionTitle[lang]}
//           </h2>
//           <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//             {text.features.items.map((feature, idx) => {
//               // Get the Icon component from the data
//               const Icon = feature.icon;

//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                 >
//                   <CardUI className="group h-full border-none bg-gray-50 p-10 text-center transition-all hover:shadow-2xl">
//                     <div className="bg-primary shadow-primary/30 mx-auto mb-6 flex h-16 w-16 -rotate-6 transform items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-0">
//                       {Icon && (
//                         <Icon size={32} strokeWidth={1.2} absoluteStrokeWidth />
//                       )}
//                     </div>
//                     <h5 className="mb-4 font-bold text-gray-900">
//                       {feature.title[lang]}
//                     </h5>
//                     <p className="leading-relaxed text-gray-600">
//                       {feature.desc[lang]}
//                     </p>
//                   </CardUI>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
