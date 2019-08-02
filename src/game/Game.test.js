import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoGamegin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
