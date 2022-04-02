import {Location} from "./Location"
import { Background } from "./Background"
import {Service} from "./Service"
import { useState } from "react"
import { MainBookdiv } from "./BookNow"
import { Image1 } from "./BookNow1"
import { Image2 } from "./BookNow2"
import { Image3 } from "./BookNow3"
import { Faq } from "./Faqs"
import { Feedbackdiv } from "./Feedbackdiv"
import { Description } from "./Description"
import { H2 } from "./Heading"

function Booknowpage() {
  const [color, setColor] = useState("white")
  

  return (
    <div>
      <Background>
      <Location>Saloon at Home for Women in Ahmedabaad,India</Location>
      <Service color={color}>Choose a service</Service>
      <MainBookdiv>
      <Image1></Image1>
      <Image2></Image2>
      <Image3></Image3>
      </MainBookdiv>
      </Background>
     <Feedbackdiv><h2>Description</h2><h2>FAQs</h2><h2>Customer Reviews</h2><h2>About Saloon At Home For Women</h2></Feedbackdiv>
     <Description><H2>Saloon At Home For Women in Every city </H2><p>Tired of going to the salon? Urban Company provides services</p></Description>
      <Faq></Faq>
     
    </div>
  )
}

export default Booknowpage
