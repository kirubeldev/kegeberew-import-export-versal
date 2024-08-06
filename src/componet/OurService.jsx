import React from 'react'

const OurService = () => {
  return (
    <div>

<section className="service-one">
  <div
    className="service-one__bg"
    style={{
      backgroundImage: "url(./src/componet/assets/images/backgrounds/service-bg1-1.jpg)"
    }}
  />
  <div className="container">
    <div className="row">
      <div className="col-md-12 wow fadeInUp" data-wow-delay="100ms">
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
          <span className="sec-title__tagline">Our Services</span>
          {/* /.sec-title__tagline */}
          <h2 className="sec-title__title">
            The services we offer to <br /> our clients
          </h2>
          {/* /.sec-title__title */}
        </div>
        {/* /.sec-title */}
      </div>
    </div>
    <div className="row gutter-y-30">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
        <div className="service-one__item">
          <div className="service-one__item__titlewrap d-flex flex-wrap align-items-center">
            <div className="service-one__item__titlecol">
              <span className="service-one__item__count" />
              <h4 className="service-one__item__title">
                <a href="service-d-garden.html">Import </a>
              </h4>
            </div>
            <div className="service-one__item__iconwrap">
              <div className="service-one__item__icon">
                <i className="icon-planting" />
              </div>
              {/* /.service-icon */}
            </div>
          </div>
          <p className="service-one__item__text justify">
          Kegeberew Import is a trusted name in the import industry, known for its commitment to quality and reliability. Specializing in sourcing a wide variety of products, Kegeberew Import ensures that all goods meet stringent quality standards. With a focus on customer satisfaction, Kegeberew Import provides tailored solutions to meet the specific needs of its clients, making it a preferred choice for import needs.
          </p>
          <div className="service-one__item__btmwrap d-flex align-items-center justify-content-between">
            <a
              className="service-one__item__iconlink"
              href="service-d-garden.html"
            >
              <i className="icon-right-up" />
            </a>
            <a className="service-one__item__link" href="service-d-garden.html">
              Discover More
            </a>
          </div>
        </div>
        {/* /.service-card-one */}
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
        <div className="service-one__item">
          <div className="service-one__item__titlewrap d-flex flex-wrap align-items-center">
            <div className="service-one__item__titlecol">
              <span className="service-one__item__count" />
              <h4 className="service-one__item__title">
                <a href="service-d-spring.html">Export</a>
              </h4>
            </div>
            <div className="service-one__item__iconwrap">
              <div className="service-one__item__icon">
                <i className="icon-cutting" />
              </div>
              {/* /.service-icon */}
            </div>
          </div>
          <p className="service-one__item__text justify">
          Kegeberew Export is a reputable exporter known for its high-quality products sourced from Ethiopia. Specializing in agricultural goods such as coffee, spices, and grains, Kegeberew Export ensures that its products meet global standards. With a commitment to sustainable and ethical practices, Kegeberew Export offers a reliable and trustworthy source for businesses looking to import premium Ethiopian products.
          </p>
          <div className="service-one__item__btmwrap d-flex align-items-center justify-content-between">
            <a
              className="service-one__item__iconlink"
              href="service-d-spring.html"
            >
              <i className="icon-right-up" />
            </a>
            <a className="service-one__item__link" href="service-d-spring.html">
              Discover More
            </a>
          </div>
        </div>
        {/* /.service-card-one */}
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
        <div className="service-one__item">
          <div className="service-one__item__titlewrap d-flex flex-wrap align-items-center">
            <div className="service-one__item__titlecol">
              <span className="service-one__item__count" />
              <h4 className="service-one__item__title">
                <a href="service-d-lawn.html">Consolt</a>
              </h4>
            </div>
            <div className="service-one__item__iconwrap">
              <div className="service-one__item__icon">
                <i className="icon-gardener-1" />
              </div>
              {/* /.service-icon */}
            </div>
          </div>
          <p className="service-one__item__text">
            Lorem ipsum dolor sit amet con lorem etur adipiscing elit sed do
            eiusmod ipsum tempor incididunt sed garden offer
          </p>
          <div className="service-one__item__btmwrap d-flex align-items-center justify-content-between">
            <a
              className="service-one__item__iconlink"
              href="service-d-lawn.html"
            >
              <i className="icon-right-up" />
            </a>
            <a className="service-one__item__link" href="service-d-lawn.html">
              Discover More
            </a>
          </div>
        </div>
        {/* /.service-card-one */}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default OurService