import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-neutral-700 fixed bottom-0 w-full px-32 py-8 z-20'>
        <Image src='/logo.png' width={100} height={100} alt='logo' />
    </div>
  )
}
