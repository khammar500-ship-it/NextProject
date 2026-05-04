import { Scroll } from "@/app/interface"
import Image from "next/image"
type Props = Scroll
export default function Card7({photo,name,text,text2}:Props) {
  return (
    <div className=" bg-white p-10 border rounded-2xl flex flex-col justify-between gap-5 shadow-[4px_4px_0px_1px_#1E1E1E] max-[1000]:col-span-2">
        <div className="grid grid-cols-6">
            <div className="col-span-5 flex items-center gap-3">
                <Image src={photo} alt="ImgPersone" width={80} height={80}/>
                <div className="text-[24px] font-bold ">{name}</div>
            </div>
            <div className="col-span-1 m-auto flex items-center justify-center w-12 h-12 bg-Orange-90 border rounded-xl">
                <Image src="/Img/emailIcone.png" alt="ImgPersone" width={20} height={20}/>
            </div>
        </div>
        <div className="border rounded-2xl bg-Orange-97 p-6">
            <div className="text-[20px] text-Grey-20 font-bold">{text}</div>
            <div className="text-Grey-20">{text2}</div>
        </div>
    </div>
  )
}
