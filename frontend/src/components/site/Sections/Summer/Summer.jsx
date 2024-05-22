import React from "react";
import "./Summer.css"
const Summer = () => {
  return (
    <div
      class="site-blocks-cover overlay get-notification aos-init aos-animate"
      id="special-section"
      style={{background: "url(https://preview.colorlib.com/theme/selling/images/hero_2.jpg)", backgroundAttachment: "fixed",backgroundPosition: "top"}}
      data-aos="fade"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7 text-center">
            <h3 class="section-sub-title">Special Promo</h3>
            <h3 class="section-title text-white mb-4">Summer Sale</h3>
            <p class="mb-5 lead">
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </p>
            <div id="date-countdown" class="mb-5">
              <span class="countdown-block">
                <span class="label">00</span> weeks{" "}
              </span>
              <span class="countdown-block">
                <span class="label">00</span> days{" "}
              </span>
              <span class="countdown-block">
                <span class="label">00</span> hr{" "}
              </span>
              <span class="countdown-block">
                <span class="label">00</span> min{" "}
              </span>
              <span class="countdown-block">
                <span class="label">00</span> sec
              </span>
            </div>
            <p>
              <a
                href="#"
                class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block"
              >
                Shop Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summer;
