import React, { useState } from 'react';
import { SearchBarContainer, SearchInput, SearchButton } from './SearchBar.style.js';
import search from './img/Search.png';

const SearchBar = ({ searchTerm,setSearchTerm,onSearch, isMobile }) => {


  // 검색어 입력 시 호출되는 함수
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); //검색어 입력될 때마다 필터링된 데이터 요청
  };

  // 검색 버튼 클릭 시 호출되는 함수
  const handleSearch = () => {
    if (searchTerm.trim() === ''){
      onSearch(''); //전체 메시지 로드
    }else {
      onSearch(searchTerm); //검색어로 메세지 검색 
    }
  };

  return (
    <SearchBarContainer isMobile={isMobile}>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}  // 검색어 상태 유지
        onChange={handleInputChange}  // 입력 값 변경 핸들러
      />
      <SearchButton onClick={handleSearch}>
        <img src={search} alt="Search" />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
