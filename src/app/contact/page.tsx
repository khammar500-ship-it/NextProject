import StudentInformation from '../component/Section/StudentInformation'
import HeroPages from '../component/Ui/HeroPages'
import { HeroPage } from '../interface'
const DataPage : HeroPage ={
  title1 :"Contact Us",
  title2:"Feel Free To Connect With Us",
  text:"We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods",
  ImgArr:[
    "/Img/emailIcone.png",
    "/Img/PhoneIcone.png",
    "/Img/locationIcone.png",
    "/Img/ClockIcon.png"
  ],
  textArr:[
    "hello@littlelearners.com",
    "+91 91813 23 2309",
    "Somewhere in the World",
    "Office Hours - 9am - 6 pm"
  ]
}
function Contact() {
  return (
    <div>
      <HeroPages {...DataPage}/>
      <StudentInformation/>
    </div>
  )
}

export default Contact