import Link from "next/link"
import { Search } from "lucide-react"
import { Avatar } from "@radix-ui/react-avatar"
import { Input } from "../atoms/input"
import { Button } from "../atoms/button"
import { AvatarFallback, AvatarImage } from "../atoms/avatar"
import { memo } from "react"
import IconWithNoti from "../molecules/icon-with-noti"

const NavbarComponent = () => {
  const likeQuantity = 0;
  const cartQuantity = 0;
  return (
    <div className="w-full h-24 border">
      <div className="grid grid-cols-5 h-full max-w-7xl mx-auto mt-2">
        <div className="h-full flex items-center">
          <h2 className="text-3xl font-bold cursor-default">Mongear</h2>
        </div>
        <div className="col-span-2">
          <div className="h-full flex items-center justify-start space-x-10 px-12">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/sign-up">Sign Up</Link>
          </div>
        </div>
        <div className="flex items-center col-span-2 space-x-4">
          <div className="w-52 relative">
            <Input className="w-full" placeholder="Looking for" />
            <Button variant="ghost" className="absolute top-0 right-0">
              <Search />
            </Button>
          </div>
          <IconWithNoti type={"like"} quantity={likeQuantity} />
          <IconWithNoti type={"cart"} quantity={cartQuantity} />
          <Avatar className="rounded-full size-8">
            <AvatarImage src="" />
            <AvatarFallback>T</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default memo(NavbarComponent);
