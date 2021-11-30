import React from 'react';
import logo from "../images/Logo.png";
import vector from "../images/Vector3.png"
import "./Navbar.css";
function Navbar(){
    return(
        <>
        <div>
        <nav class="navbar navbar-expand-lg navbar-light" style={{background:"rgb(2, 12, 41)"}}>
  <div class="container-fluid">
  <img id="N2N-logo" src={logo}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse N2N-navitems" id="navbarSupportedContent" >
    <ul class="navbar-nav mx-auto ">
    <li class="nav-item active text-center">
      <a class="nav-link text-light" href="#">LEARN</a>
    </li>
    <li class="nav-item active text-center">
      <a class="nav-link text-light" id="N2N-discover" href="#">DISCOVER</a>
    </li>
    <li class="nav-item active text-center">
      <a class="nav-link text-light" id="N2N-dapps" href="#">DAPPS</a>
    </li>
    <li class="nav-item active text-center">
      <a class="nav-link text-light" id="N2N-dashbord" href="#">DASHBOARD</a>
    </li>
    <li class="nav-item active text-center">
      <a class="nav-link text-light" id="N2N-newto" href="#">NEW TO DEFI</a>
    </li>
  
  </ul>
      <form class="btn-form-N2N">
       
      <button class="btn btn-success btn-get-nrgy" type="submit"><img src={vector}/><span className="N2N-font">GET NRGY</span></button>
      </form>
    </div>
  </div>
</nav>
</div>
        </>

    )
}
export default Navbar;