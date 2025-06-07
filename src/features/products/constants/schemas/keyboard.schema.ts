import z from "zod"

//eslint-disable-next-line
const keyboardTypeStringSchema = z.union([
  z.literal("60-65"),
  z.literal("75"),
  z.literal("tkl"),
  z.literal("fullsize"),
  z.literal("alice"),
])

//eslint-disable-next-line
const keyboard = z.object({
  id: z.string().uuid("Id is not valid"),
  name: z.string().nonempty("Name must not be empty"),
});

export type KeyboardTypeString = z.infer<typeof keyboardTypeStringSchema>;
