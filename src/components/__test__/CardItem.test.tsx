import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardItem } from '../CardItem';

describe('CardItem Component', () => {
    const props = {
        genre: 'Action',
        image: '/game-images/cyberpunk2077.jpeg',
        name: 'Cyberpunk 2077',
        price: 59.99,
        isNew: true
    };

    test('renders CardItem component', () => {
        render(<CardItem {...props} />);
        
        // Check if genre is rendered
        expect(screen.getByText(props.genre)).toBeInTheDocument();
        
        // Check if product name is rendered
        expect(screen.getByText(props.name)).toBeInTheDocument();
        
        // Check if price is rendered
        expect(screen.getByText(`$ ${props.price}`)).toBeInTheDocument();
        
        // Check if button is rendered
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });

    test('renders image with correct src and alt text', () => {
        render(<CardItem {...props} />);
        
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt', 'img-product');
    });

    test('renders new badge if isNew prop is true', () => {
        render(<CardItem {...props} />);    
        const newBadge = screen.getByText('New');
        expect(newBadge).toBeInTheDocument();
    });
});