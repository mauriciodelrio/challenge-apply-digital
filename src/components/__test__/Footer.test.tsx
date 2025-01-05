import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
    it('should render without crashing', () => {
        const { getByAltText } = render(<Footer />);
        expect(getByAltText('logo')).toBeInTheDocument();
    });
});