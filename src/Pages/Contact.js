import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import Navigation from '../Components/Navigation'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contact me</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"   ></i>
                            <span> Tunisia</span>
                        </li>
                        <li>

                        <i className="fas fa-mobile-alt"> </i>
                        <CopyToClipboard text="+21693058947">

                        <span className="clickInput" onClick={() => alert("phone copy !")} >+2169305894</span>


                        </CopyToClipboard>
                        </li>
                        <li>
                        <i className="far fa-envelope"></i>
                        <CopyToClipboard text="jihed.laribi13@gmail.com">

                        <span className="clickInput" onClick={() => alert("E-mail copy !")} >jihed.laribi13 @gmail.com</span>


                        </CopyToClipboard>
                       
                        </li>

                    </ul>


                </div>
                <div className="socialNetwork">
                    <ul>

                        <a href="https://www.linkedin.com/in/jihed-laribi-08374b1b9/" target='_blank' rel="noopener noreferrer" ><i className="fab fa-linkedin"></i> <h4>Linkedin</h4> </a>


                        <a href="https://github.com/jihedlaribi" target='_blank' rel="noopener noreferrer" ><i className="fab fa-github"></i> <h4>Github</h4> </a>


                        <a href="https://www.facebook.com/jihed.laribi.92/" target='_blank' rel="noopener noreferrer" ><i className="fab fa-facebook"></i> <h4>Facebook</h4> </a>


                        <a href="https://www.codewars.com/users/jihedlaribi" target='_blank' rel="noopener noreferrer" ><i className="fas fa-code"></i> <h4>Code wars</h4>  </a>

                    </ul> </div>



            </div>
        </div>
    )
}

export default Contact
