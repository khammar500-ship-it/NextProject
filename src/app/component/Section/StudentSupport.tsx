import { HeroPage, Section1 } from "@/app/interface"
import HeadAnySection from "../Ui/HeadAnySection"
import Card1 from "../Ui/Card1"

function StudentSupport() {
    const DataHeadSection: HeroPage = {
        title1: "Our Achievements",
        title2: "Student Support",
        text: "At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
    }
    const DataSection: Array<Section1> =
        [
            {
                photo: "/Img/Counseling.png",
                title: "Counseling",
                text: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being."
            }
            ,
            {
                photo: "/Img/AcademicsIcon1.png",
                title: "Learning Support",
                text: "Our educators provide additional assistance to students who may require extra support in their academic journey."
            }
            ,
            {
                photo: "/Img/people.png",
                title: "Parent-Teacher Collaboration",
                text: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development."
            }
        ]
    return (
        <div className="mt-25">
            <HeadAnySection {...DataHeadSection} />
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

export default StudentSupport