import React from "react";
import Group6174 from "../images/Group6174.png";
import Group6175 from "../images/Group6175.png";
import Group6176 from "../images/Group6176.png";
import Line19 from "../images/Line19.png";
import vector from "../images/Vector3.png";
import "./DeFi.css";


import Vector493 from "../images/Vector493.png";
function DeFi() {
  return (
    <>
      <div class="position-absolute">
        <img class="r2-N2N" src={Vector493} alt="" />
      </div>
      <section className="Defi">
        <div className="pt-3 card card-W2W2">
          <div>
            <span className="pt-5 Defi-tomato">Democratizing DeFi</span>
          </div>
          <div>
            <span className="Defi-D2D">Democratizing DeFi</span>
          </div>
          <div className=" pt-5 row">
            <div className="col-3">
              <img src={Group6174} alt=""/>
            </div>
            <div className="col-1 Line19_D2D">
            <img src={Line19} alt=""/>
            </div>
            <div className="col-3">
            <img src={Group6175} alt=""/>
            </div>
            <div className="col-1 Line19_D2D">
            <img src={Line19} alt=""/>
            </div>
            <div className="col-3">
            <img src={Group6176} alt=""/>
            </div>
            <div className="pt-5 row">
            <div className="col-6 Show-Current">
              <span className="pt-5">SHOW CURRENT SUPPLY 104k with a<br/> MAX of 4.3 million</span>
              </div>
              <div className="col-6">
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
            </div>
            </div>
          
          
          </div>
        </div>

     
      </section>
    </>
  );
}
export default DeFi;
