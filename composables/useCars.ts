import cars from "@/data/cars.json";
import brands from "@/data/brands.json";
import listings from "@/data/listings.json";
import type { CarModel } from "~/types/Car.model";
import type { Brand } from "~/types/Filters.model";
import type { Listing } from "~/types/Listing.model";

export const useCars = () => {
  return {
    cars: cars as CarModel[],
    brands: brands as Brand[],
    listings: listings as Listing[],
  };
};
