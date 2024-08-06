import React from 'react';
import { TERipple } from 'tw-elements-react';
import Headd from './topCard2';

// import ma1 from "./assets/picFi/ma1"
import ma2 from "./assets/picFi/ma2.jpg"
import ma1 from "./assets/picFi/ma1.jpg"
import ma3 from "./assets/picFi/ma3.jpg"
import ma4 from "./assets/picFi/ma4.jpg"
import bgc from "./assets/picFi/title8.png"
import bgc4 from "./assets/picFi/title10.png"


import bgc1 from "./assets/picFi/title5.png"
import bgc2 from "./assets/picFi/title7.png"

export default function CardWithImageExampleee() {
  return (<div >
   < Headd/>
   
    <div className="grid-container cota2" style={{  padding:"130px 35px 0 10px" ,position:"relative" }}>
      <div style={{background:"#000",height:"100%",width:"100%",position:"absolute",opacity:0.7 ,borderRadius:"15px"}}></div>
      <div className="card cardd cofe" style={{ maxWidth: "450px", height: "300px",borderRadius:"15px", marginBottom: "90px", position: "relative", overflow: "visible", boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.9)" }}>
  <div className=''>
    <TERipple>
      <div className="image-container" style={{ backgroundColor: "transparent" ,borderRadius:"15px"}}>
        <img
          style={{ height: "300px", width: "450px", backgroundColor: "transparent" ,borderRadius:"15px"}}
          className="rounded-t-lg"
          src={ma1}
          alt=""
        />
        <a href="#!">
          <div className="overlay"></div>
        </a>
      </div>
    </TERipple>
  </div>
  <img className='newone' src={bgc} alt="" style={{ position: "absolute", bottom: -120, margin: "30px 0" }} />
  {/* <p style={{ position: "absolute", bottom: "-10px ", zIndex: 101, fontSize: "20px", left: "43%" }}> Coffee</p> */}
</div>



    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"300px",marginBottom:"90px", position:"relative" , overflow:"visible" ,borderRadius:"15px"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent" ,borderRadius:"15px"}}>
          <img
          style={{height:"300px ", width:"450px", backgroundColor:"transparent" ,borderRadius:"15px"}}
          
            className="rounded-t-lg"
            src={ma2}
            alt=""
          />
          <a href="#!">
            <div className="overlay"></div>
          </a>
         
        </div>
       
      </TERipple>
     
      </div>
      <img className='newone' src={bgc1} alt="" style={{position:"absolute"  ,bottom:-120 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>



    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"300px",marginBottom:"90px", position:"relative" , overflow:"visible",borderRadius:"15px"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent",borderRadius:"15px"}}>
          <img
          style={{height:"300px ", width:"450px", backgroundColor:"transparent",borderRadius:"15px"}}
          
            className="rounded-t-lg"
            src={ma3}
            alt=""
          />
          <a href="#!">
            <div className="overlay"></div>
          </a>
         
        </div>
       
      </TERipple>
     
      </div>
      <img className='newone' src={bgc2} alt="" style={{position:"absolute"  ,bottom:-130 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>
    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"300px",marginBottom:"10px", position:"relative" , overflow:"visible" ,borderRadius:"15px"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent"}}>
          <img
          style={{height:"300px ", width:"450px", backgroundColor:"transparent" ,borderRadius:"15px"}}
          
            className="rounded-t-lg"
            src={ma4}
            alt=""
          />
          <a href="#!">
            <div className="overlay"></div>
          </a>
         
        </div>
       
      </TERipple>
     
      </div>
      <img className='newone' src={bgc4} alt="" style={{position:"absolute"  ,bottom:-130 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
</div>
</div>
  );
}
