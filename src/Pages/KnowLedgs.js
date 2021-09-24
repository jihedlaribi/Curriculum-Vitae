import React from 'react'
import Experience from '../Components/Knowledges/Experience'
import Hobbies from '../Components/Knowledges/Hobbies'
import Languages from '../Components/Knowledges/Languages'
import OtherSkilles from '../Components/Knowledges/OtherSkilles'
import Navigation from '../Components/Navigation'
import '../Components/Knowledges/Knowledges.css'
const KnowLedgs = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
               <Languages/>
               <Experience/>
               <OtherSkilles/>
               <Hobbies/>



            </div>
           
        </div>
    )
}

export default KnowLedgs
