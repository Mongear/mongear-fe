import z from "zod";

export const timestampSchema = {
  createdAt: z.string(),
  updatedAt: z.string()
}
