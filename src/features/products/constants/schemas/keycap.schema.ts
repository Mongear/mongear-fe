import z from "zod";

//eslint-disable-next-line
const keycapStringSchema = z.union([
  z.literal("cherry"),
  z.literal("xda/moa"),
  z.literal("dda/csa/mda"),
  z.literal("oem"),
  z.literal("sa"),
  z.literal("dcs"),
  z.literal("artisan"),
  z.literal("gmk/ws"),
  z.literal("all"),
])

export type KeycapTypeString = z.infer<typeof keycapStringSchema>;
