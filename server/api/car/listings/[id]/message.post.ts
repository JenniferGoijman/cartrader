import Joi from "joi";
import { PrismaClient } from "@prisma/client";
import type { MessagePost } from "~/types/Message.model";

const prisma = new PrismaClient();

const schema = Joi.object({
  name: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] }
  }),
  email: Joi.string().required(),
  phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  message: Joi.string().min(20).required(),
})

export default defineEventHandler(async (event) => {
  const body: MessagePost = await readBody(event);
  const { id } = event.context.params || {};

  const { error } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message
    });
  }

  const {
    name,
    email,
    phone,
    message,
  } = body

  return await prisma.message.create({
    data: {
      name,
      email,
      phone,
      message,
      listingId: parseInt(id),
    }
  });
})