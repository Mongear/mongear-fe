import { cn } from "@/lib/utils"
import Link from "next/link"
import { ComponentProps, memo } from "react"
import { Separator } from "../atoms/separator"
import { MenuTypes } from "@/constants/types/menu.type";
import { MenuTypeString } from "@/constants/schemas/menu.schema";
import { accessoryTypes } from "@/features/products/constants/types/accessory.type";
import { keyboardTypes } from "@/features/products/constants/types/keyboard.type";
import { keycapTypes } from "@/features/products/constants/types/keycap.type";
import { switchTypes } from "@/features/products/constants/types/switch.type";

type Props = ComponentProps<"div"> & {
  variant: MenuTypeString;
};

const MenuPopup = ({ className, variant }: Props) => {
  const getType = () => {
    switch (variant) {
      case "switch":
        return switchTypes;
      case "keyboard":
        return keyboardTypes;
      case "keycap":
        return keycapTypes;
      case "accessories":
        return accessoryTypes;
      default:
        return switchTypes;
    }
  }
  return (
    <div className={cn("w-96 min-h-min border border-black rounded-sm px-2 bg-white", className)}>
      <ul>
        {
          Object.entries(getType()).map(([key, value]) => (
            <li key={key} className="flex flex-col justify-start py-2">
              <Link className="text-black" href={`/${MenuTypes[variant].sku}/${value.sku}`} >{value.label}</Link>
              <Separator />
            </li>
          ))
        }
      </ul>
    </div >
  )
}

export default memo(MenuPopup);
