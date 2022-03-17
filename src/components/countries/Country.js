import React, { useEffect, useState } from "react";
import State from "../State/State";
import "./country.css";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>this is rest country api with react</h2>
      <h2>Welcome from {countries.length} countries around the world</h2>
      <div className="country-container">
        {countries.map((country) => (
          <State country={country} key={country.name.common}></State>
        ))}
      </div>
    </div>
  );
};

export default Country;
