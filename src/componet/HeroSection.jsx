import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home";
const HeroSection = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  
  const closee = () => {s
    setMenu(false);
  };
  const [showNestedList, setShowNestedList] = useState(false);

  const handleServiceClick = () => {
    setShowNestedList(!showNestedList);
  };

  const [isNestedVisible, setIsNestedVisible] = useState(false);

  const toggleNestedVisibility = () => {
    setIsNestedVisible(!isNestedVisible);
  };

  return (
    <>
     
      {/* /.main-header */}
      {/* main-slider-start */}
      <section className="main-slider-one">
        <div
          className="main-slider-one__carousel grdeen-owl__carousel owl-carousel"
          data-owl-options='{
          "loop": true,
          "animateOut": "fadeOut",
          "animateIn": "fadeIn",
          "items": 1,
          "autoplay": true,
          "autoplayTimeout": 5000,
          "smartSpeed": 1000,
          "nav": true,
    "navText": ["<span class=\"icon-left-arrow11\"></span>","<span class=\"icon-right-arrow1\"></span>"],
          "dots": false,
          "margin": 0
          }'
        >
          <div className="item">
            <div className="main-slider-one__item">
              <div className="main-slider-one__shape">
                <img
                  src="src/componet/assets/images/shapes/slider-shape1-2.png"
                  alt="grdeen"
                />
              </div>
              <div
                className="main-slider-one__bg"
                style={{
                  backgroundImage: `url(${"src/componet/assets/picFi/cargo.jpg"})`,
                }}
              />
              <div className="main-slider-one__overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-one__content">
                      <h1 className="main-slider-one__sub-title">
                        <img
                          src="src/componet/assets/images/shapes/slider-shape1-2.png"
                          alt="grdeen"
                          className="hero-image"
                        />{" "}
                        <span style={{ fontSize: "20px" }}>
                          {" "}
                          WELCOME TO Kegeberew Export and Import{" "}
                        </span>{" "}
                        <br />
                        <br /> <br />
                        <br /> <br />
                        <br /> <br />
                        <br />
                      </h1>
                      {/* slider-sub-title */}
                      <h2 className="main-slider-one__title">
                        EMPOWERING GLOBAL TRADE, <br /> ENRICHING LIVES:
                      </h2>
                      {/* slider-title */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="main-slider-one__item">
              <div className="main-slider-one__shape">
                <img
                  src="src/componet/assets/images/shapes/slider-shape1-1.png"
                  alt="grdeen"
                />
              </div>
              <div
                className="main-slider-one__bg"
                style={{
                  backgroundImage: `url(${"src/componet/assets/picFi/onee.jpg"})`,
                }}
              />
              <div className="main-slider-one__overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-one__content">
                      <h1 className="main-slider-one__sub-title">
                        <img
                          src="src/componet/assets/images/shapes/slider-shape1-2.png"
                          alt="grdeen"
                        />{" "}
                        <span style={{ fontSize: "20px" }}>
                          {" "}
                          WELCOME TO Kegeberew Export and Import{" "}
                        </span>{" "}
                        <br /> <br /> <br />
                        <br /> <br />
                        <br /> <br />
                        <br /> <br />
                      </h1>
                      {/* slider-sub-title */}
                      <h2 className="main-slider-one__title">
                        EMPOWERING GLOBAL TRADE, <br /> ENRICHING LIVES:
                      </h2>
                      {/* slider-title */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="main-slider-one__item">
              <div className="main-slider-one__shape">
                <img
                  src="src/componet/assets/images/shapes/slider-shape1-1.png"
                  alt="grdeen"
                />
              </div>
              <div
                className="main-slider-one__bg"
                style={{
                  backgroundImage: `url(${"src/componet/assets/picFi/twoo.jpg"})`,
                }}
              />
              <div className="main-slider-one__overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-one__content">
                      <h1 className="main-slider-one__sub-title">
                        <img
                          src="src/componet/assets/images/shapes/slider-shape1-2.png"
                          alt="grdeen"
                        />{" "}
                        <span style={{ fontSize: "20px" }}>
                          {" "}
                          WELCOME TO Kegeberew Export and Import{" "}
                        </span>{" "}
                        <br /> <br />
                        <br /> <br /> <br />
                        <br /> <br />
                        <br />
                      </h1>
                      {/* slider-sub-title */}
                      <h2 className="main-slider-one__title">
                        EMPOWERING GLOBAL TRADE, <br /> ENRICHING LIVES:
                      </h2>
                      {/* slider-title */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* main-slider-end */}
      {/* Feature Start */}

      {/* Feature End */}
    </>
  );
};

export default HeroSection;
