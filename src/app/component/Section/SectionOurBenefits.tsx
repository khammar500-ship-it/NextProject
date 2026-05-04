import { Section1 } from "@/app/interface"
import Card1 from "../Ui/Card1"
import { HeroPage } from "@/app/interface"
import HeadAnySection from "../Ui/HeadAnySection"

function SectionOurBenefits() {
    const DataSectionOurBenefits :Array<Section1>=[
        {
            photo : "/Img/Icon1Section1Home.png",
            title : "Holistic Learning Approach",
            text :"Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
        },
        {
            photo : "/Img/Icon2Section1Home.png",
            title : "Experienced Educators",
            text :"Our passionate and qualified teachers create a supportive and stimulating learning environment."
        },
        {
            photo : "/Img/Icon3Section1Home.png",
            title : "Nurturing Environment",
            text :"We prioritize safety and provide a warm and caring atmosphere for every child."
        },
        {
            photo : "/Img/Icon4Section1Home.png",
            title : "Play-Based Learning",
            text :"We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        },
        {
            photo : "/Img/Icon5Section1Home.png",
            title : "Individualized Attention",
            text :"Our small class sizes enable personalized attention, catering to each child's unique needs."
        },
        {
            photo : "/Img/Icon6Section1Home.png",
            title : "Parent Involvement",
            text :"We foster a strong parent-school partnership to ensure seamless communication and collaboration."
        }
    ]
    const DataHeadSection : HeroPage ={
        title1:"Children Desreve Bright Future",
        title2:"Our Benefits",
        text:"With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
    }
    return (
        <div id="Features">
            <HeadAnySection {...DataHeadSection}/>
            <div className="mt-20 grid grid-cols-6">{
                DataSectionOurBenefits.map((item,index)=>(
                    <Card1
                        key={index}
                        photo={item.photo}
                        title={item.title}
                        text={item.text}  
                    />
                ))
                }
            </div>
        </div>
    )
}

export default SectionOurBenefits