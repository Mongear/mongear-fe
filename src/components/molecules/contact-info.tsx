import { cn } from "@/lib/utils"
import { ComponentProps } from "react"
import Image from "next/image"
import { Card } from "../atoms/card"
import { Separator } from "../atoms/separator"

type Props = ComponentProps<"div">;
const ContactInfo = ({ className }: Props) => {
  return (
    <Card className={cn("px-6 py-8 grid grid-rows-2 px-auto", className)}>
      <div className="row-span-1 space-y-6">
        <div className="flex justify-start items-center space-x-4">
          <div className="relative size-8 rounded-full">
            <Image
              src="/icons-phone.svg"
              alt="phone"
              fill
            />
          </div>
          <span className="font-bold text-xl"> Contact Us </span>
        </div>
        <div className="space-y-4">
          <div>We are available 24/7, 7 days a week</div>
          <div>Phone: +8801611112222</div>
        </div>
        <Separator />
      </div>
      <div className="row-span-1 space-y-6">
        <div className="flex justify-start items-center space-x-4">
          <div className="relative size-8 rounded-full">
            <Image
              src="/icons-phone.svg"
              alt="phone"
              fill
            />
          </div>
          <span className="font-bold text-xl"> Write To US </span>
        </div>
        <div className="space-y-4">
          <div>Fill out our form and we will contact you within 24 hours</div>
          <div>Emails: customer@exclusive.com</div>
          <div>Emails: support@exclusive.com</div>
        </div>
      </div>
    </Card >
  )
}

export default ContactInfo
