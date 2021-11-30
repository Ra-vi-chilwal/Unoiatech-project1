import React from "react";
import "./Finiancialsystem.css";
import Application from "../images/Application.png";
import Blockchain from "../images/Blockchain.png";
import Cryptography from "../images/Cryptography.png";
import Decentralization from "../images/Decentralization.png";
import Distribution from "../images/Distribution.png";
import Finance from "../images/Finance.png";
function Finiancialsystem() {
  return (
    <>
      <div className="F2F-color">
        <div className="F2F-head">
          <p>
            NRGY DEFI FINANCIAL <br />
            SYSTEM
          </p>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3 cryptography">
            <div className="card card-cryptography" id="cryptography-body">
              <div class="card-body">
                <div className="img-chin">
                  <img src={Cryptography} />
                </div>
                <div className="text-light">
                  <p className="F2F-graphy">Cryptography</p>
                  <p className="F2F-org">Security</p>
                  <p className="F2F-subgraphy">
                    Cryptography ensures that attackers
                    <br />
                    can’t forge transaction and other
                    <br />
                    interaction on your behalf.
                  </p>
                  <p className="F2F-org">Safty</p>
                  <p className="F2F-subgraphy">
                    You don’t need to share your real world
                    <br /> identity. Your Ethereum account and
                    <br />
                    wallet serve as you login credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 ">
            <div className="card card-cryptography">
              <div class="card-body">
                <div className="img-chin">
                  <img src={Decentralization} />
                </div>
                <div className="text-light">
                  <span className="F2F-graphy">Decentralization</span>
                  <p className="F2F-org">Transparent</p>
                  <p className="F2F-subgraphy">
                   Full access and visibility to information <br/>and protocol.
                  </p>
                  <p className="F2F-org">Control</p>
                  <p className="F2F-subgraphy">
                  No centralized company or <br/>
                   organization to govern the financial<br/>
                    operations. No document verification.
                  </p>
                  <p className="F2F-org">Fair</p>
                  <p className="F2F-subgraphy">
                   Permissionless and censorship <br/>resistant.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 Blockchain">
            <div className="card card-cryptography" id="body-blockchain">
              <div class="card-body">
                <div  className="img-chin">
                  <img src={Blockchain} />
                </div>
                <div className="text-light">
                  <p className="F2F-graphy">Blockchain</p>
                  <p className="F2F-org">Efficient</p>
                  <p className="F2F-subgraphy">
                   No human involvement with operations 
                    <br />
                    handled immediately and globally.
                    
                  </p>
                  <p className="F2F-org">Open</p>
                  <p className="F2F-subgraphy">
                  Anyone can build within or on-top of 
                    <br />
                    existing application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="pt-3 row">
          <div className="col-1"></div>
          <div className="col-3 cryptography">
            <div className="card card-cryptography" id="body">
              <div class="card-body">
                <div className="img-chin">
                  <img src={Application} />
                </div>
                <div className="text-light">
                  <p className="F2F-graphy">Application</p>
                  <p className="F2F-org">Ecosystem</p>
                  <p className="F2F-subgraphy">
                  NRGY is a global economy of <br/>
                  decentralized application with<br/> autonomous DApp reliance and <br/>
                  distribution.
                  </p>
                  <p className="F2F-org">Safty</p>
                  <p className="F2F-subgraphy">
                  NRGY gives DeFi creators a platform to<br/> connect with users, while<br/>
                   compensating them for their time and<br/>
                    effort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 ">
            <div className="card card-cryptography" id="body-finance">
              <div class="card-body">
                <div className="img-chin">
                  <img src={Finance} />
                </div>
                <div className="text-light">
                  <p className="F2F-graphy">Finance</p>
                  <p className="F2F-org">Token</p>
                  <p className="F2F-subgraphy">
                  A high value digital assets that fuel<br/> powerful new DeFi innovations and<br/> promotions
                   deep liquidity to ensure <br/>capital input is proportional to the supply
                  </p>
                  <p className="F2F-org">Technology</p>
                  <p className="F2F-subgraphy">
                  NRGY is build on groundbreaking new <br/>technologies that favor the financial<br/>
                   success of the applications
                  </p>
  
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 Blockchain">
            <div className="card card-cryptography" id="body-distribution">
              <div class="card-body">
                <div  className="img-chin">
                  <img src={Distribution} />
                </div>
                <div className="text-light">
                  <p className="F2F-graphy">Distribution</p>
                  <p className="F2F-org">Network</p>
                  <p className="F2F-subgraphy">
                  The first fully decentralized distribution <br/>
                  network (DDN) with build-in referral<br/>
                   rewards and market incentives.
                    
                  </p>
                  <p className="F2F-org">Open</p>
                  <p className="F2F-subgraphy">
                  The incentivized network structure <br/>combines balanced payments with<br/>
                   unmatched security and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Finiancialsystem;
