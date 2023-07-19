import { render, screen } from '@testing-library/react';
import App from './App';

const status = fetch('/status')
  .then(res => res.json()).
  catch(err => console.log("there was an error"));
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
