import React from 'react'


const ProgressBar = (props) => {
    console.log(props)
    return (
        <div className={props.className}  >
            <h3>{props.title}</h3>
            <div className="years">
                <span> years of experience  </span>
                <span>1 ans</span>

            </div>
            <div>
                {props.Languages.map((el) => {
                    
                    let xpYears = 1;
                    let ProgressBar = el.xp / xpYears * 100 + '%';
                    return (
                        <div key={el.id} className="languagesList">
                            <li>{el.value}</li>
                            <div className="progressBar" style={{ width: ProgressBar }}></div>


                        </div>
                    )
                })}




            </div>






        </div>
    )
}

export default ProgressBar

