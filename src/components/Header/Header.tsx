"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineSearch } from 'react-icons/hi';
import { BiCaretDown } from 'react-icons/bi';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '../../../type';
import { signIn, useSession } from 'next-auth/react';
import { addUser } from '@/store/nextSlice';

const Header = () => {
  const {productData, favoriteData,userInfo} = useSelector((state:StateProps)=>state.next)
  const {data:session} = useSession();
  
  const dispatch = useDispatch();
  useEffect(()=>{
    if(session){
        dispatch(addUser({
            name:session?.user?.name,
            email:session?.user?.email,
            image:session?.user?.image,
        }))
    }
  },[session])
  return (
    <div className="w-full h-20 flex items-center bg-amazon_blue text-lightText sticky top-0 z-50">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">

            <Link href={'/'} className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] ">
                <Image src="/logo.png" className="w-28 object-cover mt-1 " width={200} alt="logo" height={100} />
            </Link>

            <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 xl:inline-flex items-center justify-center h-[70%] hidden gap-1">
               <SlLocationPin />
               <div className="text-xs">
                    <p>Deliver to</p>
                    <p className="text-white font-bold uppercase">USA</p>
               </div>
            </div>

            <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
                <input className="h-full w-full rounded-md placeholder:text-sm text-base px-2 text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow " type="text" placeholder="Search next_amazon_yt products" />
                <span className="text-2xl bg-amazon_yellow flex justify-center items-center text-black w-12 h-full absolute right-0 rounded-tr-md rounded-br-md">
                    <HiOutlineSearch />
                </span>
            </div>
            {
                userInfo?(
                    <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
                        <img src={userInfo.image} alt="userImage" className="w-8 h-8 rounded-full object-cover" />
                        <div className="text-xs text-gray-100 flex-col justify-between">
                            <p className="text-white font-bold">{userInfo.name}</p>
                            <p>{userInfo.email}</p>
                        </div>
                    </div>
                ):(
                    <>
                    <div onClick={()=>signIn()} className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] ">
                    <p>Hello, sign in</p>
                    <p className="text-white font-bold flex items-center">
                        Account & Lists{" "}
                        <span>
                            <BiCaretDown />
                        </span>
                    </p>
                </div></>
                )
            }
           

            <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                <p>Marked</p>
                <p className="text-white font-bold">& Favorite</p>
                    {
                        favoriteData.length > 0 && (
                            <span className="text-xs flex justify-center items-center absolute w-4 h-4 border-[1px] border-gray-400 text-amazon_yellow right-2 top-2 ">{favoriteData.length}</span>
                        )
                    }
                
            </div>

            <Link href="/cart" className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                <Image className="w-auto object-cover h-8" src="/cartIcon.png" alt="cartImage" width={100} height={100} />
                <p className="text-xs text-white font-bold mt-3">Cart</p>
                <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">{productData?productData.length:0}</span>
            </Link>

        </div>
    </div>
  )
}

export default Header