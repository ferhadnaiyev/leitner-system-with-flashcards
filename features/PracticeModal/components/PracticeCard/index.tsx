import React from 'react'
import CorrectButton from '../CorrectButton'
import FalseButton from '../FalseButton'
import { cn } from '@/utils/MergeTailwindcss'

function PracticeCard({ className = "", boxId, id, termin, definition, index, style }) {

    return (
        <div className={cn(`bg-red flex flex-col justify-between bg-[#90B5DA] rounded-[12px] max-w-[300px] min-w-[300px] min-h-[290px] px-[24px] py-[34px]`,
            className,
        )}
            style={style}>
            <div>
                <h6
                    className=" pb-[3px] placeholder:text-[30px] text-[30px] font-semibold leading-[36px] truncate border-b-[0.1px] border-[#1A2D40]  bg-transparent "
                >
                    {termin}
                </h6>
                <p className="break-words line-clamp-5  text-[17px] font-normal leading-[20px] bg-transparent  resize-none ">
                    {definition}
                </p>
            </div>
            <div className='flex justify-between items-center gap-[7px]'>
                <CorrectButton id={id} currentBoxId={boxId} />
                <FalseButton id={id} currentBoxId={boxId} />
            </div>
        </div>
    )
}

export default PracticeCard
