import { HeroPage, Section1 } from "@/app/interface"
import Card1 from "../Ui/Card1"
import HeadAnySection from "../Ui/HeadAnySection"
function OurSpecialFeatures() {
    const DataSection: Array<Section1> =
        [
            {
                photo: "/Img/AcademicsIcon1.png",
                title: "Thematic Learning",
                text: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
            },
            {
                photo: "/Img/AcademicsIcon2.png",
                title: "STEAM Education",
                text: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
            },
            {
                photo: "/Img/AcademicsIcon3.png",
                title: "Language Immersion",
                text: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
            },
            {
                photo: "/Img/AcademicsIcon4.png",
                title: "Art and Creativity",
                text: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
            },
            {
                photo: "/Img/AcademicsIcon5.png",
                title: "Outdoor Education",
                text: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
            },
            {
                photo: "/Img/AcademicsIcon6.png",
                title: "Play-Based Learning",
                text: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
            },
        ]
    const DataHeadSection: HeroPage = {
        title1: "Our Features",
        title2: "Our Special Features",
        text: "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
    }
    return (
        <div id="OurSpecialFeatures">
            <HeadAnySection {...DataHeadSection}/>
            <div className="mt-20 grid grid-cols-6">
                {
                    DataSection.map((itme, index) => (
                        <Card1
                            key={index}
                            photo={itme.photo}
                            title={itme.title}
                            text={itme.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default OurSpecialFeatures