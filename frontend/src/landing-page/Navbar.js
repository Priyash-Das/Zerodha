import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom fixed-top bg-white">
      <div class="container px-6 py-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            className=""
            style={{ width: "24%", height: "auto" }}
          />
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav fw-medium ms-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <Link class="nav-link" to="signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="products">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="support">
                Support
              </Link>
            </li>
            <li class="nav-item" style={{ marginTop: "5px" }}>
              <Link class="nav-link nav-ham" to="#">
                <i
                  class="fa-solid fa-bars"
                  style={{ fontSize: "20px", color: "#666666" }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
