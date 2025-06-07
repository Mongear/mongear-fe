import { ChevronRight } from "lucide-react"
import MenuPopup from "./menu-popup"
import { ComponentProps, memo } from "react";
import { Label } from "../atoms/label";
import { MenuTypeString } from "@/constants/schemas/menu.schema";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"div"> {
  keyString: MenuTypeString,
  value: {
    label: string,
    sku: string,
  }
}
const MenuItem = (
  {
    keyString,
    value,
    className
  }: Props
) => {

  return (
    <li className={cn("relative hover:cursor-pointer group", className)}>
      <div className="flex justify-between items-center pr-4">
        <Label>{value.label}</Label>
        <ChevronRight />
      </div>
      <MenuPopup
        variant={keyString}
        className="absolute left-full top-0 z-10 w-52 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200 border border-gray-200"
      />
    </li>
  )
}

export default memo(MenuItem);
