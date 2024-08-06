import React from 'react'
import vis from"./assets/picFi/vis.jpg"
import mis from"./assets/picFi/mis.jpg"
import goa from"./assets/picFi/goa.jpg"
import pb from "./assets/picFi/pb.png"

const vision = () => {
  return (
 
   
   <>
  {/* Service 4 - Bootstrap Brain Component */}
 <>
 <ul class="cards" style={{marginTop:"-20px"}}>
 
 <li className='vis1'>
    <a href="" class="card" style={{height:"476px" }}>
      <img src={vis} class="card__image" alt="" style={{height:"200px"}} />
      <div class="card__overlay">
        <div class="card__header" style={{ backgroundColor:"#212529" }}>
                     
       
          <div class="card__header-text"  style={{height:"220px"}}>
            <h3 class="card__title" style={{fontSize:"17.6px" , color:"white"}}>Our Vision</h3>
            <span class="card__description " style={{color:"#d7a222",height:"400px" , fontSize:"17.6px" }}>Our vision is to showcase the quality and diversity of Ethiopian agricultural products to the world while also supporting local farmers and communities. </span>            
          
          </div>
        </div>
    
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card" style={{height:"476px"}}>
      <img src={mis} class="card__image" alt="" style={{height:"200px"}} />
      <div class="card__overlay">
        <div class="card__header" style={{ backgroundColor:"#212529"}}>
                       
       
          <div class="card__header-text" style={{height:"220px"}}>
            <h3 class="card__title" style={{ fontSize:"17.6px" ,color:"white"}}>Our Mission</h3>
            <span class="card__description " style={{color:"#d7a222",height:"400px" , fontSize:"17.6px" ,maxWidth:"1700px", textDecoration: "none"}} >Our mission is to promote sustainable farming practices and ethical sourcing, ensuring that our agricultural product selections benefit both the environment and the people involved in the production process. </span>            
          
          </div>
        </div>
    
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card" style={{height:"476px"}}>
      <img src={goa} class="card__image" alt="" style={{height:"200px"}} />
      <div class="card__overlay">
        <div class="card__header" style={{ backgroundColor:"#212529" , paddingtop:"-70px"}}>
                       
        
          <div class="card__header-text" style={{height:"220px" , margintop:"-10px"}}>
            <h3 class="card__title" style={{fontSize:"17.6px" ,color:"white"}} >Our Goal</h3>
            <span class="card__description "  style={{color:"#d7a222",height:"400px" , fontSize:"17.6px" ,maxWidth:"1700px"}}>Our ultimate goal is to become a trusted partner for businesses seeking high-quality Ethiopian agricultural products and to make a positive impact on the industry as a whole.  </span>            
          
          </div>
        </div>
    
      </div>
    </a>
  </li>  
</ul></>


</>

  )
}

export default vision