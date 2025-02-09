"use client"
import { setDisplayedBox } from '@/stores/slices/displayedBox'
import { BoxItem } from '@/types/interfaces'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

function Box({ name, boxID, practiceRequired }: BoxItem) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setDisplayedBox(boxID))
    }
    return (
        <div onClick={handleClick} className={`w-[146px] h-[200px] gap-[1rem] flex flex-col rounded-lg  py-1 ${practiceRequired ? "bg-[#ADD8E6]" : ""}`}>
            <Image
                src="/assets/Box.svg"
                alt='Card Box'
                width={140}
                height={140}
                priority
            />
            <p className='font-semibold text-[1rem] leading-[19.5px] flex items-center justify-center'>
                {name}
            </p>
        </div>
    )
}

export default Box
