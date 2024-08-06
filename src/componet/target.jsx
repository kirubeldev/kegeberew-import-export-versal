import React from 'react'
import img2 from "./assets/picFi/img2.jpg"
const Target = () => {
  return (
    <div style={{marginTop:"-90px" , width:"96%"}}>
        <br />
        <br />
        <br />
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
                        
                        </div>
                      
                        {/* /.sec-title__tagline */}
                        <h5 className="sec-title__title" style={{fontSize:"29px"}}>
                    Our Target Market
                        </h5>
                        {/* /.sec-title__title */}
                      </div>
                      {/* /.sec-title */}
                    </div>
                    <p className="our-benefits-one__content__text justify">
                    Originating in the African market and expanding globally. Our objective is to strengthen our position in the African agricultural sector and expand our market share by strategically focusing on prospective nations. Our ultimate objective is to completely transform the distribution and trading of agricultural products throughout East Africa, thereby promoting the region's economic development.             </p>
                    
                   
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
                      src={img2}
                      alt="grdeen"
                    />
                    <div className="our-benefits-one__smimage">
                    
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

export default Target