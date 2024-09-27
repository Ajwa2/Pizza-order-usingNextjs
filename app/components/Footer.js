"use client"
import Link from "next/link";
import { useState } from "react";
import logo from '../assets/pizza-logo.png'
import Image from "next/image";
import { Copyright, Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

export default function Footer() {
    const [feedbackText,setFeedbackText] = useState('')
    return (
        <div>
            <div className="flex justify-between py-10 px-10 bg-footer">
                <nav className="flex gap-10 text-black font-bold pt-11 footerNav">
                    <Link href={'/'} className="hover:text-white hover:underline">Home</Link>
                    <Link href={'/'} className="hover:text-white hover:underline">Order</Link>
                    <Link href={'/'} className="hover:text-white hover:underline">AboutUs</Link>
                </nav>
                <div>
                    <div className="flex justify-center pb-2">
                        <Image src={logo} alt="pizza logo" width={30} quality={100} className="flex justify-center"/>
                        <h3 className=" text-secondary font-bold">Pizza</h3>
                    </div>
                    <div className="flex bg-white rounded-xl p-2">
                        <input 
                            value={feedbackText}
                            onChange={(e)=>{setFeedbackText(e.target.value)}}
                            placeholder="Your feedback..."
                            className="flex-1 outline-none w-72 text-sm pl-2 feedbackWidth"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-primary">
                            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex justify-between bg-black text-white px-10 py-4 footerPolicy">
                <div className="text-gray-300">
                    <p className="flex gap-5 footerPolicy">
                        <small><Copyright fontSize="24"/>2024PizzaAllRightsReseverd</small>
                        <small>Terms & conditions</small>
                    </p>
                </div>
                <div className="flex gap-7">
                    <Link href={"/"}><Facebook/></Link>
                    <Link href={'/'}><LinkedIn/></Link>
                    <Link href={'/'}><Twitter/></Link>
                    <Link href={'/'}><YouTube/></Link>
                </div>
            </div>
        </div>
    )
}
