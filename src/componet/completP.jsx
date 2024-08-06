import React from 'react'

const completP = () => {
  return (
    <div>

        <section className="project-one" style={{marginLeft:"20px"}}>
            <div
              className="project-one__bg"
              style={{
                "background-image":
                  "url('./src/componet/assets/images/backgrounds/project-bg1-1.jpg')",
              }}
            />
            <div className="container">
              <div className="project-one__sctwrap text-center">
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
                  <span className="sec-title__tagline" style={{fontSize:"20px"}}>
                    Our Products
                  </span>
                  <br />
                  <br />
                  <br />
                  {/* /.sec-title__tagline */}
                  <h2 className="sec-title__title">
                   Export Items<br /> 
                  </h2>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
              </div>
              <div
                className="project-one__carousel grdeen-owl__carousel grdeen-owl__carousel--basic-nav owl-carousel owl-theme"
                data-owl-options='{
			"items": 1,
			"margin": 30,
			"loop": false,
			"smartSpeed": 700,
			"nav": false,
			"navText": "",
			"dots": false,
			"autoplay": false,
			"responsive": {
				"0": {
					"items": 1,
					"dots": true
				},
				"768": {
					"items": 2,
					"dots": false
				},
				"992": {
					"items": 4,
					"dots": false
				}
			}
			}'
              >
                <div className="item">
                  <div
                    className="project-one__item wow fadeInUp"
                    data-wow-delay="00ms"
                  >
                    <div className="project-one__item__image myimg">
                      <img
                      style={{height:"280px"}}
                        src="./src/componet/assets/images/p3.jpg"
                        alt="project"
                      />
                    </div>
                    <div className="project-one__item__info">
                      <div className="project-one__item__bg" style={{height:"60px"}}>
                        <strong className="project-one__item__tagtext">
                        
                        </strong>
                        <h5 className="project-one__item__heading" style={{marginTop:"-10px"}}>
                          <a href="project-details.html" >Coffey</a>
                        </h5>
                        <a
                          href="project-details.html"
                          className="project-one__item__right-arrow"
                        >
                          <i className="icon-right-arrow2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="project-one__item wow fadeInUp"
                    data-wow-delay="00ms"
                  >
                    <div className="project-one__item__image myimg">
                      <img
                      style={{height:"280px"}}
                        src="./src/componet/assets/images/p3.jpg"
                        alt="project"
                      />
                    </div>
                    <div className="project-one__item__info">
                      <div className="project-one__item__bg"style={{height:"60px"}}>
                        <strong className="project-one__item__tagtext">
                        
                        </strong>
                        <h5 className="project-one__item__heading"  style={{marginTop:"-10px"}}>
                          <a href="project-details.html">oil and seeds</a>
                        </h5>
                        <a
                          href="project-details.html"
                          className="project-one__item__right-arrow"
                        >
                          <i className="icon-right-arrow2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="project-one__item wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="project-one__item__image myimg">
                      <img
                       style={{height:"280px"}}
                        src="./src/componet/assets/images/red spice.jpg"
                        alt="project"
                      />
                    </div>
                    <div className="project-one__item__info">
                      <div className="project-one__item__bg"style={{height:"60px"}}>
                        <strong className="project-one__item__tagtext">
                          
                        </strong>
                        <h5 className="project-one__item__heading" style={{marginTop:"-19px"}}>
                          <a href="project-details.html">
                          Spice and Herbals
                          </a>
                        </h5>
                        <a
                          href="project-details.html"
                          className="project-one__item__right-arrow"
                        >
                          <i className="icon-right-arrow2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="project-one__item wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="project-one__item__image myimg">
                     
                      <img
                        style={{height:"280px"}}
                        src="./src/componet/assets/images/resources/about-image1-2.jpg"
                        alt="project"
                      />
                    </div>
                    <div className="project-one__item__info">
                      <div className="project-one__item__bg"style={{height:"60px"}}>
                        <strong className="project-one__item__tagtext">
                         
                        </strong>
                        <h5 className="project-one__item__heading" style={{marginTop:"-10px"}}>
                          <a href="project-details.html"> Fruits</a>
                        </h5>
                        <a
                          href="project-details.html"
                          className="project-one__item__right-arrow"
                        >
                          <i className="icon-right-arrow2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </section>
    </div>
  )
}

export default completP