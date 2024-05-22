import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div class="top-bar py-3 bg-light" id="home-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 text-left">
              <ul class="social-media">
                <li>
                  <a href="#" class="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6">
              <p class="mb-0 d-flex justify-content-end ">
                <span class="mx-3">
                  <a href="tel://#">
                    {" "}
                    <i
                      class="fa-solid fa-phone"
                      style={{ color: "#f16821" }}
                    ></i>
                    <span class="d-none d-lg-inline-block text-black">
                      (+1) 234 5678 9101
                    </span>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <i
                      class="fa-solid fa-envelope"
                      style={{ color: "#f16821" }}
                    ></i>
                    <span class="d-none d-lg-inline-block text-black">
                      shop@yourdomain.com
                    </span>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-wrapper" class="sticky-wrapper" style={{height: "74.1875px"}}><header class="site-navbar py-4 bg-white js-sticky-header site-navbar-target" role="banner">
<div class="container">
<div class="row align-items-center">
<div class="col-6 col-xl-2">
<h1 class="mb-0 site-logo"><a href="index.html" class="text-black mb-0">Selling<span class="text-primary">.</span> </a></h1>
</div>
<div class="col-12 col-md-10 d-none d-xl-block">
<nav class="site-navigation position-relative text-right" role="navigation">
<ul class="site-menu main-menu js-clone-nav mr-auto  d-none  d-lg-block jus">
<li><Link to="/" class="nav-link active">Home</Link></li>
<li><Link to="/basket" class="nav-link">Basket</Link></li>
<li><Link to="/admin" class="nav-link">Admin</Link></li>

</ul>
</nav>
</div>
</div>
</div>
</header></div>
    </>
  );
};

export default Header;
