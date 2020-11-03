import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component content testing', () => {

  test('App component snapshot testing', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('headingElement should have Our Products name', () => {
    render(<App/>);
    const headingElement = screen.getByText(/Our Products/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('bannerHeadingElement should have Electronic Heath Records name', () => {
    render(<App />);
    const bannerHeadingElement = screen.getByText(/Electronic Health Records/i);
    expect(bannerHeadingElement).toBeInTheDocument();
  });
});
