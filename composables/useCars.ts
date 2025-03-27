import brands from "@/data/brands.json";
import type { Brand } from "~/types/Filters.model";

export const useCars = () => {
  return {
    brands: brands as Brand[],
  };
};
