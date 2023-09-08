import './assets/country.css';

const Country = (props) => {
  const { name, flags, capital, population, area } = props;
  const { removeCountry } = props;

  const handleRemove = () => {
    removeCountry(name.common);
  };

  return (
    <article className="country">
      <div>
        <img className="{flag}" src={flags.png} alt="" />
        <h2>Name : {name.common}</h2>
        <h2>Capital : {capital}</h2>
        <h3>Population : {population}</h3>
        <h2>Area : {area}</h2>
        <button className="btn" onClick={handleRemove}>
          Remove country
        </button>
      </div>
    </article>
  );
};

export default Country;
