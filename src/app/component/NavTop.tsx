import Image from "next/image"
import Link from "next/link"
function NavTop() {
  return (
    <div className="border-2 rounded-lg flex justify-between bg-Orange-90">
      <div><Image
        src="/Img/img0.png"
        alt="kk"
        width={224}
        height={224} className="max-[920px]:w-[50] max-[920px]:h-[50]"/>
      </div>
      <div className="relative flex items-center">
        <Image src="/Img/img1.png"
          alt="att_"
          width={72.35}
          height={72.41} className="absolute top-0 -left-47 max-[1300px]:w-[50.37px] max-[1300px]:h-[30.41px]  max-[770px]:-left-30 max-[620px]:-left-20  max-[530px]:-left-10" />
        <Link href="/admissions" className="text-Grey-15 text-[20px] font-medium max-[920px]:text-[15px] max-[400px]:text-[14px]">Admission is Open, Grab your seat now →</Link>
        <Image src="/Img/img2.png"
          alt="kk"
          width={39.56}
          height={39.59} 
           className="absolute bottom-0 left-110 max-[1300px]:w-[32.56px] max-[1300px]:h-[20.41px]  max-[770px]:left-80 max-[620px]:left-70  max-[385px]:left-60"/>
      </div>
      <div>
        <Image
          src="/Img/img3.png"
          alt="att_"
          width={224}
          height={224}  className="max-[920px]:w-[50] max-[920px]:h-[50] "
          />
      </div>
    </div>
  )
}

export default NavTop