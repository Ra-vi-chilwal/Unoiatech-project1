import React from "react";
import "./Staking.css";
import STAYOU from "../images/STAYOU.png";
import Vector495 from "../images/Vector495.png";
import Ellipse176 from "../images/Ellipse176.png";
import Ellips176 from "../images/Ellips176.png";
import Ellipse177 from "../images/Ellipse177.png";
function Staking(){
    return(
    <>
    <div className="staking">

    <div className="row enter-1">
          <div className="col-xs-6 col-sm-6 col-md-6 stayyou">
            <img className="welcome-img-2 staytoy" src={STAYOU} alt="" />
          </div>
        
          <div className="col-xs-6 col-sm-6 col-md-6 N2N-item">
          <div class="position-absolute end-0">
              <img className="img-bgg" src={Vector495} alt="" />
            </div>
            <div class="position-absolute end-0">
        <img class="img-fluid img-176_S2S" src={Ellips176} alt="" />
      </div>
      
            <div className="pt-5">
              <span className="N2N-span">STAKING NRGY</span>
            </div>
            <div className="pt-2 Designed">
            <span className="pt-2 N1N-h1">
             
              STAKING<br/> DESIGNED TO<br/> INCENTIVIZE<br/> YOU
            </span>
            </div>
            <p className="N2N-NRGY pt-5">
            Staking NRGY provides lucrative rewards for Market<br/> Maker Stakers who lock up $NRGY coins
             to provide<br/> economic security for the NRGY DeFi financial<br/> ecosystem. Unlike other DeFi projects,
             NRGY staking<br/> incorporates several new income opportunities for<br/> investors.
            </p>
            <div class="position-absolute end-0">
        <img class="img-fluid ellipse177-S2S" src={Ellipse177} alt="" />
      </div>
            

          
          </div>
          
        </div>
        

    </div>
    </>
    )
}
export default Staking;