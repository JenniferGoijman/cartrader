import { PrismaClient } from "@prisma/client";
import type { CarModel } from "~/types/Car.model";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params || {};

  const car = await prisma.car.findUnique({
    where: {
      id: parseInt(id)
    }
  });

  if (!car) {
    throw createError({
      statusCode: 404,
      statusMessage: `Car with ID ${id} does not exist.`
    });
  }

  return { ...car, features: car.features.split(',') } as CarModel;
})