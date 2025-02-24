import SecondaryButton from '@/components/SecondaryButton'
import { useUpdateBoxIdMutation } from '@/stores/slices/cardsApi';
import { incrementCurrentCardIndex } from '@/stores/slices/currentCardIndex';
import React from 'react'
import { useDispatch } from 'react-redux';

function FalseButton({ id, currentBoxId }) {
    const newBoxId = 7;
    const dispatch = useDispatch()
    const [updateBoxId] = useUpdateBoxIdMutation();

    const handleClick = async () => {
        await updateBoxId({ id: id, boxId: newBoxId }).unwrap();
        dispatch(incrementCurrentCardIndex())

    }

    return (
        <SecondaryButton onClick={handleClick} className='text-[18px] bg-[var(--red)] px-[18px]'>
            False
        </SecondaryButton>
    )
}

export default FalseButton
