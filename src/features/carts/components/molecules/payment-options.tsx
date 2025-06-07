import { Label } from "@/components/atoms/label";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"div">;
const PaymentOptions = ({ className }: Props) => {
  return (
    <RadioGroup defaultValue="option-one" className={cn(className, "space-y-2")}>
      <div className="flex items-center space-x-4">
        <RadioGroupItem value="bank" id="bank" className="cursor-pointer" />
        <Label htmlFor="bank">Bank</Label>
      </div>
      <div className="flex items-center space-x-4">
        <RadioGroupItem value="cod" id="cod" className="cursor-pointer" />
        <Label htmlFor="cod">Cash On Delivery</Label>
      </div>
    </RadioGroup>
  )
}

export default PaymentOptions;
