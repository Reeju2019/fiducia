import React from "react";
import Logo from "../../images/logo.png";
import { footerGalary } from "../../data/footerGalaryData";

const galaryData = () => {
  return (
    <>
      {footerGalary.map((item) => {
        return (
          <li className="list-inline-item">
            <a href={item.link}>
              <img src={item.imageUrl} alt={item.altImg} />
            </a>
          </li>
        );
      })}
    </>
  );
};

function Footer() {
  return (
    <div>
      {/* footer body content sec start */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 f-left-wrap">
              <div className="footer-wrapp-item">
                <div className="f-logo">
                  <img src={Logo} alt="logo images" className="img-fluid" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <ul className="social-links list-inline">
                  <li className="list-inline-item">
                    <a href="">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-4 col-md-5 col-lg-5">
              <div className="footer-wrapp-item galary-wrap">
                <h3>Galary</h3>
                <ul className="list-inline galary-list">{galaryData()}</ul>
                <h3>NewsLetter</h3>
                <form>
                  <div className="mb-3 text-style">
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <path
                        d="M29.6838 24.3066C29.6988 24.2603 29.709 24.2116 29.709 24.1602V7.21921C29.709 7.16755 29.6988 7.11844 29.6835 7.07189C29.6813 7.06551 29.68 7.05913 29.6774 7.05275C29.657 6.99823 29.627 6.94912 29.5894 6.90607C29.5869 6.9032 29.5866 6.89969 29.584 6.89682C29.5824 6.89523 29.5805 6.89459 29.5789 6.893C29.5387 6.85027 29.4912 6.81583 29.438 6.79C29.4338 6.78809 29.4306 6.78553 29.4265 6.78362C29.3761 6.76098 29.3213 6.74823 29.2635 6.7444C29.2578 6.74408 29.2524 6.74281 29.2466 6.74281C29.2412 6.74249 29.2364 6.74121 29.231 6.74121H2.69933C2.69391 6.74121 2.68881 6.74249 2.68339 6.74281C2.67828 6.74312 2.67318 6.74408 2.66808 6.7444C2.60973 6.74823 2.55392 6.7613 2.5029 6.78426C2.49972 6.78553 2.49716 6.78777 2.49398 6.78904C2.43977 6.81487 2.39162 6.84995 2.35112 6.89332C2.34953 6.89491 2.34761 6.89523 2.34602 6.89682C2.34347 6.89937 2.34315 6.90288 2.3406 6.90575C2.30297 6.9488 2.27268 6.99823 2.25227 7.05275C2.24972 7.05913 2.24844 7.06551 2.24621 7.07221C2.23091 7.11876 2.2207 7.16787 2.2207 7.21953V24.1609C2.2207 24.2132 2.23123 24.2629 2.24685 24.3101C2.24908 24.3165 2.25036 24.3225 2.25259 24.3289C2.27332 24.3838 2.30393 24.4332 2.34187 24.4762C2.34411 24.4788 2.34474 24.482 2.34698 24.4845C2.34889 24.4867 2.35144 24.488 2.35367 24.4903C2.3693 24.5065 2.38652 24.5209 2.40437 24.5349C2.41234 24.541 2.41936 24.5483 2.42765 24.554C2.4487 24.5687 2.47134 24.5805 2.49461 24.5913C2.50035 24.5939 2.50546 24.598 2.51119 24.6003C2.56891 24.6248 2.63237 24.6389 2.69901 24.6389H29.2304C29.297 24.6389 29.3605 24.6251 29.4182 24.6003C29.4271 24.5964 29.4354 24.5907 29.444 24.5862C29.4638 24.5764 29.4836 24.5661 29.5017 24.5537C29.5113 24.547 29.5199 24.5384 29.5292 24.5311C29.5454 24.518 29.5614 24.5049 29.5754 24.4899C29.5779 24.4874 29.5808 24.4855 29.5834 24.4829C29.5859 24.4801 29.5866 24.4762 29.5891 24.4734C29.6264 24.4306 29.6564 24.3815 29.6768 24.3273C29.68 24.3203 29.6816 24.3136 29.6838 24.3066ZM3.17764 8.30403L11.2282 15.6577L3.17764 23.07V8.30403ZM19.6779 15.2973C19.6448 15.319 19.6097 15.3372 19.582 15.3678C19.5714 15.3793 19.5679 15.3943 19.5587 15.4064L15.965 18.6889L3.93209 7.69752H27.9979L19.6779 15.2973ZM11.9373 16.3053L15.6423 19.6896C15.7338 19.7731 15.8493 19.8149 15.965 19.8149C16.0808 19.8149 16.1962 19.7731 16.2874 19.6896L19.9464 16.3474L27.9957 23.6822H3.92507L11.9373 16.3053ZM20.6559 15.6994L28.7524 8.30403V23.0776L20.6559 15.6994Z"
                        fill="white"
                      />
                    </svg>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Email"
                    />
                    <button className="submit-btn">
                      <div className="submit-btn-wrap">
                        <svg
                          width="21"
                          height="18"
                          viewBox="0 0 21 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_24_3)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2 5.25027L9.51 6.25027L2.01 3.03027L2 5.25027ZM2.01 14.9703L9.51 11.7503L2 12.7503L2.01 14.9703Z"
                              fill="#FF5722"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.00999999 0L0 7L15 9L0 11L0.00999999 18L21 9L0.00999999 0ZM2 5.25V3.03L9.51 6.25L2 5.25ZM2.01 14.97V12.75L9.52 11.75L2.01 14.97Z"
                              fill="#FF5722"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_24_3">
                              <rect width="21" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
              <div className="footer-wrapp-item">
                <h3>Useful LINKS</h3>
                <ul className="list-unstyled useful-links">
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    <a href="">Home </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    <a href=""> About Us </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    <a href=""> Product Configurator </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    <a href=""> Contact Us </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    <a href=""> Support </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    <a href=""> Feedback </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer body content sec end */}
      {/* footer copyright sec start */}
      <div className="footer-bottom">
        <div className="container text-center">
          <p> Copyright &copy; 2021 FIDUCIA. All Rights Reserved </p>
        </div>
      </div>
      {/* footer copyright sec end */}
    </div>
  );
}

export default Footer;
