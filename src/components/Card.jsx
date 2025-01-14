import "../App.css";
import React from "react";

const Card = ({ index, country }) => {
  return (
    <div className="countryCard">
      <img src={country.png} className="countryImage" />
      {/* <h3>{country}</h3> */}
      <p className="countryName">{country.common}</p>
    </div>
  );
};

export default Card;
