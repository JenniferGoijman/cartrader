import cars from "@/data/cars.json";
import type { CarModel } from "~/types/Car.model";

interface QueryParams {
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
}

export default defineEventHandler((event) => {
  const { city } = event.context.params || {};
  const { brand, minPrice, maxPrice } = getQuery(event) as QueryParams;


  let filteredCars = cars as CarModel[];

  if (city) {
    filteredCars = cars.filter(car => car.city?.toLowerCase() === city.toLowerCase());
  };

  if (brand) {
    filteredCars = filteredCars.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
  };

  if (minPrice) {
    filteredCars = filteredCars.filter(car => car.price >= parseInt(minPrice));
  };

  if (maxPrice) {
    filteredCars = filteredCars.filter(car => car.price <= parseInt(maxPrice));
  };

  return filteredCars;
})