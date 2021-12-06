import React from "react";
import "./Rewards.css";
import Group61 from "../images/Group61.png";
import Vector4923 from "../images/Vector4923.png"
function Rewards() {
  return (
    <>
      <div class="position-absolute Group61">
        <img class="img-fluid" src={Group61} alt="" />
      </div>
      <div className="Rewards">
        <div className="container-4">
          <div className="row count-1">
            <div className="col-4 col-xs-4 c-count-1">
              <div>
                <span className="N2N-span-1 position-relative">
                  Where Do <br /> Rewards Come <br /> From?
                </span>
                <br />
                <span className="pt-5 N2N-span">
                  Market Maker Staking algorithm targets a 4%
                  <br />
                  compounded weekly yield as new coins are
                  <br />
                  minted. Each coin minted into circulation
                  <br /> from Market Maker Stakers (MMS) creates an <br />
                  equal reward paid to stakers over a three week period.
                </span>{" "}
                <br />
                <span className="N2N-span-3">
                  Staking rewards are generated and distributed to
                  <br />
                  staked NRGY holders in three ways:
                </span>
              </div>
              <div className="pt-3">
                <button class="btn  btn-get-nrgy-3" type="submit">
                  <span className="N2N-font">GET $NRGYGO</span>
                </button>
              </div>
            </div>

            <div className="col-4">
              <div className="row">
              <div class="position-absolute Group61">
        <img class="img-fluid" src={Vector4923} alt="" />
      </div>
                <div className="col-6">
                  <div class="card bg-R2R2">
                    <span className="R2R-min">4%</span>
                    <span className="R2R-min-2">
                      Minting Reward
                      <br /> Target
                    </span>
                    <span className="R2R-min-6">
                      NRGY minted through Market <br />
                      Maker Staking (MMS)
                      <br />
                      producing up to a targeted <br />
                      4% weekly rewards over 100
                      <br /> weeks.
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div class="card bg-R2R2 ">
                    <span className="R2R-min">20%</span>
                    <span className="R2R-min-2">
                    DApp Royalty <br/>Rewards
                    </span>
                    <span className="R2R-min-6">
                    Decentralized Applications<br/> built on NRGY share<br/> produced royalty revenues<br/>
                     with NRGY stakers.
                      <br />
                      *must stake 25 coins or<br/> more to share in DApp<br/> Rewards
                    </span>
                  </div>
                </div>
              </div>
              <div class="card bg-R2R2 w-50">
                    <span className="R2R-min">25%</span>
                    <span className="R2R-min-2">
                    Builder Referral <br/>Rewards
                    </span>
                    <span className="R2R-min-6">
                    NRGY incorporates the first<br/> fully decentralized <br/>
                    distribution network (DDN)<br/>
                     with built-in referral rewards <br/>
                     and market incentives. 
                    </span>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Rewards;
