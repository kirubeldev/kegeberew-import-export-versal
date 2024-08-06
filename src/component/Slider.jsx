import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
      };
    return(
      <div className="custom-cursor">
         <Slider {...settings}>
  <div className="hero-slide">
    <img src="assets/images/1.jpg" alt="Slide 1" style={{ width: '100%', height: "85vh" }} />
    <div className="hero-text">
      <h1 style={{color:"white", fontSize:"50px"}}>Welcome to Kegeberew Affordable Housing </h1>
      <p>House for all</p>
      <a class="btn text-white  blackButton" data-mdb-ripple-init href="#!" role="button"> 

      <Link to="/Registration"><span>Register</span></Link> 
</a>
    </div>
  </div>
  <div className="hero-slide">
    <img src="assets/images/2.jpg" alt="Slide 2" style={{ width: '100%', height: "85vh" }} />
    <div className="hero-text">
    <h1 style={{color:"white", fontSize:"50px"}}>Welcome to Kegeberew Affordable Housing </h1>
    <p>House for all</p>
    <a class="btn text-white  blackButton" data-mdb-ripple-init style={{backgroundcolor:" #55acee"}} href="#!" role="button"> 
 
    <Link to="/Registration"><span>Register</span></Link> 
</a>
    </div>
  </div>
  <div className="hero-slide">
    <img src="assets/images/4.jpg" alt="Slide 3" style={{ width: '100%', height: "85vh" }} />
    <div className="hero-text">
    <h1 style={{color:"white" ,fontSize:"50px"}}>Welcome to Kegeberew Affordable Housing </h1>
    <p>House for all</p>
    <a class="btn text-white  blackButton" data-mdb-ripple-init style={{backgroundcolor:" #55acee"}} href="#!" role="button">  
 
    <Link to="/Registration"><span>Register</span></Link> 
</a>
    </div>
  </div>
  <div className="hero-slide">
    <img src="assets/images/3.jpg" alt="Slide 4" style={{ width: '100%', height: "85vh" }} />
    <div className="hero-text">
    <h1 style={{color:"white" , fontSize:"50px"}}>Welcome to Kegeberew Affordable Housing </h1>
    <p>House for all</p>
    <a class="btn text-white  blackButton" data-mdb-ripple-init style={{backgroundcolor:" #55acee"}} href="#!" role="button">

 <Link to="/Registration"><span>Register</span></Link> 
</a>
    </div>
  </div>
</Slider>

        </div>
    )
}

export default Hero;