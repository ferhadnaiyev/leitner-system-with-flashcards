"use client"
import { toggle } from '@/stores/slices/modal';
import React from 'react'
import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';

function AddNewCard() {

    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(toggle())} title="Add New Card" className='flex bg-[#c0d9f3] flex-col justify-between items-center rounded-[12px] min-w-[144px] max-w-[144px] h-[calc(145px + 13px)] px-[10px] py-[20px] gap-[10px] relative'>


            <IoAddSharp className='relative text-[60px] top-[13px]' />

            <div>Add New Card</div>
        </div>
    )
}

export default AddNewCard
