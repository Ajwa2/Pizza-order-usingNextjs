"use client"
import Image from "next/image";
import logo from '../../assets/images/pizza-logo.png'
import { useState } from "react";
import { TextField } from "@mui/material";

export default function AddAdmin(){
    const [adminName,setAdminName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    
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
                    <p className="pt-5 pb-2 border-b-2 font-semibold text-2xl">Add Admin</p>

                    <form encType="multipart/form-data">
                        <div className="mb-4">
                            <TextField
                                id="filled-required"
                                label="Admin Name"
                                type="text"
                                color="warning"
                                value={adminName}
                                onChange={(e) => setAdminName(e.target.value)}
                                className="shadow w-full text-gray-700 mt-5"
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
                    </form>

                    <div className="bg-primary font-semibold text-white rounded text-center py-2">
                        <h3>CONTINUE</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}