import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import WhiteCard from './WhiteCard';

afterEach(cleanup);

describe('unit tests', () => {
  test('component renders', () => {
    render(<WhiteCard />);
    const whiteBG = screen.queryByTitle('whiteBackground');
    expect(whiteBG).toBeTruthy();
  });
  test('back button renders', () => {
    render(<WhiteCard goBack={() => {}} />);
    const goBackLink = screen.queryByTitle('goBack');
    expect(goBackLink).toBeTruthy();
  });
  test('components renders children', () => {
    render(
      <WhiteCard>
        <div title="test" />
      </WhiteCard>,
    );
    const testDiv = screen.queryByTitle('test');
    expect(testDiv).toBeTruthy();
  });
});
