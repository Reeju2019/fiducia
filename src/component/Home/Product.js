import React from 'react'
import tubeLight from "../../images/tube-light.png"
import bayLight from "../../images/HIgh-bay-Light.png"
import streetLight from "../../images/street-light.png"

function Product() {
    return (
        <div>
            <section className="product-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 heading-wrap text-center">
                            <h2 className="sub-heading">Fiducia</h2>
                            <p>The trust is in the name. A home-grown startup, Fiducia - Powered by LeSol, engages with the brands to give identity to the products. A simple configurator enables you to put your brand to any product and start marketing from the word get-go. </p>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6">
                            <div className="product-item text-center">
                                <div className="img-wrap-prod">
                                    <img src={tubeLight} alt="" />
                                </div>
                                <div className="product-content"> 
                                    <div className="hover-show">
                                        <a href="#">Quick Shop</a>
                                    </div>
                                    <p>old faithful shop</p>
                                    <h4>Tube Light</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6">
                            <div className="product-item text-center">
                                <div className="img-wrap-prod">
                                    <img src={streetLight} alt="" />
                                </div>
                                <div className="product-content">
                                    <div className="hover-show">
                                        <a href="#">Quick Shop</a>
                                    </div>
                                    <p>old faithful shop</p>
                                    <h4>Street Light</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6">
                            <div className="product-item text-center">
                                <div className="img-wrap-prod">
                                    <img src={bayLight} alt="" />
                                </div>
                                <div className="product-content">
                                    <div className="hover-show">
                                        <a href="#">Quick Shop</a>
                                    </div>
                                    <p>old faithful shop</p>
                                    <h4>HIgh bay Light</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6">
                            <div className="product-item text-center">
                                <div className="img-wrap-prod">
                                    <img src="" alt="" />
                                    <img src={streetLight} alt="" />
                                </div>
                                <div className="product-content">
                                    <div className="hover-show">
                                        <a href="#">Quick Shop</a>
                                    </div>
                                    <p>old faithful shop</p>
                                    <h4>Street Light</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 col-md-6">
                            <div className="product-item text-center">
                                <div className="img-wrap-prod">
                                    <img src={bayLight} alt="" />
                                </div>
                                <div className="product-content">
                                    <div className="hover-show">
                                        <a href="#">Quick Shop</a>
                                    </div>
                                    <p>old faithful shop</p>
                                    <h4>HIgh bay Light</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center view-more">
                            <a href="#">view more</a>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34 17.0002L27.789 10.7891V15.593H0V18.4071H27.789V17.0002H34Z" fill="#FD6B00" />
                                <path d="M34 17H27.7891V23.2108L34 17Z" fill="#FF5722" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product
