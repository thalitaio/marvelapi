import React from "react";
import "./banner.css";
import banner from "../img/banner.jpg";

export default function Banner() {
  return (
    <div className="banner__top">
      <img src={banner} alt="banner marvel" className="banner__img" />{" "}
      <h2 className="banner__title">CONHEÇA NOSSOS PERSONAGENS</h2>
    </div>
  );
}
