import cars from "@/data/cars.json";
import brands from "@/data/brands.json";
import type { CarModel } from "~/types/Car.model";
import type { Brand } from "~/types/Filters";

export const useCars = () => {
  return {
    cars: cars as CarModel[],
    brands: brands as Brand[],
  };
};
