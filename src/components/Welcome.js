import React from "react";
import welcome from "../images/welocme.png";
import vector from "../images/Vector3.png";
import airo from "../images/airo1.png";
import airo2 from "../images/airo2.png";
import airo3 from "../images/airo3.png";
import "./Welcome.css";
function Welcome() {
  return (
    <>
      <section className="section-welcome">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <img src={welcome} />
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
              <img src={vector} />
              <span className="N2N-font">GET NRGY</span>
            </button>
            <button
              class="btn btn-outline-light success btn-learn"
              type="submit"
            >
              <span className="N2N-font">LERN MORE</span>
            </button>
          </div>
          <div></div>
          <div className="col-2"></div>
        </div>
        
        <div className="row">
          <div className="col-2"></div>
          {/* <div> */}
         
            <div className="col-2">
              <span className="N2N-1st">1st</span>
              <div>
                <p className="text-light">
                  NRGY is the very first DeFi project to introduce the Infinity
                  NFT™ royalty payment technology for licensors of intellectual
                  property.
                </p>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-2">
              <img src={airo} />
              <div className="pt-2 text-light">
                <span>
                  Share in the new <br />
                  digital economy
                </span>
              </div>
            </div>
            <div className="col-2">
              <img src={airo2} />
              <div className="pt-2 text-light">
                <span>
                  Share in the new <br />
                  digital economy
                </span>
              </div>
            </div>
            <div className="col-2">
              <img src={airo3} />
              <div className="pt-2 text-light">
                <span>
                  Create with better <br />
                  technology and <br />
                  distribution
                </span>
              </div>
              
            </div>
            </div>
       
        {/* </div> */}
       
      </section>
    </>
  );
}
export default Welcome;
