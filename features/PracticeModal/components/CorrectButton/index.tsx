"use client"
import SecondaryButton from '@/components/SecondaryButton'
import { useUpdateBoxIdMutation } from '@/stores/slices/cardsApi';
import { incrementCurrentCardIndex } from '@/stores/slices/currentCardIndex';
import React from 'react'
import { useDispatch } from 'react-redux';

function CorrectButton({ id, currentBoxId }) {
    const newBoxId = 7
    const dispatch = useDispatch()
    const [updateBoxId] = useUpdateBoxIdMutation();

    const handleClick = async () => {
        await updateBoxId({ id: id, boxId: newBoxId }).unwrap();
        dispatch(incrementCurrentCardIndex())

    }
    return (
        <SecondaryButton className="px-[18px] text-[18px]" onClick={handleClick}>
            True
        </SecondaryButton>
    )
}

export default CorrectButton
