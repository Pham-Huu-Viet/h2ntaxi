import { airportData, AirportLocation } from "../data/airport-taxi";
import { contractRentalData, Vehicle } from "../data/contract-rental";
import { longDistanceData, LongDistanceRoute } from "../data/long-distance";

const STORAGE_KEYS = {
  AIRPORT_DATA: "h2n_airport_data",
  CONTRACT_DATA: "h2n_contract_data",
  LONG_DISTANCE_DATA: "h2n_long_distance_data",
  THEME_COLOR: "h2n_theme_color",
};

export class DataStorage {
  // Airport Data
  static getAirportLocations() {
    if (typeof window === "undefined") return airportData;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.AIRPORT_DATA);
      return data ? JSON.parse(data) : airportData;
    } catch {
      return airportData;
    }
  }

  static saveAirportLocations(data: typeof airportData): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.AIRPORT_DATA, JSON.stringify(data));
    }
  }

  static updateAirportLocation(
    district: string,
    price: number,
    isToAirport: boolean,
  ): void {
    const data = this.getAirportLocations();
    const locations = isToAirport ? data.toAirport : data.fromAirport;
    const index = locations.findIndex((l) => l.district === district);
    if (index !== -1) {
      locations[index].price = price;
      this.saveAirportLocations(data);
    }
  }

  // fixed car rental Data
  static getContractRentals() {
    if (typeof window === "undefined") return contractRentalData;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CONTRACT_DATA);
      return data ? JSON.parse(data) : contractRentalData;
    } catch {
      return contractRentalData;
    }
  }

  static saveContractRentals(data: typeof contractRentalData): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.CONTRACT_DATA, JSON.stringify(data));
    }
  }

  static updateVehicle(type: string, updates: Partial<Vehicle>): void {
    const data = this.getContractRentals();
    const index = data.vehicles.findIndex((v) => v.type === type);
    if (index !== -1) {
      data.vehicles[index] = { ...data.vehicles[index], ...updates };
      this.saveContractRentals(data);
    }
  }

  // Long Distance Data
  static getLongDistanceRoutes() {
    if (typeof window === "undefined") return longDistanceData;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LONG_DISTANCE_DATA);
      return data ? JSON.parse(data) : longDistanceData;
    } catch {
      return longDistanceData;
    }
  }

  static saveLongDistanceRoutes(data: typeof longDistanceData): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        STORAGE_KEYS.LONG_DISTANCE_DATA,
        JSON.stringify(data),
      );
    }
  }

  static updateRoute(
    from: string,
    to: string,
    updates: Partial<LongDistanceRoute>,
  ): void {
    const data = this.getLongDistanceRoutes();
    const index = data.routes.findIndex((r) => r.from === from && r.to === to);
    if (index !== -1) {
      data.routes[index] = { ...data.routes[index], ...updates };
      this.saveLongDistanceRoutes(data);
    }
  }

  // Theme Color
  static getThemeColor(): string {
    if (typeof window === "undefined") return "#dc2626";
    try {
      return localStorage.getItem(STORAGE_KEYS.THEME_COLOR) || "#dc2626";
    } catch {
      return "#dc2626";
    }
  }

  static saveThemeColor(color: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.THEME_COLOR, color);
    }
  }

  // Reset all data
  static resetAllData(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEYS.AIRPORT_DATA);
      localStorage.removeItem(STORAGE_KEYS.CONTRACT_DATA);
      localStorage.removeItem(STORAGE_KEYS.LONG_DISTANCE_DATA);
      localStorage.removeItem(STORAGE_KEYS.THEME_COLOR);
    }
  }
}
