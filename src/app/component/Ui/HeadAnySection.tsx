import { HeroPage } from "@/app/interface"
type Props = HeroPage
function HeadAnySection({title1,title2,text}:Props) {
    return (
        <div className='flex flex-col gap-4 items-center mb-25'>
            <div className='bg-white border-2 px-5 py-2.5 rounded-lg text-[18px]'>{title1}</div>
            <div className='text-[58px] font-bold text-center max-[875]:text-[48px]'>{title2}</div>
            <p className="max-w-248 text-center text-[20px]">{text}</p>
        </div>
    )
}

export default HeadAnySection