import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartItem } from '../CartItem';

describe('CartItem Component', () => {
    const mockProps = {
        genre: 'Action',
        image: '/path/to/image.jpg',
        name: 'Game Name',
        price: 59.99,
        onDelete: jest.fn(),
        description: 'Game Description'
    };

    test('renders CartItem with correct props', () => {
        render(<CartItem {...mockProps} />);

        expect(screen.getByText(mockProps.genre)).toBeInTheDocument();
        expect(screen.getByText(mockProps.name)).toBeInTheDocument();
        expect(screen.getByText(mockProps.description)).toBeInTheDocument();
        expect(screen.getByText(`$${mockProps.price}`)).toBeInTheDocument();
        expect(screen.getByAltText('game')).toBeInTheDocument();
    });

    test('calls onDelete when XMarkIcon is clicked', async () => {
        render(<CartItem {...mockProps} />);

        const deleteButton = screen.findByTestId('delete-icon');
        fireEvent.click(await deleteButton);

        expect(mockProps.onDelete).toHaveBeenCalledTimes(1);
    });

    test('does not render description if not provided', () => {
        const { description, ...propsWithoutDescription } = mockProps;
        render(<CartItem {...propsWithoutDescription} />);

        expect(screen.queryByText(description)).not.toBeInTheDocument();
    });
});