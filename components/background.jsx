import Image from "next/image";
import BackgroundImage from "../assets/svg/ecomBackground.svg";

export default function background() {
  return (
    <Image
        src={BackgroundImage}
        alt="Picture of the author"
        sizes="100vw"
        fill="responsive"
        style={
            {
                backgroundRepeat: "repeat-x",
                position: "absolute",
                top: 0,
                left: 0,
            }
        }
        />
  )
}
