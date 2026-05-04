import { HeroPage } from '@/app/interface'
import HeroPages from '../component/Ui/HeroPages'
import SectionOurMissionisions from '../component/Section/SectionOurMissionisions'
import SectionOurAwardsandRecognitions from '../component/Section/SectionOurAwardsandRecognitions'
import SectionOurHistory from '../component/Section/SectionOurHistory'
import SectionOurTeamMembers from '../component/Section/SectionOurTeamMembers'
function About() {
  const Arrdata: HeroPage =
  {
    title1: "Overview",
    title2: "Welcome to Little Learners Academy",
    text: "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
  }
  return (
    <div>
      <HeroPages {...Arrdata} />
      <SectionOurMissionisions />
      <SectionOurAwardsandRecognitions/>
      <SectionOurHistory/>
      <SectionOurTeamMembers/>
    </div>
  )
}

export default About