import type { QueryParams } from "~/server/api/cars/[city]";
import type { CarModel } from "~/types/Car.model";

export const useFetchCars = async (city: string, filter: QueryParams) => {
  const { data, error } = useFetch<CarModel[]>(`/api/cars/${city}`, { params: { ...filter } })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch cars"
    })
  }

  return data;
}