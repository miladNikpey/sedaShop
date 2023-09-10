// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Halobar.scss";
import Logo from "../../assets/image/Logo.png";
import Sspeaker from "../../assets/image/Sspeaker.png";
import hedphone from "../../assets/image/hedphone.png";
import mic from "../../assets/image/mic.png";
import janebi from "../../assets/image/janebi.png";
import search from "../../assets/image/search.png";

const Halobar = () => {
  return (
    <div>
      <div className="mainbar">
        <ul className="list">
          <li className="speaker">
            <img src={Sspeaker} />
            <p className="titricon">اسپیکر</p>
          </li>
          <li>
            <img src={hedphone} />
            <p className="titricon">هدفون</p>
          </li>
          <li>
            <img src={mic} />
            <p className="titricon">میکروفون</p>
          </li>
          <li>
            <img src={janebi} />
            <p className="titricon">لوازم جانبی</p>
          </li>
          <li>
            <img src={search} />
          </li>
        </ul>
        <img className="logo" src={Logo}/>
      </div>
    </div>
  );
};

export default Halobar;
