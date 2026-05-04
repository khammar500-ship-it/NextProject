import Image from 'next/image'
import { Section1 } from '@/app/interface'
type Props = Section1
function Card1({ photo, title, text }: Props) {
  return (
    <div className='bg-white h-9/12 max-w-[500.001px] border rounded-2xl shadow-[6px_6px_0px_2px_#1E1E1E] relative py-15 px-10 col-span-2 mb-20 m-auto max-[1650]:col-span-3 max-[1130]:col-span-6'>
      <div className='bg-Orange-90 w-fit p-[20.01px] border rounded-2xl absolute -top-10'>
        {photo && <Image
        src={photo}
        alt="cardIcon"
        width={31.588829040527344}
        height={26.79060173034668} />}
      </div>
      <div className='flex flex-col gap-5 h-fit'>
        {title && <div className='text-[28px] font-bold max-[650]:text-[22px]'>{title}</div>}
        {text && <div className='text-Grey-30'>{text}/</div>}
      </div>
    </div>
  )
}

export default Card1