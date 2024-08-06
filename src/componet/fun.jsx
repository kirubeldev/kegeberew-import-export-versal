import React from 'react'

const fun = () => {
  return (
    <div>
        <section className="funfact-one">
            <div className="container">
              <div className="row gutter-y-30">
                <div className="col-lg-6">
                  <div className="funfact-one__content">
                    <div
                      className="funfact-one__content__sctwrap wow fadeInUp"
                      data-wow-delay="100ms"
                    >
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
                        <span className="sec-title__tagline">
                          OUR FUN FACTS
                        </span>
                        {/* /.sec-title__tagline */}
                        <h2 className="sec-title__title">
                          The grass is always <br /> greener on our side
                        </h2>
                        {/* /.sec-title__title */}
                      </div>
                      {/* /.sec-title */}
                    </div>
                    <p className="funfact-one__content__text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, randomised words which
                      don't look even slightly believable
                    </p>
                    <div className="funfact-one__content__bookwrap d-flex align-items-center">
                      <a
                        href="contact.html"
                        className="grdeen-btn funfact-one__content__bookwrap__btn"
                      >
                         <a href="" className="grdeen-btn main-header__btn">
              <span>Book</span>
            </a>
                      </a>
                      <p className="funfact-one__content__bookwrap__text">
                        Book a FREE professional gardening consultation!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled funfact-one__list">
                    <li className="funfact-one__item count-box">
                      <div className="work-process-one__col">
                        <div className="work-process-one__col__circlewrap">
                          <div className="work-process-one__col__icon">
                            <div className="funfact-one__countwrap">
                              <strong
                                className="funfact-one__count count-text"
                                data-stop={10}
                                data-speed={1500}
                              />
                              <span className="funfact-one__count">K</span>
                            </div>
                          </div>
                        </div>
                        <div className="work-process-one__col__info text-center">
                          <h3 className="work-process-one__col__title">
                            Projects Completed
                          </h3>
                          <p className="work-process-one__col__text">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>
                        <div className="work-process-one__col__shapebg" />
                      </div>
                    </li>
                    {/* /.funfact-one__item */}
                    <li className="funfact-one__item count-box">
                      <div className="work-process-one__col">
                        <div className="work-process-one__col__circlewrap">
                          <div className="work-process-one__col__icon">
                            <div className="funfact-one__countwrap">
                              <strong
                                className="funfact-one__count count-text"
                                data-stop={2110}
                                data-speed={1500}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="work-process-one__col__info text-center">
                          <h3 className="work-process-one__col__title">
                            Satisfied Customers
                          </h3>
                          <p className="work-process-one__col__text">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>
                        <div className="work-process-one__col__shapebg" />
                      </div>
                    </li>
                    {/* /.funfact-one__item */}
                  </ul>
                  {/* /.list-unstyled funfact-one__list */}
                </div>
              </div>
            </div>
            {/* /.container */}
          </section>
    </div>
  )
}

export default fun