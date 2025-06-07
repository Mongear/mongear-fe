import ItemDetail from "./item-details"
import ItemImageDetail from "./item-image-detail"

const ItemDetailWithImages = () => {
  return (
    <div className="grid grid-cols-3 my-12">
      <ItemImageDetail
        className="col-span-2"
        imageUrls={[
          "https://placehold.co/600x400.png",
          "https://placehold.co/600x400.png",
          "https://placehold.co/600x400.png",
          "https://placehold.co/600x400.png",
          "https://placehold.co/600x400.png",
        ]}
      />
      <ItemDetail
        className="py-4"
        title={"Title"}
        rate={5}
        rateNumber={0} colors={["#000000", "#538F71"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut malesuada velit. Fusce vestibulum congue arcu. Nullam lorem libero, interdum ac posuere at, porttitor sed nibh. Duis non pharetra dolor. Donec porta bibendum dui, a lacinia mi interdum ac. Nulla sed turpis aliquet, sagittis ligula a, aliquam nunc. Vivamus pulvinar quam tortor, id fringilla felis semper sit amet. Phasellus rutrum orci rhoncus venenatis fringilla."} />
    </div >
  )
}

export default ItemDetailWithImages;
