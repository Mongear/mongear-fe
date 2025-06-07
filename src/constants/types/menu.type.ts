import { MenuTypeString } from "../schemas/menu.schema";
import { Meta } from "./meta.type";

export const MenuTypes: Record<MenuTypeString, Meta> = {
  "keyboard": {
    label: "Keyboards",
    sku: "keyboards",
  },
  "keycap": {
    label: "Keycaps",
    sku: "keycaps",
  },
  "switch": {
    label: "Switches",
    sku: "switches",
  },
  "accessories": {
    label: "Accessories",
    sku: "accessories",
  },
}
