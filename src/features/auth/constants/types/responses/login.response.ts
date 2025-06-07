import { createResponseSchema } from "@/constants/schemas/response.schema";
import { z } from "zod";

// eslint-disable-next-line
const loginResponseSchema = createResponseSchema(
  z.object({
    accessToken: z.string(),
  })
);

export type LoginResponse = Partial<z.infer<typeof loginResponseSchema>>;
