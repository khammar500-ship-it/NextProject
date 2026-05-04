"use client"
import Card8 from "../Ui/Card8"
import { HeroPage, Section1 } from "@/app/interface"
import { usePathname } from "next/navigation"
import HeadAnySection from "../Ui/HeadAnySection"
function WhatStudentsLearn() {

    const DataSection: Array<Section1> =
        [
            {
                photo: "/Img/ImageWhateLearn1.png",
                title: "Language Arts",
                text: "Reading, writing, storytelling, and communication skills.",
            }
            ,
            {
                photo: "/Img/ImageWhateLearn2.png",
                title: "Mathematics",
                text: "Number sense, basic operations, problem-solving, and logic.",
            }
            ,
            {
                photo: "/Img/ImageWhateLearn3.png",
                title: "Science",
                text: "Exploring the natural world through hands-on experiments and investigations.",
            }
            ,
            {
                photo: "/Img/ImageWhateLearn4.png",
                title: "Social Studies",
                text: "Cultivating an understanding of diverse cultures and communities.",
            }
            ,
            {
                photo: "/Img/ImageWhateLearn5.png",
                title: "Arts and Crafts",
                text: "Encouraging creativity through various art forms and crafts.",
            }
            ,
            {
                photo: "/Img/ImageWhateLearn6.png",
                title: "Physical Education",
                text: "Promoting physical fitness, coordination, and teamwork.",
            }

        ]
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const DataHeadSection: HeroPage = {
            title1: "Our Features",
            title2: "What Students Learn",
            text: "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
        }
    return (
        <div >
            <HeadAnySection {...DataHeadSection}/>
            <div className="grid grid-cols-6 gap-y-10 mt-20">
                {
                    DataSection.map((item, index) => (
                        <Card8
                            key={index}
                            photo={item.photo}
                            title={item.title}
                            text={item.text}
                            WeOnAcademics={isActive("/academics")}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default WhatStudentsLearn