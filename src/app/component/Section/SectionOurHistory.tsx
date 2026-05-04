import { HeroPage } from "@/app/interface"
import Card6 from "../Ui/Card6"
import HeadAnySection from "../Ui/HeadAnySection"
function SectionOurHistory() {
    const DataSection: Array<HeroPage> =
        [
            {
                title1: "2023",
                title2: "Resilience and Future Horizons",
                text: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
            },
            {
                title1: "2017",
                title2: "Innovation and Technology",
                text: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
            },
            {
                title1: "2012",
                title2: "Expansion and Recognition",
                text: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
            },
            {
                title1: "2005",
                title2: "Inception and Growth",
                text: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
            },
        ]
         const DataHeadSection: HeroPage = {
            title1: "Our Progressive Journey",
            title2: "Our History",
            text: "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        }
    return (
        <div id="OurHistory" className="mt-50">
            <HeadAnySection {...DataHeadSection}/>
            <div className="flex flex-col gap-25 mx-20.5 border rounded-2xl shadow-[6px_6px_0px_2px_#1E1E1E] bg-white p-17.5 max-[1300]:mx-10.5 max-[1300]:p-7.5 max-[950]:mx-0">
                {
                    DataSection.map((item, index) => (
                        <Card6
                            key={index}
                            title1= {item.title1}
                            title2={item.title2}
                            text={item.text}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SectionOurHistory