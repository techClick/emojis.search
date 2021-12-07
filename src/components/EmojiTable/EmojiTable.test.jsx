import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EmojiTable from './EmojiTable';
import '../../config';

afterEach(cleanup);

describe('unit tests', () => {
  test('component renders', () => {
    render(<EmojiTable results={[]} />);
  });
  test('emoji table renders', () => {
    const { getByText } = render(<EmojiTable results={[]} />);
    const keywords = getByText(/keywords/i);
    expect(keywords).toBeInTheDocument();
  });
  test('correct data is shown on emoji table', () => {
    const results = [{ title: 'testT', symbol: 'testS', keywords: 'testK' }];
    const { getByText } = render(<EmojiTable results={results} />);
    const resultsUrl = getByText(/\btestt\b/i);
    const resultsLogin = getByText(/\btests\b/i);
    const resultsType = getByText(/\btestk\b/i);
    expect(resultsUrl).toBeInTheDocument();
    expect(resultsLogin).toBeInTheDocument();
    expect(resultsType).toBeInTheDocument();
  });
});
