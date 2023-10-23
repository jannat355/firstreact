import React from "react";
import human from "./assets/illustration-hero.svg";
import icon from "./assets/icon-music.svg";
import body from "./assets/pattern-background-mobile.svg";

const Dynamic = () => {
  return (
    <div className=" body col-lg-5 container  text-center border  py-5 my-5 w-100 ">
      <img src={human} alt="" className="w-75" />
      <div className="pt-4">
        <h4>Order Summary</h4>
        <p>
          You can now listen to millions of <br /> songs,audiobooks,and podcast
          on <br /> any device anywhere you like
        </p>
      </div>

      <div className=" call d-flex justify-content-center border pt-3 ">
        <div>
          <img src={icon} alt="" />
        </div>

        <div className="row">
          <h5>Annual plan</h5>
          <p>$59.99/per year</p>
        </div>
        <a href=""> Change</a>
      </div>

      <button className=" btn my-5 p-3 text-light w-75 ">
        Proceed to payment{" "}
      </button>
      <h5>Cancel Order</h5>
    </div>
  );
};

export default Dynamic;
