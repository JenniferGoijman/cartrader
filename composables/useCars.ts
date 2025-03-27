import brands from "@/data/brands.json";
import listings from "@/data/listings.json";
import type { Brand } from "~/types/Filters.model";
import type { Listing } from "~/types/Listing.model";

export const useCars = () => {
  return {
    brands: brands as Brand[],
    listings: listings.map(listing => ({ ...listing, features: listing.features.split(',')})) as Listing[],
  };
};
