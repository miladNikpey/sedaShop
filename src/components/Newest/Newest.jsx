// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Newest.scss";
import bomb from "../../assets/image/bomb.png";

const Newest = () => {
  return (
    <div>
      <div className="newestHandle">
        <div className="jadidtarin">
          <img src={bomb} />
          <p className="mtn1">جدیــــــــــدتریــن هـــای </p>
          <p className="mtn2">صـــــــــــــدا شــــــــــــــاپ</p>
        </div>
      </div>
    </div>
  );
};

export default Newest;
