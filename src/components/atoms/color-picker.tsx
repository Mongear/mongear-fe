import { cn } from "@/lib/utils"
import { ComponentProps, memo } from "react"

interface Props extends ComponentProps<"div"> {
  colors?: string[]
}
const ColorPicker = ({
  className,
  colors
}: Props) => {
  return (
    <div className={cn("flex justify-start items-center space-x-2 mt-2 h-6 w-full", className)}>
      {colors && colors.map((item, index) => (
        <div key={index} className=" border-2 border-white hover:border-black rounded-full bg-white overflow-hidden transition-all ease-in-out duration-200 hover:cursor-pointer">
          <div
            style={{ background: item }}
            className={`rounded-full mx-auto size-6 hover:scale-75`} />
        </div>
      ))
      }
    </div>
  )
}

export default memo(ColorPicker);
