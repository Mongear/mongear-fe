import { ComponentProps } from "react"
import Section from "../molecules/section"
import { GetProductsData } from "@/features/products/constants/schemas/product.schema"
import { cn } from "@/lib/utils";
import ItemGrid from "./item-grid";

interface Props extends ComponentProps<"div"> {
  label: string;
  title?: string;
  button?: {
    variant: "outline" | "default",
    title: string,
    action: () => void,
  }
  products: GetProductsData[];
  isSlide?: boolean;
  hasDeleteButton?: boolean;
}
const ItemGridWithSection = ({
  className,
  products,
  label,
  title,
  button,
  isSlide,
  hasDeleteButton = false,
}: Props) => {
  return (
    <div className={cn(className, "")}>
      <Section
        label={label}
        title={title}
        button={button}
        isSlide={isSlide}
      />
      <ItemGrid
        products={products}
        hasDeleteButton={hasDeleteButton}
      />
    </div>
  )
}

export default ItemGridWithSection
