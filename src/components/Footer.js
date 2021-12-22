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
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 pt-5 re-end">
              <img
                className="position-absolute start-0 ft-0p"
                src={Vector93}
                alt=""
              />
              <img id="N5N-logo" src={logo} alt="" />
              <div className="pt-5 text-light text-center">
               
              <h6 className="findus">Find Us:</h6>
              </div>

              <div className="n4n-para pt-3">
                <img id="img-ico" src={fVector} alt="" />

                <img id="img-ico" src={iVector} alt="" />
                <img id="img-ico" src={tVector} alt="" />
                <img id="img-ico" src={yVector} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-4 pt-5 foot-ls">
              <h6 class="text-white mb-3">LEARN</h6>
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
            <div className="col-lg-2 col-md-4 col-4 pt-5 foot-ls-1">
              <h6 class="text-white mb-3">DISCOVER</h6>
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
            <div className="col-lg-1 col-4 pt-5 foot-09">
              <h6 class="text-white mb-3">DAPPS</h6>
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
            <div className="col-lg-1 col-mg-4 col-4 pt-5 foot-ls-2">
              <h6 class="text-white mb-3">DASHBORD</h6>
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
            <div className="col-lg-2 col-4  fs-last5">
            
              <img
                className="position-absolute end-0 vt-0 "
                src={Vector4977}
                alt=""
              />
              <h6 class="text-white mb-3 for-mhi">New to DeFi</h6>
              <ul class="list-unstyled text-muted F2F_menu">
                <li>
                  <a href="_blank " className="pt-0">
                    New to DeFi
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-4 F2F_menu"></div>

            <div className="h-divider"></div>
          </div>
          <div className="row pt-2">
            <div className="col-lg-6 col-12 ">
              <p className="F2F_menu2 last2021">
                2021 - Starstake™. All rights reserved
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <p className="F2F_menu2 text-center">
                Terms & Conditions Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
