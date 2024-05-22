import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      class="site-blocks-cover overlay aos-init aos-animate"
      style={{"background-image": "url(https://preview.colorlib.com/theme/selling/images/hero_2.jpg)","background-position": "50% -107.2px"}}
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div
            class="col-md-12 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="row mb-4">
              <div class="col-md-7">
                <h1>Shop With Us</h1>
                <p class="mb-5 lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                  officia.
                </p>
                <div>
                  <a
                    href="#"
                    class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    class="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block"
                  >
                    Club Membership
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
