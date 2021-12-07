import React from 'react';
import WhiteCard from '../WhiteCard/WhiteCard';
import * as S from './Search.styled';

const Search = function Search({
  searchText,
  setSearchText,
  allResults,
  setSearchResults,
}) {
  const showSearchResults = () => {
    const searchResults = allResults.filter(
      (emoji) => emoji.keywords.toLowerCase().includes(searchText.toLowerCase()),
    );
    console.log(searchResults);
    if (searchResults.length === 0) {
      setSearchResults(['Empty']);
      return;
    }
    setSearchResults(searchResults);
  };

  return (
    <S.Container>
      <WhiteCard width="25%">
        <S.SearchBox
          placeholder="Search emojis via keywords"
          title="searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div>
          <S.Submit title="submitButton" onClick={() => showSearchResults()}>
            Submit
          </S.Submit>
        </div>
      </WhiteCard>
    </S.Container>
  );
};

export default Search;
