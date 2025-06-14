"use client"
import { Eye, Heart, Trash } from "lucide-react";
import Image from "next/image"
import AddToCartLabel from "../atoms/add-to-cart-lable";
import StarRating from "../atoms/starRating";
import ColorPicker from "../atoms/color-picker";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  originalPrice?: number;
  rate: number;
  rateNumber: number;
  newRelease?: boolean;
  discount?: number;
  addToCart?: boolean;
  hasDeleteButton?: boolean;
  colors?: string[];
}
const ItemCard = (
  {
    id,
    imageUrl,
    originalPrice,
    price,
    rate,
    rateNumber,
    title,
    newRelease = false,
    discount,
    addToCart = false,
    colors,
    hasDeleteButton = false,
  }
    : Props
) => {
  const { push } = useRouter();
  const handleItemClick = useCallback(() => {
    push(`/products/${id}`);
  }, [id, push]);

  return (
    <div className="w-[270] h-[350] flex flex-col justify-start items-start hover:cursor-pointer group">
      <div className="relative w-[270] aspect-square mb-4 overflow-hidden rounded-md hover:rounded-md">
        <Image
          src={imageUrl}
          alt="Image"
          fill
          priority={true}
          className="object-cover group-hover:scale-110 transition-all ease-in-out h-full duration-300 "
        />
        {
          !hasDeleteButton && (
            <>
              <div className="bg-white rounded-full absolute right-2 top-2 size-6 invisible group-hover:visible text-center flex items-center hover:scale-110 transition-all duration-150">
                <Heart className="mx-auto h-2/3" />
              </div>
              <div className="bg-white rounded-full absolute right-2 top-12 size-6 invisible group-hover:visible text-center flex items-center hover:scale-110 transition-all duration-150">
                <Eye className="mx-auto h-2/3" />
              </div>
            </>
          )
        }
        {
          hasDeleteButton && (
            <div className="bg-white rounded-full absolute right-2 top-2 size-6 invisible group-hover:visible text-center flex items-center hover:scale-110 transition-all duration-150">
              <Trash className="mx-auto h-2/3" />
            </div>
          )
        }
        {
          addToCart && (
            <AddToCartLabel className="absolute w-full bottom-0 invisible group-hover:visible rounded-b-md hover:scale-105 transition-all duration-150" />
          )
        }
        {
          newRelease && (
            <div className="bg-[#00FF66] absolute top-4 left-4 w-12 h-6 text-center rounded-md text-white">NEW</div>
          )
        }
        {
          discount && (
            <div className="bg-[#DB4444] absolute top-4 left-4 w-12 h-6 text-center rounded-md text-white"> - {discount}%</div>
          )
        }
      </div>
      <div onClick={handleItemClick}>
        <h4 className="font-semibold mb-2 text-lg truncate max-w-[270]">{title}</h4>
        <div className="grid grid-cols-5 space-x-2">
          <span className="col-span-1 mb-2 text-[#DB4444] font-semibold text-center my-auto h-full">${price}</span>
          {
            originalPrice && (
              <>
                <span className="col-span-4 font-semibold text-muted-foreground line-through mb-2">${originalPrice}</span>
              </>
            )
          }
          <div className="flex space-x-2 col-span-4">
            <StarRating rate={rate} rateNumber={rateNumber} className="" />
          </div>
          <ColorPicker
            colors={colors} />
        </div>
      </div>
    </div >
  )
}

export default ItemCard
