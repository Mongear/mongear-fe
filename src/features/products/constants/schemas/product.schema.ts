import { createPaginatedResponseSchema } from "@/constants/schemas/response.schema";
import { z } from "zod";

const productSchema = z.object({
  id: z.string().nonempty("Id must not be empty"),
  name: z.string().nonempty("Name must not be empty"),
  imageUrls: z.array(z.string()),
  price: z.number(),
  discount: z.number(),
  stock: z.number(),
  rating: z.number(),
  ratingQuantity: z.number(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});


const getProductsDataSchema = productSchema.pick({
  id: true,
  name: true,
  price: true,
  discount: true,
  rating: true,
  ratingQuantity: true,
  imageUrls: true,
})
// eslint-disable-next-line
const getProductsResponseSchema = createPaginatedResponseSchema(getProductsDataSchema);


export type GetProductsData = z.infer<typeof getProductsDataSchema>;
export type GetProductsResponse = z.infer<typeof getProductsResponseSchema>;
