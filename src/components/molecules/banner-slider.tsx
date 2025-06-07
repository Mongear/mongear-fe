import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "../atoms/carousel"
import { memo } from "react";

const BannerSlider = () => {
  return (
    <div className="w-5/6 h-96 my-4">
      <Carousel className="h-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="h-96">
          <CarouselItem className="relative">
            <Image
              src={"https://placehold.co/600x400.png"}
              alt={"banner"}
              fill
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              src={"https://placehold.co/600x400.png"}
              alt={"banner"}
              fill
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              src={"https://placehold.co/600x400.png"}
              alt={"banner"}
              fill
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              src={"https://placehold.co/600x400.png"}
              alt={"banner"}
              fill
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              src={"https://placehold.co/600x400.png"}
              alt={"banner"}
              fill
              className="object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default memo(BannerSlider);
