
import HeroHome from "./component/Section/HeroHome";
import SectioneOurTestimonials from "./component/Section/SectioneOurTestimonials";
import SectionFrequentlyAskedQuestions from "./component/Section/SectionFrequentlyAskedQuestions";
import SectionNavigatethroughourPages from "./component/Section/SectionNavigatethroughourPages";
import SectionOurBenefits from "./component/Section/SectionOurBenefits";


export default function Home() {
  return (
   <div>
      <HeroHome/>
      <SectionOurBenefits/>
      <SectioneOurTestimonials/>
      <SectionFrequentlyAskedQuestions/>
      <SectionNavigatethroughourPages/>
   </div>
  );
}
