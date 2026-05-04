'use client'
import { Rooms } from "@/app/interface"
import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"

type Props = Rooms
function Card9({ imgs, title, text }: Props) {
    const [index, setIndex] = useState(0)
    const next = () => {
        setIndex((index + 1) % (imgs.length))
    }
    const per = () => {
        (index != 0) ? setIndex(index - 1) : setIndex(imgs.length - 1)
    }
    const [show,setShow]=useState(0)
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth>=1400){
                setShow(4)
            }
            if(window.innerWidth>=1100 &&window.innerWidth<1400){
                setShow(3)
            }
            if(window.innerWidth>=750&&window.innerWidth<1100){
                setShow(2)
            }
            if(window.innerWidth<750){
                setShow(1)
            }
        }
        handleResize()
        window.addEventListener("resize",handleResize) 
        return ()=>{
            window.removeEventListener("resize",handleResize)
        }
    },[])

    
    return (
        <div className="relative">
            <div className="w-full flex justify-around absolute -top-1/4 max-[800]:-top-1/5">
                {Array.from({length:show}).map((_, i) => {
                    const Cardnum = (index + i) % imgs.length
                    return (
                        <Image className="" key={Cardnum} src={imgs[Cardnum]} alt="ImageRoomStudent" width={270} height={234} />
                    )
                })}

            </div>
            <div className="px-10 pb-10 bg-white border rounded-2xl shadow-[4px_4px_0px_1px_#1E1E1E] flex flex-col gap-12.5">
                <div className=" pt-40 flex justify-between items-center max-[420]:flex-col-reverse max-[420]:gap-5">
                    <div className="text-[34px] font-bold">{title}</div> 
                    <div className="flex gap-4 max-[600]:gap-2">
                        <div className={`"flex justify-center items-center border rounded-xl font-bold w-12 h-12 " ${(show>=imgs.length)? "hidden" : ""}`}><button className="w-full h-full" onClick={per}>←</button></div>
                        <div className={`"flex justify-center items-center border rounded-xl font-bold w-12 h-12 " ${(show>=imgs.length)? "hidden" : ""}`}><button className="w-full h-full" onClick={next}>→</button></div>
                    </div>
                </div>
                <div className="text-[20px] text-Grey-30 max-[420]:text-center">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Card9