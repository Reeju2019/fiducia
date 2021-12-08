import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { commonData } from "../../data/commonData";

const test = () => {
  return (
    <>
      {commonData.map((item) => {
        return (
          <>
            <h1>{item?.info?.["brands served"]}</h1>
            <img src={item?.logo?.imageUrl} />
          </>
        );
      })}
    </>
  );
};

function Home() {
  return (
    <div>
      {/* {test()} */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
