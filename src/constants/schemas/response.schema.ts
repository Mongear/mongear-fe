import z from "zod";

export function createPaginatedResponseSchema<ItemType extends z.ZodTypeAny>(
  itemSchema: ItemType,
) {
  return z.object({
    pageIndex: z.number(),
    pageSize: z.number(),
    totalCount: z.number(),
    items: z.array(itemSchema),
  });
}

export function createResponseSchema<ItemType extends z.ZodTypeAny>(
  itemSchema: ItemType
) {
  return z.object({
    pageIndex: z.number(),
    pageSize: z.number(),
    totalCount: z.number(),
    items: itemSchema,
  });
}
