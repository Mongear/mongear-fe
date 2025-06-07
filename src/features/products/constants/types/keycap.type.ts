import { Meta } from "@/constants/types/meta.type";
import { KeycapTypeString } from "../schemas/keycap.schema";

export const keycapTypes: Record<KeycapTypeString, Meta> = {
  "gmk/ws": {
    label: "Profile GMK/WS",
    sku: "gmk-ws",
  },
  "oem": {
    label: "Profile OEM",
    sku: "oem",
  },
  "sa": {
    label: "Profile",
    sku: "sa",
  },
  "dda/csa/mda": {
    label: "DDA/CSA/MDA",
    sku: "dda-csa-mda",
  },
  "xda/moa": {
    label: "Profile XDA/MOA",
    sku: "xda-moa",
  },
  "cherry": {
    label: "Profile Cherry",
    sku: "cherry",
  },
  "artisan": {
    label: "Profile Artisan",
    sku: "artisan",
  },
  "dcs": {
    label: "Profile DCS",
    sku: "dcs",
  },
  "all": {
    label: "All",
    sku: "all",
  },
}
