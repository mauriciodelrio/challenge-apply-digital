import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-neutral-700 fixed bottom-0 w-full px-32 py-10 z-20'>
      <Link href='/'>
        <Image src='/logo.png' width={100} height={100} alt='logo' />
      </Link>
    </div>
  )
}
