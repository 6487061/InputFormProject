import React from "react";
import { SlBell } from "react-icons/sl";
import Logo from "../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div id="logo">
          <img width={100} src={Logo} alt="logo" />
        </div>
        <div className="nav-link">
          <a>
            <li>
              <NavLink
                to="/"
                exact
                style={{ color: "#99725b", textDecoration: "none" }}
              >
                Home
              </NavLink>
            </li>
          </a>
          <li>History</li>
          <li>Tacking</li>
        </div>
        <div id="nav-info">
          <strong>Language</strong>
          <SlBell id="bell" />
          <div id="img-profile">
            <img
              id="profile"
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            />
          </div>
        </div>
      </nav>
      <footer className="bottom-nav">
        <div class="nav-line"></div>
      </footer>
    </>
  );
}

export default Navbar;
