import { GetProductsData } from "@/features/products/constants/schemas/product.schema";
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"
import ItemCard from "../molecules/item-card";

interface Props extends ComponentProps<"div"> {
  products: GetProductsData[];
}
const ItemGrid = ({
  className,
  products,
}: Props) => {
  return (
    <div className={cn(className, "overflow-x-scroll flex items-center gap-x-8")}>
      {
        products.map(item => (
          <ItemCard
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrls[0] ?? "/next.svg"}
            title={item.name}
            price={item.price}
            rate={item.rating}
            rateNumber={item.ratingQuantity}
          />
        ))
      }
    </div>
  )
}

export default ItemGrid
