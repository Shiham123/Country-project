import { useEffect, useState } from 'react';

const SearchCountry = (props) => {
  const [searchText, setSearchText] = useState('');
  const { searchCountry } = props;
  // console.log(searchCountry);

  const handleSearchValue = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    searchCountry(searchText);
  }, [searchText]);

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="type your country"
        value={searchText}
        onChange={handleSearchValue}
      />
    </div>
  );
};

export default SearchCountry;
