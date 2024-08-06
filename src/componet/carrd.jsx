import React from 'react';
import { TERipple } from 'tw-elements-react';
import Headd from './topCard2';
import bg from "./assets/picFi/card2.jpg"
import oil from"./assets/picFi/boloke.jpg"
import spo from"./assets/picFi/her.jpg"
import fr from"./assets/picFi/fru3.jpg"
import bgc from"./assets/picFi/title4.png"
import bgc1 from"./assets/picFi/title2.png"
import bgc2 from"./assets/picFi/title3.png"
import bgc3 from"./assets/picFi/title1.png"
export default function CardWithImageExample() {
  return (
    <div>

 
 {/* <img  src={bg} alt="" style={{ width: "100vw", height: "auto", objectFit: "cover" }} />  */}
  <div className="grid-container  cota3" style={{  padding:"130px 35px 0 10px" ,position:"relative" , paddingBottom:"90px"  ,margin:"30px 0"}}>
      <div style={{background:"#000",height:"100%",width:"100%",position:"absolute",opacity:0.7 }}></div>
    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"300px",marginBottom:"90px", position:"relative" , overflow:"visible",borderRadius:"15px"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent" ,borderRadius:"15px"}}>
          <img
          style={{height:"300px ", width:"450px", backgroundColor:"transparent" ,borderRadius:"15px"}}
          
            className="rounded-t-lg"
            src={bg}
            alt=""
          />
          <a href="#!">
            <div className="overlay"></div>
          </a>
         
        </div>
       
      </TERipple>
     
      </div>
      <img className='newone' src={bgc} alt="" style={{position:"absolute"  ,bottom:-120 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>

    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"300px",marginBottom:"90px", position:"relative" , overflow:"visible" ,borderRadius:"15px"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent" ,borderRadius:"15px"}}>
          <img
          style={{height:"300px ", width:"450px", backgroundColor:"transparent" ,borderRadius:"15px"}}
          
            className="rounded-t-lg"
            src={oil}
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




    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"300px",marginBottom:"90px", position:"relative" , overflow:"visible" ,borderRadius:"15px"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent",borderRadius:"15px"}}>
          <img
          style={{height:"300px ", width:"450px", backgroundColor:"transparent",borderRadius:"15px"}}
          
            className="rounded-t-lg"
            src={spo}
            alt=""
          />
          <a href="#!">
            <div className="overlay"></div>
          </a>
         
        </div>
       
      </TERipple>
     
      </div>
      <img className='newone' src={bgc2} alt="" style={{position:"absolute"  ,bottom:-120 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>

    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"300px",marginBottom:"90px", position:"relative" , overflow:"visible",borderRadius:"15px"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent",borderRadius:"15px"}}>
          <img
          style={{height:"300px ", width:"450px", backgroundColor:"transparent " ,borderRadius:"15px"}}
          
            className="rounded-t-lg"
            src={fr}
            alt=""
          />
          <a href="#!">
            <div className="overlay"></div>
          </a>
         
        </div>
       
      </TERipple>
     
      </div>
      <img className='newone' src={bgc3} alt="" style={{position:"absolute"  ,bottom:-120 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>
</div>


</div>

  );
}



