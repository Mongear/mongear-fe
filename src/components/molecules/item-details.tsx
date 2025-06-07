"use client"
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import StarRating from "../atoms/starRating";
import { Separator } from "../atoms/separator";
import ColorPicker from "../atoms/color-picker";
import { useQuantityState } from "@/hooks/useQuantityState";
import InputWithIncrementalButton from "../atoms/input-with-incremental-button";
import { Button } from "../atoms/button";
import { Heart } from "lucide-react";
import Image from "next/image";

interface Props extends ComponentProps<"div"> {
  title: string;
  rate: number;
  rateNumber: number;
  outOfStock?: boolean;
  colors?: string[];
  description: string;
}
const ItemDetail = ({
  title,
  rate,
  rateNumber,
  outOfStock = false,
  colors,
  description,
  className
}: Props) => {
  const { handleQuantityChange, handleQuantityDecrease, handleQuantityIncrease, quantity } = useQuantityState();
  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <h3 className="font-semibold text-3xl">{title}</h3>
        <div className="flex items-center space-x-4">
          <StarRating
            rate={rate}
            rateNumber={rateNumber}
          />
          <span className="text-muted-foreground">|</span>
          {
            outOfStock && (
              <p className="text-red-600">Out Of Stock</p>
            )
          }
          {
            !outOfStock && (
              <p className="text-green-600">In Stock</p>
            )
          }
        </div>
      </div>
      <h4 className="font-semibold text-xl"> $1032 </h4>
      <p> {description} </p>
      <Separator />
      {
        colors && (
          <div className="flex space-x-8 items-center">
            <span className="text-lg">Colors: </span>
            <ColorPicker colors={colors} />
          </div>
        )
      }
      <div className="flex space-x-8">
        <InputWithIncrementalButton
          value={quantity}
          handleDecrease={handleQuantityDecrease}
          handleIncrease={handleQuantityIncrease}
          handleChange={handleQuantityChange} />
        <Button className="bg-[#DB4444] py-6 px-8 hover:cursor-pointer" >
          Buy Now
        </Button>
        <Button variant="outline" className="py-6 aspect-square hover:cursor-pointer">
          <Heart />
        </Button>
      </div>
      <div className="w-full relative h-52">
        <Image
          src={"/delivery.svg"}
          alt={"Delivery"}
          fill
          className="object-fill"
        />
      </div>
    </div>
  )
}

export default ItemDetail;
