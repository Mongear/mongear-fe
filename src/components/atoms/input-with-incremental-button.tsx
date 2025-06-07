import { ComponentProps, memo } from "react"
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"div"> {
  value: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
  handleChange: (value: number) => void;
}

const InputWithIncrementalButton = ({ className, handleDecrease, handleIncrease, value, handleChange }: Props) => {
  return (
    <div className={cn("flex", className)}>
      <button onClick={handleDecrease} className="border-2 rounded-tl-sm rounded-bl-sm p-2 hover:cursor-pointer" >
        <Minus />
      </button>
      <input type="number" value={value} onChange={(e) => handleChange(Number.parseInt(e.currentTarget.value))}
        className="border-t-2 border-b-2 p-2 w-24"
      />
      <button onClick={handleIncrease} className="border-2 rounded-tr-sm rounded-br-sm p-2 bg-[#DB4444] hover:cursor-pointer" >
        <Plus className="text-white" />
      </button>
    </div >
  )
}

export default memo(InputWithIncrementalButton);
