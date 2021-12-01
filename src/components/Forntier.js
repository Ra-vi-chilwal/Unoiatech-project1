import React from "react";
import Ellipse181 from "../images/Ellipse181.png";
import SECURING from "../images/SECURING.png";
import "./Forntier.css";
function Forntier(){
    return(
        <>
       <div className="Forntier">
     
       <div className="row F3F-row">
       <div className="col-2"></div>
       <div className="col-4 Forntier-F3F">
       <span className="N2N-span-2">TOKENOMICS</span>
       <div className="F3F-head pt-0">
          <p className="head-F3F">
          SECURING THE <br/> NEW FINANCIAL<br/> FRONTIER 
          </p>
        </div>
        <div>
            <p className="F3F_ptag">A high-value digital asset designed to secure the future <br/>-- $NRGY is a strong, liquid cryptocurrency token that <br/>fuels powerful new DeFi innovations.<br/>
            <br/>
             Fair market principals from the start, are used to <br/><span className="F3F_ptagp">promote deep liquidity of $NRGY to ensure capital input is proportional to the supply.</span></p>
        </div>
       </div>
       <div className="col-4">
       <div class="position-absolute end-0 group12">
   
   <img  className="" src={Ellipse181} alt=""/>
   
   </div>
<div className="sec-F3F">
    <img src={SECURING} alt=""/>
</div>

       </div>
       <div className="col-2">
       
       </div>

       </div>

       </div>
        </>
    )
}
export default Forntier;