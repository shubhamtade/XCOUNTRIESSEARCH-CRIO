import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countries-search-data-prod-nnjjst7g5q-el.a.run.app/countries"
        );
        if (!response.ok) {
          throw new Error(`Response status : ${response.status}`);
        }
        const json = await response.json();
        console.log(json);

        setCountriesData(json); // Store the fetched data in state
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  const filteredCountries = countriesData.filter(
    (country) =>
      country.common &&
      country.common.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container">
      <nav className="headerContainer">
        <input
          type="text"
          name="search"
          placeholder="Search for countries..."
          className="searchBox"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </nav>
      <main className="bodyContainer">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <Card key={index} country={country} />
          ))
        ) : (
          <p>No countries found</p>
        )}
      </main>
    </div>
  );
};

export default App;
