import { Meta } from "@/constants/types/meta.type";
import { SwitchTypeString } from "../schemas/switch.schema";

export const switchTypes: Record<SwitchTypeString, Meta> = {
  "linear": {
    label: "Switch linear",
    sku: "linear",
  },
  "tactile": {
    label: "Switch Tactile",
    sku: "tactile",
  },
  "clicky": {
    label: "Switch Linear",
    sku: "clicky",
  },
  "silent": {
    label: "Switch Silent",
    sku: "silent",
  },
  "all": {
    label: "Switch All",
    sku: "all",
  },
}
