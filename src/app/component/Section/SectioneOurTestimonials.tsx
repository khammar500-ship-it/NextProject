"use client"
import Card2 from "../Ui/Card2"
import { Scroll } from "@/app/interface"
import { useState,useEffect } from "react"
import HeadAnySection from "../Ui/HeadAnySection"
import { HeroPage } from "@/app/interface"
function SectioneOurTestimonials() {
     const [index,setIndex]=useState(0)
     const next =()=>{
        setIndex((index+1)%DataSection.length)
     }
     const prev = () => {
        index>0 ?setIndex(index-1):setIndex(DataSection.length-1)
     }
     const [ShowCard,setShowCard]=useState(0)
     useEffect(()=>
     {
        const handleResize=()=>{
            if(window.innerWidth>=1600){
                setShowCard(3)
            }
            if((window.innerWidth<1600)&&(window.innerWidth>=1150)){
                setShowCard(2)
            }
            if(window.innerWidth<1150){
                setShowCard(1)
            }
        }
        handleResize()
        window.addEventListener("resize",handleResize)
        return ()=>
            window.removeEventListener("resize",handleResize)
        
     },[])
    const DataSection: Array<Scroll> = [
        {
            photo: "/Img/PhotoPersone1.png",
            name: "rana",
            text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
        },
        {
            photo: "/Img/PhotoPersone2.png",
            name: "ammar",
            text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
        },
        { 
            photo: "/Img/PhotoPersone3.png",
            name: "nagham",
            text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        },
        {
            photo: "/Img/PhotoPersone1.png",
            name: "ali",
            text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"

        },
        {
            photo: "/Img/PhotoPersone2.png",
            name: "zein",
            text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
        },
        { 
            photo: "/Img/PhotoPersone3.png",
            name: "hamza",
            text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        }
    ]
    const DataHeadSection : HeroPage ={
        title1:"Their Happy Words 🤗",
        title2 :"Our Testimonials",
        text:"Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
    }
    return (
        <div id="OurTestimonials">
            <HeadAnySection {...DataHeadSection}/>
            <div className="flex gap-2 justify-between items-center max-[575]:relative">
                <button onClick={prev} className="p-5 border font-bold bg-white rounded-2xl h-fit  max-[575]:absolute max-[575]:-bottom-20 max-[575]:left-25">
                   ←
                </button>
                <div className=" w-full grid grid-cols-12 items-stretch">{Array.from({length:ShowCard}).map((_,i)=>{
                    const numCard2 = (index+i)%DataSection.length
                    const item =DataSection[numCard2]
                    return(
                        <Card2 
                        key={i}
                        photo={item.photo}
                        name={item.name}
                        text={item.text}/>
                    )
                })
               } </div>
                <button onClick={next} className="p-5 border font-bold bg-white rounded-2xl h-fit max-[575]:absolute max-[575]:-bottom-20 max-[575]:right-25">
                    →
                </button>
            </div>
        </div>
    )
}

export default SectioneOurTestimonials