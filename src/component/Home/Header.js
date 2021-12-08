import React from "react";
import LedTubeLight from "../../images/led_tubelight.png";
import BannerImg from "../../images/banner.png";
import bayLight from "../../images/HIgh-bay-Light.png";
import streetLight from "../../images/street-light.png";
import { commonData } from "../../data/commonData";

const intro = () => {
  return (
    <>
      {commonData.map((item) => {
        return (
          <a className="navbar-brand" href={item?.socialLink?.home}>
            <img src={item?.logo?.imageUrl} alt={item?.logo?.alt} />
          </a>
        );
      })}
    </>
  );
};

function Header() {
  return (
    <div className="bg-img-wrap">
      <div>
        <img src={BannerImg} />
      </div>
      <div className="header-area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            {intro()}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about-us.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about-us.html">
                    Product Configurator{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact-us.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <section className="banner-area-sec">
        {/* <div 
            className="banner-img-wrap">
                <img src="images/banner.jpg" alt="banner images">
            </div> */}

        <div className="">
          <div
            id="banner-slider"
            className="owl-carousel owl-theme carousel-fade"
          >
            <div className="container-fluid">
              <div className="row banner-content-main align-items-center">
                <div className="col-sm-12 col-lg-6">
                  <div className="left-content pr-4">
                    <h1 className="banner-title">
                      Electronic Manufacturing Services made Simpler
                    </h1>
                    <p className="banner-text">
                      We strive to be your trusted electronics manufacturing
                      services provider. Own product of global standard at
                      competitive rates
                    </p>
                    <button className="btn btn-brand">
                      Start Building Your Brand
                    </button>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="right-img-wrap">
                    <img src={LedTubeLight} alt="banner image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row banner-content-main align-items-center">
                <div className="col-sm-12 col-lg-6">
                  <div className="left-content pr-4">
                    <h1 className="banner-title">
                      Electronic Manufacturing Services made Simpler
                    </h1>
                    <p className="banner-text">
                      We strive to be your trusted electronics manufacturing
                      services provider. Own product of global standard at
                      competitive rates
                    </p>
                    <button className="btn btn-brand">
                      Start Building Your Brand
                    </button>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="right-img-wrap">
                    <img src={bayLight} alt="banner image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row banner-content-main align-items-center">
                <div className="col-sm-12 col-lg-6">
                  <div className="left-content pr-4">
                    <h1 className="banner-title">
                      Electronic Manufacturing Services made Simpler
                    </h1>
                    <p className="banner-text">
                      We strive to be your trusted electronics manufacturing
                      services provider. Own product of global standard at
                      competitive rates
                    </p>
                    <button className="btn btn-brand">
                      Start Building Your Brand
                    </button>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="right-img-wrap">
                    <img src={streetLight} alt="banner image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
