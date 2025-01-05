import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OrderSummary } from '../OrderSummary';

describe('OrderSummary Component', () => {
    test('renders Order Summary title', () => {
        render(<OrderSummary cartDetails={[]} />);
        expect(screen.getByText('Order Summary')).toBeInTheDocument();
    });

    test('renders correct number of items', () => {
        const cartDetails = [
            { name: 'Item 1', price: 10 },
            { name: 'Item 2', price: 20 },
        ];
        render(<OrderSummary cartDetails={cartDetails} />);
        expect(screen.getByText('2 Items')).toBeInTheDocument();
    });

    test('renders item names and prices', () => {
        const cartDetails = [
            { name: 'Item 1', price: 10 },
            { name: 'Item 2', price: 20 },
        ];
        render(<OrderSummary cartDetails={cartDetails} />);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('$10')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('$20')).toBeInTheDocument();
    });

    test('renders correct order total', () => {
        const cartDetails = [
            { name: 'Item 1', price: 10 },
            { name: 'Item 2', price: 20 },
        ];
        render(<OrderSummary cartDetails={cartDetails} />);
        expect(screen.getByText('Order Total')).toBeInTheDocument();
        expect(screen.getByText('$30.00')).toBeInTheDocument();
    });

    test('renders Checkout button', () => {
        render(<OrderSummary cartDetails={[]} />);
        expect(screen.getByText('Checkout')).toBeInTheDocument();
    });
});