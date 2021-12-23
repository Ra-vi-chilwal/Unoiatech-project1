import React from "react";
import "./Footer.css";
import { Image } from "react-bootstrap";
import logo from "../images/Logo.png";
import tVector from "../images/tVector.png";
import fVector from "../images/fVector.png";
import yVector from "../images/yVector.png";
import iVector from "../images/iVector.png";
import Vector93 from "../images/Vector93.png";
import Vector4977 from "../images/Vector4977.png";
function Footer() {
  return (
    <>
      <div className="last">
        <div className="container">
          <img
            className="position-absolute start-0 ft-0p"
            src={Vector93}
            alt=""
          />
          <div className="row foor-to">
            <div className="col-xl-4 col-12 logo-items12">
              <div className="h">
                <img className="img-po" src={logo} alt />

                <div className="pt-5 text-light">
                  <h6 className="">Find Us:</h6>
                </div>
                <div className=" pt-3">
                  <img id="" src={fVector} alt="" />

                  <img id="img-ico-1" src={iVector} alt="" />
                  <img id="img-ico" src={tVector} alt="" />
                  <img id="img-ico" src={yVector} alt="" />
                </div>
                
                {/* <p className="F2F_menu2 last2021">
                2021 - Starstake™. All rights reserved
              </p> */}
              </div>
            </div>

            <div className="col-xl-8 col-12">
              <div className="row">
                <div className="col ">
                  <h6 class="text-white mb-3 for-mhi">LEARN</h6>
                  <ul class="list-unstyled text-muted F2F_menu">
                    <li>
                      <a href="_blank " className="F2F_menu  pt-0">
                        LEARN
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className="F2F_menu  pt-0">
                        LEARN
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className="F2F_menu pt-0">
                        LEARN
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className="F2F_menu pt-0">
                        LEARN
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className="F2F_menu pt-0">
                        LEARN
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className="F2F_menu pt-0">
                        LEARN
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className="F2F_menu pt-0">
                        LEARN
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h6 class="text-white mb-3 for-mhi">DISCOVER</h6>
                  <ul class="list-unstyled text-muted F2F_menu">
                    <li>
                      <a href="_blank" className=" menu90 pt-0">
                        Discover
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className=" menu90 pt-0">
                        Discover
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className=" menu90 pt-0">
                        Discover
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className=" menu90 pt-0">
                        Discover
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h6 class="text-white mb-3 for-mhi">DAPPS</h6>
                  <ul class="list-unstyled text-muted F2F_menu">
                    <li>
                      <a href="_blank " className="F2F_menu pt-0">
                        DAPPS
                      </a>
                    </li>

                    <li>
                      <a href="_blank" className="F2F_menu pt-0">
                        DAPPS
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className="F2F_menu pt-0">
                        DAPPS
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h6 class="text-white mb-3 for-mhi">DASHBORD</h6>
                  <ul class="list-unstyled text-muted F2F_menu">
                    <li>
                      <a href="_blank " className=" pt-0">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="_blank" className=" pt-0">
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h6 class="text-white mb-3 for-mhi">New to DeFi</h6>
                  <ul class="list-unstyled text-muted F2F_menu">
                    <li>
                      <a href="_blank " className="pt-0">
                        New to DeFi
                      </a>
                    </li>
                  </ul>
                </div>
             
              </div>
              {/* <p className=" m-fluxs text-center">
                Terms & Conditions Privacy Policy
              </p> */}
            </div>
          
          </div>
          <div className="containe">
          <div className="h-divider"></div>
          <div className="d-flex h-head">
            <div className="">
            <p className="text-light term">
                Terms & Conditions Privacy Policy
              </p> 
            </div>
            <div className="text-light">
            <p className="term">
                Terms & Conditions Privacy Policy
              </p>  
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
