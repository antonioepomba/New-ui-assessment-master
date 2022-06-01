import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
import Card from '../src/card'
import Header from '../src/header'

test('renders learn react link', () => {
  render(<AccountOverview />);
  const element = screen.getByText(<Card />);
  expect(element).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<AccountOverview />);
  const element = screen.getByText(<Header />);
  expect(element).toBeInTheDocument();
});