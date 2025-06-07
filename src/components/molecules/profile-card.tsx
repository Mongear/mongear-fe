import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

interface Props {
  src: string;
  name: string;
  position: string;
  hasTwitter?: boolean;
  hasInstagram?: boolean;
  hasLinkedin?: boolean;
}
const ProfileCard = ({
  src,
  position,
  name,
  hasTwitter,
  hasLinkedin,
  hasInstagram,
}: Props) => {
  return (
    <div className="h-[564] w-[368] space-y-4">
      <div className="w-full h-[431] relative">
        <Image
          src={src}
          alt={"profiles"}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <span>{position}</span>
      </div>
      <div className="flex justify-start items-center space-x-4">
        {hasTwitter && <Twitter />}
        {hasInstagram && <Instagram />}
        {hasLinkedin && <Linkedin />}
      </div>
    </div>
  )
}

export default memo(ProfileCard);
