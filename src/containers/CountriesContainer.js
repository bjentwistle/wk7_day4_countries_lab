import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import "./CountriesContainer.css";
import CountryDetail from "../components/CountryDetail";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => { //this calls the func that fetches the countries, as the page renders
    getCountries();
  }, []);

  const getCountries = function () {
    fetch("https://restcountries.com/v3.1/all")
      .then((results) => results.json())
      .then((countries) => setCountries(countries));
  };

  const onCountryClicked = function (country) {
    setSelectedCountry(country);
  };

  return (
    <div className="main-container">
        <CountryList countries={countries} onCountryClicked={onCountryClicked}/> 
        {selectedCountry && <CountryDetail country={selectedCountry}/>} 
        {/* shorthand conditional */}
    </div>
);
};

export default CountryContainer;
