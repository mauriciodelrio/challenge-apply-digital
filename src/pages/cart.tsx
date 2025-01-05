import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { CartItem, OrderSummary } from '@/components'
import {  useCartLogicHook } from '@/hooks'
const Cart = () => {

    const { cart, cartDetails, onDelete } = useCartLogicHook();

    return (
        <div className='h-full mb-40'>
            <div className='flex max-w["1280px"] gap-4 flex-row flex-wrap py-12 md:px-32 px-8'>
                <Link href='/'>
                    <ArrowLeftIcon className='size-6 text-gray-800 cursor-pointer'/>
                </Link>
                Back to Catalog
            </div>
            <div className='flex max-w["1280px"] gap-4 flex-col flex-wrap py-4 md:px-32 px-8'>
                <div className='text-xl font-bold'>Your Cart</div>
                {
                    cart && cart.length > 0 && (
                        <div className=''> {cart.length} Items </div>
                    )
                }
            </div>
            <div className='md:flex max-w["1280px"] gap-4 md:px-32 px-2'>
                <div className='md:w-1/2 w-full flex flex-col gap-4 md:p-8 p-4'>
                    {
                        cart.map((item, index) => {
                            return <CartItem onDelete={()=> onDelete(index)} key={index} genre={item.genre} image={item.image} name={item.name} price={item.price} description={item.description} />
                        })
                    }
                </div>
                <div className='md:w-1/2 w-full flex flex-col gap-4 md:p-8 p-2'>
                    <OrderSummary cartDetails={cartDetails} />
                </div>
            </div>
        </div>
    )
}

export default Cart
