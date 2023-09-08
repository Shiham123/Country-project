import { v4 as uuidv4 } from 'uuid';
import './assets/countries.css';
import Country from './country';

const Countries = (props) => {
  const { countries, removeCountry } = props;

  const countryElement = countries.map((country) => {
    const newCountry = { country, id: uuidv4() };
    return (
      <Country key={newCountry.id} {...country} removeCountry={removeCountry} />
    );
  });
  return <div className="countries">{countryElement}</div>;
};

export default Countries;
