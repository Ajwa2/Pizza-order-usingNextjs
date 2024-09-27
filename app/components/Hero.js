"use client"
import { useState } from 'react'
import Image from 'next/image'
import heroImg from '../assets/images/home.png'
import hero from '../assets/Image1.png'

export default function Hero() {
    const [text, setText] = useState('')
    return (
        <div className="flex  px-aut0  h-screen bg-gradient-to-b from-orange-100 via-orange-300 to-orange-100">
            <div className='w-1/2 flex flex-col align-middle pl-7 pt-10 rightSide'>
                <h1 className="text-8xl heroTitle pl-2 pb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-bold">
                Order us
                </h1>
                <p className='text-black heroText'>In publishing and graphic design, lorem ipsum is a placeholder 
                    text commonly used to demonstrate the visual form of a document the visual form of a 
                    document or a typeface without.
                </p>
                <div className='flex justify-center align-middle gap-3 bg-white p-2 rounded-3xl mt-5 searchBar'>
                    <input
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        placeholder='Search'
                        className='flex-1 pl-2 outline-none'
                    />
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 26 32" fill="currentColor" className="size-7 bg-primary text-white rounded-3xl flex justify-center w-10 h-10" preserveAspectRatio='xMidYMid meet'>
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-end relative overflow-hidden heroImage'>
                <Image src={heroImg} alt='background' className='w-full h-auto' />
                <Image src={hero} alt='foreground' className='absolute left-36 top-7 w-full h-full z-10 overflow-x-hidden'/>
            </div>
        </div>
    )
}
