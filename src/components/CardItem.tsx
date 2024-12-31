import Image from 'next/image'
import React from 'react'

interface Props {
    genre: string;
    image: string;
    productName: string;
    price: string;
}

export const CardItem = (props: Props) => {

    const { genre, image, productName, price } = props;

    return (
        <div className='flex flex-col p-6 gap-2 bg-white rounded-lg border border-0.5 w-card h-card'>
            <div className='flex justify-center items-center rounded-t-lg'>
                <Image src='/game-images/cyberpunk2077.jpeg' height={240} width={332} className='rounded-t-lg' alt="dvfdf" />
            </div>
            <div className='text-neutral-500 font-bold'>{ genre }</div>
            <div className='flex justify-between items-center gap-8'>
                <div className='text-lg font-bold text-item-fill'>{ productName }</div>
                <div className='text-lg font-bold text-item-fill'>$ { price } </div>
            </div>
            <div className='flex justify-between items-center'>
                <button className='px-6 py-4 rounded-lg w-full h-14 border rounded-lg border-cta-stroke-primary text-cta-stroke-secondary font-bold'>ADD TO CART</button>
            </div>
        </div>
    )
}
