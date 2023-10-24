import React, { useEffect, useState } from "react";
import Country from "./Country";

const CountryApi2 = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the country that matches the search input
    const foundCountry = countries.find(
      (country) => country.name.common.toLowerCase() === search.toLowerCase()
    );

    if (foundCountry) {
      setSelectedCountry(foundCountry);
    } else {
      setSelectedCountry(null);
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Visit around the world</h2>
      <p>Number of countries {countries.length}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="country name"
          name="search"
          id=""
        />
        <input type="submit" value="Search" />
      </form>
      {selectedCountry ? (
        <Country key={selectedCountry.cca2} country={selectedCountry} />
      ) : null}
    </div>
  );
};
export default CountryApi2;
