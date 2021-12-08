import React from "react";
import { productData } from "../../data/productData";
import { commonData } from "../../data/commonData";

const intro = () => {
  return (
    <>
      {commonData.map((item) => {
        console.log("product", item);
        return (
          <div>
            <h2 className="sub-heading">{item?.logo?.alt}</h2>
            <p>{item?.productDescription} </p>
          </div>
        );
      })}
    </>
  );
};

const productCard = () => {
  return (
    <>
      {productData.map((item) => {
        return (
          <div className="col-sm-12 col-lg-4 col-md-6">
            <div className="product-item text-center">
              <div className="img-wrap-prod">
                <img src={item.imageUrl} alt="" />
              </div>
              <div className="product-content">
                <div className="hover-show">
                  <a href={item.shop}>Quick Shop</a>
                </div>
                <p>{item.description}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Product = () => {
  return (
    <div>
      <section className="product-sec">
        <div className="container">
          <div className="row justify-content-center">
            {intro()}
            {productCard()}
            <div className="col-12 text-center view-more">
              <a href="#">view more</a>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 17.0002L27.789 10.7891V15.593H0V18.4071H27.789V17.0002H34Z"
                  fill="#FD6B00"
                />
                <path d="M34 17H27.7891V23.2108L34 17Z" fill="#FF5722" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
