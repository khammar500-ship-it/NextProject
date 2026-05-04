"use client"
import { display } from "@/app/interface"


type Props = display &{
    isOpen:boolean
    onToggle:()=>void
}
function Card3({ question, Answer,onToggle,isOpen }: Props) {
    return (
        <div className={`w-[650.01px] border rounded-2xl p-10 justify-between col-span-1 mb-3 grid grid-cols-6 m-auto min-h-[171.01px] max-[900]:w-[360.01px]  max-[900]:px-1  ${isOpen? "bg-white":""}`}>
            <div className="col-span-5">
                {question&&<div className="text-[20px] mb-6 max-[900]:text-[15px]">{question}</div>}
                {isOpen && (
                <div>
                    <div className="w-full h-0.5 bg-black mb-6"></div>
                    {Answer&&<div>{Answer}</div>}
                </div>
            )}
            </div>
            <div className="w-6 h-6 border flex items-center justify-center rounded col-span-1 m-auto">
                    <button className="w-6 h-6 " onClick={onToggle}>
                        {
                            isOpen ? "-" : "+"
                        }
                    </button>
            </div>
        </div>
    )
}

export default Card3