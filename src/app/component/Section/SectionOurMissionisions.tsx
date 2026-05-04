import { HeroPage, Section1 } from "@/app/interface"
import Card5 from "../Ui/Card5"
import HeadAnySection from "../Ui/HeadAnySection"
function SectionOurMissionisions() {
  const dataSection: Array<Section1> = [
    {
      photo: "/Img/IconMission.png",
      title: "Mission",
      text: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
    },
    {
      photo: "/Img/IconVision.png",
      title: "Vision",
      text: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
    }
  ]
  const DataHeadSection: HeroPage = {
    title1: "Mission & Visions",
    title2: "Our Mission & Visions",
    text: "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
  }
  return (
    <div id="OurMission&Visions">
      <HeadAnySection {...DataHeadSection}/>
      <div className="flex justify-around gap-15 px-28 mt-20 max-[1400]:px-15 max-[1200]:px-7.5 max-[1000]:flex-col max-[550]:px-2.5 ">
        {dataSection.map((item, index) => (
          <Card5
            key={index}
            title={item.title}
            photo={item.photo}
            text={item.text}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionOurMissionisions