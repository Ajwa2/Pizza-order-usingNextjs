import Image from "next/image";
import logo from '../assets/pizza-logo.png'
import Link from "next/link";
import { Menu } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";

export default function Navbar() {
    return (
        <div className="flex p-2">
            <div className="flex w-1/6">
                <Image 
                src={logo}
                alt="pizza logo"
                width={30}
                quality={100}
                />
                <h3 className=" text-secondary font-bold">Pizza</h3>
            </div>
            <nav className="w-4/6 flex justify-center gap-12">
                <Link href='/' className=" hover:text-primary active:text-primary ">Home</Link>
                <Link href='/Orders' className="  hover:text-primary active:text-primary">Orders</Link>
                <Link href='/About' className=" hover:text-primary active:text-primary navAbout">Who we are</Link>
            </nav>
            <div className="w-1/6 float-left text-white flex justify-center">
                <button className=" bg-primary px-4 pb-1 font-semibold navAbout">Register</button>
                {/* <MenuSharp className="text-black text-3xl block md:hidden"/> */}
            </div>
        </div>
    )
}
