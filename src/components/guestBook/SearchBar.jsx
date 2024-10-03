import React, { useState } from 'react';
import { SearchBarContainer, SearchInput, SearchButton } from './SearchBar.style.js';
import search from './img/Search.png';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>
      <img src={search} alt="Search" />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
