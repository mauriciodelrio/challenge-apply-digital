import React from 'react'

interface CartDetails {
    name: string;
    price: number;
}

export const OrderSummary = ({cartDetails}:{cartDetails: CartDetails[]}) => {

  return (
    <>
        <div className='flex flex-col p-8 border-2 border-gray-200 rounded-lg gap-4'>
            <div className="text-xl font-bold">Order Summary</div>
            {
                cartDetails.length > 0 && (
                    <div className="text-lg">{cartDetails.length} Items </div>
                )
            }
            <div className="flex flex-row gap-4 flex-col justify-between mt-8">
                {
                    cartDetails.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row gap-4 justify-between  text-neutral-800">
                                <div className="text-lg">{item.name}</div>
                                <div className="text-lg">${item.price}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='gap-4 w-full border-b-2 border-gray-200 my-2'></div>
            <div className="flex flex-row gap-4 justify-between mb-8">
                <div className="text-lg font-bold">Order Total</div>
                <div className="text-lg font-bold">${cartDetails.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</div>
            </div>
        </div>
        <div>
            <button className='flex w-full rounded-md justify-center py-4 gap-2 bg-cta-fill-primary text-white'>
                Checkout
            </button>
        </div>
    </>
  )
}
