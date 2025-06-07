"use client"
import { getProducts } from "@/features/products/constants/data/getProducts.data";
import MenuAndBanner from "../molecules/menu-and-banner";
import ItemGridWithSection from "../organisms/item-grid-with-section";

const HomeTemplateComponent = () => {
  const { items } = getProducts();
  return (
    <div className="containter mx-auto max-w-7xl min-h-screen space-y-16 py-4">
      <MenuAndBanner />
      <ItemGridWithSection
        label={"Best Seller"}
        products={items}
      />
      <ItemGridWithSection
        title={"Suit for you"}
        label={"Suit for you"}
        products={items}
      />
      <ItemGridWithSection
        label={"In Coming"}
        products={items}
      />
    </div >
  )
}

export default HomeTemplateComponent;
