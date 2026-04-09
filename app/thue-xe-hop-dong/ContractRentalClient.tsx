"use client";

import { contractRentalData } from "@/data/contract-rental";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const pxTable = "px-1 md:px-6";
const pxSTT = "px-1 md:px-4";

export default function ContractRentalClient() {
  const { language } = useLanguage();
  const lang = (language as "vi" | "en") || "vi";

  const PriceTable = ({ carKey }: { carKey: "car5" | "car7" }) => {
    const data = contractRentalData[carKey];
    const headers = contractRentalData.commonHeaders;

    return (
      <div className="mb-20 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
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
                  <th className={`py-5 text-center ${pxSTT}`}>
                    {headers.stt[lang]}
                  </th>
                  <th className={`min-w-20 py-5 text-center ${pxTable}`}>
                    {headers.description[lang]}
                  </th>
                  {headers.columns.map((col) => (
                    <th
                      key={col.id}
                      className={`py-5 text-center font-semibold ${pxTable}`}
                    >
                      {col.label[lang]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.rows.map((row, idx) => {
                  const isPriceRow = row.stt === 3;
                  return (
                    <tr
                      key={idx}
                      className="transition-colors hover:bg-red-50/40"
                    >
                      <td
                        className={`py-3 text-center font-medium text-gray-400 ${pxSTT}`}
                      >
                        {row.stt}
                      </td>
                      <td
                        className={`py-3 font-medium text-gray-800 ${pxTable}`}
                      >
                        {row.content[lang]}
                      </td>
                      <td
                        className={`py-3 text-center ${pxTable} ${isPriceRow ? "text-primary font-semibold" : "text-gray-600"}`}
                      >
                        {row.d24}
                      </td>
                      <td
                        className={`py-3 text-center ${pxTable} ${isPriceRow ? "text-primary font-semibold" : "text-gray-600"}`}
                      >
                        {row.d26}
                      </td>
                      <td
                        className={`py-3 text-center ${pxTable} ${isPriceRow ? "text-primary font-semibold" : "text-gray-600"}`}
                      >
                        {row.d30}
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
      {/* Hero Section */}
      <section
        className="relative flex h-80 items-center justify-center bg-cover bg-center md:h-100"
        style={{ backgroundImage: "url(/hero-bg-contract.png)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 font-bold text-white md:text-6xl">
              {language === "en" ? "Contract Car Rental" : "Thuê xe hợp đồng"}
            </h1>
            <p className="text-white/90">
              {language === "en"
                ? "Flexible rental packages for your business and personal needs"
                : "Các gói thuê xe linh hoạt cho nhu cầu kinh doanh và cá nhân"}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <PriceTable carKey="car5" />
          <PriceTable carKey="car7" />

          {/* Info Cards */}
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: lang === "en" ? "Rental Terms" : "Điều khoản thuê",
                items: [
                  lang === "en"
                    ? "Fixed working time: 8 hours/day"
                    : "Thời gian làm việc: 8 giờ/ngày",
                  lang === "en"
                    ? "Professional drivers included"
                    : "Bao gồm tài xế chuyên nghiệp",
                  lang === "en"
                    ? "Support for holidays and weekends"
                    : "Hỗ trợ làm việc ngày lễ và cuối tuần",
                ],
              },
              {
                title:
                  lang === "en" ? "Why Choose Us?" : "Tại sao chọn chúng tôi?",
                items: [
                  lang === "en"
                    ? "New and well-maintained fleet"
                    : "Dàn xe đời mới, bảo trì định kỳ",
                  lang === "en"
                    ? "Transparent and clear billing"
                    : "Hóa đơn rõ ràng, minh bạch",
                  lang === "en"
                    ? "Experienced and polite drivers"
                    : "Tài xế kinh nghiệm, lịch sự",
                ],
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-100 bg-white p-10 shadow-xl"
              >
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-bold text-red-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* --- NỘI DUNG SEO CHI TIẾT (ĐÃ BỔ SUNG XE) --- */}
          <article className="mt-24 border-t border-gray-200 pt-16 text-gray-800">
            <h2 className="mb-8 text-3xl leading-tight font-bold text-gray-900">
              H2N Taxi - Dịch vụ thuê xe hợp đồng Hà Nội Đa dạng, Sạch mới và
              Chuyên nghiệp
            </h2>

            <div className="space-y-10 text-justify text-lg leading-relaxed">
              <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <p>
                    H2N Taxi tự hào là đơn vị uy tín cung cấp{" "}
                    <strong>dịch vụ thuê xe hợp đồng Hà Nội</strong> với hệ
                    thống xe đa dạng, đáp ứng mọi nhu cầu từ di chuyển cá nhân,
                    gia đình đến phục vụ đoàn công tác. Chúng tôi hiểu rằng
                    khách hàng luôn mong muốn một hành trình an toàn, thoải mái
                    trên những phương tiện hiện đại nhất. Chính vì vậy, đội ngũ
                    xe của chúng tôi được tuyển chọn từ các dòng xe ăn khách và
                    bền bỉ nhất hiện nay như{" "}
                    <strong>Toyota Vios, Hyundai Accent, Toyota Veloz</strong>{" "}
                    và <strong>Mitsubishi Xpander</strong>.
                  </p>
                  <p>
                    Đặc biệt, để nâng cao trải nghiệm cho khách hàng cần không
                    gian rộng rãi và sự khác biệt, H2N Taxi đã đưa vào phục vụ
                    dòng SUV 7 chỗ mạnh mẽ <strong>Nissan Terra</strong> và mẫu
                    xe điện hiện đại <strong>VinFast Limo Green</strong>. Nissan
                    Terra với khung gầm cao và nội thất thoáng đãng là lựa chọn
                    tuyệt vời cho các chuyến công tác tỉnh, trong khi VinFast
                    Limo Green mang lại sự tĩnh lặng, sạch sẽ tuyệt đối, cực kỳ
                    phù hợp cho những hành khách yêu thích công nghệ xanh và sự
                    êm ái. Việc <strong>thuê xe hợp đồng giá rẻ</strong> tại H2N
                    giúp bạn vừa tiết kiệm chi phí, vừa được sử dụng những dòng
                    xe chất lượng cao nhất thị trường.
                  </p>
                </div>
                <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold text-gray-900 italic">
                    Dàn xe đa dạng tại H2N Taxi:
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <span className="text-primary font-bold">
                        Xe 4-5 chỗ:
                      </span>{" "}
                      Toyota Vios, Hyundai Accent, Kia K3... Phù hợp đi phố hoặc
                      công tác ngắn ngày.
                    </li>
                    <li>
                      <span className="text-primary font-bold">
                        Xe 7 chỗ thông dụng:
                      </span>{" "}
                      Mitsubishi Xpander, Toyota Veloz Cross... Rộng rãi cho cả
                      gia đình.
                    </li>
                    <li>
                      <span className="text-primary font-bold">
                        Xe 7 chỗ SUV & Hiện đại:
                      </span>{" "}
                      <strong>Nissan Terra</strong> mạnh mẽ và{" "}
                      <strong>VinFast Limo Green</strong> (xe điện) rộng rãi, êm
                      ái.
                    </li>
                    <li>
                      <span className="text-primary font-bold">Xe 16 chỗ:</span>{" "}
                      Ford Transit, Hyundai Solati đời mới phục vụ đoàn khách
                      đông người.
                    </li>
                    <li>
                      ...và nhiều dòng xe khác đáp ứng linh hoạt theo yêu cầu
                      hợp đồng của quý khách.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Cam kết "Xe Sạch Mới - Không Mùi Thuốc Lá"
                </h3>
                <p>
                  Sự hài lòng của khách hàng là thước đo thành công của{" "}
                  <strong>H2N Taxi</strong>. Chúng tôi cam kết 100% dàn xe phục
                  vụ hợp đồng luôn trong tình trạng <strong>sạch sẽ</strong>{" "}
                  nhất. Quy trình vệ sinh nội thất và khử mùi được thực hiện
                  hàng ngày, đảm bảo <strong>không mùi thuốc lá</strong> và
                  không mùi điều hòa khó chịu. Đây là điểm cộng lớn dành cho
                  những khách hàng có trẻ em, người già hoặc những người dễ bị
                  say xe. Bên cạnh đó, đội ngũ <strong>tài xế lịch sự</strong>{" "}
                  của chúng tôi luôn giữ thái độ văn minh, phục vụ tận tình và
                  có kinh nghiệm lái xe đường trường dày dặn.
                </p>
                <p>
                  Dịch vụ <strong>thuê xe hợp đồng dài hạn</strong> của chúng
                  tôi giúp các doanh nghiệp và tổ chức tiết kiệm chi phí quản lý
                  vận hành đáng kể. Với bảng giá minh bạch và quy trình làm việc
                  chuyên nghiệp, H2N Taxi tự tin là đối tác tin cậy cho mọi hợp
                  đồng đưa đón nhân viên, chuyên gia hay xe phục vụ sự kiện.
                </p>
              </section>

              <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Linh hoạt theo mọi hành trình di chuyển
                  </h3>
                  <p>
                    Dù quý khách có nhu cầu <strong>thuê xe đi tỉnh</strong>, xe
                    về quê, hay xe đưa đón sân bay, chúng tôi luôn sẵn sàng hỗ
                    trợ 24/7. H2N Taxi luôn tuân thủ các quy chuẩn an toàn theo
                    hướng dẫn của{" "}
                    <a
                      href="https://www.mt.gov.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Bộ Giao thông Vận tải Việt Nam
                    </a>
                    . Với dàn xe từ sedan 4 chỗ đến SUV 7 chỗ{" "}
                    <strong>Nissan Terra</strong> hay xe điện{" "}
                    <strong>VinFast Limo Green</strong>, chúng tôi đảm bảo mang
                    lại giải pháp vận chuyển tối ưu nhất về cả thời gian và ngân
                    sách.
                  </p>
                </div>
                <div className="space-y-6 rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900">
                    Phục vụ mọi khu vực nội ngoại thành:
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      "Thuê xe Cầu Giấy",
                      "Thuê xe Mỹ Đình",
                      "Thuê xe Thanh Xuân",
                      "Thuê xe Hoàn Kiếm",
                      "Thuê xe Đống Đa",
                      "Thuê xe Hai Bà Trưng",
                      "Thuê xe Long Biên",
                      "Thuê xe Tây Hồ",
                      "Thuê xe Nam Từ Liêm",
                      "Thuê xe Bắc Từ Liêm",
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                        {area}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    * Liên hệ ngay để nhận{" "}
                    <strong>bảng giá thuê xe hợp đồng</strong> ưu đãi cho các lộ
                    trình dài ngày hoặc xe cưới hỏi cao cấp.
                  </p>
                </div>
              </section>

              <section className="border-t border-gray-100 pt-10 text-center">
                <p className="text-primary mb-4 text-2xl font-bold">
                  H2N Taxi - Hành trình Trọn vẹn, Niềm tin Đong đầy
                </p>
                <p className="mx-auto max-w-3xl text-gray-600 italic">
                  Hãy để H2N Taxi đồng hành cùng bạn trên mọi nẻo đường với dàn
                  xe sạch mới và đội ngũ tài xế tận tâm nhất!
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

// // app\thue-xe-hop-dong\ContractRentalClient.tsx

// "use client";

// import { contractRentalData } from "@/data/contract-rental";
// import { motion } from "framer-motion";
// import { useLanguage } from "@/context/LanguageContext";

// const pxTable = "px-1 md:px-6";
// const pxSTT = "px-1 md:px-4";

// export default function ContractRentalClient() {
//   const { language } = useLanguage();
//   const lang = (language as "vi" | "en") || "vi";

//   const PriceTable = ({ carKey }: { carKey: "car5" | "car7" }) => {
//     const data = contractRentalData[carKey];
//     const headers = contractRentalData.commonHeaders;

//     return (
//       <div className="mb-20 flex flex-col gap-6">
//         <div className="flex flex-col gap-4">
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
//                   <th className={`py-5 text-center ${pxSTT}`}>
//                     {headers.stt[lang]}
//                   </th>
//                   <th className={`min-w-20 py-5 text-center ${pxTable}`}>
//                     {headers.description[lang]}
//                   </th>
//                   {headers.columns.map((col) => (
//                     <th
//                       key={col.id}
//                       className={`py-5 text-center font-semibold ${pxTable}`}
//                     >
//                       {col.label[lang]}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {data.rows.map((row, idx) => {
//                   const isPriceRow = row.stt === 3;
//                   return (
//                     <tr
//                       key={idx}
//                       className="transition-colors hover:bg-red-50/40"
//                     >
//                       <td
//                         className={`py-3 text-center font-medium text-gray-400 ${pxSTT}`}
//                       >
//                         {row.stt}
//                       </td>
//                       <td
//                         className={`py-3 font-medium text-gray-800 ${pxTable}`}
//                       >
//                         {row.content[lang]}
//                       </td>
//                       <td
//                         className={`py-3 text-center ${pxTable} ${isPriceRow ? "text-primary font-semibold" : "text-gray-600"}`}
//                       >
//                         {row.d24}
//                       </td>
//                       <td
//                         className={`py-3 text-center ${pxTable} ${isPriceRow ? "text-primary font-semibold" : "text-gray-600"}`}
//                       >
//                         {row.d26}
//                       </td>
//                       <td
//                         className={`py-3 text-center ${pxTable} ${isPriceRow ? "text-primary font-semibold" : "text-gray-600"}`}
//                       >
//                         {row.d30}
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
//               {language === "en" ? "Contract Car Rental" : "Thuê xe hợp đồng"}
//             </h1>
//             <p className="text-white/90">
//               {language === "en"
//                 ? "Flexible rental packages for your business and personal needs"
//                 : "Các gói thuê xe linh hoạt cho nhu cầu kinh doanh và cá nhân"}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="bg-gray-50 px-6 py-20">
//         <div className="mx-auto max-w-7xl">
//           <PriceTable carKey="car5" />
//           <PriceTable carKey="car7" />

//           <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
//             {[
//               {
//                 title: lang === "en" ? "Rental Terms" : "Điều khoản thuê",
//                 items: [
//                   lang === "en"
//                     ? "Fixed working time: 8 hours/day"
//                     : "Thời gian làm việc: 8 giờ/ngày",
//                   lang === "en"
//                     ? "Professional drivers included"
//                     : "Bao gồm tài xế chuyên nghiệp",
//                   lang === "en"
//                     ? "Support for holidays and weekends"
//                     : "Hỗ trợ làm việc ngày lễ và cuối tuần",
//                 ],
//               },
//               {
//                 title:
//                   lang === "en" ? "Why Choose Us?" : "Tại sao chọn chúng tôi?",
//                 items: [
//                   lang === "en"
//                     ? "New and well-maintained fleet"
//                     : "Dàn xe đời mới, bảo trì định kỳ",
//                   lang === "en"
//                     ? "Transparent and clear billing"
//                     : "Hóa đơn rõ ràng, minh bạch",
//                   lang === "en"
//                     ? "Experienced and polite drivers"
//                     : "Tài xế kinh nghiệm, lịch sự",
//                 ],
//               },
//             ].map((card, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="rounded-3xl border border-gray-100 bg-white p-10 shadow-xl"
//               >
//                 <h3 className="mb-6 text-2xl font-bold text-gray-900">
//                   {card.title}
//                 </h3>
//                 <ul className="space-y-4 text-gray-700">
//                   {card.items.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <span className="font-bold text-red-600">✓</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
