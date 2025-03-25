import cars from "@/data/cars.json";
import type { CarModel } from "~/types/Car.model";

export interface QueryParams {
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
}

export default defineEventHandler((event) => {
  const { id } = event.context.params || {};

  const car: CarModel | undefined = cars.find(car => car.id === parseInt(id));

  if (!car) {
    throw createError({
      statusCode: 404,
      statusMessage: `Car with ID ${id} does not exist.`
    });
  }

  return car;
})