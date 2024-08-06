import coff1 from"./assets/picFi/coff1.jpg"
import coff2 from"./assets/picFi/coff2.jpg"
import co1 from"./assets/picFi/co1.jpg"
import coff4 from"./assets/picFi/coff4.jpg"

import oil1 from"./assets/picFi/oil1.jpg"
import oil2 from"./assets/picFi/oil2.jpg"
import oil3 from"./assets/picFi/spi2.jpg"
import oil4 from"./assets/picFi/oil4.jpg"



import fru1 from"./assets/picFi/fru1.jpg"
import fru2 from"./assets/picFi/fru2.jpg"
import fru3 from"./assets/picFi/fru3.jpg"
import fru4 from"./assets/picFi/fru4.jpg"



import spi1 from"./assets/picFi/spi1.jpg"
import spi2 from"./assets/picFi/spi5.jpg"
import spi3 from"./assets/picFi/spi3.jpg"
import spi4 from"./assets/picFi/spi4.jpg"

import React, { useState, useEffect } from "react";
import { Motion } from "react-motion"


import { motion } from "framer-motion";
function Car() {

  const slides1 = [

    coff1,
    
    coff2, 
  
    co1,
    coff4,
   
  ];
  const slides2 = [

    
   
    oil1, oil2,oil3,oil4,
   
   
 
   
  ];
  const slides3 = [

    spi4,
    spi3,
   spi1,
    spi2,
   
   
  ];
  const slides4 = [

     fru1 ,fru2 ,fru3, fru4,
    
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex1((prevIndex) => (prevIndex + 1) % slides1.length);
    }, 4600);

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide1 = () => {
    setIndex1((prevIndex) => (prevIndex === 0 ? slides1.length - 1 : prevIndex - 1));
  };

  const nextSlide1 = () => {
    setIndex1((prevIndex) => (prevIndex + 1) % slides1.length);
  };

  









  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex2((prevIndex) => (prevIndex + 1) % slides2.length);
    }, 4900);

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide2 = () => {
    setIndex2((prevIndex) => (prevIndex === 0 ? slides2.length - 1 : prevIndex - 1));
  };

  const nextSlide2 = () => {
    setIndex2((prevIndex) => (prevIndex + 1) % slides2.length);
  };
  


















  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex3((prevIndex) => (prevIndex + 1) % slides3.length);
    }, 4100);

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide3 = () => {
    setIndex3((prevIndex) => (prevIndex === 0 ? slides3.length - 1 : prevIndex - 1));
  };

  const nextSlide3 = () => {
    setIndex3((prevIndex) => (prevIndex + 1) % slides3.length);
  };








  

useEffect(() => {
  const intervalId = setInterval(() => {
    setIndex4((prevIndex) => (prevIndex + 1) % slides4.length);
  }, 4000);

  return () => clearInterval(intervalId);
}, []);

const prevSlide4 = () => {
  setIndex4((prevIndex) => (prevIndex === 0 ? slides4.length - 1 : prevIndex - 1));
};

