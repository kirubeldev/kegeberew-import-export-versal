import React from "react"
import HeroSection from "./componet/HeroSection"

import OurService from "./componet/OurService"
import Workproc from "./componet/workproc"
import Benefit from "./componet/benefit"
import CompletP from "./componet/completP"
import Fun from "./componet/fun"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardWithImageExamplee from "./componet/card2"

import Contact from "./componet/contact"
import BlogPost from "./componet/blogPost"
import Colaborate from "./componet/colaborate"
import Footer from "./componet/footer"
import Products from "./componet/products"
import Message from "./componet/message"
import About from "./componet/About"
import Home from "./componet/home"
import Introd from "./componet/introd"
import Car from "./componet/export"
// import CardWithImageExample from "./componet/carrd"
import CardWithImageExample from "./componet/carrd"
import Immport from "./componet/export"
import CardWithImageExampleee from "./componet/imp"
import Membersip from "./componet/membersip"
import Navv  from "./componet/nav"
function App() {


  return (
    <>
      <div>
      <div>
        <div className="custom-cursor__cursor" />
        <div className="custom-cursor__cursor-two" />

        <div className="page-wrapper">
          <div className="topbar-one topbar-one--one_only">
            
            {/* /.container-fluid */}
          </div>
          <Router>
          <Navv/>

 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Introd" element={<Introd />} />
        <Route path="/About" element={<About />} />
        <Route path="/OurService" element={<OurService />} />
        <Route path="/export" element={<Car />} />
        <Route path="/carrd" element={<CardWithImageExample/>} />
        <Route path="/card2" element={<CardWithImageExamplee/>} />
        <Route path="/imp" element={<CardWithImageExampleee/>} />
        <Route path="/import" element={<Immport/>} />
        <Route path="/membership" element={<Membersip/>} />
     
        <Route path="/Products" element={<Products />} />
        <Route path="/Message" element={<Message />} /> 
          <Route path="/Workproc" element={<Workproc />} />
        <Route path="/Benefit" element={<Benefit />} />
        <Route path="/CompletP" element={<CompletP />} />
        <Route path="/Fun" element={<Fun />} />
        <Route path="/BlogPost" element={<BlogPost />} />
        <Route path="/Colaborate" element={<Colaborate />} />
        <Route path="/contact" element={<Contact />} />
        
        
      </Routes>
 <Footer />
    </Router>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
