import { HeroPage } from "@/app/interface"
import Card10 from "../Ui/Card10"
import HeadAnySection from "../Ui/HeadAnySection"

function AdmissionProcess() {
    const DataSection: Array<HeroPage> =
        [
            {
                title1: "01",
                title2: "Inquiry",
                text: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy."
            },
            {
                title1: "02",
                title2: "School Tour",
                text: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment."
            },
            {
                title1: "03",
                title2: "Application Form",
                text: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)."
            },
            {
                title1: "04",
                title2: "Parent Interview",
                text: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
            },
            {
                title1: "05",
                title2: "Student Assessment",
                text: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement."
            },
            {
                title1: "06",
                title2: "Acceptance",
                text: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy."
            },
        ]
    const DataHeadSection: HeroPage = {
        title1: "Process",
        title2: "Admission Process",
        text: "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
    }
    return (
        <div>
            <HeadAnySection {...DataHeadSection}/>
            <div className="grid grid-cols-6 gap-x-10 gap-y-20 items-stretch px-15.75 max-[500]:px-1">
                {
                    DataSection.map((item, index) => (
                        <Card10
                            key={index}
                            title1={item.title1}
                            title2={item.title2}
                            text={item.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default AdmissionProcess