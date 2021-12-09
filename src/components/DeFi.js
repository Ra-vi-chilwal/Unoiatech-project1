import React from "react";
import Group6174 from "../images/Group6174.png";
import Group6175 from "../images/Group6175.png";
import Group6176 from "../images/Group6176.png";
import Line19 from "../images/Line19.png";
import vector from "../images/Vector3.png";
import "./DeFi.css";
import Ell175 from "../images/Ell175.png";
import Ell179 from "../images/Ell179.png";

import Vector493 from "../images/Vector493.png";
function DeFi() {
  return (
    <>
      <div class="position-absolute">
        <img class="r2-N2N" src={Vector493} alt="" />
      </div>

      <section className="Defi">
        <div class="position-absolute start-0">
          <img class="img-fluid img-Ekk175" src={Ell175} alt="" />
        </div>
       
        <div className="container">
          <div className="pt-3 card card-W2W2">
            <div className="demo-card">
              <div class="position-absolute Group61">
                <img class="img-fluid" src={Ell179} alt="" />
              </div>
              <span className="pt-3 Defi-tomato">NRGY Statistics</span>
            </div>
            <div>
              <span className="Defi-D2D">Democratizing DeFi</span>
            </div>
            <div className=" pt-5 row">
              <div className="col-xs-1 col-3">
                <img className="G-6174" src={Group6174} alt="" />
              </div>
              <div className="col-1 Line19_D2D">
                <img className="G-6174" src={Line19} alt="" />
              </div>

              <div className="col-xs-1 col-3">
                <img className="G-6174" src={Group6175} alt="" />
              </div>
              <div className="col-1 Line19_D2D">
                <img className="G-6174" src={Line19} alt="" />
              </div>
              <div className="col-xs-1 col-3">
                <img className="G-6174" src={Group6176} alt="" />
              </div>

              <div className="pt-5 row">
                <div className="col-6 Show-Current">
                  <span className="pt-5 mix-show">
                    SHOW CURRENT SUPPLY 104k with a<br /> MAX of 4.3 million
                  </span>
                </div>
                <div className="col-md-2 btn-pdd col-btn position-relative">
                  <button class="btn btn-get-nrgy-2" type="submit">
                    <img src={vector} alt="" />
                    <span className="N2N-font">GET NRGY</span>
                  </button>
                  <br />
                  </div>
                  <div className="col-md-3 col-btn">
                  <button
                    class="btn btn-outline-light btn-learn-2"
                    type="submit"
                  >
                    <span className="N2N-font">LEARN ABOUT STAKING</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default DeFi;
