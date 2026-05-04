import path from "path";
import Card4 from "../Ui/Card4";
import { HeroPage, NavLink } from "@/app/interface";
import HeadAnySection from "../Ui/HeadAnySection";


function SectionNavigatethroughourPages() {
    const DataSection: Array<NavLink> =
        [
            {
                name: "About Us",
                text: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
                path: "/about"
            },
            {
                name: "Academics",
                text: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
                path: "/academics"
            },
            {
                name: "Student Life",
                text: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
                path: "/studentLife"
            },
            {
                name: "Admissions",
                text: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
                path: "/admissions"
            }
        ]

    const DataHeadSection: HeroPage = {
        title1: "Explore More",
        title2: "Navigate through our Pages",
        text: "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
    }
    return (
        <div className="mt-[150]">
            <HeadAnySection {...DataHeadSection}/>
            <div className="grid grid-cols-2 gap-12.5 ">{DataSection.map((item, index) => (
                <Card4 key={index} name={item.name} text={item.text} path={item.path} />
            ))}</div>
        </div>
    )
}

export default SectionNavigatethroughourPages