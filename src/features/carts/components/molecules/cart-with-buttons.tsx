import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import CartTable from "./cart-table";
import CartButtons from "./cart-buttons";

type Props = ComponentProps<"div"> & {}
const CartWithButtons = ({ className }: Props) => {
  return (
    <div className={cn(className, "space-y-6")}>
      <CartTable />
      <CartButtons className="w-full" />
    </div>
  )
}

export default CartWithButtons;
