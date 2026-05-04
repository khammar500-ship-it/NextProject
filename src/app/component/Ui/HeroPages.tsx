import { HeroPage } from "@/app/interface"
import Image from "next/image"
type Props = HeroPage
function HeroPages({ title1, title2, text, ImgArr, textArr }: Props) {
  return (
    <div className="bg-white border-2 rounded-2xl mt-15 mx-12.5 mb-50 relative flex justify-between items-center gap-12.5 py-37.5 px-30 shadow-[8px_8px_0px_1px_#1E1E1E] max-[1350]:px-15  max-[1100]:flex-col max-[1100]:py-20.5 max-[700]:py-12.5 max-[500]:px-5 max-[500]:mx-4">
      <Image src="/Img/HeroPagesimg.png" alt="HeroPagesimg" width={200} height={200} className="absolute top-0 left-0  max-[1100]:w-25  max-[1100]:h-25" />
      <div className="w-1/2 flex flex-col gap-3.5  max-[1100]:w-full max-[1100]:items-center ">
        <div className="border-2 rounded-xl w-fit px-5 py-2.5 text-[18px] text-Grey-20 z-10">{title1}</div>
        <div className=" z-10 text-[48px] font-bold max-[1350]:text-[40px] max-[1100]:text-center max-[700]:text-[25px]">{title2}</div>
      </div>
      <div className="flex flex-col gap-12.5 w-1/2 max-[1100]:w-full">
        <div className="text-Grey-20">{text}</div>
        {ImgArr && textArr && ImgArr.length === textArr.length &&
          <div className="grid grid-cols-2 gap-6 ">
            {

              ImgArr.map((_, index) => (
                <div className="col-span-1 flex items-center gap-2.5 border py-4 px-4 rounded-xl bg-Orange-97 max-[1600]:col-span-2" key={index}>
                  <div className="p-2 border rounded"><Image
                    src={ImgArr[index]}
                    alt="Icon"
                    width={24}
                    height={24} /></div>
                  <div>{textArr[index]}</div>
                </div>
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default HeroPages