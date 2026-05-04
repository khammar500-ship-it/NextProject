import { HeroPage } from "@/app/interface"
type props = HeroPage
function Card10({ title1, title2, text }: props) {
    return (
        <div className="col-span-2 max-[1600]:col-span-3 max-[1000]:col-span-6 ">
            <div className="w-35">
                <div className="w-full text-[60px] font-bold py-3.5 text-center border rounded-xl bg-white shadow-[6px_6px_0px_2px_#1E1E1E]">{title1}</div>
                <div className=" flex flex-col items-center -mt-1 w-full">
                    <div className="w-5 h-5 border rounded-full bg-white relative z-1"></div>
                    <div className="w-4 bg-Orange-80 -my-2">
                        <div className="h-22.25 w-[1] bg-black mx-auto "></div>
                    </div>
                </div>
            </div>
            <div className=" border rounded-2xl relative z-1 bg-white h-3/5 p-8 shadow-[4px_4px_0px_1px_#1E1E1E]">
                <div className="text-[40px] font-bold whitespace-nowrap max-[1600]:text-[30px]">{title2}</div>
                <div className="text-Grey-30 text-[16px]">{text}</div>
            </div>
        </div>
    )
}

export default Card10