const nextSlide4 = () => {
  setIndex4((prevIndex) => (prevIndex + 1) % slides4.length);
};

  return (
    <div>
   





 




   




   <>
  
  {/* /.main-header */}
  <section className="page-header">
    <div className="page-header__bg page-header__bgexportonly" />
    
    <div className="page-header__overlay" />
    {/* /.page-header__bg */}
    <center>  
    <div className="container">
      <h2 className="page-header__title">  Export </h2>
      <ul className="grdeen-breadcrumb list-unstyled">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <span>Export</span>
        </li>
      </ul>
      
      {/* /.thm-breadcrumb list-unstyled */}
    </div>
    </center>
    {/* /.container */}
  </section>
  {/* /.page-header */}
</>

<div className="molo"> 

<div className="container cont1 "    



>
      <motion.div className="slider-container" 
      
      whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
      viewport={{ once: true }}
    
   initial={{ opacity: 0.6, translateX: -400, translateY: 0 }}
 
   transition={{ duration:0.3}}
      

      >
        <div id="slider">
          {slides1.map((slide, idx) => (
            <div key={idx} className="slide" style={{ display: idx === index1 ? "block" : "none" }}>
              <img src={slide} alt={`Slide ${idx}`} style={{height:"400px"}}/>
            </div>
          ))}

          <span className="controls" onClick={prevSlide1} id="left-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="controls" onClick={nextSlide1} id="right-arrow">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>

          
        </div>
      </motion.div>
      <motion.div className="description-container"
      
       whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
          viewport={{ once: true }}
        
       initial={{ opacity: 0.6, translateX: 400, translateY: 0 }}
     
       transition={{ duration:0.3}}
      
      >
        <div className="description">
          <p style={{fontWeight:800 , textDecoration:"underline" , fontSize:"28px", color:"#d7a222" ,marginTop:"40px"}}>Coffee</p>
          <p className="justify" style={{fontSize:"17px"}}>
          Coffee has a rich and fascinating history that spans centuries, making it more than just a simple beverage. 
For the coffee farmer, it represents a connection to their heritage and a livelihood that has been passed down through generations. Cultivating coffee plants requires knowledge, patience, and hard work. These farmers have dedicated their lives to nurturing the plants, carefully tending to them to ensure the best possible harvest. 
for  Kebegerew Coffee Enterprise. Our enterprise is involved in all aspects of coffee, from production to supplying premium coffee for both local and international markets.      </p>
        </div>
        <a href="#">
        <input className="grdeen-btn main-header__btn" style={{backgroundColor:"#d7a222" , width:"140px", marginTop:"20px"}} type="submit"  value="Read more"/>
        </a>
      </motion.div>
    </div>







    



    <div className="container  ">
      <motion.div className="description-container" style={{ paddingRight: "30px" }} 
       whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
       viewport={{ once: true }}
     
    initial={{ opacity: 0.6, translateX: -400, translateY: 0 }}
  
    transition={{ duration:0.3}}> 
        <div className="description">
          <p style={{fontWeight:800 , textDecoration:"underline" , fontSize:"28px", color:"#d7a222"}}>Oil and Seeds</p>
          <p className="justify" style={{ fontSize: "17px" }}>
          Explore our collection of agricultural and oilseed products, which we source from local farmers and producers to ensure the perimium and freshness. We are committed to promoting sustainable agriculture and supporting local communities. Farmers in the area provide unique oilseed and Bean products, which include sesame seed, soybean, mug bean, and kidney bean. At our company, we have a strict quality control mechanism in place to ensure that only the freshest and Premium products reach our customers. We collaborate closely with local farmers to develop tight standards for harvesting, handling, and storage, and we undertake frequent inspections to ensure that these requirements are met. This attention to detail guarantees that our consumers get only the highest quality products from our local suppliers.        </p>
        </div>
      </motion.div>




      <motion.div className="slider-container"
      
      
      whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
      viewport={{ once: true }}
    
   initial={{ opacity: 0.6, translateX: 400, translateY: 0 }}
 
   transition={{ duration:0.3}}
 
      >
        <div id="slider">
          {slides2.map((slide, idx) => (
            <div key={idx} className="slide" style={{ display: idx === index2 ? "block" : "none" }}>
              <img src={slide} alt={`Slide ${idx}`} style={{ height: "400px" }} />
            </div>
          ))}

          <span className="controls" onClick={prevSlide2} id="left-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="controls" onClick={nextSlide2} id="right-arrow">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>

          
        </div>
      </motion.div>
    </div>


    <div className="container cont1  ">
      <motion.div className="slider-container"
          whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
          viewport={{ once: true }}
        
       initial={{ opacity: 0.6, translateX: -400, translateY: 0 }}
     
       transition={{ duration:0.3}}
   
 

      >
        <div id="slider">
          {slides3.map((slide, idx) => (
            <div key={idx} className="slide" style={{ display: idx === index3 ? "block" : "none" }}>
              <img src={slide} alt={`Slide ${idx}`} style={{height:"400px"}}/>
            </div>
          ))}

          <span className="controls" onClick={prevSlide3} id="left-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="controls" onClick={nextSlide3} id="right-arrow">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>

        
        </div>
      </motion.div>
      <motion.div className="description-container"
      whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
      viewport={{ once: true }}
    
   initial={{ opacity: 0.6, translateX: 400, translateY: 0 }}
 
   transition={{ duration:0.3}}
      >
        <div className="description">
          <p style={{fontWeight:800,marginTop:"30px" , textDecoration:"underline" , fontSize:"28px", color:"#d7a222"}}>Spices and Herbal</p>
          <p className="justify" style={{fontSize:"17px"}}>
          Our traditional and international spices are manufactured using high-quality, carefully sourced components to offer the finest flavor and authenticity. Our spice and herbal items, which range from aromatic curry blends to one-of-a-kind herbal teas, are sure to offer a flavor boost to any cuisine. In addition to conventional containers and local and international food safety recognition, we employ organic products and intend to develop a zero-hand connection in the future.  Partner with us and see how quality and competence may benefit your African agro-trade ventures.          </p>
        </div>
      </motion.div>
    </div>


    <div className="container  ">
      <motion.div className="description-container" style={{ paddingRight: "30px" }}
         whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
         viewport={{ once: true }}
       
      initial={{ opacity: 0.6, translateX: -400, translateY: 0 }}
    
      transition={{ duration:0.3}}
      >
        <div className="description">
          <p style={{fontWeight:800 , textDecoration:"underline" , fontSize:"28px", color:"#d7a222"}}>Fruits</p>
          <p className="justify" style={{ fontSize: "15px" }}>
          <strong>Banana:</strong> The country's southwest and southeast are the main regions in Ethiopia where banana farming is practiced due to conducive growing conditions. Primitive Cavendish bananas are sourced from 900 hectares of owned farming area in the south Omo Zone by KEGEBEREW. With great care and superior systems, we nurture and produce. We adhere to international norms and specifications when packing.{"\n"}
    <br />
    <strong>Avocado:</strong> We produce avocados with the same care and attention to quality that we do with our bananas. We make sure that our avocados are packed in accordance with international standards and are harvested at their ripest. We are able to provide our consumers with an extensive range of avocados, each with a distinct flavor profile and variety (HASS, ETTINGER, FUERTE, NABAL) thanks to our partnerships with nearby growers. Ethiopia's height and great climate make it the ideal.{"\n"}
    <br />
    Both products are quality products and follow the standards of international requirements for packaging and harvesting. Our avocados are known for their rich and creamy texture, making them perfect for the market. With our strategic partnerships and attention to detail, we are proud to offer a diverse selection of avocados and other products that meet the highest standards of freshness and flavor.
            </p>
        </div>
      </motion.div>
      <motion.div className="slider-container"
       whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
       viewport={{ once: true }}
     
    initial={{ opacity: 0.6, translateX: 400, translateY: 0 }}
  
    transition={{ duration:0.3}}
      >
        <div id="slider">
          {slides4.map((slide, idx) => (
            <div key={idx} className="slide" style={{ display: idx === index4 ? "block" : "none" }}>
              <img src={slide} alt={`Slide ${idx}`} style={{ height: "400px" }} />
            </div>
          ))}

          <span className="controls" onClick={prevSlide4} id="left-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="controls" onClick={nextSlide4} id="right-arrow">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>

         
        </div>
      </motion.div>
    </div>
  

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />



    </div>




    <div className="mobol">

<div className="container cont1 "    



>
      <motion.div className="slider-container" 
      
      whileInView={{ opacity:1, translateX: 0, translateY: 0  }}
      viewport={{ once: true }}
    
   initial={{ opacity: 0.6, translateX: 0, translateY: 0 }}
 
   transition={{ duration:0.3}}
      

      >
        <div id="slider">
          {slides1.map((slide, idx) => (
            <div key={idx} className="slide" style={{ display: idx === index1 ? "block" : "none" }}>
              <img src={slide} alt={`Slide ${idx}`} style={{height:"400px"}}/>
            </div>
          ))}

          <span className="controls" onClick={prevSlide1} id="left-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="controls" onClick={nextSlide1} id="right-arrow">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>

          
        </div>
      </motion.div>
      <motion.div className="description-container"
      
      animate={{ opacity:1, translateX: 0, translateY: 0 }}
 
       
      initial={{ opacity: 0.6, translateX: 400, translateY: 0 }}
    
      transition={{ duration:0.9}}
         
      
      >
        <div className="description">
          <p style={{fontWeight:800 , textDecoration:"underline" , fontSize:"28px", color:"#d7a222" ,marginTop:"40px"}}>coffee</p>
          <p className="justify" style={{fontSize:"17px"}}>
          Coffee has a rich and fascinating history that spans centuries, making it more than just a simple beverage. 
For the coffee farmer, it represents a connection to their heritage and a livelihood that has been passed down through generations. Cultivating coffee plants requires knowledge, patience, and hard work. These farmers have dedicated their lives to nurturing the plants, carefully tending to them to ensure the best possible harvest. 
for  Kebegerew Coffee Enterprise. Our enterprise is involved in all aspects of coffee, from production to supplying high-quality coffee for both local and international markets.      </p>
        </div>
      </motion.div>
    </div>







    



    <div className="container  ">
      <motion.div className="description-container" style={{ paddingRight: "30px" }} 
          animate={{ opacity:1, translateX: 0, translateY: 0 }}
 
       
          initial={{ opacity: 0.6, translateX: -400, translateY: 0 }}
        
          transition={{ duration:0.9}}> 
        <div className="description">
          <p style={{fontWeight:800 , textDecoration:"underline" , fontSize:"28px", color:"#d7a222"}}>Oil and Seeds</p>
          <p className="justify" style={{ fontSize: "17px" }}>
          Explore our collection of agricultural and oilseed products, which we source from local farmers and producers to ensure the highest quality and freshness. We are committed to promoting sustainable agriculture and supporting local communities. Farmers in the area provide unique oilseed and Bean products, which include sesame seed, soybean, mug bean, and kidney bean. At our company, we have a strict quality control mechanism in place to ensure that only the freshest and highest-quality products reach our customers. We collaborate closely with local farmers to develop tight standards for harvesting, handling, and storage, and we undertake frequent inspections to ensure that these requirements are met. This attention to detail guarantees that our consumers get only the highest quality products from our local suppliers.        </p>
        </div>
      </motion.div>




      <motion.div className="slider-container"
      
      
      animate={{ opacity:1, translateX: 0, translateY: 0 }}
 
       
      initial={{ opacity: 0.6, translateX: 400, translateY: 0 }}
    
      transition={{ duration:0.9}}
      >
        <div id="slider">
          {slides2.map((slide, idx) => (
            <div key={idx} className="slide" style={{ display: idx === index2 ? "block" : "none" }}>
              <img src={slide} alt={`Slide ${idx}`} style={{ height: "400px" }} />
            </div>
          ))}

          <span className="controls" onClick={prevSlide2} id="left-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="controls" onClick={nextSlide2} id="right-arrow">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>

          
        </div>
      </motion.div>
    </div>


    <div className="container cont1  ">
      <motion.div className="slider-container"
            animate={{ opacity:1, translateX: 0, translateY: 0 }}
 
       
            initial={{ opacity: 0.6, translateX: -400, translateY: 0 }}
          
            transition={{ duration:0.9}}
   
 

      >
        <div id="slider">
          {slides3.map((slide, idx) => (
            <div key={idx} className="slide" style={{ display: idx === index3 ? "block" : "none" }}>
              <img src={slide} alt={`Slide ${idx}`} style={{height:"400px"}}/>
            </div>
          ))}

          <span className="controls" onClick={prevSlide3} id="left-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="controls" onClick={nextSlide3} id="right-arrow">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>

        
        </div>
      </motion.div>
      <motion.div className="description-container"
animate={{ opacity:1, translateX: 0, translateY: 0 }}
 
       
initial={{ opacity: 0.6, translateX: -400, translateY: 0 }}

transition={{ duration:0.9}}
      >
        <div className="description">
          <p style={{fontWeight:800,marginTop:"30px" , textDecoration:"underline" , fontSize:"28px", color:"#d7a222"}}>Spices and Herbal:</p>
          <p className="justify" style={{fontSize:"17px"}}>
          Our traditional and international spices are manufactured using high-quality, carefully sourced components to offer the finest flavor and authenticity. Our spice and herbal items, which range from aromatic curry blends to one-of-a-kind herbal teas, are sure to offer a flavor boost to any cuisine. In addition to conventional containers and local and international food safety recognition, we employ organic products and intend to develop a zero-hand connection in the future.  Partner with us and see how quality and competence may benefit your African agro-trade ventures.          </p>
        </div>
      </motion.div>
    </div>


    <div className="container  ">
      <motion.div className="description-container" style={{ paddingRight: "30px" }}
    animate={{ opacity:1, translateX: 0, translateY: 0 }}
 
       
    initial={{ opacity: 0.6, translateX: -400, translateY: 0 }}
  
    transition={{ duration:0.9}}
      >
        <div className="description">
          <p style={{fontWeight:800 , textDecoration:"underline" , fontSize:"28px", color:"#d7a222"}}>Fruits</p>
          <p className="justify" style={{ fontSize: "15px" }}>
          <strong>Banana:</strong> The country's southwest and southeast are the main regions in Ethiopia where banana farming is practiced due to conducive growing conditions. Primitive Cavendish bananas are sourced from 900 hectares of owned farming area in the south Omo Zone by KEGEBEREW. With great care and superior systems, we nurture and produce. We adhere to international norms and specifications when packing.{"\n"}
    <br />
    <strong>Avocado:</strong> We produce avocados with the same care and attention to quality that we do with our bananas. We make sure that our avocados are packed in accordance with international standards and are harvested at their ripest. We are able to provide our consumers with an extensive range of avocados, each with a distinct flavor profile and variety (HASS, ETTINGER, FUERTE, NABAL) thanks to our partnerships with nearby growers. Ethiopia's height and great climate make it the ideal.{"\n"}
    <br />
    Both products are quality products and follow the standards of international requirements for packaging and harvesting. Our avocados are known for their rich and creamy texture, making them perfect for the market. With our strategic partnerships and attention to detail, we are proud to offer a diverse selection of avocados and other products that meet the highest standards of freshness and flavor.
            </p>
        </div>
      </motion.div>
      <motion.div className="slider-container"
     animate={{ opacity:1, translateX: 0, translateY: 0 }}
 
       
     initial={{ opacity: 0.6, translateX: 400, translateY: 0 }}
   
     transition={{ duration:0.9}}
      >
        <div id="slider">
          {slides4.map((slide, idx) => (
            <div key={idx} className="slide" style={{ display: idx === index4 ? "block" : "none" }}>
              <img src={slide} alt={`Slide ${idx}`} style={{ height: "400px" }} />
            </div>
          ))}

          <span className="controls" onClick={prevSlide4} id="left-arrow">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="controls" onClick={nextSlide4} id="right-arrow">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>

         
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </motion.div>
    </div>
   </div>
  </div>


   
  
  );
}

export default Car