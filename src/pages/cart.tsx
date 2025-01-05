import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { CartItem, OrderSummary } from '@/components'
import {  useCartLogicHook } from '@/hooks'
const Cart = () => {

    const { cart, cartDetails, onDelete } = useCartLogicHook();

    return (
        <div className='h-full mb-40'>
            <div className='flex max-w["1280px"] gap-4 flex-row flex-wrap py-12 px-32'>
                <Link href='/'>
                    <ArrowLeftIcon className='size-6 text-gray-800 cursor-pointer'/>
                </Link>
                Back to Catalog
            </div>
            <div className='flex max-w["1280px"] gap-4 flex-col flex-wrap py-4 px-32'>
                <div className='text-xl font-bold'>Your Cart</div>
                {
                    cart && cart.length > 0 && (
                        <div className=''> {cart.length} Items </div>
                    )
                }
            </div>
            <div className='flex max-w["1280px"] gap-4 px-32'>
                <div className='w-1/2 flex flex-col gap-4 p-8'>
                    {
                        cart.map((item, index) => {
                            return <CartItem onDelete={()=> onDelete(index)} key={index} genre={item.genre} image={item.image} name={item.name} price={item.price} />
                        })
                    }
                </div>
                <div className='w-1/2 flex flex-col gap-4 p-8'>
                    <OrderSummary cartDetails={cartDetails} />
                </div>
            </div>
        </div>
    )
}

export default Cart
