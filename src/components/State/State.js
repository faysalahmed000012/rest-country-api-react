import React from "react";
import "./State.css";
const State = (prop) => {
  const { name, population, capital, flags } = prop.country;
  return (
    <div className="countryBox">
      <h2>Name: {name.common}</h2>
      <img src={flags.svg} alt="" />
      <p>Capital: {capital}</p>
      <p>population: {population}</p>
    </div>
  );
};

export default State;
