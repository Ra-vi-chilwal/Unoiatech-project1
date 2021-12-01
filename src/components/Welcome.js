import React from "react";
import welcome from "../images/welocme.png";
import vector from "../images/Vector3.png";
import airo from "../images/airo1.png";
import airo2 from "../images/airo2.png";
import airo3 from "../images/airo3.png";
import Ellipse174 from "../images/Ellipse174.png";
import Ellipse181 from "../images/Ellipse181.png";
import Ellipse182 from "../images/Ellipse182.png";
import Ellipse8 from "../images/Ellipse8.png";

import "./Welcome.css";
function Welcome() {
  return (
    <>
      <section className="section-welcome">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <img src={welcome} alt=""/>
          </div>
          <div class="position-absolute end-0">
   
   <img  className="N2N-img-8" src={Ellipse8} alt=""/>
   
   </div>
          <div className="col-4 N2N-item">
            <div>
     
              <span className="N2N-span">WELCOME TO NRGY</span>
            </div>
            <span className="N1N-h1">
              {" "}
              A BETTER <br /> FINANCIAL SYSTEM FOR <br />
              EVERYONE
            </span>
       
            <p className="N2N-NRGY">
              NRGY is the future of decentralized finance, a one-of-a-kind
              distributed business building platform that enables the creation
              of decentralized apps (DApps). NRGY leverages the power of its
              financial technologies with an incentivized network community.
            </p>
            <button class="btn btn-success btn-get-nrgy" type="submit">
              <img src={vector} alt="" />
              <span className="N2N-font">GET NRGY</span>
            </button>
            <button
              class="btn btn-outline-light success btn-learn"
              type="submit"
            >
              <span className="N2N-font">LERN MORE</span>
            </button>
        
          <div class="position-absolute">
   
   <img  class="N2N-img-174" src={Ellipse174} alt=""/>
   
   </div> 
  

            {/* <h1 className="bg-light justify-content-end">hi</h1> */}
          </div>
{/*        
          {/* <div className="col-2">
        
          </div> */}
        </div>
        
        <div className="card card-W2W">
        <div className="row">
        <div class="position-absolute">
   
            <img  class="r-N2N" src={Ellipse181} alt=""/>
            </div>
        {/* <div className="col-1"></div> */}
      <div className='col-3 st-colm '>
        
      <span className="N2N-1st pt-5">1st</span>
      <br/>
              <div>
                <p className="text-light text-center N2N-p">
                  NRGY is the very first DeFi project to introduce the Infinity
                  NFT™ royalty payment technology for licensors of intellectual
                  property.
                </p>
              </div>
      </div>
      <div className="col-1"></div>
            <div className="col-2 st-colm-1">
              <img src={airo} alt=""/>
          
              <div className="pt-2 text-light text-center">
                <span>
                  Share in the new <br />
                  digital economy
                </span>
              </div>
            </div>
            <div className="col-2 st-colm-2">
              <img src={airo2}  alt=""/>
        
              <div className="pt-2 text-center text-light">
                <span>
                  Share in the new <br />
                  digital economy
                </span>
              </div>
            </div>
        
            <div className="col-2 st-colm-3">
            <div class="position-absolute end-0 top-0">
   
   <img  class="img-182_N2N" src={Ellipse182} alt=""/>
   </div>
  <div className="inner-img">             
   <img src={airo3} alt="" />
              <div className="pt-2 text-center text-light create-with">
                <span>
                  Create with better <br />
                  technology and <br />
                  distribution
                  
                </span>
                </div>

              </div>
             
            </div>

        </div>

        </div>
       
        {/* </div> */}
       
      </section>
    </>
  );
}
export default Welcome;
