import React, { Component } from 'react'
import { portfolioData } from '../../data/portfolioData';
import Projects from './Projects';



export default class PortfolioList extends Component {
    state = {
        projects: portfolioData
    };
    render() {
        let { projects } = this.state;
        return (
            <div>
                <div className="portfolioContent">
                    <ul className="radioDisplay">




                    </ul>
                    <div className="projects">
                        {projects.map( item => {
                         return (
                        <Projects 
                        key={item.id} item={item} 
                         />
                        )
                

                        })}
                    </div>
                </div>
            </div>
        )
    }
}
