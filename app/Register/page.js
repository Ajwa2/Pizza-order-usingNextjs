"use client"
import Image from "next/image";
import logo from '../assets/images/pizza-logo.png'
import { useState } from "react";
import Link from "next/link";
import { TextField } from "@mui/material";

export default function SignUp(){
    const [adminName,setAdminName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [restaurantName, setRestaurantName] = useState('')

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

                    <form encType="multipart/form-data">
                        <div className="mb-4">
                            <TextField
                                id="filled-required"
                                label="Admin Name"
                                type="text"
                                color="warning"
                                value={adminName}
                                onChange={(e) => setAdminName(e.target.value)}
                                className="shadow w-full text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <TextField
                                id="filled-required"
                                label="Email Address"
                                type="text"
                                color="warning"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                className="shadow w-full text-gray-700"
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
    
                        <div className="mb-4">
                            <TextField
                                id="outlined-password-input"
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                color="warning"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="shadow w-full text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <TextField
                                id="outlined-number"
                                label="Phone Number"
                                type="number"
                                color="warning"
                                slotProps={{
                                    inputLabel: {
                                    shrink: true,
                                    },}}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="shadow w-full text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <TextField
                                id="filled-required"
                                label="Restaurant Name"
                                type="text"
                                color="warning"
                                value={restaurantName}
                                onChange={(e) => setRestaurantName(e.target.value)}
                                className="shadow w-full text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <TextField
                                id="filled-required"
                                label="Location"
                                type="text"
                                color="warning"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="shadow w-full text-gray-700"
                            />
                        </div>
                    </form>
                    <div className="text-primary flex justify-center py-2 border w-full border-gray-500 rounded">
                        <h3>Upload Logo</h3>
                    </div>
                    <div className="flex gap-2 items-center my-4">
                        <input 
                            type="checkbox" 
                            // checked={isChecked}
                            // onChange={handleCheckboxChange} 
                            className="mr-2 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <p>I accept the Terms and Conditions</p>
                    </div>
                    <div className="bg-primary font-semibold text-white rounded text-center py-2">
                        <h3>SIGN UP</h3>
                    </div>
                    <div className="flex gap-1 justify-center pt-3">
                        <p>Already have an account</p>
                        <Link href={'/Register/Login'} className="text-primary">Login</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}