import { Section1 } from "@/app/interface";
import Image from "next/image";
type Props =Section1
function Card5({photo,title,text}:Props) {
  return (
    <div className="flex flex-col border-2 rounded-2xl bg-white p-15 w-fit gap-15 shadow-[6px_6px_0px_2px_#1E1E1E] max-[1200]:p-7.5 max-[1000]:p-15 max-[550]:p-7.5">
        <div  className="flex justify-between">
            <div className="text-[48px] font-bold">{title}</div>
            <div><Image src={photo} alt="IconMission" width={80.57967376708984} height={80}/></div>
        </div>
        <div className="text-[20px] text-Grey-20">
            {text}
        </div>
    </div>
  )
}

export default Card5