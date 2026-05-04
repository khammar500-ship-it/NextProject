import EventsCelebrations from "../component/Section/EventsCelebrations"
import ExtracurricularActivities from "../component/Section/ExtracurricularActivities"
import StudentSupport from "../component/Section/StudentSupport"
import HeroPages from "../component/Ui/HeroPages"
import { HeroPage } from "../interface"
function StudentLife() {
  const DataPage : HeroPage={
    title1:"Enriching Student Life",
    title2:"Embracing Learning with Discovery and Joy",
    text:"Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
} 
  return (
    <div>
      <HeroPages {...DataPage}/>
      <ExtracurricularActivities/>
      <EventsCelebrations/>
      <StudentSupport/>
    </div>
  )
}

export default StudentLife