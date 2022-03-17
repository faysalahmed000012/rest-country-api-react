// import logo from "./logo.svg";
import "./App.css";
import Country from "./components/countries/Country";
// import Header from "./components/Header/Header";
// import Person from "./components/Person/Person";
// import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Country></Country>
      {/* <Person></Person> */}
    </div>
  );
}

// function LoadCountry() {
//   const [countries, setCountry] = useState([]); // default value for an array is an empty array
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountry(data));
//   }, []);
//   return (
//     <div>
//       <h1>I am now visiting all country all over the world</h1>
//       <h3>Available country: {countries.length}</h3>
//       {countries.map((country) => (
//         <Countries
//           name={country.name.common}
//           population={country.population}
//         ></Countries>
//       ))}
//     </div>
//   );
// }

// function Countries(props) {
//   return (
//     <div>
//       <h3>Name: {props.name}</h3>
//       <p>population: {props.population}</p>
//     </div>
//   );
// }
export default App;
