import { render, screen } from '@testing-library/react';
import DietForm from '../DietForm'; 

test('renders without crashing', () => {
    render(<DietForm />);
});