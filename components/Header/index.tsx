"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignOut } from '../sign-out'


function Header({ session }) {



    return (
        <header className='flex justify-between items-center py-[32px] container w-full mx-auto px-[2rem] xs:px-[3rem] lg:px-[4.5rem]'>
            <h1 className="h1-fluid font-semibold leading-[39px] text-[2rem] flex justify-center text-[#181510]">
                <Link href="/">
                    The Leitner System
                </Link>
            </h1>


            {
                session ? (

                    <SignOut />
                ) : (

                    <Link href="/account/sign-in">
                        <Image
                            height={24}
                            width={24}
                            priority
                            alt='User icon'
                            src="assets/user.svg" />
                    </Link>
                )
            }
        </header>

    )
}

export default Header
