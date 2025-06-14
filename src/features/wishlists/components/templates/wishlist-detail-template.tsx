"use client"
import ItemGridWithSection from "@/components/organisms/item-grid-with-section";
import { GetProductsData } from "@/features/products/constants/schemas/product.schema";
import { useCallback } from "react";

interface Props {
  wishlist: GetProductsData[];
  recommend: GetProductsData[];
}
const WishlistDetailTemplate = ({
  wishlist,
  recommend
}: Props) => {
  const handleMoveAllToBagClick = useCallback(() => {
    console.log("move all to bag");
  }, []);

  const handleSeeAllClick = useCallback(() => {
    console.log("see all");
  }, []);

  return (
    <div className="space-y-8 py-12">
      <ItemGridWithSection
        button={
          {
            variant: "outline",
            action: handleMoveAllToBagClick,
            title: "Move All To Bag"
          }
        }
        label={"Wishlist"}
        products={wishlist}
        hasDeleteButton
      />
      <ItemGridWithSection
        button={
          {
            variant: "outline",
            action: handleSeeAllClick,
            title: "See All"
          }
        }
        label={"Just For You"}
        products={recommend}
      />
    </div>
  )
}

export default WishlistDetailTemplate;
