import type { CarModel } from "~/types/Car.model";

export const useFetchCarById = async (id: string) => {
  const { data, error } = useFetch<CarModel>(`/api/car/${id}`)

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage
    })
  }

  return data;
}