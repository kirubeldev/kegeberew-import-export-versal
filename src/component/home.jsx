import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const home = () => {
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
    <div>
      <div>
        <div className="custom-cursor__cursor" />
        <div className="custom-cursor__cursor-two" />

        <div className="page-wrapper">
          <div className="topbar-one topbar-one--one_only">
            <div className="container-fluid">
              <div className="topbar-one__inner">
                <div className="topbar-one__logo">
                  <a href="index.html">
                    <img
                      src="./src/componet/assets/images/logo-dark.png"
                      alt="Grdeen HTML"
                    />
                  </a>
                </div>
                {/* /.main-header__logo */}
                <ul className="list-unstyled topbar-one__info">
                  <li className="topbar-one__info__item">
                    <div className="topbar-one__info__iconwrap">
                      <i className="icon-pin" />
                    </div>
                    <div className="topbar-one__info__address d-flex flex-wrap">
                      <small className="topbar-one__info__address__text">
                        Company address
                      </small>
                      <a href="contact.html">Plaka athens greece</a>
                    </div>
                  </li>
                  <li className="topbar-one__info__item">
                    <div className="topbar-one__info__iconwrap">
                      <i className="icon-email" />
                    </div>
                    <div className="topbar-one__info__address">
                      <small className="topbar-one__info__address__text">
                        Send an email
                      </small>
                      <a href="mailto:Support@gmail.com">Support@gmail.com</a>
                    </div>
                  </li>
                  <li className="topbar-one__info__item">
                    <div className="topbar-one__info__iconwrap">
                      <i className="icon-phone-receiver-silhouette" />
                    </div>
                    <div className="topbar-one__info__address">
                      <small className="topbar-one__info__address__text">
                        Helpline and support
                      </small>
                      <a href="tel:+8805002451">+88 05 00 24 51 </a>
                    </div>
                  </li>
                </ul>
                {/* /.list-unstyled topbar-one__info */}
                <div className="topbar-one__right">
                  {/* <p class="topbar-one__text">Mon to Sat: 9:00am – 6:00pm Sun: Closed</p> */}
                  <div className="topbar-one__social">
                    <a href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                      <span className="sr-only">Linkedin</span>
                    </a>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                  {/* /.topbar-one__social */}
                </div>
                {/* /.topbar-one__right */}
              </div>
              {/* /.topbar-one__inner */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.topbar-one */}
          <header className="main-header main-header--only-one main-header--one_only sticky-header sticky-header--normal">
            <div className="container-fluid">
              <div className="main-header__inner">
                <div className="main-header__logo">
                  <a href="index.html">
                    <img
                      src="./src/componet/assets/images/logo-dark.png"
                      alt="Grdeen HTML"
                    />
                  </a>
                </div>
                {/* /.main-header__logo */}
                <div className="main-header__wellcome d-flex align-items-center">
                  <p className="main-header__wellcome__tagline">
                    Welcome to our gardening landscape farm
                  </p>
                  <a
                    href="contact.html"
                    className="grdeen-btn main-header__wellcome__btn"
                  >
                    <span>Contact</span>
                  </a>
                </div>
                {/* /.main-header__logo */}
                <nav className="main-header__nav main-menu">
                  <ul className="main-menu__list">
                    <li className="dropdown megamenu">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <section className="home-showcase">
                            <div className="container">
                              <div className="home-showcase__inner">
                                <div className="row">
                                  <div className="col-md-6 col-lg-3">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="./src/componet/assets/images/home-showcase/home-showcase-1.jpg"
                                          alt="grdeen"
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>Multi Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                          <a
                                            href="index-one-page.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>One Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                          <a
                                            href="index-dark.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>Dark Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index.html">Home Page 01</a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-3">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="./src/componet/assets/images/home-showcase/home-showcase-2.jpg"
                                          alt="grdeen"
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index-2.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>Multi Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                          <a
                                            href="index-2-one-page.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>One Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                          <a
                                            href="index-2-dark.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>Dark Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-2.html">
                                            Home Page 02
                                          </a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-3">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="./src/componet/assets/images/home-showcase/home-showcase-3.jpg"
                                          alt="grdeen"
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index-3.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>Multi Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                          <a
                                            href="index-3-one-page.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>One Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                          <a
                                            href="index-3-dark.html"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>Dark Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-3.html">
                                            Home Page 03
                                          </a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-3">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="./src/componet/assets/images/home-showcase/home-showcase-4.jpg"
                                          alt="grdeen"
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index-rtl.html#googtrans(en%7car)"
                                            className="grdeen-btn demo-one__btn"
                                          >
                                            <span>View Page</span>
                                          </a>
                                          {/* /.thm-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-rtl.html#googtrans(en%7car)">
                                            Home RTL
                                          </a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                </div>
                                {/* /.row */}
                              </div>
                              {/* /.home-showcase__inner */}
                            </div>
                            {/* /.container */}
                          </section>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="services-2.html">Services 02</a>
                        </li>
                        <li>
                          <a href="services-3.html">Services 03</a>
                        </li>
                        <li>
                          <a href="services-carousel.html">Services carousel</a>
                        </li>
                        <li>
                          <a href="service-d-garden.html">Garden care</a>
                        </li>
                        <li>
                          <a href="service-d-lawn.html">Lawn care</a>
                        </li>
                        <li>
                          <a href="service-d-makeup.html">Garden makeup</a>
                        </li>
                        <li>
                          <a href="service-d-landscaping.html">Landscaping</a>
                        </li>
                        <li>
                          <a href="service-d-decorative.html">
                            Decorative plants
                          </a>
                        </li>
                        <li>
                          <a href="service-d-spring.html">Spring cleaning</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="project.html">Projects</a>
                      <ul>
                        <li>
                          <a href="project.html">Projects page</a>
                        </li>
                        <li>
                          <a href="project-carousel.html">Projects carousel</a>
                        </li>
                        <li>
                          <a href="project-details.html">Project details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="team.html">Our team</a>
                        </li>
                        <li>
                          <a href="team-carousel.html">Team carousel</a>
                        </li>
                        <li>
                          <a href="team-details.html">Team details</a>
                        </li>
                        <li>
                          <a href="packages.html">Packages</a>
                        </li>
                        <li>
                          <a href="packages-carousel.html">Packages carousel</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="404.html">404 error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Shop</a>
                      <ul className="sub-menu">
                        <li className="dropdown">
                          <a href="#">Products</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="products.html">No sidebar</a>
                            </li>
                            <li>
                              <a href="products-left.html">Left sidebar</a>
                            </li>
                            <li>
                              <a href="products-right.html">Right sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="products-carousel.html">Products carousel</a>
                        </li>
                        <li>
                          <a href="product-details.html">Product details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li className="dropdown">
                          <a href="#">Blog grid</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-grid.html">No sidebar</a>
                            </li>
                            <li>
                              <a href="blog-grid-left.html">Left sidebar</a>
                            </li>
                            <li>
                              <a href="blog-grid-right.html">Right sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Blog list</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-list.html">No sidebar</a>
                            </li>
                            <li>
                              <a href="blog-list-left.html">Left sidebar</a>
                            </li>
                            <li>
                              <a href="blog-list-right.html">Right sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-carousel.html">Blog carousel</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Blog details</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-details.html">No sidebar</a>
                            </li>
                            <li>
                              <a href="blog-details-left.html">Left sidebar</a>
                            </li>
                            <li>
                              <a href="blog-details-right.html">
                                Right sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                {/* /.main-header__nav */}
                <div className="main-header__right">
                  <div className="mobile-nav__btn mobile-nav__toggler">
                    <span />
                    <span />
                    <span />
                  </div>
                  {/* /.mobile-nav__toggler */}
                  <a href="#" className="search-toggler main-header__search">
                    <div className="main-header__search__icon">
                      <i className="icon-search" aria-hidden="true" />
                    </div>
                    <span className="sr-only">Search</span>
                  </a>
                  {/* /.search-toggler */}
                  <a href="cart.html" className="main-header__cart">
                    <div className="main-header__cart__icon">
                      <i className="icon-shop-bag" aria-hidden="true" />
                    </div>
                    <span className="main-header__cart__count">0</span>
                    <span className="sr-only">cart</span>
                  </a>
                  {/* /.cart-toggler */}
                  <a
                    href="contact.html"
                    className="grdeen-btn main-header__btn"
                  >
                    <span>Get A Quote</span>
                  </a>
                  {/* /.thm-btn main-header__btn */}
                </div>
                {/* /.main-header__right */}
              </div>
              {/* /.main-header__inner */}
            </div>
            {/* /.container-fluid */}
          </header>
          {/* /.main-header */}
          {/* main-slider-start */}

          <section className="main-slider-two" id="home">
  <div
    className="main-slider-two__carousel grdeen-owl__carousel owl-carousel"
    data-owl-options='{
		"loop": true,
		"animateOut": "fadeOut",
		"animateIn": "fadeIn",
		"items": 1,
		"autoplay": true,
		"autoplayTimeout": 7000,
		"smartSpeed": 1000,
		"nav": true,
  "navText": ["<span class=\"icon-left-arrow11\"></span>","<span class=\"icon-right-arrow1\"></span>"],
		"dots": false,
		"margin": 0
		}'
  >
    <div className="item">
      <div className="main-slider-two__item">
        <div className="main-slider-two__shape">
          <img src="assets/images/shapes/slider-shape2-1.png" alt="grdeen" />
        </div>
        <div
          className="main-slider-two__bg"
          style={{
            backgroundImage: 'url("assets/images/backgrounds/slider-2-1.jpg")'
          }}
        >
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
        </div>
        <div className="main-slider-two__overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="main-slider-two__content">
                <h5 className="main-slider-two__sub-title">
                  <img
                    src="assets/images/shapes/slider-shape1-2.png"
                    alt="grdeen"
                  />{" "}
                  Welcome To Grdeen
                </h5>
                {/* slider-sub-title */}
                <h2 className="main-slider-two__title">
                  Be proud of your <br /> landscape design
                </h2>
                {/* slider-title */}
                <h6 className="main-slider-two__subtext">
                  Get your outdoor space looking its best with professional
                  gardening <br /> and landscaping services.
                </h6>
                <div className="main-slider-two__btn">
                  <a
                    href="services.html"
                    className="grdeen-btn grdeen-btn--base"
                  >
                    <span>Our Services</span>
                  </a>
                  {/* slider-btn */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="main-slider-two__item">
        <div className="main-slider-two__shape">
          <img src="assets/images/shapes/slider-shape2-1.png" alt="grdeen" />
        </div>
        <div
          className="main-slider-two__bg"
          style={{
            backgroundImage: 'url("./src/componet/assets/images/backgrounds/slider-2-2.jpg")'
          }}
        >
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
        </div>
        <div className="main-slider-two__overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="main-slider-two__content">
                <h5 className="main-slider-two__sub-title">
                  <img
                    src="./src/componet/assets/images/shapes/slider-shape1-2.png"
                    alt="grdeen"
                  />{" "}
                  Welcome To Grdeen
                </h5>
                {/* slider-sub-title */}
                <h2 className="main-slider-two__title">
                  Be proud of your <br /> landscape design
                </h2>
                {/* slider-title */}
                <h6 className="main-slider-two__subtext">
                  Get your outdoor space looking its best with professional
                  gardening <br /> and landscaping services.
                </h6>
                <div className="main-slider-two__btn">
                  <a
                    href="services.html"
                    className="grdeen-btn grdeen-btn--base"
                  >
                    <span>Our Services</span>
                  </a>
                  {/* slider-btn */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="main-slider-two__item">
        <div className="main-slider-two__shape">
          <img src="./src/componet/assets/images/shapes/slider-shape2-1.png" alt="grdeen" />
        </div>
        <div
          className="main-slider-two__bg"
          style={{
            backgroundImage: 'url("./src/componet/assets/images/backgrounds/slider-2-3.jpg")'
          }}
        >
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
          <div className="main-slider-two__bg__color" />
        </div>
        <div className="main-slider-two__overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="main-slider-two__content">
                <h5 className="main-slider-two__sub-title">
                  <img
                    src="./src/componet/assets/images/shapes/slider-shape1-2.png"
                    alt="grdeen"
                  />{" "}
                  Welcome To Grdeen
                </h5>
                {/* slider-sub-title */}
                <h2 className="main-slider-two__title">
                  Be proud of your <br /> landscape design
                </h2>
                {/* slider-title */}
                <h6 className="main-slider-two__subtext">
                  Get your outdoor space looking its best with professional
                  gardening <br /> and landscaping services.
                </h6>
                <div className="main-slider-two__btn">
                  <a
                    href="services.html"
                    className="grdeen-btn grdeen-btn--base"
                  >
                    <span>Our Services</span>
                  </a>
                  {/* slider-btn */}
                </div>
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
          <section className="feature-one">
            <div className="container-fluid">
              <div className="row gutter-y-30 feature-one__row">
                <div
                  className="col-xxl-3 col-xl-6 col-md-6 wow fadeInUp"
                  data-wow-delay="00ms"
                >
                  <div className="feature-one__item">
                    <div className="feature-one__item__content">
                      <h4 className="feature-one__item__title">
                        Quality services
                      </h4>
                      <p className="feature-one__item__text">
                        Lorem ipsum dolor sit amet ultrices gravida risus
                        commodo viverra
                      </p>
                    </div>
                    <div className="feature-one__item__iconwrap">
                      <div className="feature-one__item__icon">
                        <i className="icon-guaranteed" />
                      </div>
                    </div>
                  </div>
                  {/* feature-item */}
                </div>
                <div
                  className="col-xxl-3 col-xl-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="feature-one__item">
                    <div className="feature-one__item__content">
                      <h4 className="feature-one__item__title">
                        Professional team
                      </h4>
                      <p className="feature-one__item__text">
                        Lorem ipsum dolor sit amet ultrices gravida risus
                        commodo viverra
                      </p>
                    </div>
                    <div className="feature-one__item__iconwrap">
                      <div className="feature-one__item__icon">
                        <i className="icon-gardening-1" />
                      </div>
                    </div>
                  </div>
                  {/* feature-item */}
                </div>
                <div
                  className="col-xxl-3 col-xl-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="feature-one__item">
                    <div className="feature-one__item__content">
                      <h4 className="feature-one__item__title">Garden Award</h4>
                      <p className="feature-one__item__text">
                        Lorem ipsum dolor sit amet ultrices gravida risus
                        commodo viverra
                      </p>
                    </div>
                    <div className="feature-one__item__iconwrap">
                      <div className="feature-one__item__icon">
                        <i className="icon-trophy" />
                      </div>
                    </div>
                  </div>
                  {/* feature-item */}
                </div>
                <div
                  className="col-xxl-3 col-xl-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="feature-one__item">
                    <div className="feature-one__item__content">
                      <h4 className="feature-one__item__title">
                        Quality products
                      </h4>
                      <p className="feature-one__item__text">
                        Lorem ipsum dolor sit amet ultrices gravida risus
                        commodo viverra
                      </p>
                    </div>
                    <div className="feature-one__item__iconwrap">
                      <div className="feature-one__item__icon">
                        <i className="icon-plant-a-tree" />
                      </div>
                    </div>
                  </div>
                  {/* feature-item */}
                </div>
              </div>
            </div>
          </section>
          {/* Feature End */}
          <section className="about-one">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="about-one__image wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className="about-one__shapetop" />
                    <img
                      className="about-one__bigimage"
                      src="./src/componet/assets/images/resources/about-image1-1.jpg"
                      alt="grdeen"
                    />
                    <div className="about-one__smimage">
                      <img
                        src="./src/componet/assets/images/resources/about-image1-2.jpg"
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
                        Introduce Our Company
                      </span>
                      {/* /.sec-title__tagline */}
                      <h2 className="sec-title__title">
                        Brings your dream garden to life
                      </h2>
                      {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <p className="about-one__content__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra
                    </p>
                    <div className="about-one__content__qualitwrap">
                      <h4 className="about-one__content__qualitwrap__title">
                        Quality <br /> gardening services
                      </h4>
                      <p className="about-one__content__text qualit-text">
                        Lorem ipsum dolor sit amet ultrices <br /> gravida risus
                        commodo viverra
                      </p>
                      <div className="about-one__content__qualitwrap__pricesbox text-center">
                        <strong className="about-one__content__qualitwrap__price">
                          70K
                        </strong>
                        <span className="about-one__content__qualitwrap__text">
                          Satisfied customers
                        </span>
                      </div>
                    </div>
                    <p className="about-one__content__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul className="list-unstyled about-one__content__list">
                      <li>
                        <i className="icon-check-solid" />
                        Lorem ipsum or lipsum as it is sometimes known
                      </li>
                      <li>
                        <i className="icon-check-solid" />
                        Professional gardening service for all your home
                      </li>
                      <li>
                        <i className="icon-check-solid" />
                        There are many variations of passages of Lorem Ipsum
                        available
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </section>
          {/* /.about-one */}
          <section className="service-one">
            <div
              className="service-one__bg"
              style={{
                "background-image":
                  "url(./src/componet/assets/images/backgrounds/service-bg1-1.jpg)",
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
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="00ms"
                >
                  <div className="service-one__item">
                    <div className="service-one__item__titlewrap d-flex flex-wrap align-items-center">
                      <div className="service-one__item__titlecol">
                        <span className="service-one__item__count" />
                        <h4 className="service-one__item__title">
                          <a href="service-d-garden.html">Garden care</a>
                        </h4>
                      </div>
                      <div className="service-one__item__iconwrap">
                        <div className="service-one__item__icon">
                          <i className="icon-planting" />
                        </div>
                        {/* /.service-icon */}
                      </div>
                    </div>
                    <p className="service-one__item__text">
                      Lorem ipsum dolor sit amet con lorem etur adipiscing elit
                      sed do eiusmod ipsum tempor incididunt sed garden offer
                    </p>
                    <div className="service-one__item__btmwrap d-flex align-items-center justify-content-between">
                      <a
                        className="service-one__item__iconlink"
                        href="service-d-garden.html"
                      >
                        <i className="icon-right-up" />
                      </a>
                      <a
                        className="service-one__item__link"
                        href="service-d-garden.html"
                      >
                        Discover More
                      </a>
                    </div>
                  </div>
                  {/* /.service-card-one */}
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="service-one__item">
                    <div className="service-one__item__titlewrap d-flex flex-wrap align-items-center">
                      <div className="service-one__item__titlecol">
                        <span className="service-one__item__count" />
                        <h4 className="service-one__item__title">
                          <a href="service-d-spring.html">Spring cleaning</a>
                        </h4>
                      </div>
                      <div className="service-one__item__iconwrap">
                        <div className="service-one__item__icon">
                          <i className="icon-cutting" />
                        </div>
                        {/* /.service-icon */}
                      </div>
                    </div>
                    <p className="service-one__item__text">
                      Lorem ipsum dolor sit amet con lorem etur adipiscing elit
                      sed do eiusmod ipsum tempor incididunt sed garden offer
                    </p>
                    <div className="service-one__item__btmwrap d-flex align-items-center justify-content-between">
                      <a
                        className="service-one__item__iconlink"
                        href="service-d-spring.html"
                      >
                        <i className="icon-right-up" />
                      </a>
                      <a
                        className="service-one__item__link"
                        href="service-d-spring.html"
                      >
                        Discover More
                      </a>
                    </div>
                  </div>
                  {/* /.service-card-one */}
                </div>
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="service-one__item">
                    <div className="service-one__item__titlewrap d-flex flex-wrap align-items-center">
                      <div className="service-one__item__titlecol">
                        <span className="service-one__item__count" />
                        <h4 className="service-one__item__title">
                          <a href="service-d-lawn.html">Lawn care</a>
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
                      Lorem ipsum dolor sit amet con lorem etur adipiscing elit
                      sed do eiusmod ipsum tempor incididunt sed garden offer
                    </p>
                    <div className="service-one__item__btmwrap d-flex align-items-center justify-content-between">
                      <a
                        className="service-one__item__iconlink"
                        href="service-d-lawn.html"
                      >
                        <i className="icon-right-up" />
                      </a>
                      <a
                        className="service-one__item__link"
                        href="service-d-lawn.html"
                      >
                        Discover More
                      </a>
                    </div>
                  </div>
                  {/* /.service-card-one */}
                </div>
              </div>
            </div>
          </section>
          {/* Service End */}
          <section className="work-process-one">
            <div className="container">
              <div className="row gutter-y-20">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="work-process-one__sctwrap">
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
                        Our work process
                      </span>
                      {/* /.sec-title__tagline */}
                      <h2 className="sec-title__title">
                        See how we complete the work
                      </h2>
                      {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                  </div>
                </div>
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-delay="100ms"
                >
                  <div className="work-process-one__infowrap">
                    <p className="work-process-one__infowrap__text">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row gutter-y-30">
                <div
                  className="col-xl-3 col-lg-6 wow fadeIn"
                  data-wow-delay="00ms"
                >
                  <div className="work-process-one__col">
                    <div className="work-process-one__col__circlewrap">
                      <div className="work-process-one__col__icon">
                        <i className="icon-standing-persons-salutation-talking-one-to-each-other" />
                      </div>
                    </div>
                    <div className="work-process-one__col__info text-center">
                      <h4 className="work-process-one__col__title">
                        Discuss plan
                      </h4>
                      <p className="work-process-one__col__text">
                        Lorem ipsum dolor sit amet consectetur adipiscing,Quis
                        ipsum suspendisse{" "}
                      </p>
                    </div>
                    <div className="work-process-one__col__shapebg" />
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 wow fadeIn"
                  data-wow-delay="100ms"
                >
                  <div className="work-process-one__col">
                    <div className="work-process-one__col__circlewrap">
                      <div className="work-process-one__col__icon">
                        <i className="icon-farmer" />
                      </div>
                    </div>
                    <div className="work-process-one__col__info text-center">
                      <h4 className="work-process-one__col__title">
                        Garden design
                      </h4>
                      <p className="work-process-one__col__text">
                        Lorem ipsum dolor sit amet consectetur adipiscing,Quis
                        ipsum suspendisse{" "}
                      </p>
                    </div>
                    <div className="work-process-one__col__shapebg" />
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 wow fadeIn"
                  data-wow-delay="200ms"
                >
                  <div className="work-process-one__col">
                    <div className="work-process-one__col__circlewrap">
                      <div className="work-process-one__col__icon">
                        <i className="icon-plant" />
                      </div>
                    </div>
                    <div className="work-process-one__col__info text-center">
                      <h4 className="work-process-one__col__title">Planting</h4>
                      <p className="work-process-one__col__text">
                        Lorem ipsum dolor sit amet consectetur adipiscing,Quis
                        ipsum suspendisse{" "}
                      </p>
                    </div>
                    <div className="work-process-one__col__shapebg" />
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 wow fadeIn"
                  data-wow-delay="300ms"
                >
                  <div className="work-process-one__col">
                    <div className="work-process-one__col__circlewrap">
                      <div className="work-process-one__col__icon">
                        <i className="icon-pot" />
                      </div>
                    </div>
                    <div className="work-process-one__col__info text-center">
                      <h4 className="work-process-one__col__title">
                        Finish the job
                      </h4>
                      <p className="work-process-one__col__text">
                        Lorem ipsum dolor sit amet consectetur adipiscing,Quis
                        ipsum suspendisse{" "}
                      </p>
                    </div>
                    <div className="work-process-one__col__shapebg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* work-process end */}
          <section className="our-benefits-one">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="our-benefits-one__left wow fadeInRight"
                  data-wow-delay="100ms"
                >
                  <div className="our-benefits-one__content">
                    <div className="our-benefits-one__content__sctwap">
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
                        <span className="sec-title__tagline">Our BENEFITS</span>
                        {/* /.sec-title__tagline */}
                        <h2 className="sec-title__title">
                          Why is mine different from others?
                        </h2>
                        {/* /.sec-title__title */}
                      </div>
                      {/* /.sec-title */}
                    </div>
                    <p className="our-benefits-one__content__text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra{" "}
                    </p>
                    <div className="our-benefits-one__content__qualitwrap d-flex flex-wrap">
                      <div className="our-benefits-one__content__qualitwrap__col d-flex flex-wrap">
                        <div className="our-benefits-one__content__qualitwrap__icon">
                          <i className="icon-gardening-1" />
                        </div>
                        <h4 className="our-benefits-one__content__qualitwrap__title">
                          Quality <br /> services
                        </h4>
                      </div>
                      <div className="our-benefits-one__content__qualitwrap__col d-flex flex-wrap">
                        <div className="our-benefits-one__content__qualitwrap__icon our-benefits-one__content__qualitwrap__icon--groupicon">
                          <i className="icon-group" />
                        </div>
                        <h4 className="our-benefits-one__content__qualitwrap__title">
                          Skilled
                          <br /> Team
                        </h4>
                      </div>
                    </div>
                    <p className="our-benefits-one__content__text">
                      Quis ipsum suspendisse ultrices gravida nor again is there
                      anyone who loves or pursues or desires to obtain pain{" "}
                    </p>
                    <div className="our-benefits-one__content__listwrap d-flex justify-content-between">
                      <ul className="list-unstyled our-benefits-one__content__list">
                        <li>
                          <i className="icon-check-solid" />
                          Expert team members
                        </li>
                        <li>
                          <i className="icon-check-solid" />
                          Afordable quality services
                        </li>
                        <li>
                          <i className="icon-check-solid" />
                          Professional Gardening Services{" "}
                        </li>
                      </ul>
                      <a
                        href="about.html"
                        className="grdeen-btn our-benefits-one__btn"
                      >
                        <span>Find out more</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* /.col-lg-6 */}
                <div className="our-benefits-one__right">
                  <div
                    className="our-benefits-one__image wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className="our-benefits-one__shapetop" />
                    <img
                      className="our-benefits-one__bigimage"
                      src="./src/componet/assets/images/resources/benefits-img1-1.jpg"
                      alt="grdeen"
                    />
                    <div className="our-benefits-one__smimage">
                      <img
                        src="./src/componet/assets/images/resources/benefits-img1-2.jpg"
                        alt="grdeen"
                      />
                    </div>
                  </div>
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </section>
          {/* /.our-benefits-one */}
          <section className="project-one">
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
                  <span className="sec-title__tagline">
                    Our completed projects
                  </span>
                  {/* /.sec-title__tagline */}
                  <h2 className="sec-title__title">
                    View some of our best <br /> recent work
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
					"items": 3,
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
                    <div className="project-one__item__image">
                      <img
                        src="./src/componet/assets/images/resources/project1-1.jpg"
                        alt="project"
                      />
                    </div>
                    <div className="project-one__item__info">
                      <div className="project-one__item__bg">
                        <strong className="project-one__item__tagtext">
                          Gardening
                        </strong>
                        <h5 className="project-one__item__heading">
                          <a href="project-details.html">Garden maintenance</a>
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
                    <div className="project-one__item__image">
                      <img
                        src="./src/componet/assets/images/resources/project1-2.jpg"
                        alt="project"
                      />
                    </div>
                    <div className="project-one__item__info">
                      <div className="project-one__item__bg">
                        <strong className="project-one__item__tagtext">
                          Gardening
                        </strong>
                        <h5 className="project-one__item__heading">
                          <a href="project-details.html">
                            Lawn care &amp; mowing
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
                    <div className="project-one__item__image">
                      <img
                        src="./src/componet/assets/images/resources/project1-2.jpg"
                        alt="project"
                      />
                      <img
                        src="./src/componet/assets/images/resources/project1-3.jpg"
                        alt="project"
                      />
                    </div>
                    <div className="project-one__item__info">
                      <div className="project-one__item__bg">
                        <strong className="project-one__item__tagtext">
                          Gardening
                        </strong>
                        <h5 className="project-one__item__heading">
                          <a href="project-details.html">Garden design</a>
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
              <div
                className="project-one__moreproject d-flex justify-content-between align-items-center wow fadeInUp"
                data-wow-delay="200ms"
              >
                <h5 className="project-one__moreproject__title">
                  Check out our gardening portfolio{" "}
                </h5>
                <a
                  href="project.html"
                  className="grdeen-btn project-one__moreproject__btn"
                >
                  <span>View All Projects</span>
                </a>
              </div>
            </div>
          </section>
          {/* /.project-one */}
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
                        <span>Book Now</span>
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
          {/* /.funfact-one */}
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
          {/* /.testimonials-one */}
          <section className="free-booking-one" style={{ width: "100%" }}>
            <div
              className="free-booking-one__bg"
              style={{
                "background-image":
                  "url('./src/componet/assets/images/shapes/booking-bg1-1.jpg')",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="free-booking-one__content">
                    <div
                      className="free-booking-one__sctwrap wow fadeInUp"
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
                          Free Book Now
                        </span>
                        {/* /.sec-title__tagline */}
                        <h2 className="sec-title__title">
                          Book a FREE <br /> professional gardening <br />{" "}
                          consultation!
                        </h2>
                        {/* /.sec-title__title */}
                      </div>
                      {/* /.sec-title */}
                    </div>
                    <form
                      className="free-booking-one__form contact-form-validated form-one wow fadeInUp"
                      data-wow-duration="1500ms"
                      action="https://bracketweb.com/grdeen-html/inc/sendemail.php"
                    >
                      <div className="form-one__group">
                        <div className="form-one__control">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                        </div>
                        {/* /.form-one__control */}
                        <div className="form-one__control">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                        {/* /.form-one__control */}
                        <div className="form-one__control">
                          <input
                            type="text"
                            name="tel"
                            placeholder="Your Phone"
                          />
                        </div>
                        {/* /.form-one__control */}
                        <div className="form-one__control">
                          <div className="form-one__control__select">
                            <label
                              className="sr-only"
                              htmlFor="language-select"
                            >
                              Choose Services
                            </label>
                            {/* /#language-select.sr-only */}
                            <select
                              className="selectpicker"
                              id="language-select"
                            >
                              <option value="Choose Services">
                                Choose Services
                              </option>
                              <option value="Choose Services 01">
                                Choose Services 01
                              </option>
                              <option value="Choose Services 02">
                                Choose Services 02
                              </option>
                            </select>
                          </div>
                          {/* /.main-menu__language */}
                        </div>
                        {/* /.form-one__control */}
                        <div className="form-one__control form-one__control--full d-none">
                          <input
                            className="grdeen-datepicker"
                            type="text"
                            name="date"
                            placeholder="Select date"
                          />
                          <i className="fa fa-calendar-alt form-one__control__icon" />
                        </div>
                        {/* /.form-one__control form-one__control--full */}
                        <div className="form-one__control form-one__control--full">
                          <textarea
                            name="message"
                            placeholder="Message"
                            defaultValue={""}
                          />
                          {/* /# */}
                        </div>
                        {/* /.form-one__control */}
                        <div className="form-one__control form-one__control--full">
                          <button
                            type="submit"
                            className="grdeen-btn free-booking-one__submit"
                          >
                            <span>Submit Message</span>
                          </button>
                        </div>
                        {/* /.form-one__control */}
                      </div>
                      {/* /.form-one__group */}
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="grdeen-stretch-element-inside-column">
                    <div className="free-booking-one__image">
                      <div className="free-booking-one__image__shape">
                        <img
                          src="./src/componet/assets/images/shapes/booking-shape1-1.png"
                          alt="grdeen"
                        />
                      </div>
                      <div
                        className="free-booking-one__image__maskingimg  wow fadeInRight"
                        data-wow-delay="300ms"
                      >
                        <img
                          src="./src/componet/assets/images/resources/book-image1-1.jpg"
                          alt="grdeen"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container */}
            <div className="free-booking-one__shadow">
              <h1 className="free-booking-one__shadow__title">Gardening</h1>
            </div>
          </section>
          {/* /.free-booking-one */}
          <section className="blog-one blog-one--home">
            <div className="container">
              <div
                className="blog-one__sctwrap wow fadeInUp"
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
                  <span className="sec-title__tagline">Our Blog post</span>
                  {/* /.sec-title__tagline */}
                  <h2 className="sec-title__title">
                    Read our latest articles <br /> post from blog
                  </h2>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}

                <div style={{ margin: "20px", display: "flex" }}>
                  <div className="item">
                    <div
                      className="blog-card wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="00ms"
                    >
                      <div className="blog-card__image">
                        <div className="blog-card__image__inner">
                          <img
                            src="./src/componet/assets/images/blog/blog-post1-1.jpg"
                            alt="In our gardens  plants for the shade garden"
                            style={{ height: "300px", width: "350px" }}
                          />
                          <a
                            href="blog-details.html"
                            className="blog-card__image__link"
                          >
                            <span className="sr-only">
                              In our gardens plants for the shade garden
                            </span>
                          </a>
                        </div>
                        <div className="blog-card__date">
                          <span className="blog-card__date__num">03</span>{" "}
                          <span className="blog-card__date__month">Sep</span>
                        </div>
                        {/* /.blog-card__date */}
                      </div>
                      {/* /.blog-card__image */}
                      <div className="blog-card__content">
                        <ul className="list-unstyled blog-card__meta">
                          <li>
                            <a href="blog-grid-right.html">
                              <span>
                                <i className="fas fa-user" />
                              </span>
                              By Admin
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">
                              <span>
                                <i className="icon-comment" />
                              </span>
                              10 Comments
                            </a>
                          </li>
                        </ul>
                        {/* /.list-unstyled blog-card__meta */}
                        <h4 className="blog-card__title">
                          <a href="blog-details.html">
                            In our gardens plants for the shade garden
                          </a>
                        </h4>
                        {/* /.blog-card__title */}
                        <a href="blog-details.html" className="blog-card__link">
                          <span>Read more</span>
                          <span className="blog-card__link__rightarrow">
                            <i className="icon-right-arrow2" />
                          </span>
                        </a>
                        {/* /.blog-card__link */}
                      </div>
                      {/* /.blog-card__content */}
                    </div>
                    {/* /.blog-card */}
                  </div>
                  {/* /.item */}
                  <div className="item">
                    <div
                      className="blog-card wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="100ms"
                    >
                      <div className="blog-card__image">
                        <div className="blog-card__image__inner">
                          <img
                            src="./src/componet/assets/images/blog/blog-post1-2.jpg"
                            alt="Choosing the right variety of potato to grow at home"
                          />
                          <a
                            href="blog-details.html"
                            className="blog-card__image__link"
                          >
                            <span className="sr-only">
                              Choosing the right variety of potato to grow at
                              home
                            </span>
                          </a>
                        </div>
                        <div className="blog-card__date">
                          <span className="blog-card__date__num">03</span>{" "}
                          <span className="blog-card__date__month">Sep</span>
                        </div>
                        {/* /.blog-card__date */}
                      </div>
                      {/* /.blog-card__image */}
                      <div className="blog-card__content">
                        <ul className="list-unstyled blog-card__meta">
                          <li>
                            <a href="blog-grid-right.html">
                              <span>
                                <i className="fas fa-user" />
                              </span>
                              By Admin
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">
                              <span>
                                <i className="icon-comment" />
                              </span>
                              10 Comments
                            </a>
                          </li>
                        </ul>
                        {/* /.list-unstyled blog-card__meta */}
                        <h4 className="blog-card__title">
                          <a href="blog-details.html">
                            Choosing the right variety of potato to grow at home
                          </a>
                        </h4>
                        {/* /.blog-card__title */}
                        <a href="blog-details.html" className="blog-card__link">
                          <span>Read more</span>
                          <span className="blog-card__link__rightarrow">
                            <i className="icon-right-arrow2" />
                          </span>
                        </a>
                        {/* /.blog-card__link */}
                      </div>
                      {/* /.blog-card__content */}
                    </div>
                    {/* /.blog-card */}
                  </div>
                  {/* /.item */}
                  <div className="item">
                    <div
                      className="blog-card wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="200ms"
                    >
                      <div className="blog-card__image">
                        <div className="blog-card__image__inner">
                          <img
                            src="./src/componet/assets/images/blog/blog-post1-3.jpg"
                            alt="The right way to grow the three sisters of the field"
                          />
                          <a
                            href="blog-details.html"
                            className="blog-card__image__link"
                          >
                            <span className="sr-only">
                              The right way to grow the three sisters of the
                              field
                            </span>
                          </a>
                        </div>
                        <div className="blog-card__date">
                          <span className="blog-card__date__num">03</span>{" "}
                          <span className="blog-card__date__month">Sep</span>
                        </div>
                        {/* /.blog-card__date */}
                      </div>
                      {/* /.blog-card__image */}
                      <div className="blog-card__content">
                        <ul className="list-unstyled blog-card__meta">
                          <li>
                            <a href="blog-grid-right.html">
                              <span>
                                <i className="fas fa-user" />
                              </span>
                              By Admin
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">
                              <span>
                                <i className="icon-comment" />
                              </span>
                              10 Comments
                            </a>
                          </li>
                        </ul>
                        {/* /.list-unstyled blog-card__meta */}
                        <h4 className="blog-card__title">
                          <a href="blog-details.html">
                            The right way to grow the three sisters of the field
                          </a>
                        </h4>
                        {/* /.blog-card__title */}
                        <a href="blog-details.html" className="blog-card__link">
                          <span>Read more</span>
                          <span className="blog-card__link__rightarrow">
                            <i className="icon-right-arrow2" />
                          </span>
                        </a>
                        {/* /.blog-card__link */}
                      </div>
                      {/* /.blog-card__content */}
                    </div>
                    {/* /.blog-card */}
                  </div>
                  {/* /.item */}
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </section>
          {/* /.blog-one blog-one--page */}
          <section className="companies-one">
            <div className="container">
              <div
                className="companies-one__sctwrap wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="sec-title">
                  <h2 className="sec-title__title">
                    We collaborate with 20k+ leading <br /> gardening companies
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
                            src="./src/componet/assets/images/resources/brand-logo1-1.png"
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
                            src="./src/componet/assets/images/resources/brand-logo1-2.png"
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
                            src="./src/componet/assets/images/resources/brand-logo1-3.png"
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
                            src="./src/componet/assets/images/resources/brand-logo1-4.png"
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
          {/* /.companies-one */}
          <section className="great-together">
            <div className="container">
              <div className="great-together__wrapper">
                <div
                  className="great-together__bg"
                  style={{
                    "background-image":
                      "url('./src/componet/assets/images/backgrounds/companies-bg1-1.jpg')",
                  }}
                />
                <div className="great-together__overlay" />
                <div className="great-together__content text-center">
                  <h3 className="great-together__title">
                    Let's make something great together
                  </h3>
                  <p className="great-together__text">
                    Tell us about your garden, and get a price with consultation
                  </p>
                  <a
                    href="prices.html"
                    className="grdeen-btn great-together__btn"
                  >
                    <span>GET Our Price</span>
                  </a>
                </div>
              </div>
            </div>
            {/* /.container */}
          </section>
          {/* /.great-together */}
          <footer className="main-footer">
            <div
              className="main-footer__bg"
              style={{
                "background-image":
                  "url(./src/componet/assets/images/backgrounds/footer-bg1-1.jpg)",
              }}
            />
            <div className="main-footer__overlay" />
            {/* /.main-footer__bg */}
            <div className="main-footer__top">
              <div className="container">
                <div className="row">
                  <div className="footer-widget__col footer-widget__col__col1">
                    <div className="footer-widget footer-widget--about">
                      <a href="index.html" className="footer-widget__logo">
                        <img
                          src="./src/componet/assets/images/logo-light.png"
                          width={155}
                          alt="Agrofa HTML Template"
                        />
                      </a>
                      <p className="footer-widget__experience-text">
                        Over 20 years of experience we’ll ensure you get the
                        best guidance.
                      </p>
                      <div className="footer-widget__newsletterwrap">
                        <h6 className="footer-widget__title footer-widget__title--newsletter">
                          Newsletter
                        </h6>
                        <form
                          action="#"
                          data-url="MAILCHIMP_FORM_URL"
                          className="footer-widget__newsletter mc-form"
                        >
                          <div className="footer-widget__mail-address">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                            />
                          </div>
                          <button type="submit" className="form-submit-btn">
                            Submit
                          </button>
                        </form>
                        {/* /.footer-widget__newsletter mc-form */}
                        <div className="mc-form__response" />
                        {/* /.mc-form__response */}
                      </div>
                    </div>
                    {/* /.footer-widget */}
                  </div>
                  {/* /.col-md-6 */}
                  <div className="footer-widget__col  footer-widget__col__col2">
                    <div className="footer-widget footer-widget--links">
                      <h6 className="footer-widget__title">Links</h6>
                      <ul className="list-unstyled footer-widget__links">
                        <li>
                          <a href="checkout.html">Cookie Policy</a>
                        </li>
                        <li>
                          <a href="products-right.html">Shop</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                      {/* /.list-unstyled footer-widget__links */}
                    </div>
                    {/* /.footer-widget */}
                  </div>
                  {/* /.col-md-6 */}
                  <div className="footer-widget__col  footer-widget__col__col3">
                    <div className="footer-widget footer-widget--gallery">
                      <h6 className="footer-widget__title">Gallery</h6>
                      {/* /.footer-widget__title */}
                      <div className="footer-widget__gallerywrap d-flex flex-wrap">
                        <div className="footer-widget__gallerywrap__img">
                          <img
                            src="./src/componet/assets/images/resources/footer-gallery1-1.jpg"
                            alt="grdeen"
                          />
                        </div>
                        <div className="footer-widget__gallerywrap__img">
                          <img
                            src="./src/componet/assets/images/resources/footer-gallery1-2.jpg"
                            alt="grdeen"
                          />
                        </div>
                        <div className="footer-widget__gallerywrap__img">
                          <img
                            src="./src/componet/assets/images/resources/footer-gallery1-3.jpg"
                            alt="grdeen"
                          />
                        </div>
                        <div className="footer-widget__gallerywrap__img">
                          <img
                            src="./src/componet/assets/images/resources/footer-gallery1-4.jpg"
                            alt="grdeen"
                          />
                        </div>
                        <div className="footer-widget__gallerywrap__img">
                          <img
                            src="./src/componet/assets/images/resources/footer-gallery1-5.jpg"
                            alt="grdeen"
                          />
                        </div>
                        <div className="footer-widget__gallerywrap__img">
                          <img
                            src="./src/componet/assets/images/resources/footer-gallery1-6.jpg"
                            alt="grdeen"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /.footer-widget */}
                  </div>
                  {/* /.col-md-6 */}
                  <div className="footer-widget__col  footer-widget__col__col4">
                    <div className="footer-widget footer-widget--blog">
                      <h5 className="footer-widget__title">Popular Post</h5>
                      {/* /.footer-widget__title */}
                      <div className="footer-widget__post-wrap">
                        <div className="footer-widget__post-col">
                          <div className="footer-widget__post-img">
                            <img
                              src="./src/componet/assets/images/resources/footer-post1-1.jpg"
                              alt="grdeen"
                            />
                          </div>
                          <div className="footer-widget__post-info">
                            <span className="footer-widget__post-date">
                              <i className="far fa-calendar" />
                              <span> 02 Sep 2023</span>
                            </span>
                            <h6 className="footer-widget__post-heading">
                              <a href="blog.html">
                                Vegetable crops that do not need pollinators
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="footer-widget__post-col">
                          <div className="footer-widget__post-img">
                            <img
                              src="./src/componet/assets/images/resources/footer-post1-2.jpg"
                              alt="grdeen"
                            />
                          </div>
                          <div className="footer-widget__post-info">
                            <span className="footer-widget__post-date">
                              <i className="far fa-calendar" />
                              <span> 05 Sep 2023</span>
                            </span>
                            <h6 className="footer-widget__post-heading">
                              <a href="blog.html">
                                Grow your own pumpkins even in small spaces
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.footer-widget */}
                  </div>
                  {/* /.col-md-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.main-footer__top */}
            <div className="main-footer__bottom">
              <div className="container">
                <div className="main-footer__bottom__inner">
                  <p className="main-footer__copyright">
                    {" "}
                    © <span className="dynamic-year" /> Grdeen All Rights
                    Reserved
                  </p>
                  <div className="main-footer__social-row">
                    <p className="main-footer__social-row-text">Social</p>
                    <ul className="main-footer__social-list">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.main-footer__inner */}
              </div>
              {/* /.container */}
            </div>
            {/* /.main-footer__bottom */}
          </footer>
          {/* /.main-footer */}
        </div>
        {/* /.page-wrapper */}
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler" />
          {/* /.mobile-nav__overlay */}
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler">
              <i className="fa fa-times" />
            </span>
            <div className="logo-box">
              <a href="index.html" aria-label="logo image">
                <img
                  src="./src/componet/assets/images/logo-light.png"
                  width={155}
                  alt
                />
              </a>
            </div>
            {/* /.logo-box */}
            <div className="mobile-nav__container" />
            {/* /.mobile-nav__container */}
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope" />
                <a href="mailto:needhelp@grdeen.com">needhelp@grdeen.com</a>
              </li>
              <li>
                <i className="fa fa-phone-alt" />
                <a href="tel:666-888-0000">666 888 0000</a>
              </li>
            </ul>
            {/* /.mobile-nav__contact */}
            <div className="mobile-nav__social">
              <a href="https://facebook.com/">
                <i className="fab fa-facebook-f" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com/">
                <i className="fab fa-linkedin-in" />
                <span className="sr-only">Linkedin</span>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__content */}
        </div>
        {/* /.mobile-nav__wrapper */}
        <div className="search-popup">
          <div className="search-popup__overlay search-toggler" />
          {/* /.search-popup__overlay */}
          <div className="search-popup__content">
            <form
              role="search"
              method="get"
              className="search-popup__form"
              action="#"
            >
              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="grdeen-btn"
              >
                <span>
                  <i className="icon-search" />
                </span>
              </button>
            </form>
          </div>
          {/* /.search-popup__content */}
        </div>
        {/* /.search-popup */}
        <a
          href="#"
          data-target="html"
          className="scroll-to-target scroll-to-top"
        >
          <span className="scroll-to-top__text">back top</span>
          <span className="scroll-to-top__wrapper">
            <span className="scroll-to-top__inner" />
          </span>
        </a>
        {/* template js */}
      </div>
    </div>
  );
};

export default home;
