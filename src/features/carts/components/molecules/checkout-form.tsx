import InputWithLabel from "@/components/molecules/input-with-label";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"div">;
const CheckoutForm = ({ className }: Props) => {
  return (
    <div className={cn(className, "")}>
      <InputWithLabel label="First Name" type="text" required />
      <InputWithLabel label="Company Name" type="text" />
      <InputWithLabel label="Street Address" type="text" required />
      <InputWithLabel label="Apartment Floor" type="text" />
      <InputWithLabel label="Town/City" type="text" />
      <InputWithLabel label="Phone Number" type="text" />
      <InputWithLabel label="Email Address" type="text" />
    </div>
  )
}

export default CheckoutForm;
