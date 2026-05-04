import { HeroPage } from "@/app/interface"
import Image from "next/image"
type Props =HeroPage
function Card6({title1,title2,text}:Props) {
  return (
    <div className="grid grid-cols-6 gap-12.5">
        <div className="col-span-2 flex items-center gap-5 border rounded-2xl shadow-[6px_6px_0px_2px_#1E1E1E] w-fit px-12.5 py-7.5 max-[1200]:px-5 max-[1200]:py-2.5 max-[850]:col-span-6">
            <div><Image className="max-[1400]:w-12.5 h-12.5" src="/Img/Icone3About.png" alt="ImgIcone3" width={87.30999755859375} height={87.30999755859375}/></div>
            <div className="text-[68px] font-bold max-[1600]:text-[48px] max-[1400]:text-[38px]">{title1}</div>
        </div>
        <div className="col-span-4 max-[850]:col-span-6">
            <div className="flex flex-col justify-between h-full">
                <div className="text-[28px] font-bold">{title2}</div>
                <div>{text}</div>
            </div>
        </div>
    </div>
  )
}

export default Card6