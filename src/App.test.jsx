import React from 'react';
import {
  render, cleanup, screen, fireEvent,
} from '@testing-library/react';
import emojiList from './assets/emoji-list.json';
import App from './App';

afterEach(cleanup);

describe('integration tests', () => {
  test('emoji table displays correct emoji list', () => {
    const { getByText } = render(<App />);
    const searchInput = screen.queryByTitle('searchInput');
    fireEvent.change(searchInput, { target: { value: '' } });
    const submitButton = screen.queryByTitle('submitButton');
    fireEvent.click(submitButton);
    const keywords1 = getByText(new RegExp(emojiList[0].keywords, 'i'));
    expect(keywords1).toBeTruthy();
    const keywords2 = getByText(new RegExp(emojiList[1].keywords, 'i'));
    expect(keywords2).toBeTruthy();
    const keywords3 = getByText(new RegExp(emojiList[2].keywords, 'i'));
    expect(keywords3).toBeTruthy();
    const keywords4 = getByText(new RegExp(emojiList[3].keywords, 'i'));
    expect(keywords4).toBeTruthy();
    const keywords5 = getByText(new RegExp(emojiList[4].keywords, 'i'));
    expect(keywords5).toBeTruthy();
  });
  test('search component shows correct search results', () => {
    const { getAllByText } = render(<App />);
    const searchInput = screen.queryByTitle('searchInput');
    fireEvent.change(searchInput, { target: { value: 'on' } });
    const submitButton = screen.queryByTitle('submitButton');
    fireEvent.click(submitButton);
    const theWordOn = getAllByText(/on/i);
    expect(theWordOn).toBeTruthy();
  });
});
