"use client"
import Card9 from "../Ui/Card9"
import { HeroPage, Rooms } from "@/app/interface"
import { useState } from "react"
import HeadAnySection from "../Ui/HeadAnySection"
function OurRoomsGallery() {
    const DataSection: Array<Rooms> =
        [
            {
                imgs: ["/Img/ClassRoom1.png", "/Img/ClassRoom2.png", "/Img/ClassRoom3.png", "/Img/ClassRoom4.png"],
                title: "Classrooms",
                text: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
            },
            {
                imgs: ["/Img/ImageLibrary1.png", "/Img/ImageLibrary2.png", "/Img/ImageLibrary3.png", "/Img/ImageLibrary4.png"],
                title: "Library",
                text: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
            },
            {
                imgs: ["/Img/ImageScience1.png", "/Img/ImageScience2.png", "/Img/ImageScience3.png", "/Img/ImageScience4.png"],
                title: "Science Lab",
                text: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
            },
            {
                imgs: ["/Img/ImageComputer1.png", "/Img/ImageComputer2.png", "/Img/ImageComputer3.png", "/Img/ImageComputer4.png"],
                title: "Computer Lab",
                text: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
            },
            {
                imgs: ["/Img/ImageGarden1.png", "/Img/ImageGarden2.png", "/Img/ImageGarden3.png", "/Img/ImageGarden4.png"],
                title: "Garden and Nature Area",
                text: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
            },
        ]
    const [showCard, setShowCard] = useState("All")
    const funShowCArd = (name: string) => {
        setShowCard(name)
    }
    const DataHeadSection: HeroPage = {
                title1: "Our Gallery",
                title2: "Our Rooms Gallery",
                text: "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            }
    return (
        <div id="Gallery" className="mt-50 px-7.5 max-[1000]:px-2.5 ">
            <HeadAnySection {...DataHeadSection}/>
            <div className="flex justify-center gap-2.5 max-[815]:overflow-x-scroll max-[815]:justify-start max-[815]:px-2">
                <button
                    onClick={() => funShowCArd("All")}
                    className={`border rounded py-2.5 px-4 text-[16px] whitespace-nowrap ${showCard==="All"? "bg-Orange-95":"bg-white"}` }>All</button>
                <button
                    onClick={() => funShowCArd("Classrooms")}
                    className={`border rounded py-2.5 px-4 text-[16px] whitespace-nowrap ${showCard==="Classrooms"? "bg-Orange-95":"bg-white"}` }>Classrooms</button>
                <button
                    onClick={() => funShowCArd("Library")}
                    className={`border rounded py-2.5 px-4 text-[16px] whitespace-nowrap ${showCard==="Library"? "bg-Orange-95":"bg-white"}` }>Library</button>
                <button
                    onClick={() => funShowCArd("Science Lab")}
                    className={`border rounded py-2.5 px-4 text-[16px] whitespace-nowrap ${showCard==="Science Lab"? "bg-Orange-95":"bg-white"}` }>Science Lab</button>
                <button
                    onClick={() => funShowCArd("Computer Lab")}
                    className={`border rounded py-2.5 px-4 text-[16px] whitespace-nowrap ${showCard==="Computer Lab"? "bg-Orange-95":"bg-white"}` }>Computer Lab</button>
                <button
                    onClick={() => funShowCArd("Garden and Nature Area")}
                    className={`border rounded py-2.5 px-4 text-[16px] whitespace-nowrap ${showCard==="Garden and Nature Area"? "bg-Orange-95":"bg-white"}` }>Garden and Nature Area</button>
            </div>
            <div className="flex flex-col gap-53 mt-35">
                {(showCard === "All") &&
                    DataSection.map((item, index) => (
                        <Card9
                            key={index}
                            imgs={item.imgs}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                {(showCard != "All") && DataSection.map((item, index) => {
                    if (showCard === item.title)
                        return (
                            <Card9
                                key={index}
                                imgs={item.imgs}
                                title={item.title}
                                text={item.text}
                            />
                        )
                })}
            </div>
        </div>
    )
}

export default OurRoomsGallery