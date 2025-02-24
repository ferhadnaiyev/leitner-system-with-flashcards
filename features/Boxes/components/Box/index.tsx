"use client"
import { setDisplayedBoxId, setDisplayedBoxTitle } from '@/stores/slices/displayedBox'
import { BoxType } from '@/types/interfaces'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import PracticeButton from '../PracticeButton'

function Box(
    props
        : BoxType) {
    const { id,
        title,
        practiceRequired, } = props
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setDisplayedBoxId(id))
        dispatch(setDisplayedBoxTitle(title))
    }

    return (
        <div className='flex justify-center items-center'>

            <div className="group w-[146px] h-[200px] flex flex-col items-center rounded-lg py-1 min-w-[146px] relative">
                <div className=' bg-white' onClick={handleClick}>

                    <Image
                        src="/assets/Box.svg"
                        alt='Card Box'
                        width={140}
                        height={140}
                        priority
                    />
                    <p className='font-semibold text-[1rem] leading-[19.5px] flex items-center justify-center'>
                        {title}
                    </p>
                </div>
                <div className='absolute bottom-2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-300 w-full'>
                    <PracticeButton onClick={(e) => e.stopPropagation()} {...props} />
                </div>
            </div>

        </div>
    )
}

export default Box
