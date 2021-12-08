import React, { useState, useEffect } from "react";
import { commonData } from "../../data/commonData";

function Info() {
  const [data, setData] = useState(Object.values(commonData[3]));

  return (
    <div>
      <section className="we-work-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-11 m-auto we-work">
              <ul className="list-inline text-center work-exp-list">
                <li className="list-inline-item">
                  <h3>{data[0]?.brands_served}</h3>
                  <p>brands served</p>
                </li>
                <li className="list-inline-item">
                  <h3>{data[0]?.product_delivered}</h3>
                  <p>product delivered</p>
                </li>
                <li className="list-inline-item">
                  <h3>{data[0]?.styles_manufectured}</h3>
                  <p>styles manufectured</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
