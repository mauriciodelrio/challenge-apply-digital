import { useState } from 'react'

interface Props {
    genre: string;
    image: string;
    name: string;
    price: number;
    isNew?: boolean;
}

export const useAddToCartHook = (props:Props) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const { genre, image, name, price, isNew } = props;
    const manageLocalStorage = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
        const newItem = {
            genre,
            image,
            name,
            price,
            isNew
        }
        cart.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        setTimeout(() => {
            setAddedToCart(true);
            setTimeout(() => {
                setAddedToCart(false);
            }, 2000)
        }, 200)
        console.log('Item added to cart:', newItem);
        console.log('Cart:', localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []);
    }

    return {
        addedToCart,
        manageLocalStorage
    }
}
