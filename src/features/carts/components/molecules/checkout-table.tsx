"use client"
import { Button } from "@/components/atoms/button";
import { Separator } from "@/components/atoms/separator";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const CheckoutTable = () => {
  const { push } = useRouter();

  const handleNavigateToCheckout = useCallback(() => {
    push("/checkout");
  }, [push]);

  return (
    <div className="border-2 border-black rounded-sm p-6 space-y-6">
      <h3 className="font-bold">TITLE</h3>
      <div className="space-y-3">
        <div className="space-y-4">
          <div className="flex justify-between">
            <div>Subtotal: </div>
            <div>$1750</div>
          </div>
          <Separator />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <div>Shipping: </div>
            <div>Free</div>
          </div>
          <Separator />
        </div>
        <div className="flex justify-between">
          <div>Total: </div>
          <div>$1750</div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Button onClick={handleNavigateToCheckout} variant="destructive" className="px-8 py-6 cursor-pointer">Process to checkout</Button>
      </div>
    </div >
  )
}

export default CheckoutTable;
