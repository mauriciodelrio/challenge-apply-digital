import { useState } from 'react'

interface Props {
    genre: string;
    image: string;
    name: string;
    price: number;
    isNew?: boolean;
    description?: string;
}

export const useAddToCartHook = (props:Props) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const { genre, image, name, price, isNew, description } = props;
    const manageLocalStorage = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
        const newItem = {
            genre,
            image,
            name,
            price,
            isNew,
            description,
        }
        cart.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        setTimeout(() => {
            setAddedToCart(true);
            setTimeout(() => {
                setAddedToCart(false);
            }, 2000)
        }, 200)
    }

    return {
        addedToCart,
        manageLocalStorage
    }
}
