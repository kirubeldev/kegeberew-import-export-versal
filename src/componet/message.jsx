import React from 'react'
import { useState } from 'react'
const message = () => {
  

  const mess = [show , setShow] = useState(false)
  const clicked = () => {
    setShow(!show);
  }
  return (
    <div>
        {show &&<section className="team-details">
  <div className="container">
    <div className="row gutter-y-60">
      <div className="col-lg-6">
        <div className="team-details__image">
          <img src="./src/componet/assets/picFi/dr.png" alt="grdeen"  style={{borderRadius:"20px"}}/>
        </div>
        {/* /.team-details__image */}
      </div>
      {/* /.col-lg-6 */}
      <div className="col-lg-6">
        <div className="team-details__content">
          <h3 className="team-details__title">Dr. Fisseha Eshetu</h3>
          {/* /.team-details__title */}
          <div className="team-details__designation">MESSAGE FROM  CEO</div>
          <div className="team-details__text justify">
            <p className='drr'>          I'm excited to share a great news with you all. Our import-export division has been thriving, thanks to the hard work and dedication of each team member. Your commitment to excellence and your ability to navigate complex international markets have been instrumental in our success. As we continue to expand our global reach, I want to encourage you to keep up the fantastic work. Your efforts are not only driving our business forward but also strengthening our position as a leader in the industry. I'm confident that with our collective expertise and passion, we will continue to achieve new milestones and set new standards of excellence in the import-export sector.
</p>

          </div>
        
        </div>
        {/* /.team-details__content */}
      </div>
      {/* /.col-lg-6 */}
    </div>
    {/* /.row */}
  </div>
 <br />
 <br />
 <br />
 <br />
  {/* /.container */}
</section>}

    </div>
  )
}

export default message