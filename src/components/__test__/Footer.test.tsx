import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
    it('should render without crashing', () => {
        const { getByText } = render(<Footer />);
        expect(getByText('© 2021 GamerShop')).toBeInTheDocument();
    });
});