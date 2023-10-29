import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
        <Image src="/logo.png" className="w-24 object-cover mt-1 " width={200} alt="logo" height={100} />
        <p className="text-sm -mt-4">
            All rights reserved{" "}
            <Link className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" href="https://reactbd.com" target="_blank">@reactbd.com</Link>
        </p>
    </div>
  )
}

export default Footer