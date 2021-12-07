import React, { useState } from 'react';
import Search from './components/Search/Search';
import EmojiTable from './components/EmojiTable/EmojiTable';
import * as S from './styled';
import emojiList from './assets/emoji-list.json';
import WhiteCard from './components/WhiteCard/WhiteCard';

const App = function App() {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  return (
    <S.Container>
      { results.length === 0 && (
        <Search
          allResults={emojiList}
          setSearchResults={setResults}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      )}
      { (results.length > 0 && results[0] !== 'Empty') && (
        <EmojiTable results={results} setResults={setResults} searchText={searchText} />
      )}
      { (results.length > 0 && results[0] === 'Empty') && (
        <WhiteCard width="50%" goBack={() => setResults([])}>
          <S.EmptyBlock>
            No keywords found with your search
          </S.EmptyBlock>
        </WhiteCard>
      )}
    </S.Container>
  );
};

export default App;
