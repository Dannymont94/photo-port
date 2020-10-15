import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact />)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />)

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Elements load text correctly', () => {
  it('h1 tag', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });

  it('submit button', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('submitBtn')).toHaveTextContent('Submit');
  });
});