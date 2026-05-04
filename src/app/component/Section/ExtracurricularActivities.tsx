import { HeroPage, Section1 } from "@/app/interface"
import HeadAnySection from "../Ui/HeadAnySection"
import Card1 from "../Ui/Card1"

function ExtracurricularActivities() {
    const DataSection: Array<Section1> =
        [
            {
                photo: "/Img/SportsIcon.png",
                title: "Sports and Athletics",
                text: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."
            },
            {
                photo: "/Img/ArtIcon.png",
                title: "Art and Creativity",
                text: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms."
            },
            {
                photo: "/Img/MusicIcon.png",
                title: "Music and Performing Arts",
                text: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances."
            },
            {
                photo: "/Img/LanguageIcon.png",
                title: "Language Clubs",
                text: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness."
            },
            {
                photo: "/Img/ScienceIcon.png",
                title: "Science Club",
                text: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning."
            },
            {
                photo: "/Img/CookingIcon.png",
                title: "Cooking and Culinary Arts",
                text: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals."
            },
        ]
    const DataHeadSection: HeroPage = {
        title1: "Our Features",
        title2: "Extracurricular Activities",
        text: "At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
    }
    return (
        <div>
            <HeadAnySection {...DataHeadSection}/>
            <div className="mt-20 grid grid-cols-6">
                {
                    DataSection.map((item,index)=>(
                        <Card1 
                        key={index}
                        photo={item.photo}
                        title={item.title}
                        text={item.text}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ExtracurricularActivities