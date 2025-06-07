import { Meta } from "@/constants/types/meta.type";
import { AccessoryTypeString } from "../schemas/accessory.schema";

export const accessoryTypes: Record<AccessoryTypeString, Meta> = {
  "lubing oil": {
    label: "Lubing Oil",
    sku: "lubing-oil",
  },
  "stabilizer": {
    label: "Stabilizer",
    sku: "stabilizer",
  },
  "keyboard case": {
    label: "Keyboard Case",
    sku: "keyboard-case",
  },
  "lubing tool": {
    label: "Lubing Tool",
    sku: "lubing-tool",
  },
  "custom cable": {
    label: "Custom Cable",
    sku: "custom-cable",
  },
  "deskmat": {
    label: "Deskmat",
    sku: "deskmat",
  },
  "all": {
    label: "All",
    sku: "all",
  },
}
