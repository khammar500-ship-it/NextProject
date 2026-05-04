import Image from "next/image"
function HeroHome() {
  return (
    <div className="px-29.25 my-20 grid grid-cols-12 max-[1605px]:px-7.25 ">
      <div className="col-span-6 max-[1735px]:col-span-5 max-[1200px]:col-span-12 ">
        <Image
          src='/Img/ImageOnHome.png'
          alt="a"
          width={785}
          height={785} 
          className="max-[1200px]:m-auto"/>
      </div>
      <div className="pt-35 pl-15 pb-35 col-span-6 max-[1735px]:col-span-7 max-[1735px]:pt-10 
                      max-[1200px]:col-span-12  max-[1200px]:max-w-[785.01px]  max-[1200px]:m-auto  max-[1200px]:pl-0 max-[1200px]:text-center max-[1200]:pb-15 ">
        
          <div><span className="text-[22px] border-b-2">welcome to Little Learners Academy</span></div>
          <div className="font-bold text-[54px] max-[1605px]:text-[40px] max-[750px]:text-[30px] ">Where Young Minds Blossom and <span className="text-Orang-65">Dreams Take Flight.</span></div>
          <p className="mt-5 w-fit">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
          <div className="flex bg-Orange-95 border-2 mt-12.5 w-fit py-5 px-10 rounded-2xl shadow-[6px_6px_0px_1px_#FFBE99] gap-5 items-center
                          max-[1605px]:px-5 
                          max-[1200px]:m-auto max-[1200px]:mt-5 
                          max-[750px]:flex-col max-[750px]:w-full">
            <div>
              <div className="text-[34px] font-bold ">+7000</div>
              <p>Students Passed Out </p>
            </div>
            <div className="h-0.5 w-9/12 m-auto bg-black min-[750px]:hidden"></div>
            <div>
              <div className="text-[34px] font-bold">+37</div>
              <p>Awards & Recognitions </p>
            </div>
            <div  className="h-0.5 w-9/12 m-auto bg-black min-[750px]:hidden"></div>
            <div>
              <div className="text-[34px] font-bold">+15</div>
              <p>Experience Educators</p>
            </div>
          </div>
    
      </div>
    </div>
  )
}

export default HeroHome