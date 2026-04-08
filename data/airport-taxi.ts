// data\airport-taxi.ts

export interface PriceConfig {
  seats5: number;
  seats7: number;
}

export interface AirportLocation {
  district: string;
  price: PriceConfig;
}

export interface AirportData {
  toAirport: AirportLocation[];
  fromAirport: AirportLocation[];
}

export const airportData: AirportData = {
  toAirport: [
    { district: "Ba Đình", price: { seats5: 250000, seats7: 280000 } },
    { district: "Hoàn Kiếm", price: { seats5: 250000, seats7: 280000 } },
    { district: "Hai Bà Trưng", price: { seats5: 250000, seats7: 280000 } },
    { district: "Đống Đa", price: { seats5: 250000, seats7: 280000 } },
    { district: "Tây Hồ", price: { seats5: 250000, seats7: 280000 } },
    { district: "Cầu Giấy", price: { seats5: 250000, seats7: 280000 } },
    { district: "Thanh Xuân", price: { seats5: 250000, seats7: 280000 } },
    { district: "Hoàng Mai", price: { seats5: 270000, seats7: 300000 } },
    { district: "Long Biên", price: { seats5: 250000, seats7: 300000 } },
    { district: "Nam Từ Liêm", price: { seats5: 250000, seats7: 300000 } },
    { district: "Bắc Từ Liêm", price: { seats5: 270000, seats7: 300000 } },
    { district: "Hà Đông", price: { seats5: 270000, seats7: 300000 } },
  ],
  fromAirport: [
    { district: "Ba Đình", price: { seats5: 280000, seats7: 320000 } },
    { district: "Hoàn Kiếm", price: { seats5: 280000, seats7: 320000 } },
    { district: "Hai Bà Trưng", price: { seats5: 280000, seats7: 320000 } },
    { district: "Đống Đa", price: { seats5: 280000, seats7: 320000 } },
    { district: "Tây Hồ", price: { seats5: 280000, seats7: 320000 } },
    { district: "Cầu Giấy", price: { seats5: 280000, seats7: 320000 } },
    { district: "Thanh Xuân", price: { seats5: 280000, seats7: 320000 } },
    { district: "Hoàng Mai", price: { seats5: 300000, seats7: 350000 } },
    { district: "Long Biên", price: { seats5: 280000, seats7: 320000 } },
    { district: "Nam Từ Liêm", price: { seats5: 280000, seats7: 320000 } },
    { district: "Bắc Từ Liêm", price: { seats5: 280000, seats7: 320000 } },
    { district: "Hà Đông", price: { seats5: 300000, seats7: 350000 } },
  ],
};
