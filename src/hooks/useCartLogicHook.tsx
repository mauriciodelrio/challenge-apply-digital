import { useState, useEffect } from 'react'
import { Cart, CartDetails } from '@/interfaces'

export const useCartLogicHook = () => {

    const [ cart, setCart ] = useState<Cart[]>([]);
    const [ cartDetails, setCartDetails ] = useState<CartDetails[]>([]);
    useEffect(() => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
        setCart(cart);
        const details = cart.map((item: Cart) => {
            return {
                name: item.name,
                price: item.price
            }
        })
        setCartDetails(details);
    }, [])

    const onDelete = (index: number) => {
        const updatedCart = cart.filter((item, i) => i !== index);
        setCart(updatedCart);
        const details = updatedCart.map((item: Cart) => {
            return {
                name: item.name,
                price: item.price
            }
        })
        setCartDetails(details);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    return {
        cart,
        cartDetails,
        onDelete
    }
}
