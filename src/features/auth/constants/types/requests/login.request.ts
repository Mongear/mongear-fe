import { z } from "zod";

export const loginRequestSchema = z.object({
  email: z.string().email().nonempty("Email must not be empty").trim(),
  password: z.string().nonempty("Password must not be empty"),
});

export type loginRequest = z.infer<typeof loginRequestSchema>;
