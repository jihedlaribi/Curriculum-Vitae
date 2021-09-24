import React, { Component } from 'react'
import ProgressBar from './ProgressBar'


export default class Languages extends Component {
    state ={
    Languages:[{
        id: 1, value: "JavaScript", xp: 0.5
    },
     {
        id: 3, value: "Python", xp: 0.3
    }],
    frameworks: [{
        id: 1, value: "React", xp: 0.7
    },

    {
        id: 2, value: "Bootstrap", xp: 0.7
    },
    {
        id: 3, value: "scss", xp: 0.7
    },
    {
        id: 4, value: "MDB bootstrap", xp: 0.7
    }


    ],
   backendSkills: [

    {
        id: 2, value: "Express js", xp: 0.7
    },
    {
        id: 3, value: "MongoDB", xp: 0.7
    },
   


    ]

   


    }
    render() {
        let {Languages,frameworks,backendSkills}=this.state
        return (
            <div className="languagesFrameworks">
            <ProgressBar Languages={Languages}
                className="languageDisplay"
                title="Languages" />
            <ProgressBar
                Languages={frameworks}
                title="framework & library"
                className="frameworksDisplay"
    
            />
               <ProgressBar
                Languages={backendSkills}
                title="Backend Skills"
                className="frameworksDisplay"
/>
        </div>
        )
    }
}

