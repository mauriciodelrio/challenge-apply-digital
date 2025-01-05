import React from 'react'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
export const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-8 md:px-32 py-5 bg-Surface-Secondary'>
        <div>GamerShop</div>
        <div>
          <Link href='/cart'>
            <ShoppingCartIcon  data-testid='cart-icon' className='size-6 text-gray-800 cursor-pointer'/>
          </Link>
        </div>
    </div>
  )
}
