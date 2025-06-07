import { ComponentProps } from "react"
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"div"> {
  rate: number;
  rateNumber: number;
}
const StarRating = ({
  rate,
  rateNumber,
  className
}: Props) => {
  return (
    <div>
      <div className={cn("flex items-center justify-between space-x-1 ", className)}>
        {
          Array.from({ length: rate }).map((_, index) => (
            <Image
              key={index}
              priority={false}
              src="/rate-star.svg"
              alt="rate-star"
              width={16}
              height={16}
            />
          ))
        }
        {
          rate % 1 !== 0 && (
            <div className="flex">
              <Image
                priority={false}
                src="/half-rate-star.svg"
                alt="rate-star"
                width={8}
                height={8}
              />
            </div>
          )
        }
        <span className="font-semibold text-muted-foreground mb-1">({rateNumber})</span>
      </div>
    </div>
  )
}

export default StarRating
