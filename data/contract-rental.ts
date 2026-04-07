// lib/data/contract-rental.ts

export interface PriceRow {
  stt: number;
  content: { vi: string; en: string };
  d24: string;
  d26: string;
  d30: string;
}

export interface ContractTable {
  title: { vi: string; en: string };
  rows: PriceRow[];
}

export const contractRentalData = {
  // Định nghĩa tiêu đề cột để dùng chung cho các bảng
  commonHeaders: {
    stt: { vi: "STT", en: "No." },
    description: { vi: "Số ngày thuê /tháng", en: "Days per month" },
    columns: [
      { id: "d24", label: { vi: "24 ngày", en: "24 Days" }, color: "#fee2e2" }, // Red 100
      { id: "d26", label: { vi: "26 ngày", en: "26 Days" }, color: "#fecaca" }, // Red 200
      { id: "d30", label: { vi: "30 ngày", en: "30 Days" }, color: "#fca5a5" }, // Red 300
    ],
  },

  // Dữ liệu bảng xe 5 chỗ
  car5: {
    title: { vi: "Thuê xe 5 chỗ", en: "5-Seater Car Rental" },
    rows: [
      {
        stt: 1,
        content: {
          vi: "Thời gian làm việc theo khung giờ cố định",
          en: "Fixed working hours",
        },
        d24: "8 giờ/1 ngày",
        d26: "8 giờ/1 ngày",
        d30: "8 giờ/1 ngày",
      },
      {
        stt: 2,
        content: { vi: "Km định mức", en: "Quota Km" },
        d24: "2.200km",
        d26: "2.600km",
        d30: "3.000km",
      },
      {
        stt: 3,
        content: { vi: "Đơn giá hợp đồng", en: "Contract Price" },
        d24: "24.000.000đ",
        d26: "26.000.000đ",
        d30: "32.000.000đ",
      },
      {
        stt: 4,
        content: { vi: "Km phát sinh", en: "Extra Km" },
        d24: "7.500đ",
        d26: "7.500đ",
        d30: "7.500đ",
      },
      {
        stt: 5,
        content: { vi: "Giờ phát sinh", en: "Extra Hour" },
        d24: "70.000đ",
        d26: "70.000đ",
        d30: "70.000đ",
      },
      {
        stt: 6,
        content: { vi: "Lưu đêm", en: "Overnight stay" },
        d24: "300.000đ",
        d26: "300.000đ",
        d30: "300.000đ",
      },
      {
        stt: 7,
        content: { vi: "Làm việc ngày chủ nhật", en: "Sunday working" },
        d24: "1.300.000đ",
        d26: "1.300.000đ",
        d30: "1.300.000đ",
      },
      {
        stt: 8,
        content: { vi: "Làm việc ngày lễ, tết", en: "Holiday working" },
        d24: "1.800.000đ",
        d26: "1.800.000đ",
        d30: "1.800.000đ",
      },
    ],
  },

  // Dữ liệu bảng xe 7 chỗ
  car7: {
    title: { vi: "Thuê xe 7 chỗ", en: "7-Seater Car Rental" },
    rows: [
      {
        stt: 1,
        content: {
          vi: "Thời gian làm việc theo khung giờ cố định",
          en: "Fixed working hours",
        },
        d24: "8 giờ/1 ngày",
        d26: "8 giờ/1 ngày",
        d30: "8 giờ/1 ngày",
      },
      {
        stt: 2,
        content: { vi: "Km định mức", en: "Quota Km" },
        d24: "2.200km",
        d26: "2.600km",
        d30: "3.000km",
      },
      {
        stt: 3,
        content: { vi: "Đơn giá hợp đồng", en: "Contract Price" },
        d24: "26.000.000đ",
        d26: "28.000.000đ",
        d30: "34.000.000đ",
      },
      {
        stt: 4,
        content: { vi: "Km phát sinh", en: "Extra Km" },
        d24: "7.500đ",
        d26: "7.500đ",
        d30: "7.500đ",
      },
      {
        stt: 5,
        content: { vi: "Giờ phát sinh", en: "Extra Hour" },
        d24: "70.000đ",
        d26: "70.000đ",
        d30: "70.000đ",
      },
      {
        stt: 6,
        content: { vi: "Lưu đêm", en: "Overnight stay" },
        d24: "300.000đ",
        d26: "300.000đ",
        d30: "300.000đ",
      },
      {
        stt: 7,
        content: { vi: "Làm việc ngày chủ nhật", en: "Sunday working" },
        d24: "1.300.000đ",
        d26: "1.300.000đ",
        d30: "1.300.000đ",
      },
      {
        stt: 8,
        content: { vi: "Làm việc ngày lễ, tết", en: "Holiday working" },
        d24: "1.800.000đ",
        d26: "1.800.000đ",
        d30: "1.800.000đ",
      },
    ],
  },
};
