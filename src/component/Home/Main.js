import React from "react";
import Billing from "./Billing";
import Info from "./Info";
import Ownership from "./Ownership";
import Product from "./Product";

function Main() {
  return (
    <div>
      <Info />
      <Product />
      <Ownership />
      <Billing />
    </div>
  );
}

export default Main;
