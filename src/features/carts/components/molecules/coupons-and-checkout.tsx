import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import CouponInput from "../atoms/coupon-input";
import CheckoutTable from "./checkout-table";

type Props = ComponentProps<"div"> & {}
const CouponsAndCheckout = ({ className }: Props) => {
  return (
    <div className={cn(className, "grid grid-cols-2 space-x-4")}>
      <CouponInput />
      <CheckoutTable />
    </div >
  )
}

export default CouponsAndCheckout;
