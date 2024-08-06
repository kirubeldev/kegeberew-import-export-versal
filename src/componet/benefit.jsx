import React from 'react'

const benefit = () => {
  return (
    <div>
         <section className="our-benefits-one" style={{marginTop:"-50px", width:"96%"}}>
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
                       
                        </div>
                      
                        
                        <h2 className="sec-title__title">
                        Why you choose us?
                        </h2>
                        {/* /.sec-title__title */}
                      </div>
                      {/* /.sec-title */}
                    </div>
                    <p className="our-benefits-one__content__text justify">
                    Kegeberew Export has a focus on the agriculture sector and uses a range of distribution methods, such as international trade and e-commerce. We are aggressively working to improve Ethiopia's agricultural sector through agro-processing and the application of new technologies. Building a solid, long-term relationship with farmers, producers, and purchasers is our top goal.                    </p>
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
                    <p className="our-benefits-one__content__text justify">
                    KEx is an Africa-based trade system and expanding to the international markets by promoting high quality organic agricultural products at a competative price.{" "}
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
                        Quality Products{" "}
                        </li>
                      </ul>
                      <a
                        href="about.html"
                        className="grdeen-btn our-benefits-one__btn"
                      >
                         <a href="/contact" className="grdeen-btn main-header__btn">
              <span>Contact US</span>
            </a>
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
                      src="./src/componet/assets/images/f.jpg"
                      alt="grdeen"
                    />
                    <div className="our-benefits-one__smimage">
                      <img
                        src="./src/componet/assets/images/how.jpg"
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
    </div>
  )
}

export default benefit