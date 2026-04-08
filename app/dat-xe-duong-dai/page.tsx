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

                  // Tính toán rowSpan cho nhóm trùng tên
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
                        className={`text-primary py-3 text-center transition-colors ${pxTable}`}
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
        <div className="z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 font-bold text-white md:text-6xl">
              {language === "en" ? "Long Distance Travel" : "Đặt xe đường dài"}
            </h1>
            <p className="text-white/90">
              {language === "en"
                ? "Comfortable transportation"
                : "Vận chuyển đường dài chuyên nghiệp"}
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
                {lang === "en" ? "Service Benefits" : "Lợi ích dịch vụ"}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>
                  ✓{" "}
                  {lang === "en"
                    ? "New cars with AC"
                    : "Xe đời mới, điều hòa mát mẻ"}
                </li>
                <li>
                  ✓{" "}
                  {lang === "en"
                    ? "Punctual & Professional"
                    : "Đúng giờ & Chuyên nghiệp"}
                </li>
                <li>
                  ✓ {lang === "en" ? "Door-to-door service" : "Đưa đón tận nơi"}
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                {lang === "en" ? "Support" : "Hỗ trợ"}
              </h4>
              <p className="text-gray-600">
                {lang === "en"
                  ? "Contact us for detailed quotes on specific routes."
                  : "Liên hệ để nhận báo giá chi tiết cho các tuyến đường cụ thể."}
              </p>
              <button
                onClick={handleCall}
                className="bg-primary mt-4 cursor-pointer rounded-full px-6 py-2 font-bold text-white"
              >
                Hotline: {hotline}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
