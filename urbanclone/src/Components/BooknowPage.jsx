import {Location} from "./Location"
import { Background } from "./Background"
import {Service} from "./Service"
import { MainBookdiv } from "./BookNow"
import { Image1 } from "./BookNow1"
import { Faq } from "./Faqs"
import { Feedbackdiv } from "./Feedbackdiv"
import { Description } from "./Description"
import { H2 } from "./Heading"
import { Navbar } from "./Navbar"
import {Footer} from "./Footer"

export function Booknowpage() {
  const color = "white"
  return (
    <div>
      <Navbar/>
      <Background>
      <Location>Saloon at Home for Women in Ahmedabaad,India</Location>
      <Service color={color}>Choose a service</Service>
      <MainBookdiv>
      <Image1 title = 'Saloon Classic' imag = "https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/images/growth/home-screen/1603078787966-226e17.jpeg"/>
      <Image1 title= 'Saloon at Home For Women' imag= "https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/images/growth/home-screen/1603078782132-dfcd55.jpeg"/>
      <Image1 title= 'Hair Studio For Women' imag="https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/images/growth/luminosity/1646140571372-aa78b8.png"/>
      </MainBookdiv>
      </Background>
     <Feedbackdiv><h2>Description</h2><h2>FAQs</h2><h2>Customer Reviews</h2><h2>About Saloon At Home For Women</h2></Feedbackdiv>
     <Description><H2>Saloon At Home For Women in Every city </H2><p>Tired of going to the salon? Urban Company provides services</p></Description>
      <Faq></Faq>
      <Footer/>
     
    </div>
  )
}

  
