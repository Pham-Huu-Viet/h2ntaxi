import type { Metadata } from "next";
import AirportTransferPage from "./AirportTransferPage";

export const metadata: Metadata = {
  title: "Taxi sân bay Nội Bài giá rẻ | Đặt xe sân bay Hà Nội",
  description:
    "Dịch vụ taxi sân bay Nội Bài giá rẻ, đặt xe nhanh 24/7, xe đời mới, tài xế chuyên nghiệp.",

  alternates: {
    canonical: "https://h2ntaxi.com/taxi-san-bay-noi-bai",
  },
};

export default function Page() {
  return <AirportTransferPage />;
}
