import React from 'react';
import {render} from '@testing-library/react'
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  
});

test('PlayerList rendered', () => {
  const container = render(<App/>);

  const PlayerList = container.getByTestId(/playerList/i)
  
})

test('Players render',() => {
  const container = render(<App/>);

  const Players = container.findAllByTestId(/player/i)
})
