import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import CartWithButtons from "../molecules/cart-with-buttons";
import CouponsAndCheckout from "../molecules/coupons-and-checkout";

type Props = ComponentProps<"div"> & {}
const CartWithCoupons = ({ className }: Props) => {
  return (
    <div className={cn(className, "space-y-4")}>
      <CartWithButtons className="py-4" />
      <CouponsAndCheckout className="py-8" />
    </div>
  )
}

export default CartWithCoupons;
