// config\text.config.ts

// Airport transfer page
import { ShieldCheck, Diamond, Tag, Car } from "lucide-react";

export const airportText = {
  hero: {
    title: {
      en: "Premium Taxi Booking",
      vi: "Đặt Xe Sân Bay Hàng Đầu",
    },
    subTitle: {
      en: "Leading Private Car & Professional Taxi Service in Vietnam",
      vi: "Dịch vụ Taxi & Thuê xe hợp đồng chuyên nghiệp hàng đầu",
    },
    checkpoints: [
      {
        en: "National network of premium, modern partner vehicles",
        vi: "Mạng lưới đối tác xe đời mới, chất lượng cao trên toàn quốc",
      },
      {
        en: "Luxury Experience - Fixed Pricing - No Hidden Fees",
        vi: "Trải nghiệm sang trọng - Giá chốt hành trình - Không phí phát sinh",
      },
      {
        en: "Diverse Fleet: 5, 7, 16 to 45-seaters for every journey",
        vi: "Đa dạng dòng xe từ 5, 7, 16 đến 45 chỗ cho mọi hành trình",
      },
    ],
  },
  card: {
    toAirport: { en: "Go to Airport", vi: "Đi đến sân bay" },
    fromAirport: { en: "Pick up from Airport", vi: "Đón từ sân bay" },
    destination: { en: "Destination", vi: "Điểm đến" },
    pickup: { en: "Pickup Location", vi: "Điểm đón" },
    airport: { en: "Noi Bai Airport", vi: "Sân bay Nội Bài" },
    selectDistrict: { en: "Select district", vi: "Chọn quận" },
    priceFrom: { en: "Starting from", vi: "Từ" },
    bookNow: { en: "Book Now", vi: "Đặt xe ngay" },
    seats5: { en: "5-seater car", vi: "Xe 5 chỗ" },
    seats7: { en: "7-seater car", vi: "Xe 7 chỗ" },
    carType: { en: "Car Type", vi: "Loại xe" },
  },
  features: {
    sectionTitle: { en: "Why Choose H2N Taxi?", vi: "Tại sao chọn H2N Taxi?" },
    items: [
      {
        title: { en: "Safe & Reliable", vi: "An toàn & Đáng tin cậy" },
        desc: {
          en: "Professional drivers, verified vehicles",
          vi: "Tài xế chuyên nghiệp, xe được kiểm duyệt",
        },
        icon: ShieldCheck, // Lucide icon hỗ trợ strokeWidth
      },
      {
        title: { en: "Luxury Service", vi: "Dịch vụ sang trọng" },
        desc: {
          en: "Premium fleet, comfortable rides",
          vi: "Xe sang trọng, thoải mái",
        },
        icon: Diamond,
      },
      {
        title: { en: "Fixed Pricing", vi: "Giá cố định" },
        desc: {
          en: "Transparent pricing, no surge",
          vi: "Giá cố định, không phát sinh",
        },
        icon: Tag,
      },
      {
        title: { en: "Largest Platform", vi: "Nền tảng lớn nhất" },
        desc: {
          en: "Over 10,000+ vehicles in Vietnam",
          vi: "Hơn 10.000+ xe tại Việt Nam",
        },
        icon: Car,
      },
    ],
  },
  table: {
    title: { en: "Airport Transfer Pricing", vi: "Bảng giá dịch vụ sân bay" },
    colNo: { en: "No.", vi: "STT" },
    colDistrict: { en: "District", vi: "Quận" },
    colPrice: { en: "Price", vi: "Giá" },
    colMin: { en: "Min Passengers", vi: "Tối thiểu" },
  },
};
