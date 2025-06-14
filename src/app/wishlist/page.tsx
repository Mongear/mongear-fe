import { getProducts } from "@/features/products/constants/data/getProducts.data";
import WishlistDetailTemplate from "@/features/wishlists/components/templates/wishlist-detail-template";

const WishlistPage = () => {
  const { items } = getProducts();
  return (
    <div className="max-w-7xl container mx-auto" >
      <WishlistDetailTemplate
        wishlist={items}
        recommend={items}
      />
    </div>
  )
}

export default WishlistPage;
