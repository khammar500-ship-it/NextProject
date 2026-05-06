
import { NavLink } from "@/app/interface"
import Link from "next/link"
type Props = NavLink 
function Card4({ name, text, path }: Props) {
    return (
        <div className="shadow-[6px_6px_0px_2px_#1E1E1E] h-full p-20 max-w-[773] flex flex-col items-center border rounded-2xl bg-white gap-15 col-span-1 m-auto max-[1400]:col-span-2  max-[700]:p-10">
            {name && <div className="text-[48px] font-bold max-[700]:text-[38px]">{name}</div>}
            <div className="flex w-full justify-between">
                <div className="w-5 h-5 border rounded-full bg-white z-1" ></div>
                <div className="w-full grid grid-cols-6 items-center gap-5">
                    <div className="max-w-[87] h-2  bg-Orange-80 "><div className="border w-11/12 mt-0.75"></div></div>
                    <div className="max-w-[87] h-2  bg-Orange-80 "><div className="border w-11/12 mt-0.75"></div></div>
                    <div className="max-w-[87] h-2  bg-Orange-80 "><div className="border w-11/12 mt-0.75"></div></div>
                    <div className="max-w-[87] h-2  bg-Orange-80 "><div className="border w-11/12 mt-0.75"></div></div>
                    <div className="max-w-[87] h-2  bg-Orange-80 "><div className="border w-11/12 mt-0.75"></div></div>
                    <div className="max-w-[87] h-2  bg-Orange-80 "><div className="border w-11/12 mt-0.75"></div></div>
                </div>
                <div className="w-5 h-5 border rounded-full bg-white z-1"></div>
            </div>
            {text && <div className="text-[20px] text-Grey-30 text-center">{text}</div>}
            <div className=" w-full">
                <Link rel="" href={path} className=" w-full">
                    <button className="bg-Orange-90 w-full py-5 border rounded-2xl">Learn More →</button>
                </Link>
            </div>
        </div>
    )
}

export default Card4