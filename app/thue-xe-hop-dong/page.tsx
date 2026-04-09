import { Metadata } from "next";
import ContractRentalClient from "./ContractRentalClient";

export const metadata: Metadata = {
  title:
    "Thuê xe hợp đồng Hà Nội giá rẻ | Xe 4-7-16 chỗ sạch mới, tài xế lịch sự",
  description:
    "Dịch vụ thuê xe hợp đồng chuyên nghiệp tại Hà Nội. H2N Taxi cung cấp đa dạng dòng xe Toyota Vios, Xpander, Nissan Terra, VinFast Limo Green... Cam kết xe sạch, không mùi thuốc lá.",
  keywords: [
    "thuê xe hợp đồng",
    "thue xe hop dong",
    "thuê xe hợp đồng hà nội",
    "thue xe hop dong ha noi",
    "thuê xe nissan terra",
    "thuê xe vinfast limo green",
    "thuê xe toyota vios",
    "thuê xe xpander",
    "thuê xe 4 chỗ",
    "thue xe 4 cho",
    "thuê xe 7 chỗ",
    "thue xe 7 cho",
    "thuê xe 16 chỗ",
    "thue xe 16 cho",
    "xe hợp đồng đời mới",
    "xe hop dong doi moi",
    "đặt xe hợp đồng giá rẻ",
    "xe không mùi thuốc",
    "xe sạch sẽ",
    "taxi sạch hà nội",
    "tài xế lịch sự",
    "thuê xe có tài xế",
    "thuê xe hợp đồng dài hạn",
    "thuê xe hợp đồng ngắn hạn",
    "thuê xe đi tỉnh",
    "thue xe di tinh",
    "thuê xe về quê",
    "thuê xe đi công tác",
    "thuê xe du lịch",
    "xe đưa đón nhân viên",
    "xe đưa đón học sinh",
    "thuê xe cưới hỏi",
    "xe phục vụ sự kiện",
    "thuê xe suv",
    "thuê xe sedan",
    "bảng giá thuê xe hợp đồng",
    "giá thuê xe 7 chỗ theo ngày",
    "thuê xe giá cạnh tranh",
    "thuê xe hợp đồng cầu giấy",
    "thuê xe hợp đồng mỹ đình",
    "thuê xe hợp đồng thanh xuân",
    "thuê xe hợp đồng hoàn kiếm",
    "taxi hà nội đi tỉnh",
    "hợp đồng thuê xe ô tô",
  ],
  alternates: {
    canonical: "https://h2ntaxi.com/thue-xe-hop-dong",
  },
};

export default function Page() {
  return <ContractRentalClient />;
}

// // app\thue-xe-hop-dong\page.tsx

// import { Metadata } from "next";
// import ContractRentalClient from "./ContractRentalClient";

// export const metadata: Metadata = {
//   title: "Thuê Xe Cố Định Giá Rẻ - H2N Taxi Services",
//   description: "Dịch vụ thuê xe cố định chuyên nghiệp tại Việt Nam...",
//   alternates: {
//     canonical: "https://h2ntaxi.com/thue-xe-hop-dong",
//   },
// };

// export default function Page() {
//   return <ContractRentalClient />;
// }
