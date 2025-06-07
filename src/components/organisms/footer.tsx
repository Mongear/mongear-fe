import { Facebook, Instagram, Linkedin, SendHorizontal, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "../atoms/input"
import { Button } from "../atoms/button"

const FooterComponent = () => {
  return (
    <footer className="flex justify-start items-center w-full h-[443] bg-black text-white relative">
      <div className="mx-auto w-3/4 grid grid-cols-5 space-x-4 h-4/5">
        <div className="col-span-1 space-y-8">
          <h2 className="text-2xl font-semibold">Mongear</h2>
          <h4 className="text-xl ">Subscribe</h4>
          <div>
            <span>Get 10% off your first order</span>
            <div className="relative my-4 h-11 pr-2">
              <Input className="size-full" placeholder="Enter your email" />
              <Button variant="ghost" className="absolute top-1 right-1 hover:cursor-pointer" >
                <SendHorizontal />
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <div className="w-full">
            <h2 className="text-2xl font-semibold"> Support </h2>
          </div>
          <div className="w-full">
            <span> 111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</span>
          </div>
          <div className="w-full">
            <span> exclusive@gmail.com </span>
          </div>
          <div className="w-full">
            <span> exclusive@gmail.com </span>
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <h2 className="text-2xl font-semibold"> Account </h2>
          <div className="w-full">
            <Link href={"#"}> My Account</Link>
          </div>
          <div className="w-full">
            <Link href={"#"}> Login / Register</Link>
          </div>
          <div className="w-full">
            <Link href={"#"}> Cart</Link>
          </div>
          <div className="w-full">
            <Link href={"#"}> Wishlist</Link>
          </div>
          <div className="w-full">
            <Link href={"#"}> Shop</Link>
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <h2 className="text-2xl font-semibold"> Quick Link </h2>
          <div className="w-full">
            <Link href={"#"} > Privacy Policy</Link>
          </div>
          <div className="w-full">
            <Link href={"#"} > Terms Of Use</Link>
          </div>
          <div className="w-full">
            <Link href={"#"} > FAQ</Link>
          </div>
          <div className="w-full">
            <Link href={"#"} > Contact</Link>
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <h2 className="text-2xl font-semibold"> Download App </h2>
          <span className="text-muted-foreground">Save $3 with App New User Only</span>
          <div className="flex space-x-2 py-2 border-1 border-black border-l-white  px-1">
            <div className="flex-1 relative">
              <Image
                src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/qrcode-module_0.png?itok=ZVIdRXkv"
                alt="QR"
                fill
                priority={false}
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 space-y-4 h-32 ">
              <div className="border-white">Get It On Google Play</div>
              <div className="border-white">Get It On App Store</div>
            </div>
          </div>
          <div className="flex justify-between px-2">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 h-20">
        <div className="bg-gray-900 h-[1] " />
        <div className="flex justify-center items-center h-18 w-1/2 mx-auto text-center text-muted-foreground">
          <span> Copyright Rimel 2022. All right reserved </span>
        </div>
      </div>
    </footer >
  )
}

export default FooterComponent
