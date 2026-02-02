"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Button from "./Button"

type NavLink = {
    name: string
    path: string
}

function Header() {

    const pathname = usePathname();

    const [menuState, setMenuState] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    }

    const navLinks: NavLink[] = [
        { name: "Studios", path: "/" },
        { name: "Services", path: "/a" },
        { name: "Stories", path: "/b" },
        { name: "Pricing", path: "/c" },
    ]

    return (
        <section className="fixed top-0 w-full z-30 backdrop-blur-xl bg-my-white/60 font-medium text-[15px]">
            <div className="w-full flex justify-between items-center lg:py-4 py-2 px-3 max-w-7xl mx-auto relative">
                <Link href="/" className="">
                    <Image
                        src="/images/purityalphalogo.svg"
                        alt="Purity Alpha Logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="max-w-86 w-full lg:flex justify-between hidden">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;

                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${isActive
                                    ? "border border-my-gray/30 shadow-lg shadow-my-gray/5" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="lg:flex hidden">
                    <Button btnText="Get Started" className="rounded-2xl bg-my-black text-my-white hover:text-my-black hover:bg-my-white hover:ring hover:ring-my-gray px-6 py-3"/>
                </div>
                <div onClick={toggleMenu} className="flex flex-col space-y-1 cursor-pointer lg:hidden items-end mr-5">
                    <div className="h-0.5 w-6 bg-my-black rounded-b-full"></div>
                    <div className="h-0.5 w-6 bg-my-black rounded-b-full"></div>
                    <div className="h-0.5 w-4 bg-my-black rounded-b-full"></div>
                </div>

                <div onClick={toggleMenu} className={`mt-2 mr-2 duration-500 top-full bg-my-white  absolute py-6 right-0 w-42 rounded-2xl flex flex-col ring ring-my-gray/20 ${menuState ? "opacity-100 visible" : "opacity-0 invisible"} lg:hidden`}>
                    {navLinks.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="py-2 px-6 hover:bg-my-blue-white/30 transition-all"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Header