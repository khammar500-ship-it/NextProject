import AdmissionProcess from "../component/Section/AdmissionProcess"
import FeeStructure from "../component/Section/FeeStructure"
import HeroPages from "../component/Ui/HeroPages"
import { HeroPage } from "../interface"

function Admissions() {
  const DataHero :HeroPage= {title1:"Admission",
    title2: "Join Our Family of Young Learners",
    text:"At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"}
  return (
    <div>
      <HeroPages {...DataHero}/>
      <AdmissionProcess/>
      <FeeStructure/>
    </div>
  )
}

export default Admissions