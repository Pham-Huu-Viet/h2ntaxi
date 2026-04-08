// app\thue-xe-hop-dong\page.tsx

import { Metadata } from "next";
import ContractRentalClient from "./ContractRentalClient";

export const metadata: Metadata = {
  title: "Thuê Xe Cố Định Giá Rẻ - H2N Taxi Services",
  description: "Dịch vụ thuê xe cố định chuyên nghiệp tại Việt Nam...",
  alternates: {
    canonical: "https://h2ntaxi.com/thue-xe-hop-dong",
  },
};

export default function Page() {
  return <ContractRentalClient />;
}
