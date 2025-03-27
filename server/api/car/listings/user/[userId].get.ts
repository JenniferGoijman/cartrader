import { PrismaClient } from "@prisma/client";
import type { ListingResponse } from "~/types/Listing.model";

const prisma = new PrismaClient();

export interface QueryParams {
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
}

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params || {};

  const cars = await prisma.car.findMany({
    where: {
      listerId: userId,
    },
    select: {
      image: true,
      id: true,
      name: true,
      price: true
    }
  });

  return cars as ListingResponse[] | undefined;
})