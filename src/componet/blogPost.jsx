import React from 'react'

const blogPost = () => {
  return (
    <div>  <section className="blog-one blog-one--home">
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
  </section></div>
  )
}

export default blogPost