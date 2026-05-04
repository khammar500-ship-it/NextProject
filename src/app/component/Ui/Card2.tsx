import { Scroll } from "@/app/interface"
import Image from "next/image"
type Props = Scroll
function Card2({ photo, name, text }: Props) {
    return (
        <div className="shadow-[6px_6px_0px_2px_#1E1E1E] max-w-[425.3333435058594px] border rounded-2xl flex flex-col items-center p-12.5 gap-7.5 col-span-4 m-auto bg-white max-[1600]:col-span-6 max-[1150]:col-span-12">

            {photo &&
                <div className="w-20 h-20 rounded-full border text-center flex items-center justify-center">
                    <Image
                        src={photo}
                        alt='cardIcon'
                        width={60}
                        height={60}
                    />
                </div>}
            {name && <div className="text-[24px] font-bold">{name}</div>}

            <div className="flex">
                <Image
                    src="/Img/IconeStare.png"
                    alt='cardIcon'
                    width={24}
                    height={24}
                />
                <Image
                    src="/Img/IconeStare.png"
                    alt='cardIcon'
                    width={24}
                    height={24}
                />
                <Image
                    src="/Img/IconeStare.png"
                    alt='cardIcon'
                    width={24}
                    height={24}
                />
                <Image
                    src="/Img/IconeStare.png"
                    alt='cardIcon'
                    width={24}
                    height={24}
                />
                <Image
                    src="/Img/IconeStare.png"
                    alt='cardIcon'
                    width={24}
                    height={24}
                />
            </div>
            {text && <div className="text-[20px] text-Grey-30">{text}</div>}
        </div>
    )
}

export default Card2