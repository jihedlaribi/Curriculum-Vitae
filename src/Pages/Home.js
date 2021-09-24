import React from 'react'
import Navigation from '../Components/Navigation'
import './Home.css'


const Home = () => {
    return (
        <div className="home">
        <Navigation/>
        <div className="homeContent">
            <div className="content">
            <h1>Jihed Laribi</h1>
            <h2> Full stack JavaScript developer</h2>
            <div className="pdf">
                <a href="../media/Resume.pdf" target="_blank"  > Download PDF</a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Home

