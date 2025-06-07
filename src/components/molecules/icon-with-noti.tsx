"use client"
import { Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { memo } from "react";

interface Props {
  type: "like" | "cart";
  quantity?: number;
}
const IconWithNoti = ({
  type,
  quantity = 0
}: Props) => {
  const { push } = useRouter();
  const handleNavigate = () => {
    switch (type) {
      case "like":
        push("/like");
        break;

      case "cart":
        push("/cart");
        break;

      default:
        break;
    }
  }

  return (
    <div className="size-8 flex items-center justify-center hover:cursor-pointer">
      <div className="relative" onClick={handleNavigate}>
        {type === "like" && (
          <Heart />
        )}
        {type === "cart" && (
          <ShoppingCart />
        )}
        {
          quantity > 0 && (
            <div className="absolute bg-red-500 size-3 top-0 right-0 rounded-full flex items-center justify-center" >
              <span className="text-white text-sm scale-70">{quantity}</span>
            </div>)
        }
      </div>
    </div>
  )
}
export default memo(IconWithNoti);
