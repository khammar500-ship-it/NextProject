'use client'
import { HeroPage, Section1 } from "@/app/interface"
import { useState } from "react"
import { useEffect } from "react"
import Card1 from "../Ui/Card1"
import HeadAnySection from "../Ui/HeadAnySection"
function SectionOurAwardsandRecognitions() {
    const DataSction: Array<Section1> = [
        {
            photo: "/Img/Icon1About.png",
            title: "Outstanding Early Childhood Education Awar",
            text: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            photo: "/Img/Icon2About.png",
            title: "Innovative STEAM Education Award",
            text: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        },
        {
            photo: "/Img/Icon3About.png",
            title: "Environmental Stewardship Award",
            text: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        }
    ]
    const [index, setIndex] = useState(0)
    const next = () => {
        setIndex((index + 1) % DataSction.length)
    }
    const Per = () => {
        index > 0 ? setIndex(index - 1) : setIndex(DataSction.length - 1)
    }
    const [show, setShow] = useState(0)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1650) {
                setShow(3)
            }
            if ((window.innerWidth < 1650) && (window.innerWidth >= 1050)) {
                setShow(2)
            }
            if (window.innerWidth < 1130) {
                setShow(1)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () =>
            window.removeEventListener("resize", handleResize)

    }, [])

    const DataHeadSection: HeroPage = {
            title1: "Our Achievements",
            title2: "Our Awards and Recognitions",
            text: "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        }
    return (
        <div id="Awards&Recognitions" className="mt-50">
            <HeadAnySection {...DataHeadSection}/>
            <div className=" w-full grid grid-cols-6 items-stretch">
                {Array.from({ length: show }).map((_, i) => {
                    const numCard2 = (index + i) % DataSction.length
                    const item = DataSction[numCard2]
                    return (
                        <Card1
                            key={i}
                            photo={item.photo}
                            title={item.title}
                            text={item.text} />
                    )
                })
                }
            </div>
            <div className="flex justify-between px-15 items-center max-[600]:px-5">
                <div className="text-[22px] font-bold">8 More Awards</div>
                <div className={`flex  gap-2 ${show>=DataSction.length?"hidden":""}`}>
                    <button onClick={Per} className="p-5 border font-bold bg-white rounded-2xl h-fit" >
                        ←
                    </button>
                    <button onClick={next} className="p-5 border font-bold bg-white rounded-2xl h-fit">
                        →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SectionOurAwardsandRecognitions