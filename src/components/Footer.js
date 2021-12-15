import React from "react";
import "./Footer.css";
import { Image } from "react-bootstrap";
import logo from "../images/Logo.png";
import tVector from "../images/tVector.png";
import fVector from "../images/fVector.png";
import yVector from "../images/yVector.png";
import iVector from "../images/iVector.png";
import Vector93 from "../images/Vector93.png";
function Footer() {
  return (
    <>
     
      <div class=" d-flex flex-column h-50">
     
        

        <footer class="w-100 py-4 flex-shrink-0">
          <div class="container py-4">
            <div class="row gy-4 gx-5">
          
              <div class="col-lg-4 col-md-4 pl-5">
              
                <div className="position-absolute start-0">
              <img id="" src={Vector93} alt=""/>
              </div>
                <form action="#">
                <img id="N5N-logo" src={logo} alt=""/>
                </form>
                <p class="mb-2 mt-3 F2F_ptag">
             find us:
                </p>
                <div className="n4n-para">
                 <img id="img-ico" src={fVector} alt=""/>

                 <img id="img-ico" src={iVector} alt=""/>
                 <img id="img-ico" src={tVector} alt=""/>
                 <img id="img-ico" src={yVector} alt=""/>

                  
                
                </div>
              </div>
              
              <div class="col-lg-2 col-md-4" id="footer-img">
              

              <div class="col-lg-2 col-md-4 pl-5" id="footer-img">
          
          <h5 class="text-white mb-3">LEARN</h5>
         <ul class="list-unstyled text-muted F2F_menu">
           <li>
             <a href="_blank " className="F2F_menu pt-0">LEARN</a>
           </li>
           <li>
             <a href="_blank" className="F2F_menu pt-0">LEARN</a>
           </li>
           <li>
             <a href="_blank" className="F2F_menu pt-0">LEARN</a>
           </li>
           <li>
             <a href="_blank" className="F2F_menu pt-0">LEARN</a>
           </li>
           <li>
             <a href="_blank" className="F2F_menu pt-0">LEARN</a>
           </li>
         </ul>
     
       </div>
              </div>
      
              
              <div class="col-lg-2 col-md-4 pl-5" id="footer-img">
          
                 <h5 class="text-white mb-3">Discover</h5>
                <ul class="list-unstyled text-muted F2F_menu">
                  <li>
                    <a href="_blank " className="F2F_menu pt-0">Discover</a>
                  </li>
                  <li>
                    <a href="_blank" className="F2F_menu pt-0">Discover</a>
                  </li>
                  <li>
                    <a href="_blank" className="F2F_menu pt-0">Discover</a>
                  </li>
                  <li>
                    <a href="_blank" className="F2F_menu pt-0">Discover</a>
                  </li>
                  <li>
                    <a href="_blank" className="F2F_menu pt-0">Discover</a>
                  </li>
                </ul>
            
              </div>
              <div class="col-lg-2 col-md-4 pl-5" id="footer-img">
          
          <h5 class="text-white mb-3">DAPPS</h5>
         <ul class="list-unstyled text-muted F2F_menu">
           <li>
             <a href="_blank " className="F2F_menu pt-0">DAPPS</a>
           </li>
           <li>
             <a href="_blank" className="F2F_menu pt-0">DAPPS</a>
           </li>
           <li>
             <a href="_blank" className="F2F_menu pt-0">DAPPS</a>
           </li>
          
         </ul>
     
       </div>
              <div class="col-lg-2 col-md-2 pl-5" id="footer-img">
              <h5 class="text-white mb-3 ">New to DeFi</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="_blank" className="F2F_menu pt-0">New to DeFi</a>
                  </li>
                  <li>
                    <a href="_blank" className="F2F_menu pt-0">New to DeFi</a>
                  </li>
                  
                  <li>
                    <a href="_blank" className="F2F_menu pt-0">New to DeFi
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div class="col-lg-2 col-md-4 F2F_menu">
              
              </div>
             
              <div className="h-divider">


                </div>

            </div>
            <div className="row pt-2">
            <div className="col-6">
                 <p className="F2F_menu2">2021 - Starstake™. All rights reserved</p>
            </div>
            <div className="col-6">
            <p className="F2F_menu2">Terms & Conditions
Privacy Policy</p>
            </div>

            </div>
          </div>
                
        </footer>
      </div>
    </>
  );
}
export default Footer;
