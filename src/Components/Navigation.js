import React from 'react'
import {  NavLink } from 'react-router-dom'
import './navigation.css'
const Navigation = () => {
    return (
       
          <div className="sidebar">
  <div className="id">
    <div className="idContent">
      <img src="https://avatars.githubusercontent.com/u/83573633?v=4" alt="img"/>
      <h3> Jihed Laribi</h3>
    </div>
  </div>
  <div className="navigation">
    <ul>
      <li> 
<NavLink exact to="/" activeClassName="navActive">

<i className="fas fa-home"> </i>
<span>Home</span>

</NavLink>
</li>
<li> 
<NavLink exact to="/competence" activeClassName="navActive">

<i className="fas fa-mountain"> </i>
<span>Competence</span>

</NavLink>
</li>
<li> 
<NavLink exact to="/portfolio" activeClassName="navActive">

<i className="fas fa-images"> </i>
<span>Portfolio</span>

</NavLink>
</li>
<li> 
<NavLink exact to="/Contact" activeClassName="navActive">

<i className="fas fa-address-book"> </i>
<span>Contact</span>

</NavLink>
</li>

    </ul>
  </div>
  <div className="socialNetwork">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/jihed-laribi-08374b1b9/" target='_blank' rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a>
      </li>
      <li>
        <a href="https://github.com/jihedlaribi" target='_blank' rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
      </li>
      <li>
        <a href="https://www.facebook.com/jihed.laribi.92/" target='_blank' rel="noopener noreferrer" ><i className="fab fa-facebook"></i></a>
      </li>
      <li>
        <a href="https://www.codewars.com/users/jihedlaribi" target='_blank' rel="noopener noreferrer" ><i className="fas fa-code"></i></a>
      </li>
    </ul>
  <div className="signature">
    <p>JihedLaribi=2021</p>
  </div>

  </div>
</div>

    )
}

export default Navigation
