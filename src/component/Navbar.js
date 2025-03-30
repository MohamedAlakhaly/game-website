import React from "react";
import logo from "../images/logo.png";
import profile from '../images/profile-header.jpg';
const Navbar = () => {
  return (
    <div className="container p-1 headernav">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#l">
        <img src={logo} alt="logo" />
      </a>
      <button className="navbar-toggler btn_nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item pt-2">
            <a className="nav-link" href="Home">
              Home
            </a>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-link" href="Browse">
              Browse
            </a>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-link" href="Details">
              Details
            </a>
          </li>
          <li className="nav-item pt-2">
            <a className="nav-link" href="Contact">
            Contact
            </a>
          </li>
          <li className="nav-item text_profile">
            <a className="nav-link nav-linkMo" href="Profile">
            <button className="btn rounded-5 btn_profile">
                profile
              <img src={profile} alt="profile" className="rounded-5 ms-2" />
            </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  );
};

export default Navbar;
