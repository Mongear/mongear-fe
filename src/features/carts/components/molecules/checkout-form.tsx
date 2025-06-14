import { Checkbox } from "@/components/atoms/checkbox";
import { Label } from "@/components/atoms/label";
import InputWithLabel from "@/components/molecules/input-with-label";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"div">;
const CheckoutForm = ({ className }: Props) => {
  return (
    <div className={cn(className, "py-8")}>
      <h2 className="text-3xl tracking-wider py-2">Billing Details</h2>
      <InputWithLabel label="First Name" type="text" required />
      <InputWithLabel label="Company Name" type="text" />
      <InputWithLabel label="Street Address" type="text" required />
      <InputWithLabel label="Apartment Floor" type="text" />
      <InputWithLabel label="Town/City" type="text" />
      <InputWithLabel label="Phone Number" type="text" />
      <InputWithLabel label="Email Address" type="text" />
      <div className="flex items-center gap-3 py-4">
        <Checkbox id="save" />
        <Label htmlFor="save">Save this information for faster check-out next time</Label>
      </div>
    </div>
  )
}

export default CheckoutForm;
