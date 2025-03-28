import { PrismaClient } from "@prisma/client";

export interface QueryParams {
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
}

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params || {};

  return await prisma.car.delete({
    where: {
      id: parseInt(id)
    }
  });
})