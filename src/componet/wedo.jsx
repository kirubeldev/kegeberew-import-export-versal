import React from 'react'
import img from "./assets/picFi/img.jpg"
const Wedo = () => {
  return (
    <div>

<section className="about-one" style={{ marginTop:"-50px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="about-one__image wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className="about-one__shapetop" />
                    <img
                    style={{height:"600px" , width:"480px"}}
                      className="about-one__bigimage"
                      src={img}
                      alt="grdeen"
                    />
                    <div className="about-one__smimage">
                     
                    </div>
                    <div className="" />
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
                        <svg
                          version={1.0}
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.000000pt"
                          height="10.000000pt"
                          viewBox="0 0 12.000000 10.000000"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <g
                            transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)"
                            stroke="none"
                          >
                            <path
                              d="M58 84 c12 -8 22 -24 22 -34 0 -10 -10 -26 -22 -34 l-22 -16 27 0
			c17 0 32 9 43 25 15 23 15 27 0 50 -11 16 -26 25 -43 25 l-27 0 22 -16z"
                            />
                          </g>
                        </svg>
                      </div>
                      <span className="sec-title__tagline" style={{ fontSize:"40px"}} >
                     <span style={{marginBottom:"15px", fontSize:"18px", marginLeft:"10px"}}>kegeberew Import Export</span>
                      </span>
                        
                      {/* /.sec-title__tagline */}
                      <h2 className="sec-title__title">
                      Who we are
                      </h2>
                      {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <p className="about-one__content__text justify" style={{marginTop:"60px"}}>
                    An organization engaged in international trade. It is Purpose Black Ethiopia Trading S.C.'s parent company. In 2020, Purpose Black Ethiopia Trading Company was founded. The company's goal is to increase its market share globally by investing in agricultural and agro-processed products. KEI began as a global trading company offering standard and high-quality agricultural products. Our expertise lies in supply and distributing quality and organic goods from Ethiopia to several nations across the globe. In the global commerce sector, KEI hopes to establish a solid reputation for development and honesty by emphasizing sustainability and ethical sourcing methods. 
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

export default Wedo















