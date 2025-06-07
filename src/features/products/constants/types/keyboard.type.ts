import { Meta } from "@/constants/types/meta.type";
import { KeyboardTypeString } from "@/features/products/constants/schemas/keyboard.schema";

export const keyboardTypes: Record<KeyboardTypeString, Meta> = {
  "60-65": {
    label: "Keyboard 60-65%",
    sku: "60-65",
  },
  "fullsize": {
    label: "Keyboard fullsize",
    sku: "fullsize",
  },
  "alice": {
    label: "Keyboard Alice",
    sku: "alice",
  },
  "tkl": {
    label: "Keyboard TKL",
    sku: "tkl",
  },
  "75": {
    label: "Keyboard 75%",
    sku: "75",
  },
}
