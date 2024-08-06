




  import React from 'react';
import { TERipple } from 'tw-elements-react';
import Headd from './topCard2';

// import ma1 from "./assets/picFi/ma1"
import ma2 from "./assets/picFi/ma2.jpg"
import ma1 from "./assets/picFi/ma1.jpg"
import ma3 from "./assets/picFi/ma3.jpg"
import ma4 from "./assets/picFi/ma4.jpg"
import bgc from "./assets/picFi/bgc.png"

export default function CardWithImageExampleee() {
  return (<div>
        <section className="page-header">
    <div className="page-header__bg page-header__bgimport" />
   
    <div className="page-header__overlay" />
    {/* /.page-header__bg */}
    <center>  
    <div className="container">
      <h2 className="page-header__title"> Import  </h2>
      <ul className="grdeen-breadcrumb list-unstyled">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <span>Import</span>
        </li>
      </ul>
      
      {/* /.thm-breadcrumb list-unstyled */}
    </div>
    </center>
    {/* /.container */}
  </section>
   < Headd/>
   
    <div className="grid-container cota2" style={{  padding:"130px 35px 0 0px" }}>
    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"400px",marginBottom:"90px", position:"relative" , overflow:"visible"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent"}}>
          <img
          style={{height:"400px ", width:"450px", backgroundColor:"transparent"}}
          
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
      <img className='newone' src={bgc} alt="" style={{position:"absolute"  ,bottom:-130 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>


    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"400px",marginBottom:"90px", position:"relative" , overflow:"visible"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent"}}>
          <img
          style={{height:"400px ", width:"450px", backgroundColor:"transparent"}}
          
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
      <img className='newone' src={bgc} alt="" style={{position:"absolute"  ,bottom:-130 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>



    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"400px",marginBottom:"90px", position:"relative" , overflow:"visible"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent"}}>
          <img
          style={{height:"400px ", width:"450px", backgroundColor:"transparent"}}
          
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
      <img className='newone' src={bgc} alt="" style={{position:"absolute"  ,bottom:-130 ,margin:"30px 0"}} />
      {/* <p style={{position:"absolute" , bottom:"-10px " ,zIndex:101, fontSize:"20px" , left:"43%"}}> Coffee</p> */}
    </div>
    <div className="card cardd cofe" style={{maxWidth:"450px" , height:"400px",marginBottom:"10px", position:"relative" , overflow:"visible"}} >
     <div className=''>
      <TERipple>
        <div className="image-container" style={{backgroundColor:"transparent"}}>
          <img
          style={{height:"400px ", width:"450px", backgroundColor:"transparent"}}
          
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
      <img className='newone' src={bgc} alt="" style={{position:"absolute"  ,bottom:-130 ,margin:"30px 0"}} />
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
