import { HeroPage, Scroll } from "@/app/interface"
import Card7 from "../Ui/Card7"
import HeadAnySection from "../Ui/HeadAnySection"
function SectionOurTeamMembers() {
    const DataSection: Array<Scroll> =
        [
            {
                photo: "/Img/ImagePersone1.png",
                name: "Ms. Sarah Anderson",
                text: "Qualification: Bachelor's Degree in Early Childhood Education",
                text2: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
            },
            {
                photo: "/Img/ImagePersone2.png",
                name: "Mr. David Roberts",
                text: "Qualification: Master's Degree in Elementary Education",
                text2: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
            },
            {
                photo: "/Img/ImagePersone3.png",
                name: "Ms. Emily Hernandez",
                text: "Qualification: Diploma in Child Psychology",
                text2: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
            },
            {
                photo: "/Img/ImagePersone4.png",
                name: "Mr. Michael Turner",
                text: "Qualification: Bachelor's Degree in Physical Education",
                text2: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
            },
            {
                photo: "/Img/ImagePersone5.png",
                name: "Ms. Emily Hernandez",
                text: "Qualification: Diploma in Child Psychology",
                text2: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
            },
            {
                photo: "/Img/ImagePersone6.png",
                name: "Mr. Michael Turner",
                text: "Qualification: Bachelor's Degree in Physical Education",
                text2: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
            },
        ]
        const DataHeadSection: HeroPage = {
                    title1: "Our Teachers With Experties",
                    title2: "Our Team Members",
                    text: "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
                }
    return (
        <div id="OurTean" className="mt-50 flex flex-col gap-20">
            <HeadAnySection {...DataHeadSection}/>
            <div className="grid grid-cols-2 gap-10 px-12.5 max-[1500]:px-0  max-[1000]:px-12.5  max-[600]:px-0">
                {
                    DataSection.map((item, index) => (
                        <Card7 key={index}
                            photo={item.photo}
                            name={item.name}
                            text={item.text}
                            text2={item.text2}
                        />))
                }
            </div>
        </div>
    )
}

export default SectionOurTeamMembers