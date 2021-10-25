import { render, screen } from '@testing-library/react';
import App from './App';
import DietForm from './components/DietForm';

test('renders learn react link', () => {
  render(<App />);
});

test('form renders properly', () => {
  render(<DietForm />);
});
