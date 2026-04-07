export interface LongDistanceRoute {
  from: { vi: string; en: string };
  to: { vi: string; en: string };
  price: number;
  limit: string;
}

export interface LongDistanceData {
  car5: { title: { vi: string; en: string }; routes: LongDistanceRoute[] };
  car7: { title: { vi: string; en: string }; routes: LongDistanceRoute[] };
}

export const longDistanceData: LongDistanceData = {
  car5: {
    title: { vi: "Xe 5 chỗ", en: "5-Seater Car" },
    routes: [
      {
        from: { vi: "Hà Nội", en: "Hanoi" },
        to: { vi: "Sân bay", en: "Airport" },
        price: 250000,
        limit: "<31km",
      },
      {
        from: { vi: "Sân bay", en: "Airport" },
        to: { vi: "Hà Nội", en: "Hanoi" },
        price: 300000,
        limit: "<31km",
      },
      {
        from: { vi: "Nội thành", en: "City Center" },
        to: { vi: "Nội thành", en: "City Center" },
        price: 150000,
        limit: "1 giờ",
      },
      {
        from: { vi: "Liên tỉnh", en: "Interprovincial" },
        to: { vi: "1 chiều", en: "One way" },
        price: 10000,
        limit: "<100km",
      },
      {
        from: { vi: "Liên tỉnh", en: "Interprovincial" },
        to: { vi: "2 chiều", en: "Round trip" },
        price: 9000,
        limit: "<100km",
      },
      {
        from: { vi: "Liên tỉnh", en: "Interprovincial" },
        to: { vi: "2 chiều", en: "Round trip" },
        price: 8000,
        limit: "100km<200km",
      },
      {
        from: { vi: "Liên tỉnh", en: "Interprovincial" },
        to: { vi: "2 chiều", en: "Round trip" },
        price: 7000,
        limit: ">200km",
      },
    ],
  },
  car7: {
    title: { vi: "Xe 7 chỗ", en: "7-Seater Car" },
    routes: [
      {
        from: { vi: "Hà Nội", en: "Hanoi" },
        to: { vi: "Sân bay", en: "Airport" },
        price: 300000,
        limit: "<31km",
      },
      {
        from: { vi: "Sân bay", en: "Airport" },
        to: { vi: "Hà Nội", en: "Hanoi" },
        price: 350000,
        limit: "<31km",
      },
      {
        from: { vi: "Nội thành", en: "City Center" },
        to: { vi: "Nội thành", en: "City Center" },
        price: 180000,
        limit: "1 giờ",
      },
      {
        from: { vi: "Liên tỉnh", en: "Interprovincial" },
        to: { vi: "1 chiều", en: "One way" },
        price: 11000,
        limit: "<100km",
      },
      {
        from: { vi: "Liên tỉnh", en: "Interprovincial" },
        to: { vi: "2 chiều", en: "Round trip" },
        price: 10000,
        limit: "<100km",
      },
    ],
  },
};
