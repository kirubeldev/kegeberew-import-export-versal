import React from 'react'
import { Link } from 'react-router-dom'
import img from "./assets/picFi/oil4.jpg"
import img1 from "./assets/picFi/spi1.jpg"
import img2 from "./assets/picFi/coff1.jpg"
import img3 from "./assets/picFi/mac1.jpg"
import img4 from "./assets/picFi/spi4.jpg"
import img5 from "./assets/picFi/oil3.jpg"
import logo from "./assets/picFi/logo2.jpg"
import ga1 from "./assets/picFi/ga1.jpg"
import ga3 from "./assets/picFi/ga3.jpg"
import ga5 from "./assets/picFi/ga5.jpg"
import ga4 from "./assets/picFi/ga4.jpg"
import ga2 from "./assets/picFi/ga2.jpg"
import ga6 from "./assets/picFi/ga6.jpg"



import "../../public/foott.css"
const footer = () => {
  return (
    <div style={{marginTop:"-100px"}}>
    










    <footer className="site-footer footer-dark">
  {/* Footer Top Part */}
  <div className="footer-top overlay-wraper">
    <div className="overlay-main" />
    <div className="container">
      <div className="row">
        {/* About */}
        <div className="col-lg-3 col-md-6">
          <div className="widget widget_about text-white">
            <h4 className="widget-title">About Our Company</h4>
            <div className="logo-footer clearfix p-b15 justify" >
              <a href="index.html">
                <img
                style={{ height:"90px" , width:"230px"}}
                  src={logo}
                  width={171}
                  height={49}
                  alt=""
                />
              </a>
            </div>
            <p className='justify'>
           
PurposeBlack Eth Trading S.C. is a corporate company operating in the agriculture and Agro-processing sector. We produce a variety of agricultural products for the international market. Much of the success of Kegeberew Export and PruposeBlack has been by the initiatives taken to join with the farmers directly, alter traditional supply-chains, to be traceable and more quality-oriented, productive, and overall, economically beneficial to all those that work alongside us.
            </p>
           
          </div>
        </div>
        {/* Useful Links */}
        <div className="col-lg-3 col-md-6">
          <div className="widget widget_services text-white">
            <h4 className="widget-title">Useful links</h4>
            <ul>
              <li>
              <Link to="purposeblack.com">Purpose Black</Link>
              </li>
              
              <li>
              <a href="">Kegeberew Coffee Enterprise</a>
              </li> 
              <li>
              <a href="https://kegeberew.com/">Kegeberew E-commerece</a>
              </li>
              
              <li>
              <Link to="kegeberewuniversity.com">Kegeberew University</Link>
              </li>
              <li>
              <a href="https://www.youtube.com/channel/UC7ubb4Di5JcGCTApA4J6kfg">Kegeberew Television</a>
              </li>
             
          
            </ul>
         
          </div>
        </div>
        {/* Resent Post */}
       
        {/* Instagram Feed */}
        <div className="col-lg-3 col-md-6">
        
          <div className="widget widget_gallery mfp-gallery clearfix">
            <h4 className="widget-title">Our Gallary</h4>
            <ul className="clearfix">
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={img3} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="/" className="mfp-link">
                    <img src={img2} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="/" className="mfp-link">
                    <img src={img1} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={ga1} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={ga2} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={ga3} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={ga4} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={ga5}alt="" />
                  </a>
                </div>
              </li>
              <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={img3} alt="" />
                  </a>
                </div>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={img5} alt="" />
                  </a>
                </div>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={ga6} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={img5}alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-post-thum  overflow-hide">
                  <a href="" className="mfp-link">
                    <img src={img4} alt="" />
                  </a>
                </div>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>


        <div className="col-lg-3 col-md-6">
          
        <ul>
              <li>
                {" "}
                <i className="fa fa-phone site-text-primary" style={{color:"#d7a222"}}/>{" "}
                <b className="p-lr5 text-uppercase">Tel :</b> (+251)9-146-545454{" "}
              </li>
              <br />
              <li>
                <i className="fa fa-envelope site-text-primary" style={{color:"#d7a222"}}/>{" "}
                <b className="p-lr5 text-uppercase">Email : </b>
                export_bruk@purposeblack.et
              </li>
              <br />
              <li>
                <i className="fa fa-location-arrow site-text-primary"style={{color:"#d7a222"}} />{" "}
                <b className="p-lr5 text-uppercase">Location :</b> Sengatera Negadwoch Hibret BLDG, 5th Floor
                <br /><div style={{display:"flex"}}>
                
                <a href="https://api.whatsapp.com/send?phone=+251943566220" style={{ marginRight: "20px", fontSize: "25px", marginTop: "15px" }}>
  <i className="bi bi-whatsapp" style={{ color: "#4AC959" }}></i>
  <span className="sr-only">What's up</span>
</a>

<a href="https://www.facebook.com/profile.php?id=61557619483944" style={{ marginRight: "20px", fontSize: "25px", marginTop: "15px" }}>
  <i className="bi bi-facebook" style={{ color: "#3b5998" }}></i>
  <span className="sr-only">Facebook</span>
</a>

<a href="https://www.youtube.com/channel/UCsg-9QnHafAh1hzrqAYOZVQ" style={{ marginRight: "20px", fontSize: "25px", marginTop: "15px" }}>
  <i className="bi bi-youtube" style={{ color: "#FF0000" }}></i>
  <span className="sr-only">Youtube</span>
</a>

<a href="https://www.linkedin.com/in/kegeberew-import-and-export" style={{ marginRight: "20px", fontSize: "25px", marginTop: "15px" }}>
  <i className="fab fa-linkedin-in" style={{ color: "#3b5998" }}></i>
  <span className="sr-only">LinkedIn</span>
</a>




<a href={`weixin://dl/chat?${encodeURIComponent('+251943566220')}`} style={{ marginRight: "20px", fontSize: "25px", marginTop: "15px" }}>
  <i className="bi bi-wechat" style={{ color: "#4AC959" }}></i>
  <span className="sr-only">Wechat</span>
</a>



            </div>
              </li>
              
            </ul>
            
        </div>
      </div>
    </div>
  </div>
  {/* Footer Copyright Part */}
  <div className="footer-bottom overlay-wraper" style={{marginTop:"-100px"}}>
    <div className="overlay-main" />
    <div className="container p-t30">
      <div className="mt-footer-bot-center">
        <span className="copyrights-text">
          © 2024 Kegeberew Import Export. All Rights Reserved. 
        </span>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default footer