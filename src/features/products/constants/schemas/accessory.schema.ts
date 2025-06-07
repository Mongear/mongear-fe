import z from "zod";

// eslint-disable-next-line
const accessoryTypeStringSchema = z.union([
  z.literal("lubing oil"),
  z.literal("lubing tool"),
  z.literal("stabilizer"),
  z.literal("keyboard case"),
  z.literal("custom cable"),
  z.literal("deskmat"),
  z.literal("all"),
]);

export type AccessoryTypeString = z.infer<typeof accessoryTypeStringSchema>;
