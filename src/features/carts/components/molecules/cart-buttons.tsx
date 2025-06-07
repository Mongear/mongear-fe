"use client"
import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ComponentProps, useCallback } from "react";

type Props = ComponentProps<"div"> & {}

const CartButtons = ({ className }: Props) => {
  const { push } = useRouter();
  const handleNavigateToShop = useCallback(() => {
    push("/home");
  }, [push])
  return (
    <div className={cn(className, "flex justify-between items-center")}>
      <Button className="px-10 py-7 cursor-pointer" variant="outline" onClick={handleNavigateToShop}>Return To Shop</Button>
      <Button className="px-10 py-7 cursor-pointer" variant="outline">Update Cart</Button>
    </div>
  )
}

export default CartButtons;
