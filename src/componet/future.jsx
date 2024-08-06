import React from 'react'
import img3 from "./assets/picFi/img3.jpg"
import img4 from "./assets/picFi/img4.jpg"

const Future = () => {
  return (
    <div>

<section className="about-one" style={{marginBottom:"100px"}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="about-one__image wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className="about-one__shapetop" />
                    <img
                    style={{height:"600px"}}
                      className="about-one__bigimage"
                      src={img4}
                      alt="grdeen"
                    />
                    <div className="about-one__smimage">
                      <img 
                        src={img3}
                        alt="grdeen"
                      />
                    </div>
                    <div className="about-one__shapebottom" />
                  </div>
                </div>
                {/* /.col-lg-6 */}
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-delay="100ms"
                >
                  <div className="about-one__content">
                    <div className="sec-title">
                      <div className="sec-title__img">
                      
                      </div>
                      <span className="sec-title__tagline" style={{ fontSize:"40px"}}>
                     <span style={{marginBottom:"15px", fontSize:"18px", marginLeft:"10px"}}></span>
                      </span>
                        
                      {/* /.sec-title__tagline */}
                      <h2 className="sec-title__title">
                      Our Prospective Future
                      </h2>
                      {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <p className="about-one__content__text justify" style={{lineHeight:1.8}}>
                    Becoming the first agro-trade firm in East Africa to establish a connection between global supply networks and African markets. By offering a workable method, we hope to make technological advancement simple and accessible. Establishing end-to-end logistics and providing services to customers worldwide is our aim.                   
                  <br />
                  <br />
                  Through our dedication to sustainability and ethical sourcing, we aim to set a new standard for the agricultural industry and inspire others to follow suit. With KEI's expertise and guidance, we are excited to continue expanding our reach and making a difference in the world of agriculture. Together, we can showcase the beauty and richness of Ethiopian products while making a positive impact on the environment and the lives of those involved in their production.
                  </p>
                  </div>
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </section>
    </div>
  )
}

export default Future















