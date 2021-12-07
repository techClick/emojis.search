import React from 'react';
import {
  render, cleanup, screen, fireEvent,
} from '@testing-library/react';
import Search from './Search';

afterEach(cleanup);

describe('unit tests', () => {
  test('component renders', () => {
    render(<Search />);
  });
  test('search box renders', () => {
    render(<Search results={[]} />);
    const searchInput = screen.queryByTitle('searchInput');
    expect(searchInput).toBeTruthy();
  });
  test('submit button renders', () => {
    render(<Search results={[]} />);
    const submitButton = screen.queryByTitle('submitButton');
    expect(submitButton).toBeTruthy();
  });
  test('search input displays correctly', () => {
    render(<Search
      allResults={[]}
      setSearchResults={() => {}}
      searchText="test"
      setSearchText={() => {}}
    />);
    const searchInput = screen.queryByTitle('searchInput');
    expect(searchInput.value).toBe('test');
  });
  test('search input changes correctly', () => {
    // eslint-disable-next-line no-var
    var searchText = 'NOTtest';
    render(<Search
      allResults={[]}
      setSearchResults={() => {}}
      searchText={searchText}
      setSearchText={(newSearchText) => { searchText = newSearchText; }}
    />);
    const searchInput = screen.queryByTitle('searchInput');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchText).toBe('test');
  });
});
