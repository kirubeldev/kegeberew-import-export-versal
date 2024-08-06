import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const caro = window.screenX.valueOf("200px");
 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4 , // Show 3 images at once
    slidesToScroll: 1,

    arrows: true,
  };

  return (
    <div style={{ width: "100% " }}>
      <section className="companies-one">
        <div className="container">
          <div
            className="companies-one__sctwrap wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="sec-title">
              <h2 className="sec-title__title">
                <br /> Agricultural Products
              </h2>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}

            <Slider {...sliderSettings}>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/1.jpg"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/2.jpg"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/3.jpg"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/9.png"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/4.png"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/5.jpg"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/9.png"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/10.png"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="companies-one__image">
                  <div className="companies-one__inner-img">
                    <a href="#">
                      <img
                        style={{ marginTop: "230px" }}
                        src="./src/componet/assets/picFi/8.png"
                        alt="grdeen"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <div>
        <section className="companies-one">
          <div className="container">
            <div
              className="companies-one__sctwrap wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="sec-title">
                <h2 className="sec-title__title">
                  <br /> Spices and Herbals
                </h2>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}

              <Slider {...sliderSettings}>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/rs.jpg"
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/rs2.jpg"
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/rs3.jpg"
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/sp.png"
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/rs5.jpg"
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/rs6.jpg"
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/rs.jpg "
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/rs7.jpg"
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="companies-one__image">
                    <div className="companies-one__inner-img">
                      <a href="#">
                        <img
                          style={{ marginTop: "230px" }}
                          src="./src/componet/assets/picFi/7.png"
                          alt="grdeen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
