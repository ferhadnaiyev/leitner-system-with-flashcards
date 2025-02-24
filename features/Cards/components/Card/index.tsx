
import React from 'react'
import DeleteButton from '../DeleteButton';







function Card(props) {
    const { id, definition, termin } = props;
    console.log(props)
    return (

        <div className={`bg-red flex flex-col justify-between bg-[#90B5DA] rounded-[12px] min-w-[175px] w-[175px] min-h-[170px] px-[14px] py-[20px] gap-[11px] `}>
            <div className='min-[147px] text-[var(--dark)]'>
                <h6 className='pb-[3px] text-[1rem] font-semibold leading-[19.5px] truncate border-b-[0.1px] border-[#1A2D40]' >{termin}</h6>

                <p className='break-words line-clamp-5  pt-[2px] text-[0.75rem] font-normal leading-[14.63px]'>{definition}</p>
            </div>
            <div className='flex justify-end items-center'>
                <DeleteButton cardId={id} />
            </div>

        </div>

    )
}

export default Card
