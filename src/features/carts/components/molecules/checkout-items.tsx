import { Separator } from "@/components/atoms/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";
import PaymentOptions from "./payment-options";
import CouponInput from "../atoms/coupon-input";
import { Button } from "@/components/atoms/button";

const datas = [
  {
    url: "https://placehold.co/600x400.png",
    name: "LCD Monitor",
    price: 650,
  },
  {
    url: "https://placehold.co/600x400.png",
    name: "H1 Gamepad",
    price: 1100,
  },
]
type Props = ComponentProps<"div">
const CheckoutItems = ({ className }: Props) => {
  return (
    <div className={cn(className, "p-4 flex items-center justify-center")}>
      <div>
        {/* item details */}
        {datas.map(item => (
          <div key={item.url} className="flex justify-between items-center space-y-4">
            <div className="flex h-16 space-x-4 w-2/3 items-center">
              <div className="relative aspect-square h-full">
                <Image
                  src={item.url}
                  alt="item-checkout"
                  fill
                  className="object-cover"
                />
              </div>
              <span>{item.name}</span>
            </div>
            <span>${item.price}</span>
          </div>
        ))}
        {/* total charge */}
        <div className="my-2 space-y-3">
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
        {/* option checking */}
        <div className="space-y-6 py-4">
          <PaymentOptions />
          <CouponInput />
          <Button variant="destructive" className="px-4 w-64 py-6 cursor-pointer">Place Order</Button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItems;
