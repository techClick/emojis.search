import React from 'react';
import MaterialTable from 'material-table';
import WhiteCard from '../WhiteCard/WhiteCard';
import ResultsTable from './EmojiTable.styled';

const Results = function Results({ results, setResults, searchText }) {
  const columns = [
    { title: 'TITLE', field: 'title' },
    { title: 'SYMBOL', field: 'symbol' },
    { title: 'KEYWORDS', field: 'keywords' },
  ];
  return (
    <WhiteCard width="70%" fadeIn2 goBack={() => setResults([])}>
      <ResultsTable>
        <MaterialTable
          // eslint-disable-next-line prefer-template
          title={'Results for "' + searchText + '"'}
          columns={columns}
          data={results}
          localization={{
            // eslint-disable-next-line prefer-template
            toolbar: { searchPlaceholder: 'Keywords in "' + searchText + '"' },
          }}
        />
      </ResultsTable>
    </WhiteCard>
  );
};

export default Results;
