import { useDeleteCardMutation } from '@/stores/slices/cardsApi';
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";



function DeleteButton({ cardId }: { cardId: string }) {
    const [deleteCard, { isLoading, isError }] = useDeleteCardMutation();
    const handleDelete = async () => {
        try {
            await deleteCard({ id: cardId }).unwrap();
            console.log("Card deleted successfully");
        } catch (error) {
            console.error("Failed to delete card", error);
        }
    };
    return (
        <div>
            <button onClick={handleDelete} disabled={isLoading} className='bg-[var(--red)] p-[6px] max-w-min rounded-[0.25rem]'>
                <FaTrashAlt className='text-white size-[13px]' />
            </button>
            {isError && <p>Failed to delete card</p>}
        </div>
    )
}

export default DeleteButton
