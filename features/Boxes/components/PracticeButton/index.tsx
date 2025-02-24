"use client"


import SecondaryButton from '@/components/SecondaryButton'
import { resetCurrentCardIndex } from '@/stores/slices/currentCardIndex'
import { setDisplayedBoxId, setDisplayedBoxTitle } from '@/stores/slices/displayedBox'
import { toggle } from '@/stores/slices/practiceModalIsOpen'
import React from 'react'
import { useDispatch } from 'react-redux'


function PracticeButton({ onClick, id, title }) {

    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.stopPropagation()
        console.log("Practice button clicked")

        dispatch(resetCurrentCardIndex())
        dispatch(toggle()) //open close modal
        dispatch(setDisplayedBoxId(id))
        dispatch(setDisplayedBoxTitle(title))

        if (onClick) {
            onClick(e)
        }
    }

    return (
        <SecondaryButton onClick={handleClick}
            className='bg-[var(--red)]  py-[8px] rounded-[0.25rem]' >
            Practice
        </SecondaryButton>
    )
}

export default PracticeButton
