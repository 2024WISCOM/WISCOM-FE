// 검색 기능
import React, { useState } from 'react';
import { SearchBarContainer, SearchInput, SearchButton } from './SearchBar.style.js'; // 스타일 컴포넌트 import

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>
        검색
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;

