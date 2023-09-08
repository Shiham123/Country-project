import { useEffect, useState } from 'react';
import './assets/app.css';
import Countries from './countries';
import SearchCountry from './search';

function App() {
  const url = 'https://restcountries.com/v3.1/all';
  const [countriesData, setCountriesData] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countriesData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataFetch = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCountriesData(data);
      setFilterCountries(data);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetch(url);
  }, [url]);

  const removeCountry = (nameValue) => {
    const filterCountry = filterCountries.filter(
      (item) => item.name.common !== nameValue
    );
    setFilterCountries(filterCountry);
  };

  const handleSearch = (inputValue) => {
    let value = inputValue.toLowerCase();
    const countryNew = countriesData.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(countryNew);
  };

  return (
    <div>
      <h1>React country app</h1>
      <SearchCountry searchCountry={handleSearch} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error : {error.message}</h1>}
      <Countries countries={filterCountries} removeCountry={removeCountry} />
    </div>
  );
}

export default App;
