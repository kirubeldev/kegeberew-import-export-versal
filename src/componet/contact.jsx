import React from 'react';

const Contact = () => {
  
  return (
   
<>























<>
  
  {/* /.main-header */}
  <section className="page-header">
    <div className="page-header__bg page-header__bgcontact" />
 
    <div className="page-header__overlay" />
    {/* /.page-header__bg */}
    <center>  
    <div className="container">
      <h2 className="page-header__title">Contact</h2>
      <ul className="grdeen-breadcrumb list-unstyled">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
      
      {/* /.thm-breadcrumb list-unstyled */}
    </div>
    </center>
    {/* /.container */}
  </section>
  {/* /.page-header */}
</>











<center> 






<div className="contact-container" style={{maxWidth:"100%" , overflow:"hidden", marginTop:"50px"}}>
  <div className="contact-info">
    <h5>Get in touch</h5>
    <div className="contact-detail"> <i className="bi bi-phone" style={{ color: "#d7a222" }}>  </i> +251911215830
    </div><br />
    <div className="contact-detail"> <i className="bi bi-geo-alt-fill" style={{ color: "#d7a222" }}></i> Sengatera Negadwoch Hibret BLDG, 5th Floor.</div>
    <br /> <div className="contact-detail"> <i className="bi bi-envelope" style={{ color: "#d7a222" }}></i>  export_bruk@purposeblack.et
    </div>
    <div className="col-lg-3 col-md-6">
          
          <ul>
              
                
                <br />
                <div className="col-lg-3 col-md-6">
          
          <ul>
                
              
                
             
                <li>
              
                
                  <br /><div style={{display:"flex"}} className='contac'>
                  
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
                
              </ul>
              
          </div>
  </div>

  <div className="message-form">
    <h1>Send Us a Message</h1>
    <h4>First Name *</h4>
    <input
      type="text"
      style={{ width: "100%", maxWidth: "700px", height: "50px", backgroundColor: "#f7f7f7", border: "1px solid #c4c4c4" }}
      required  // Make the input required
      autoComplete='false'
    />

    <h4>Last Name</h4>
    <input
      type="text"
      style={{ width: "100%", maxWidth: "700px", height: "50px", backgroundColor: "#f7f7f7", border: "1px solid #c4c4c4" }}
    />

    <h4>Email *</h4>
    <input
      type="email"  // Use type="email" for email validation
      style={{ width: "100%", maxWidth: "700px", height: "50px", backgroundColor: "#f7f7f7", border: "1px solid #c4c4c4" }}
      required  // Make the input required
    />

    <h4>Company Name</h4>
    <input
      type="text"
      style={{ width: "100%", maxWidth: "700px", height: "50px", backgroundColor: "#f7f7f7", border: "1px solid #c4c4c4" }}
    />

    <h4>Phone</h4>
    <input
      type="text"
      style={{ width: "100%", maxWidth: "700px", height: "50px", backgroundColor: "#f7f7f7", border: "1px solid #c4c4c4" }}
    />

    <h4>Message</h4>
    <textarea
      id=""
      name=""
      rows="9"
      cols="90"
      style={{ width: "100%", maxWidth: "700px", height: "200px", backgroundColor: "#f7f7f7", border: "1px solid #c4c4c4" }}
    ></textarea>
    <br />
    
    
    
            <input className="grdeen-btn main-header__btn" style={{backgroundColor:"#d7a222" , width:"15%", marginTop:"20px"}} type="submit"  value="send"/>
  </div>



  
  
</div>
</center>
<center>   

<div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', height: '100vh', marginBottom: '100px', width:"90%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63048.651628899745!2d38.70650031494645!3d9.014337681145985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85af85c2c629%3A0x41b0831f5ff82fc8!2sPURPOSE%20BLACK%20ETHIOPIA%20OFFICE!5e0!3m2!1sen!2set!4v1711918647567!5m2!1sen!2set"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
 </center>

</>


  )



   
}

export default Contact;
