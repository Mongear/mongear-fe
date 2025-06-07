import z from "zod";

//eslint-disable-next-line
const menuTypeStringSchema = z.union([
  z.literal("keyboard"),
  z.literal("keycap"),
  z.literal("switch"),
  z.literal("accessories"),
]);

export type MenuTypeString = z.infer<typeof menuTypeStringSchema>;
