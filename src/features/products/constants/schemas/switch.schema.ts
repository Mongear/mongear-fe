import z from "zod";

//eslint-disable-next-line
const switchTypeStringSchema = z.union([
  z.literal("linear"),
  z.literal("tactile"),
  z.literal("clicky"),
  z.literal("silent"),
  z.literal("all"),
]);

export type SwitchTypeString = z.infer<typeof switchTypeStringSchema>;
