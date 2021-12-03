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
        <div className="row enter-1">
         
          <div className="col-xs-6 col-4">
            <img className="welcome-img-1" src={welcome} alt=""/>
          </div>
       
          <div className="col-xs-6 col-4 N2N-item">
            <div>
     
              <span className="N2N-span">WELCOME TO NRGY</span>
            </div>
            <span className="pt-5 N1N-h1">
              {" "}
              A BETTER <br /> FINANCIAL SYSTEM FOR <br />
              EVERYONE
            </span>
       
            <p className="N2N-NRGY pt-5">
              NRGY is the future of decentralized finance, a one-of-a-kind
              distributed business building platform that enables the creation
              of decentralized apps (DApps). NRGY leverages the power of its
              financial technologies with an incentivized network community.
            </p>
            <div className="pt-4">
            <button class="btn  btn-get-nrgy" type="submit">
              <img src={vector} alt="" />
              <span className="N2N-font">GET NRGY</span>
            </button>
            <button
              class="btn btn-outline-light success btn-learn"
              type="submit"
            >
              <span className="N2N-font">LERN MORE</span>
            </button>
            </div>
            <div class="position-absolute end-0">
   
   <img  className="" src={Ellipse8} alt=""/>
   
   </div>
          <div class="position-absolute end-0">
   
   <img  class="" src={Ellipse174} alt=""/>
   
   </div> 
  

            {/* <h1 className="bg-light justify-content-end">hi</h1> */}
          </div>
{/*        
          {/* <div className="col-2">
        
          </div> */}
        </div>
       <div className="pt-5 section2">
         <div className="container">
  <div className="card card-W2W">
<div className="row">
  <div className='col-4 st-colm '>
        
        <span className="N2N-1st pt-5">1st</span>
        <br/>
                <div>
                  <p className="pt-4 text-light N2N-p">
                    NRGY is the very first DeFi project to introduce the Infinity
                    NFT™ royalty payment technology for licensors of intellectual
                    property.
                  </p>
                </div>
        </div>
       
              <div className="col-2 st-colm-1">
                <img className="respo-W2W" src={airo} alt=""/>
            
                <div className="pt-2 text-light text-center create-with-1">
                  <span className="resp-span-W2W">
                    Share in the new <br />
                    digital economy
                  </span>
                </div>
              </div>
              <div className="col-2 st-colm-2">
                <img  className="respo-W2W"  src={airo2}  alt=""/>
          
                <div className="pt-2 text-center text-light create-with-1">
                  <span className="resp-span-W2W">
                    Share in the new <br />
                    digital economy
                  </span>
                </div>
              </div>
          
              <div className="col-2 st-colm-3">
              <div class="position-absolute end-0 top-0">
     
     <img  class="img-182_N2N" src={Ellipse182} alt=""/>
     </div>
     <div className="last-img">
    <div className="inner-img">             
     <img  className="respo-W2W" src={airo3} alt="" /></div>
                <div className="pt-2  text-center text-light create-with">
                  <span className=" pb-5 resp-span-W2W">
                    Create with better <br />
                    technology and <br />
                    distribution
                    
                  </span>
                  </div>
                  </div>
  
                
               
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
