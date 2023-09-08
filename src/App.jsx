import { useEffect, useState } from 'react';
import './assets/app.css';
import Countries from './countries';

function App() {
  const url = 'https://restcountries.com/v3.1/all';
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataFetch = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCountriesData(data);
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

  return (
    <div>
      <h1>React country app</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error : {error.message}</h1>}
      <Countries countries={countriesData} />
    </div>
  );
}

export default App;
