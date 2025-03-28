import { PrismaClient } from "@prisma/client";
import type { CarModel } from "~/types/Car.model";

const prisma = new PrismaClient();

export interface QueryParams {
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
}

export default defineEventHandler(async (event) => {
  const { city } = event.context.params || {};
  const { brand, minPrice, maxPrice } = getQuery(event) as QueryParams;

  const cars = await prisma.car.findMany({
    where: {
      city: city.toLowerCase(),
      brand: brand?.toLowerCase(),
      price: {
        gte: minPrice ? parseInt(minPrice) : undefined,
        lte: maxPrice ? parseInt(maxPrice) : undefined,
      }

    }
  });

  return cars.map(car => ({...car, features: car.features.split(',')} as CarModel));
})