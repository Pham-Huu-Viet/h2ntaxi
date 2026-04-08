// app\thue-xe-hop-dong\ContractRentalClient.tsx

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
        </div>
      </section>
    </div>
  );
}
