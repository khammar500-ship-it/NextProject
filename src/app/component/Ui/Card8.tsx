import { Section1 } from "@/app/interface"
import Image from "next/image"
type Props = Section1 & {
    WeOnAcademics?: boolean
}
function Card8({ photo, title, text, WeOnAcademics = false }: Props) {
    return (
        <div className="mx-auto relative z-1 p-10 border rounded-2xl shadow-[4px_4px_0px_1px_#1E1E1E] w-fit bg-white col-span-2 max-[1400]:col-span-3 max-[950]:col-span-6 max-[430]:px-5">

            <div className={`-z-1 bg-Orange-95 absolute ${WeOnAcademics ? "top-0 w-1/4 left-37.5 h-[282] border rounded-b-xl max-[430]:left-33.5" : "left-0 w-full top-1/4 h-1/4 border"}`}></div>
            <div><Image src={photo} alt="PhotoAboutLearn" width={320} height={220} /></div>
            <div className="text-center w-80  mt-6">
                <div className="text-[24px] font-bold mb-3">{title}</div>
                <div className="text-[16px] text-Grey-30">{text}</div>
            </div>
        </div>
    )
}

export default Card8 