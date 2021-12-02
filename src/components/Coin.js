import React from "react";
import "./Coin.css";
 
import coin12 from "../images/coin12.png";
import Group6173 from "../images/Group6173.png";
import image2 from "../images/image2.png";
import Vector492 from "../images/Vector492.png";
function Coin(){
    return(
        <>
        <div className="Coin">
        <div className="row">
        <div className="col-1">
     
        </div>
        <div className="col-4">
         <img className="coin12-p" src={coin12} alt=""/>
        </div>

        <div className="col-1">
     
        </div>
       
        <div className="col-4">
       
<p className="coin-org">$NRGY ON ETHEREUM</p>
<p className="coin-head">A COIN BUILT TO RULE</p>

<p className="NRGY_C2C"><span className="F3F_ptagp">$NRGY on Ethereum</span> is an investment coin designed to<br/>
 function inside its own ecosystem, providing functional<br/>
 liquidity and attractive rewards to stakeholders.</p>
 <div className="coin_p_C2C row">
 {/* <div className="col-2"><img src={Group6173} alt=""/></div><div className="col-10"><span className="F3F_ptagp">$NRGY</span> is a strong liquid currency that fuels independent developers</div> */}
 </div>
 <br/>
 <div className="coin_p_C2C row">
 <div className="col-2 Coin_343"><img src={Group6173} alt=""/></div><div className="col-10"><span className="F3F_ptagp">$NRGY's</span> high APY potential is attractive to investors and developers due to its limited supply and robust reward system.</div>
 </div>
 <p className="pt-5 see-on text-align-start">See On</p>
 <div className="coin_p_C2C coin-img-2 row">
  <div className=" col-2 text-align-center"><img className=" img-gol"  src={image2} alt=""/></div><div className=" img-gol col-10 pt-2">https://v2.info.uniswap.org/pair/0x51bf9908dac4a283<br/>d017edc071d954ec3a4b1376 </div> 
 </div>
        </div>
        <div className="col-2">
       
        </div>
        </div>

        </div>
        </>
    )
}
export default Coin;