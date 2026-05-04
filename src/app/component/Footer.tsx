"use client"
import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <div className='bg-white border rounded-2xl pt-25 px-[113] pb-12.5 mt-50 mb-12.5 shadow-[6px_6px_0px_2px_#1E1E1E] max-[1650]:px-[60]'>
      <div className='grid grid-cols-12'>
        <div className='col-span-4 flex flex-col gap-12.5 max-[1400]:col-span-12 max-[1400]:mb-10'>
          <div className=" flex flex-col gap-6">
            <div>
              <Image src="/Img/Logo.png"
                alt="aaa"
                width={228.36663818359375}
                height={50} /> </div>
            <div className="text-[20px] text-Grey-30 pr-3">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 p-2.5 border rounded-xl bg-Orange-97">
                <Image src="/Img/EmailIcone.png"
                  alt="a"
                  width={21}
                  height={16.5} />
              </div>
              <div className="text-[20px]">hello@littlelearners.com</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 p-2.5 border rounded-xl bg-Orange-97">
                <Image src="/Img/PhoneIcone.png"
                  alt="a"
                  width={21}
                  height={16.5} />
              </div>
              <div className="text-[20px]">+91 91813 23 2309</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 p-2.5 border rounded-xl bg-Orange-97">
                <Image src="/Img/locationIcone.png"
                  alt="a"
                  width={21}
                  height={16.5} />
              </div>
              <div className="text-[20px]">Somewhere in the World</div>
            </div>
          </div>
        </div>
        <div className='col-span-2 flex flex-col gap-[14]  max-[1400]:col-span-3 max-[1000]:col-span-6 max-[550]:col-span-12  max-[550]:mb-10'>
          <div className="text-[20px] whitespace-nowrap mb-[10]"><Link href="/" onClick={() => { window.scrollTo({ top: 0/*,behavior:"smooth"*/ }) }}>Home</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20"><Link href="/#Features">Features</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20"><Link href="/#OurTestimonials">Our Testimonials</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20"><Link href="/#FAQ">FAQ</Link></div>
        </div>
        <div className='col-span-2 flex flex-col gap-[14]  max-[1400]:col-span-3 max-[1000]:col-span-6 max-[550]:col-span-12'>
          <div className="text-[20px] whitespace-nowrap  mb-[10]"><Link href="/about" onClick={() => { window.scrollTo({ top: 0 }) }}>About Us</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/about/#OurMission&Visions">Our Mission</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/about/#OurMission&Visions">Our Vission</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/about/#Awards&Recognitions">Awards & Recognitions</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/about/#OurHistory">History</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/about/#OurTean">Teachers</Link></div>
        </div>
        <div className='col-span-2 flex flex-col gap-[14]  max-[1400]:col-span-3 max-[1000]:col-span-6 max-[1000]:mt-10 max-[550]:col-span-12'>
          <div className="text-[20px] whitespace-nowrap  mb-[10]"><Link href="/academics" onClick={() => { window.scrollTo({ top: 0 }) }}>Academics</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/academics/#OurSpecialFeatures">Special Features</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/academics/#Gallery">Gallery</Link></div>
        </div>
        <div className='col-span-2 flex flex-col gap-[14]  max-[1400]:col-span-3 max-[1000]:col-span-6 max-[1000]:mt-10 max-[550]:col-span-12'>
          <div className="text-[20px] whitespace-nowrap  mb-[10]"><Link href="/contact" onClick={() => { window.scrollTo({ top: 0 }) }}>Contact Us</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/contact/#Information">Information</Link></div>
          <div className="text-[20px] whitespace-nowrap text-Grey-20 mb-[10]"><Link href="/contact/#Information">Map & Direction</Link></div>
        </div>
      </div>
      <div className="mt-12.5">
        <div className="flex justify-between border-y py-7 max-[900]:flex-col  max-[900]:gap-5  max-[900]:items-center">
          <div className="flex gap-4 items-center">
            <div className="text-[20px] text-Grey-20 max-[600]:text-[14px] border-r-2 pr-4">Terms of Service</div>
            <div className="text-[20px] text-Grey-20 max-[600]:text-[14px] border-r-2 pr-4">Privacy Policy</div>
            <div className="text-[20px] text-Grey-20 max-[600]:text-[14px]">Cookie Policy</div>
          </div>
          <div className="flex gap-6 ">
            <div className="flex items-center justify-center border bg-Orange-90 p-4 rounded-xl">
              <Link href="https://www.facebook.com">
                <Image src="/Img/facebookLogo.png" alt="a" width={24} height={24}></Image>
              </Link>
            </div>
            <div className="flex items-center justify-center border bg-Orange-90 p-4 rounded-xl">
              <Link href="https://www.twitter.com">
                <Image src="/Img/twitterLogo.png" alt="a" width={24} height={24}></Image>
              </Link>
            </div>
            <div className="flex items-center justify-center border bg-Orange-90 p-4 rounded-xl">
              <Link href="https://www.linkedn.com">
                <Image src="/Img/linkedinLogo.png" alt="a" width={24} height={24}></Image>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pt-7.5">Copyright © [2023] Little Learners Academy. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer