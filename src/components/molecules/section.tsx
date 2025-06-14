import { memo } from "react";
import { Button } from "../atoms/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  label: string;
  title?: string;
  button?: {
    variant: "outline" | "default";
    title: string;
    action: () => void;
  }
  isSlide?: boolean;
}

const Section = ({
  label,
  title,
  button,
  isSlide,
}: Props) => {
  return (
    <div className="grid grid-cols-9 py-6">
      {/* label */}
      <div className="flex justify-start items-center space-x-2 h-10 col-span-8 mb-5">
        <div className="bg-[#DB4444] w-5 rounded-sm h-full" />
        <span className="text-[#DB4444] font-bold text-base">{label}</span>
      </div>
      {/* title */}
      {
        title && (
          <h3 className="leading-4 text-3xl font-semibold col-span-8">
            {title}
          </h3>
        )
      }
      {/* button */}
      {
        !!button && !isSlide && (
          <Button variant={button.variant} className={`rounded-sm col-span-1 hover:cursor-pointer px-16 py-6 ${button.variant === "default" && "text-white bg-[#DB4444]"}`} onClick={button.action}> {button.title} </Button>
        )
      }
      {
        isSlide && (
          <div className="space-x-2">
            <button className="rounded-full bg-gray-200 size-8 col-span-1">
              <ArrowLeft size={16} className="w-full transition-all duration-300 hover:scale-125 hover:cursor-pointer" />
            </button>
            <button className="rounded-full bg-gray-200 size-8">
              <ArrowRight size={16} className="w-full transition-all duration-300 hover:scale-125 hover:cursor-pointer" />
            </button>
          </div>
        )
      }
    </div >
  )
}

export default memo(Section);
// export default Section;
