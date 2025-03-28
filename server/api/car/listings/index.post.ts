import Joi from "joi";
import { PrismaClient } from "@prisma/client";
import type { ListingPost } from "~/types/Listing.model";

const prisma = new PrismaClient();

const schema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number().min(1886).max(new Date().getFullYear() +1),
  miles: Joi.number().required().min(0),
  city: Joi.string().required().min(2),
  seats: Joi.number().required().min(1).max(1000),
  features: Joi.string(),
  image: Joi.string().required(),
  listerId: Joi.string().required(),
  price: Joi.number().min(0),
  description: Joi.string().min(20)
})

export default defineEventHandler(async (event) => {
  const body: ListingPost = await readBody(event);

  const { error } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message
    });
  }

  const {
    name,
    brand,
    model,
    price,
    year,
    city,
    image,
    seats,
    miles,
    features,
    description,
    listerId,
  } = body

  const car = await prisma.car.create({
    data: {
      name,
      brand,
      model,
      price,
      year,
      city: city.toLowerCase(),
      image,
      seats,
      miles,
      features,
      description,
      listerId,
    }
  })

  return car;
})