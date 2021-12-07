import React from "react";
import Brand1 from "../../images/brand-1.png";
import Brand2 from "../../images/brand-2.png";
import Brand3 from "../../images/brand-3.png";
import Brand4 from "../../images/brand-4.png";

function Ownership() {
  return (
    <section class="ownership-sec">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 heading-wrap text-center">
            <h2 class="sub-heading">Complete Ownership</h2>
            <p>
              {" "}
              From Design to Fulfilment <br />
              We assume total responsibility and ownership from Design to
              Fulfilment to Reverse Logistics. Leave your headache to us and
              just market3 your brand.
            </p>
          </div>
          <div class="col-sm-12">
            <div class="text-center owl-carousel owl-theme ownership-list">
              <div class="item">
                <img src={Brand1} alt="brand images" />
                <h5>Design</h5>
                <p>
                  Use our superior product configurator to design the product
                  you want your brand on.{" "}
                </p>
              </div>
              <div class="item">
                <img src={Brand2} alt="brand images" />
                <h5>Sampling & Cost</h5>
                <p>Promptly get samples of product configured. </p>
              </div>
              <div class="item">
                <img src={Brand3} alt="brand images" />
                <h5>Certification</h5>
                <p>
                  : Once you approve the samples, our team quickly gets to the
                  job of certifications such as BIS, BEE, MNRE, UL, VDE, CE, etc
                  of your product to ensure that it fully complies with the
                  local law{" "}
                </p>
              </div>
              <div class="item">
                <img src={Brand1} alt="brand images" />
                <h5>Production</h5>
                <p>
                  Our production team will work alongside the certification team
                  and undertake production immediately.{" "}
                </p>
              </div>
              <div class="item">
                <img src={Brand4} alt="brand images" />
                <h5>Quality Control</h5>
                <p>
                  All our vendors and suppliers are onboarded after through
                  check on quality and production capabilities. Be rest assured
                  that our quality will be of global standards.{" "}
                </p>
              </div>
              <div class="item">
                <img src={Brand4} alt="brand images" />
                <h5>Quality Control</h5>
                <p>
                  All our vendors and suppliers are onboarded after through
                  check on quality and production capabilities. Be rest assured
                  that our quality will be of global standards.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ownership;
