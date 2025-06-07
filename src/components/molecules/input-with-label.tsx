import { ComponentProps, memo } from "react"
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"input"> {
  label?: string;
}
const InputWithLabel = ({ className, value, type, placeholder, onChange, label }: Props) => {
  return (
    <div className={cn("space-y-2 my-4", className)}>
      {
        label && (
          <Label className="text-muted-foreground">{label}</Label>
        )
      }
      <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div >
  )
}

export default memo(InputWithLabel);
