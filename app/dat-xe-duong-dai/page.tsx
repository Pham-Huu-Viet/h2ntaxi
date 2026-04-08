import type { Metadata } from "next";
import LongDistancePage from "./LongDistancePage";

export const metadata: Metadata = {
  title: "Taxi đường dài Hà Nội | Xe về quê, xe du lịch giá rẻ",
  description:
    "Dịch vụ taxi đường dài từ Hà Nội đi tỉnh, xe về quê, xe du lịch giá rẻ, tài xế kinh nghiệm.",

  alternates: {
    canonical: "https://h2ntaxi.com/taxi-duong-dai",
  },
};

export default function Page() {
  return <LongDistancePage />;
}
