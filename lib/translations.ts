// lib\translations.ts

export const translations = {
  en: {
    // Navigation
    home: "Airport Transfer",
    contractRental: "Contract Rental",
    longDistance: "Long Distance",
    settings: "Settings",
    language: "Language",

    // Home
    airportTransfer: "Airport Transfer",
    fromAirport: "From Airport",
    toDestination: "To Destination",
    getPrice: "Get Price",
    bookNow: "Book Now",
    callUs: "Call Us",

    // Pricing
    pricing: "Pricing",
    passenger: "Passenger",
    luggage: "Luggage",
    price: "Price",
    perKm: "per km",

    // Contract Rental
    rentalDays: "Rental Days",
    rentalType: "Rental Type",
    selectType: "Select Type",
    dayUse: "Day Use (8 hours)",
    fullDay: "Full Day (24 hours)",

    // Long Distance
    tripDistance: "Trip Distance",
    tripType: "Trip Type",
    oneWay: "One Way",
    roundTrip: "Round Trip",

    // Admin
    adminPanel: "Admin Panel",
    password: "Password",
    login: "Login",
    logout: "Logout",
    save: "Save",
    cancel: "Cancel",
    addNew: "Add New",
    edit: "Edit",
    delete: "Delete",

    // Messages
    enterPassword: "Enter admin password",
    invalidPassword: "Invalid password",
    saveSuccessfully: "Saved successfully",
    confirmDelete: "Are you sure you want to delete this?",

    // Footer
    footerDesc:
      "Premium taxi services across Vietnam. Professional, reliable, and affordable transportation solutions.",
    quickLinks: "Quick Links",
    contact: "Contact",
    hours: "Service Hours",
    hanoi: "Hanoi",
    hcmc: "Ho Chi Minh City",
    available247: "Available 24/7",
    monFri: "Monday - Friday",
    satSun: "Saturday - Sunday",
    holidays: "Public Holidays",
    emergency: "Emergency",
    anytime: "Available anytime",
    rightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contactUs: "Contact Us",
  },
  vi: {
    // Navigation
    home: "Đặt xe sân bay",
    contractRental: "Cho Thuê Xe",
    longDistance: "Chuyến Đường Dài",
    settings: "Cài Đặt",
    language: "Ngôn Ngữ",

    // Home
    airportTransfer: "Đón/Tải Sân Bay",
    fromAirport: "Từ Sân Bay",
    toDestination: "Đến Đích",
    getPrice: "Xem Giá",
    bookNow: "Đặt Xe Ngay",
    callUs: "Gọi Chúng Tôi",

    // Pricing
    pricing: "Bảng Giá",
    passenger: "Hành Khách",
    luggage: "Hành Lý",
    price: "Giá",
    perKm: "mỗi km",

    // Contract Rental
    rentalDays: "Số Ngày Thuê",
    rentalType: "Loại Thuê",
    selectType: "Chọn Loại",
    dayUse: "Nửa Ngày (8 giờ)",
    fullDay: "Cả Ngày (24 giờ)",

    // Long Distance
    tripDistance: "Quãng Đường",
    tripType: "Loại Chuyến",
    oneWay: "Một Chiều",
    roundTrip: "Khứ Hồi",

    // Admin
    adminPanel: "Bảng Điều Khiển Admin",
    password: "Mật Khẩu",
    login: "Đăng Nhập",
    logout: "Đăng Xuất",
    save: "Lưu",
    cancel: "Hủy",
    addNew: "Thêm Mới",
    edit: "Sửa",
    delete: "Xóa",

    // Messages
    enterPassword: "Nhập mật khẩu admin",
    invalidPassword: "Mật khẩu không đúng",
    saveSuccessfully: "Lưu thành công",
    confirmDelete: "Bạn có chắc chắn muốn xóa cái này không?",

    // Footer
    footerDesc:
      "Dịch vụ taxi cao cấp trên toàn quốc. Giải pháp vận chuyển chuyên nghiệp, tin cậy và giá cả hợp lý.",
    quickLinks: "Liên kết nhanh",
    contact: "Liên hệ",
    hours: "Giờ phục vụ",
    hanoi: "Hà Nội",
    hcmc: "TP. Hồ Chí Minh",
    available247: "Phục vụ 24/7",
    monFri: "Thứ 2 - Thứ 6",
    satSun: "Thứ 7 - Chủ nhật",
    holidays: "Ngày lễ Tết",
    emergency: "Khẩn cấp",
    anytime: "Hỗ trợ bất cứ lúc nào",
    rightsReserved: "Bản quyền được bảo lưu.",
    privacyPolicy: "Chính sách bảo mật",
    termsOfService: "Điều khoản dịch vụ",
    contactUs: "Liên hệ với chúng tôi",
  },
};

export function t(
  key: keyof (typeof translations)["en"],
  language: "en" | "vi",
) {
  return translations[language][key] || key;
}
