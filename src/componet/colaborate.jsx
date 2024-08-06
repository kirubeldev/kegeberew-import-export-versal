import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const colaborate = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3, // Show 3 images at once
        slidesToScroll: 1,
    
        arrows: true,
      };
  return (
    <div>
         <section className="companies-one">
            <div className="container">
              <div
                className="companies-one__sctwrap wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="sec-title">
                  <h2 className="sec-title__title">
                Our Patrners and <br /> Members
                  </h2>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}

                <Slider {...sliderSettings}>
                  <div className="item">
                    <div className="companies-one__image">
                      <div className="companies-one__inner-img .colab">
                        <div className='colab'>  
                        <a href="#">
                          <img
                            src="./src/componet/assets/images/resources/brand-logo1-1.png"
                            alt="grdeen"
                          />
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="companies-one__image">
                      <div className="companies-one__inner-img">
                      <div className='colab'>
                        <a href="#">
                          <img
                            src="./src/componet/assets/images/resources/brand-logo1-2.png"
                            alt="grdeen"
                          />
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="companies-one__image">
                      <div className="companies-one__inner-img">
                      <div className='colab'>
                        <a href="#">
                          <img
                            src="./src/componet/assets/images/resources/brand-logo1-3.png"
                            alt="grdeen"
                          />
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="companies-one__image">
                      <div className="companies-one__inner-img">
                      <div className='colab'>
                        <a href="#">
                          <img
                            src="./src/componet/assets/images/resources/brand-logo1-4.png"
                            alt="grdeen"
                          />
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
    </div>
  )
}

export default colaborate