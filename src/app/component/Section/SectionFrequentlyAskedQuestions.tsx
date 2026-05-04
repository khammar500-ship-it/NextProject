"use client"
import Card3 from "../Ui/Card3"
import { display } from "@/app/interface"
import { useState } from "react"
import { HeroPage } from "@/app/interface"
import HeadAnySection from "../Ui/HeadAnySection"
function SectionFrequentlyAskedQuestions() {
    const DataSection: Array<display> = [
        {
            question: "What are the school hours at Little Learners Academy?",
            Answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            question: "Is there a uniform policy for students?",
            Answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            question: "What extracurricular activities are available for students?",
            Answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            question: "How do you handle food allergies and dietary restrictions?",
            Answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            question: "What is the teacher-to-student ratio at Little Learners Academy?",
            Answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            question: "How do you handle discipline and behavior management?",
            Answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            question: "How do I apply for admission to Little Learners Academy?",
            Answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            question: " What extracurricular activities are available for students?",
            Answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        }
       
    ]
    const [openIndex,setOpenIndex]=useState<number | null>(null)
    const DataHeadSection : HeroPage ={
        title1:"Solutions For The Doubts",
        title2 :"Frequently Asked Questions",
        text:"Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
    }
    return (
        <div id="FAQ" className="mt-50 ">
            <HeadAnySection {...DataHeadSection}/>
            <div className="grid grid-cols-2 items-center  max-[1500]:grid-cols-1 mt-7">{DataSection.map((item,index)=>(
                <Card3 
                    key={index}
                    question={item.question}
                    Answer={item.Answer}
                    isOpen={openIndex===index}
                    onToggle={()=>setOpenIndex(openIndex===index?null:index)}/>
            ))}</div>
        </div>
    )
}

export default SectionFrequentlyAskedQuestions