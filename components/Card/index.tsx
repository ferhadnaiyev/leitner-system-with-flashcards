import { CardsType } from '@/types/interfaces'
import React from 'react'
import CardButton from '../CardButton'






function Card(props: CardsType) {
    const { boxID, definition, termin } = props

    return (
        <div>
            <div className='flex items-center justify-end gap-[2px] relative top-[20px] right-[8px]'>
                {
                    boxID !== 1 ? (
                        <CardButton targetBox="everydayBox" {...props} />
                    ) : (
                        null
                    )
                }

                <CardButton targetBox="nextBox" {...props} />
            </div>

            <div className={`flex bg-[#90B5DA] flex-col rounded-[12px] min-w-[144px] max-w-[144px] h-[145px] px-[10px] py-[20px] gap-[10px] `}>
                <h6 className=' text-[1rem] font-semibold leading-[19.5px]'>{termin}</h6>
                <p className='break-words line-clamp-5  text-[0.75rem] font-normal leading-[14.63px]'>{definition}</p>

            </div>

        </div>
    )
}

export default Card
