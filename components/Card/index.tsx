import { CardsItem } from '@/types/interfaces'
import React from 'react'

function Card({ definition, termin }: CardsItem) {
    return (

        <div className='flex bg-[#90B5DA] flex-col rounded-[12px] min-w-[144px] max-w-[144px] h-[145px] px-[10px] py-[20px] gap-[10px] '>
            <h6 className=' text-[1rem] font-semibold leading-[19.5px]'>{termin}</h6>
            <p className=' line-clamp-5 text-[0.75rem] font-normal leading-[14.63px]'>{definition}</p>
        </div>
    )
}

export default Card
