import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

test('renders App correctly', () => {
  const {getByText} = render(<App />);
  getByText(/welcome/i);
});
