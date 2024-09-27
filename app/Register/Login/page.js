"use client"
import Image from "next/image";
import logo from '../../assets/images/pizza-logo.png'
import { TextField } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function LogIn(){
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className="flex">
            <div className="bg-primary w-1/2 flex justify-center items-center leftSide">
                <Image src={logo} alt="Logo"/>
            </div>
            <div className="flex bg-white items-center justify-center w-1/2 min-h-screen py-14 rightSide">
                <div className="w-96">
                    <div className="flex mb-4">
                        <Image src={logo} alt="Pizza Logo" className="w-12 h-12" />
                        <h2 className="text-2xl font-bold mb-6 text-center text-secondary">Pizza</h2>
                    </div>
                    <p className="pt-7 pb-4 border-b-2 font-semibold text-3xl">Login</p>

                    <form encType="multipart/form-data">
                        <div className="mb-4">
                            <TextField
                                id="filled-required"
                                label="Email Address"
                                type="text"
                                color="warning"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                className="shadow w-full text-gray-700 mt-5"
                            />
                        </div>
        
                        <div className="mb-4">
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                color="warning"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow w-full text-gray-700"
                            />
                        </div>
                    </form>
                    <div className="flex gap-2 items-center my-4">
                        <input 
                            type="checkbox" 
                            // checked={isChecked}
                            // onChange={handleCheckboxChange} 
                            className="mr-2 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <p>Remember me</p>
                    </div>
                    <div className="bg-primary font-semibold text-white rounded text-center py-2">
                        <h3>LOGIN</h3>
                    </div>
                    <div className="flex gap-1 justify-center pt-3">
                        <p>Have an account?</p>
                        <Link href={'/Register'} className="text-primary">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}