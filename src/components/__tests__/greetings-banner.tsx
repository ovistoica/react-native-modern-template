import React from 'react';
import {GreetingBanner} from '../greetings-banner';
import {render} from '@testing-library/react-native';

test('renders greeting banner correctly ', () => {
  const {getByLabelText} = render(<GreetingBanner />);
  expect(getByLabelText(/welcome-banner/i)).toHaveTextContent(
    /welcome to react native/i,
  );
});
