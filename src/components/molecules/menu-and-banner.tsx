import { cn } from "@/lib/utils";
import { ComponentProps, memo } from "react";
import { MenuTypes } from "@/constants/types/menu.type";
import { MenuTypeString } from "@/constants/schemas/menu.schema";
import BannerSlider from "./banner-slider";
import MenuItem from "./menu-item";

type Props = ComponentProps<"div">;

const MenuAndBanner = ({
  className
}: Props) => {
  return (
    <div className={cn("grid grid-cols-4", className)}>
      {/* menu */}
      <div className="col-span-1 py-2 border-0 border-r-2">
        <ul>
          {
            Object.entries(MenuTypes).map(([key, value]) => {
              return (
                <MenuItem
                  className="py-1"
                  key={key}
                  keyString={key as MenuTypeString}
                  value={value} />
              )
            })
          }
        </ul >
      </div >
      {/* banner */}
      <div className="col-span-3 flex justify-center items-center">
        <BannerSlider />
      </div >
    </div >
  )
}

export default memo(MenuAndBanner);
