import { HeroPage, Section1 } from "@/app/interface"
import HeadAnySection from "../Ui/HeadAnySection"
import Card8 from "../Ui/Card8"

function EventsCelebrations() {
  const DataHeadSection: HeroPage = {
          title1: "Our Features",
          title2: "Events & Celebrations",
          text: "At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
    }
  const DataSection : Array<Section1>=
  [
    {
                photo: "/Img/ImageEvent1.png",
                title: "Annual Sports Day",
                text: "A day filled with friendly competition, team spirit, and sportsmanship."
            }
            ,
            {
                photo: "/Img/ImageEvent2.png",
                title: "Cultural Festivals",
                text: "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation."
            }
            ,
            {
                photo: "/Img/ImageEvent3.png",
                title: "Art Exhibitions",
                text: "Showcasing our students' artistic talents through exhibitions and displays."
            }
            ,
            {
                photo: "/Img/ImageEvent4.png",
                title: "Science Fair",
                text: "A platform for budding scientists to present their innovative projects and experiments."
            }
            ,
            {
                photo: "/Img/ImageEvent5.png",
                title: "International Day",
                text: "A vibrant celebration of our diverse community, embracing cultures from around the world."
            }
            ,
            {
                photo: "/Img/ImageEvent6.png",
                title: "Graduation Ceremony",
                text: "A significant milestone as our Kindergarten students prepare to embark on their academic journey."
            }

  ] 
  return (
    <div>
        <HeadAnySection {...DataHeadSection}/>
        <div className="grid grid-cols-6 gap-y-10 mt-20">
          {
            DataSection.map((item,index)=>(
              <Card8 
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

export default EventsCelebrations