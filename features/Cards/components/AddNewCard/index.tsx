"use client"
import { toggle } from '@/stores/slices/modal';
import React from 'react'
import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';

function AddNewCard() {

    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(toggle())} title="Add New Card" className='bg-red flex flex-col items-center justify-center bg-[#90B5DA] rounded-[12px] min-w-[175px] min-h-[170px] px-[14px] py-[20px] gap-[16px] text-[#1A2D40] '>

            <div className='flex items-center flex-col'>

                <IoAddSharp className='size-[40px] text-[40px] font-bold' />
                <div className='text-[24px] font-semibold'>Add a Card</div>
            </div>
        </div>
    )
}

export default AddNewCard
