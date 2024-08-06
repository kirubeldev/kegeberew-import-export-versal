import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimony = () => {
    const sliderSettings1 = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2, // Show 3 images at once
        slidesToScroll: 1,
    
        arrows: true,
      };
  return (
    
          <section className="testimonials-one">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="sec-title">
                    <div
                      className="sec-title__img"
                      style={{ marginRight: "200px" }}
                    >
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
                    <span className="sec-title__tagline">OUR TESTIMONIALS</span>
                    {/* /.sec-title__tagline */}
                    <h2 className="sec-title__title">
                      Hear from our happy <br /> customers review
                    </h2>
                    {/* /.sec-title__title */}
                  </div>
                  {/* /.sec-title */}
                </div>

                <div>
                  <Slider {...sliderSettings1}>
                    <div style={{ marginRight: "20000px" }}>
                      <div className="item">
                        <div
                          className="testimonials-card wow fadeInUp"
                          data-wow-duration="1500ms"
                          data-wow-delay="00ms"
                        >
                          <div className="testimonials-card__inner">
                            <div className="testimonials-card__top">
                              <div className="testimonials-card__image">
                                <img
                                  src="./src/componet/assets/images/resources/testimonial-man1-1.png"
                                  alt="Alen Martin"
                                />
                              </div>
                              {/* /.testimonials-card__image */}
                              <div className="testimonials-card__top__left">
                                <div className="testimonials-card__rating">
                                  <span className="testimonials-card__rating__start">
                                    <i className="fa fa-star" />
                                  </span>
                                  <span className="testimonials-card__rating__start">
                                    <i className="fa fa-star" />
                                  </span>
                                  <span className="testimonials-card__rating__start">
                                    <i className="fa fa-star" />
                                  </span>
                                  <span className="testimonials-card__rating__start">
                                    <i className="fa fa-star" />
                                  </span>
                                  <span className="testimonials-card__rating__start">
                                    <i className="fa fa-star" />
                                  </span>
                                </div>
                                {/* /.testimonials-card__rating */}
                                <h4 className="testimonials-card__name">
                                  Alen Martin
                                </h4>
                                {/* /.testimonials-card__name */}
                                <p className="testimonials-card__designation">
                                  Founder
                                </p>
                                {/* /.testimonials-card__designation */}
                              </div>
                              {/* /.testimonials-card__top__left */}
                            </div>
                            {/* /.testimonials-card__top */}
                            <div className="testimonials-card__quote">
                              <i className="icon-quote" />
                            </div>
                            <div className="testimonials-card__contentwrap">
                              <div className="testimonials-card__masking" />
                              <div className="testimonials-card__content">
                                As a result of the garden build service provided
                                by dimo and his company, sed do eiusmod tempor
                                incididunt ut labore et dolor magna aliqua
                                laboris nisi ut aliquip ex ea commodo
                              </div>
                              {/* /.testimonials-card__content */}
                            </div>
                          </div>
                          {/* /.testimonials-card__inner */}
                        </div>
                        {/* /.testimonials-card */}
                      </div>
                      {/* /.item */}{" "}
                    </div>
                    <div className="item">
                      <div
                        className="testimonials-card wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="100ms"
                      >
                        <div className="testimonials-card__inner">
                          <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                              <img
                                src="./src/componet/assets/images/resources/testimonial-man1-2.png"
                                alt="Paul J. Florez"
                              />
                            </div>
                            {/* /.testimonials-card__image */}
                            <div className="testimonials-card__top__left">
                              <div className="testimonials-card__rating">
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                              </div>
                              {/* /.testimonials-card__rating */}
                              <h4 className="testimonials-card__name">
                                Paul J. Florez
                              </h4>
                              {/* /.testimonials-card__name */}
                              <p className="testimonials-card__designation">
                                Founder
                              </p>
                              {/* /.testimonials-card__designation */}
                            </div>
                            {/* /.testimonials-card__top__left */}
                          </div>
                          {/* /.testimonials-card__top */}
                          <div className="testimonials-card__quote">
                            <i className="icon-quote" />
                          </div>
                          <div className="testimonials-card__contentwrap">
                            <div className="testimonials-card__masking" />
                            <div className="testimonials-card__content">
                              As a result of the garden build service provided
                              by dimo and his company, sed do eiusmod tempor
                              incididunt ut labore et dolor magna aliqua laboris
                              nisi ut aliquip ex ea commodo
                            </div>
                            {/* /.testimonials-card__content */}
                          </div>
                        </div>
                        {/* /.testimonials-card__inner */}
                      </div>
                      {/* /.testimonials-card */}
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div
                        className="testimonials-card wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="200ms"
                      >
                        <div className="testimonials-card__inner">
                          <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                              <img
                                src="./src/componet/assets/images/resources/testimonial-man1-3.png"
                                alt="Laverne C. McArthur"
                              />
                            </div>
                            {/* /.testimonials-card__image */}
                            <div className="testimonials-card__top__left">
                              <div className="testimonials-card__rating">
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                              </div>
                              {/* /.testimonials-card__rating */}
                              <h4 className="testimonials-card__name">
                                Laverne C. McArthur
                              </h4>
                              {/* /.testimonials-card__name */}
                              <p className="testimonials-card__designation">
                                Founder
                              </p>
                              {/* /.testimonials-card__designation */}
                            </div>
                            {/* /.testimonials-card__top__left */}
                          </div>
                          {/* /.testimonials-card__top */}
                          <div className="testimonials-card__quote">
                            <i className="icon-quote" />
                          </div>
                          <div className="testimonials-card__contentwrap">
                            <div className="testimonials-card__masking" />
                            <div className="testimonials-card__content">
                              As a result of the garden build service provided
                              by dimo and his company, sed do eiusmod tempor
                              incididunt ut labore et dolor magna aliqua laboris
                              nisi ut aliquip ex ea commodo
                            </div>
                            {/* /.testimonials-card__content */}
                          </div>
                        </div>
                        {/* /.testimonials-card__inner */}
                      </div>
                      {/* /.testimonials-card */}
                    </div>
                    {/* /.item */}
                    <div className="item">
                      <div
                        className="testimonials-card wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="300ms"
                      >
                        <div className="testimonials-card__inner">
                          <div className="testimonials-card__top">
                            <div className="testimonials-card__image">
                              <img
                                src="./src/componet/assets/images/resources/testimonial-man1-1.png"
                                alt="Larry M. Casillas"
                              />
                            </div>
                            {/* /.testimonials-card__image */}
                            <div className="testimonials-card__top__left">
                              <div className="testimonials-card__rating">
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                                <span className="testimonials-card__rating__start">
                                  <i className="fa fa-star" />
                                </span>
                              </div>
                              {/* /.testimonials-card__rating */}
                              <h4 className="testimonials-card__name">
                                Larry M. Casillas
                              </h4>
                              {/* /.testimonials-card__name */}
                              <p className="testimonials-card__designation">
                                Founder
                              </p>
                              {/* /.testimonials-card__designation */}
                            </div>
                            {/* /.testimonials-card__top__left */}
                          </div>
                          {/* /.testimonials-card__top */}
                          <div className="testimonials-card__quote">
                            <i className="icon-quote" />
                          </div>
                          <div className="testimonials-card__contentwrap">
                            <div className="testimonials-card__masking" />
                            <div className="testimonials-card__content">
                              As a result of the garden build service provided
                              by dimo and his company, sed do eiusmod tempor
                              incididunt ut labore et dolor magna aliqua laboris
                              nisi ut aliquip ex ea commodo
                            </div>
                            {/* /.testimonials-card__content */}
                          </div>
                        </div>
                        {/* /.testimonials-card__inner */}
                      </div>
                      {/* /.testimonials-card */}
                    </div>
                    {/* /.item */}
                  </Slider>
                </div>
              </div>
              {/* /.testimonials-one__carousel */}
            </div>
            {/* /.container */}
          </section>

  )
}

export default Testimony;