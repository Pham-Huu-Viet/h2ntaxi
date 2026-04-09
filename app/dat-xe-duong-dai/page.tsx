import type { Metadata } from "next";
import LongDistancePage from "./LongDistancePage";

export const metadata: Metadata = {
  title: "Taxi đường dài Hà Nội đi tỉnh giá rẻ | Xe về quê, du lịch 4-7 chỗ",
  description:
    "Dịch vụ taxi đường dài từ Hà Nội đi tỉnh, xe về quê, xe du lịch giá rẻ chỉ từ 8.000đ/km. Dàn xe 4-7 chỗ đời mới, sạch sẽ, tài xế kinh nghiệm đường trường, cam kết đúng giờ.",
  keywords: [
    "taxi đường dài",
    "taxi duong dai",
    "xe đi tỉnh giá rẻ",
    "taxi hà nội đi tỉnh",
    "thuê xe về quê",
    "xe du lịch hà nội",
    "taxi đường dài giá rẻ",
    "đặt xe đi tỉnh",
    "xe 7 chỗ đi tỉnh",
    "xe 4 chỗ đi tỉnh",
    "taxi đường dài 24/7",
    "taxi liên tỉnh",
    "xe đường dài sạch sẽ",
    "taxi đường dài không mùi",
    "giá cước taxi đường dài",
  ],
  alternates: {
    canonical: "https://h2ntaxi.com/taxi-duong-dai",
  },
};

export default function Page() {
  return <LongDistancePage />;
}

// // app\dat-xe-duong-dai\page.tsx

// import type { Metadata } from "next";
// import LongDistancePage from "./LongDistancePage";

// export const metadata: Metadata = {
//   title: "Taxi đường dài Hà Nội | Xe về quê, xe du lịch giá rẻ",
//   description:
//     "Dịch vụ taxi đường dài từ Hà Nội đi tỉnh, xe về quê, xe du lịch giá rẻ, tài xế kinh nghiệm.",

//   alternates: {
//     canonical: "https://h2ntaxi.com/taxi-duong-dai",
//   },
// };

// export default function Page() {
//   return <LongDistancePage />;
// }
