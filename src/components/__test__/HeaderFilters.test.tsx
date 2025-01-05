import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeaderFilters } from '../HeaderFilters';
import { useSelectHook } from '@/hooks';

jest.mock('../../hooks/useSelectHook');

describe('HeaderFilters Component', () => {
    const mockUseSelectHook = useSelectHook as jest.Mock;
    const availableFilters = ['Action', 'Adventure', 'RPG'];

    beforeEach(() => {
        mockUseSelectHook.mockReturnValue({
            val: '',
            onChange: jest.fn()
        });
    });

    test('renders correctly with given props', () => {
        render(<HeaderFilters genre="Action" availableFilters={availableFilters} />);

        expect(screen.getByText('Top Sellers')).toBeInTheDocument();
        expect(screen.getByText('Genre')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'All' })).toBeInTheDocument();
        availableFilters.forEach(filter => {
            expect(screen.getByRole('option', { name: filter })).toBeInTheDocument();
        });
    });

    test('calls onChange when a new filter is selected', () => {
        const mockOnChange = jest.fn();
        mockUseSelectHook.mockReturnValue({
            val: '',
            onChange: mockOnChange
        });

        render(<HeaderFilters genre="Action" availableFilters={availableFilters} />);

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Adventure' } });
        expect(mockOnChange).toHaveBeenCalled();
    });

    test('displays the correct initial value based on genre prop', () => {
        mockUseSelectHook.mockReturnValue({
            val: 'RPG',
            onChange: jest.fn()
        });

        render(<HeaderFilters genre="RPG" availableFilters={availableFilters} />);

        expect(screen.getByRole('combobox')).toHaveValue('RPG');
    });
});