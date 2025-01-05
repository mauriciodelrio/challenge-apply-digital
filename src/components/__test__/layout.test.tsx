import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from '../Layout';

describe('Layout', () => {
    it('should render TopBar, children, and Footer', () => {
        const { getByText } = render(
            <Layout>
                <div>Test Children</div>
            </Layout>
        );

        expect(getByText('GamerShop')).toBeInTheDocument();
        expect(getByText('Test Children')).toBeInTheDocument();
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });
});