"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, useState } from "react";
import { ScrollArea } from "../atoms/scroll-area";

interface Props extends ComponentProps<"div"> {
  imageUrls: string[];
}

const ItemImageDetail = ({
  imageUrls,
  className,
}: Props) => {
  const [index, setIndex] = useState(0);
  const handleClickImage = (value: number) => setIndex(value);
  return (
    <div className={cn("grid grid-cols-4 space-x-4 h-full", className)}>
      <div className="col-span-1 flex flex-col items-center justify-center h-full">
        <ScrollArea className="max-h-[596] w-full">
          <div className="flex flex-col justify-start items-center space-y-4">
            {
              imageUrls.map((item, index) => (
                <div onClick={() => handleClickImage(index)} key={index} className="relative aspect-square size-5/6 overflow-hidden hover:cursor-pointer shadow-sm hover:shadow-md">
                  <Image
                    src={item}
                    alt={"item"}
                    fill
                    className="object-cover hover:scale-110 transition-all duration-300 ease-in-out "
                  />
                </div>
              ))
            }
          </div>
        </ScrollArea>
      </div>
      <div className="col-span-3 relative h-full w-5/6 mx-auto">
        <Image
          src={imageUrls[index]}
          alt={"selected image"}
          fill
          className="object-contain"
        />
      </div>
    </div >
  )
}

export default ItemImageDetail
