import React from "react";
import "./Coin.css";

import coin12 from "../images/coin12.png";
import Group6173 from "../images/Group6173.png";
import image2 from "../images/image2.png";
import Vector492 from "../images/Vector492.png";
import Group6174 from "../images/Group6174.png";
import Group6175 from "../images/Group6175.png";
import Group6176 from "../images/Group6176.png";
import Line19 from "../images/Line19.png";
import Ell179 from "../images/Ell179.png";
function Coin() {
  return (
    <>
      <div className="Coin">
        <div className="row coin-row">
        
          <div className="col-sm-10 col-xs-10 col-md-10 col-lg-5">
            <img className="coin12-p" src={coin12} alt="" />
          </div>

          
          <div className="col-sm-10 col-xs-10 col-md-10 col-lg-4 coin-build">
            <p className="coin-org">$NRGY ON ETHEREUM</p>
            <p className="coin-head">
              A COIN BUILT TO
              <br className="mobile40" /> RULE
            </p>

            <div className="NRGY_C2C">
              <span className="F3F_ptagp">$NRGY on Ethereum</span> is an
              investment coin designed to function inside its own ecosystem,
              providing functional liquidity and attractive rewards to
              stakeholders.
            </div>
            <div className="coin_p_C2C row">
              <div className="col-2 Coin_343">
                <img className="G-6173" src={Group6173} alt="" />
              </div>
              <div className="col-10">
                <span className="F3F_ptagp">$NRGY</span> is a strong liquid
                currency that fuels independent developers
              </div>
            </div>
            <br className="mobile40" />
            <div className="coin_p_C2 row">
              <div className="col-2 Coin_343">
                <img className="G-6173" src={Group6173} alt="" />
              </div>
              <div className="col-10">
                <span className="F3F_ptagp">$NRGY's</span> high APY potential is
                attractive to investors and developers due to its limited supply
                and robust reward system.
              </div>
            </div>
            <p className=" see-on text-align-start">See On:</p>
            <div className="coin_p_C2C-1 coin-img-2 row">
              <div className=" col-2 text-align-center img-col-89">
                <img className=" img-gol" src={image2} alt="" />
              </div>
              <div className=" img-gol-1 col-10">
                https://v2.info.uniswap.org/pair/0x51bf9908dac4a283
                <br />
                d017edc071d954ec3a4b1376
              </div>
            </div>
          </div>
          <div className="col-sm-0 col-xs-0 col-md-1"></div>
        </div>
      </div>
    </>
  );
}
export default Coin;
