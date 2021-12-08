import React from "react";
import { ownershipData } from "../../data/ownershipData";

const cardData = () => {
  return (
    <>
      {ownershipData.map((item) => {
        return (
          <div className="col-sm-12">
            <div className="text-center owl-carousel owl-theme ownership-list">
              <div className="item">
                <img src={item.imageUrl} alt={item.atlImg} />
                <h5>{item.title}</h5>
                <p>{item.description} </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Ownership = () => {
  return (
    <section className="ownership-sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 heading-wrap text-center">
            <h2 className="sub-heading">Complete Ownership</h2>
            <p>
              {" "}
              From Design to Fulfilment <br />
              We assume total responsibility and ownership from Design to
              Fulfilment to Reverse Logistics. Leave your headache to us and
              just market3 your brand.
            </p>
          </div>
          {cardData()}
        </div>
      </div>
    </section>
  );
};

export default Ownership;
