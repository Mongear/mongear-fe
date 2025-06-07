import Image from "next/image";
import { memo } from "react";
import SignUpForm from "./sign-up-form";

const LoginFormWithBanner = () => {
  return (
    <div className="flex items-center my-14 h-[750] w-full">
      <div className="relative h-full w-3/5">
        <Image
          src={"https://placehold.co/600x400.png"}
          alt={"Login Banner"}
          fill
          className="object-cover"
        />
      </div>
      <SignUpForm className="mx-auto px-16 flex-1" />
    </div>
  )
}

export default memo(LoginFormWithBanner);
