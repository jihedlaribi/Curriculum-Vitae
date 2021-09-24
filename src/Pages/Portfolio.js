import React from 'react'
import Navigation from '../Components/Navigation'
import PortfolioList from '../Components/portfolio/PortfolioList'
import './Portfolio.css'
const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navigation/>
         <PortfolioList/>
        </div>
    )
}

export default Portfolio
