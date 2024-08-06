import React from 'react'

import Benefit from './benefit'
import Wedo from './wedo'
import Target from './target'
import Future from './future'
import BasicExample from './card'
const About = () => {
  return (
    
  
    <div>
  <>
  
  {/* /.main-header */}
  <section className="page-header">
    <div className="page-header__bg page-header__bgabout" />
    
    <div className="page-header__overlay" />
    {/* /.page-header__bg */}
    <center>  
    <div className="container">
      <h2 className="page-header__title">About us</h2>
      <ul className="grdeen-breadcrumb list-unstyled">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <span>About Us</span>
        </li>
      </ul>
      
      {/* /.thm-breadcrumb list-unstyled */}
    </div>
    </center>
    {/* /.container */}
  </section>
  {/* /.page-header */}
</>
<br />
<br />
<br />
<br />
<br />
<Benefit/>
       
   <Wedo/>
   <Target/>
   <Future/>
  

    </div>
  )
}



export default About