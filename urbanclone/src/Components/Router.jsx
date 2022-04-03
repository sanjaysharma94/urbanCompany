import {Routes,Route} from "react-router-dom"

import {Home} from "./Home"
import {UrbanHome} from "./UrbanHome"
import {Booknowpage} from "./BooknowPage"
import {Salonwomen} from "./Salonwomen"


export const Allroutes  = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/urbanhome" element={<UrbanHome/>}></Route>
            <Route path="/urbanhome/book" element={<Booknowpage/>}></Route>
            <Route path="/urbanhome/book/services" element={<Salonwomen/>}></Route>
            
        </Routes>
    )
}