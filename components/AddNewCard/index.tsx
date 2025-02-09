"use client"
import { toggle } from '@/stores/slices/modal';
import React from 'react'
import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';

function AddNewCard() {

    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(toggle())} title="Add New Card" className='flex bg-[#90B5DA] flex-col justify-center items-center rounded-[12px] min-w-[144px] max-w-[144px] h-[145px] px-[10px] py-[20px] gap-[10px] '>
            <IoAddSharp className='text-[60px]' />
        </div>
    )
}

export default AddNewCard
