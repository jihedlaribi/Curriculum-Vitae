import React, { Component } from 'react'

export default class Projects extends Component {
    state = {
        showInfo: false
    }
    handeleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }




    render() {
        let { name, languagesIcons, info, picture, source } = this.props.item
        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>)}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handeleInfo} />
                <span className="infos" onClick={this.handeleInfo} >
                    <i className="fas fa-plus-circle"></i>
                </span>
                {

                    this.state.showInfo && (

                        <div className="showInfos">
                            <div className="infosContent ">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>
                                <div className="button return" onClick={this.handeleInfo}  > Back to the page</div>
                            </div>



                        </div>

                    )

                }
            </div>
        )
    }
}


