import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TopBar } from '../TopBar'

jest.mock('next/link', () => {
    return ({ children, ...rest }: { children: React.ReactElement }) => React.cloneElement(children, { ...rest })
})

jest.mock('@heroicons/react/24/outline', () => ({
    ShoppingCartIcon: () => <svg data-testid="shopping-cart-icon" />
}))

describe('TopBar', () => {
    it('renders the GamerShop text', () => {
        render(<TopBar />)
        expect(screen.getByText('GamerShop')).toBeInTheDocument()
    })

    it('renders the shopping cart icon', () => {
        render(<TopBar />)
        expect(screen.getByTestId('shopping-cart-icon')).toBeInTheDocument()
    })
})