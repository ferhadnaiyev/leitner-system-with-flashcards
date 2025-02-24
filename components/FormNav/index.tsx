"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const FormNav = () => {
    const pathname = usePathname();
    return (
        <nav className="w-full font-helvetica">
            <ul className="flex bg-white rounded-[0.3rem] sm:rounded-[0.625rem] p-[2px] sm:p-[0.3125rem]">
                <li className={`
    
                    ${(pathname == "/account/sign-in") ? "bg-[var(--blue)]" : ""}
             rounded-[0.3rem] sm:rounded-[0.625rem] p-[0.25rem] sm:py-[0.5rem] w-full flex justify-center items-center`}>

                    <Link href="/account/sign-in" className="  sm:font-semibold  form-link-fluid">Sign In</Link>

                </li>
                <li className={`
    
                    ${(pathname == "/account/sign-up") ? "bg-[var(--blue)]" : ""}
                rounded-[0.3rem] sm:rounded-[0.625rem] p-[0.25rem] sm:py-[0.5rem] w-full flex justify-center items-center`}>

                    <Link href="/account/sign-up" className=" sm:font-semibold  form-link-fluid">Register</Link>
                </li>
            </ul>
        </nav>

    )
}

export default FormNav
