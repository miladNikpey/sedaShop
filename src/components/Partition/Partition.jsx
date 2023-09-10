// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Partition.scss";
import shapes from "../../assets/image/shapes.png";
import arrow from "../../assets/image/arrow.png";
import khanegi from "../../assets/image/khanegi.png";
import game from "../../assets/image/game.png";
import airpad from "../../assets/image/airpad.png";
import haml from "../../assets/image/haml.png";

const Partition = () => {
  return (
    <div>
      <div className="cartz">
        <div className="cart1">
          <div className="cart1items">
            <img src={shapes} />
            <p className="matncart1">محبوبتـــــــــــــــــــرین دستـــــــــه بنـــــــــدی</p>
            <img className="cube"  src={arrow} />
          </div>
        </div>
        <div className="cart2">
        <img src={khanegi}/>
        <p>خانگی</p>
        </div>
        <div className="cart3">
        <img src={game}/>
        <p>گیمینگ</p>
        </div>
        <div className="cart4">
        <img src={airpad}/>
        <p>ایرفون</p>
        </div>
        <div className="cart5">
        <img src={haml}/>
        <p>قابل حمل</p>
        </div>
      </div>
    </div>
  );
};

export default Partition;
