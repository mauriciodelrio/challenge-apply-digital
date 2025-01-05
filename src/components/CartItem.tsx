import React from 'react'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
    genre: string;
    image: string;
    name: string;
    price: number;
    onDelete: () => void;
    description?: string;
}

export const CartItem = (props:Props) => {

    const { genre, image, name, price, onDelete, description } = props;
    return (
        <>
            <div className="w-full flex flex-row gap-4 relative my-2">
                <div className="w-1/3">
                    <Image src={image} width={200} height={200} alt="game" />
                </div>
                <div className="w-2/3 flex flex-col gap-2">
                    <div className="text-lg text-neutral-500">{genre}</div>
                    <div className="text-lg font-bold">{name}</div>
                    <div className="text-sm text-neutral-500">{description}</div>
                    <div className="text-lg font-bold text-end absolute bottom-0 right-0">${price}</div>
                </div>
                <div className={`absolute right-0 top-0 w-6 h-6 flex justify-center items-center`}>
                    <XMarkIcon data-testid="delete-icon" className="size-6 cursor-pointer text-neutral-500" onClick={onDelete} />
                </div>
            </div>
            <div className="w-full flex flex-col gap-2 border-b-2"></div>
        </>
    )
}
