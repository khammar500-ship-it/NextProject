import { HeroPage } from '@/app/interface'
import React from 'react'
import HeadAnySection from '../Ui/HeadAnySection'
import Image from 'next/image'
function StudentInformation() {
    const DataHeadSection: HeroPage = {
        title1: "Contact Form",
        title2: "Student Information",
        text: "If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
    }

    return (
        <div id='Information'>
            <HeadAnySection {...DataHeadSection} />
            <div className='w-full px-30  max-[1500]:px-20 max-[1200]:px-5 '>
                <div className=' flex justify-center gap-5  '>
                    <div className='px-15 py-5 border rounded-xl bg-Orange-90 w-fit max-[550]:px-10 max-[450]:px-5'>
                        <Image
                            src="/Img/facebookLogo.png"
                            alt='facebookLogo'
                            width={34}
                            height={34} />
                    </div>
                    <div className='px-15 py-5 border rounded-xl bg-Orange-90 w-fit max-[550]:px-10 max-[450]:px-5'>
                        <Image
                            src="/Img/twitterLogo.png"
                            alt='twitterLogo'
                            width={34}
                            height={34} />
                    </div>
                    <div className='px-15 py-5 border rounded-xl bg-Orange-90 w-fit max-[550]:px-10 max-[450]:px-5'>
                        <Image
                            src="/Img/linkedinLogo.png"
                            alt='linkedinLogo'
                            width={34}
                            height={34} />
                    </div>
                </div>
                <form action="" className='w-full bg-white border rounded-3xl  shadow-[8px_8px_0px_1px_#1E1E1E] '>
                    <div className='grid grid-cols-2 p-25 gap-25 max-[700]:p-10 max-[1000]:gap-10 max-[500]:p-3'>
                        <div className='col-span-1 max-[1000]:col-span-2 mx-auto w-full'>
                            <div className='text-[22px] texr-Grey-30'>Parent Name</div>
                            <input type="text" className='border rounded-2xl p-7.5 w-full bg-Orange-97 max-[500]:p-5 ' placeholder="Enter Parent Name"/>
                        </div>
                        <div className='col-span-1 max-[1000]:col-span-2 mx-auto w-full'>
                            <div className='text-[22px] texr-Grey-30'>Email Address</div>
                            <input type="text" className='border rounded-2xl p-7.5 w-full bg-Orange-97 max-[500]:p-5 ' placeholder="Enter Email Address"/>
                        </div>
                        <div className='col-span-1 max-[1000]:col-span-2 mx-auto w-full'>
                            <div className='text-[22px] texr-Grey-30'>Phone Number</div>
                            <input type="text" className='border rounded-2xl p-7.5 w-full bg-Orange-97 max-[500]:p-5 ' placeholder="Enter Phone Number"/>
                        </div>
                        <div className='col-span-1 max-[1000]:col-span-2 mx-auto w-full'>
                            <div className='text-[22px] texr-Grey-30'>Student Name</div>
                            <input type="text" className='border rounded-2xl p-7.5 w-full bg-Orange-97 max-[500]:p-5 ' placeholder="Enter Student Name"/>
                        </div>
                        <div className='col-span-1 max-[1000]:col-span-2 mx-auto w-full'>
                            <div className='text-[22px] texr-Grey-30'>Student Age</div>
                            <input type="text" className='border rounded-2xl p-7.5 w-full bg-Orange-97 max-[500]:p-5 ' placeholder="Enter Student Age"/>
                        </div>
                        <div className='col-span-1 max-[1000]:col-span-2 mx-auto w-full'>
                            <div className='text-[22px] texr-Grey-30'>Program of Intrest</div>
                            <select className='border rounded-2xl p-7.5 w-full bg-Orange-97 max-[500]:p-5 '>
                                <option value="">rrr</option>
                                <option value="">yy</option>
                                <option value="">aa</option>
                                <option value="">zz</option>
                            </select>                        </div>
                        <div className='col-span-2'>
                            <div className='text-[22px] texr-Grey-30'>Message</div>
                            <textarea name="" id="" className='border h-75 rounded-2xl p-7.5 w-full bg-Orange-97 max-[500]:p-5 max-[1000]:h-50 ' placeholder=""></textarea>
                        </div>
                        <div className='col-span-2'>
                            <button className='border rounded-2xl p-7.5 w-full bg-Orange-97'>Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentInformation