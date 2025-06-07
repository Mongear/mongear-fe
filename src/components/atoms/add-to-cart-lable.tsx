import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { ComponentProps } from "react";

type Props = ComponentProps<'input'>;

const AddToCartLabel = ({ className }: Props) => {
  return (
    <div className={cn("flex justify-center items-center w-full h-11 space-x-4 bg-black", className)}>
      <ShoppingCart className="text-white" />
      <span className="text-white">Add To Cart</span>
    </div>
  )
}

export default AddToCartLabel;
