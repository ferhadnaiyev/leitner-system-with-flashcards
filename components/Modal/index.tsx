"use client"
import { useInsideOutsClick } from '@/hooks/useInsideOutsClick';
import { toggle } from '@/stores/slices/modal';
import { usePostCardMutation } from '@/stores/slices/cardsApi';
import { CardsType } from '@/types/interfaces';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "sonner";
import { IoAddSharp } from "react-icons/io5";
import { useGetCardsQuery } from '@/stores/slices/cardsApi';

function Modal() {
    const modal = useSelector((state: { modal: { modal: boolean } }) => state.modal.modal);
    const dispatch = useDispatch();
    const [termin, setTermin] = useState("");
    const [definition, setDefinition] = useState("");
    const [postCard] = usePostCardMutation();

    const { refetch } = useGetCardsQuery();

    const newCard: CardsType = {
        id: String(Date.now()),
        termin,
        definition,
        boxID: 1,
    };

    const handleAddCard = async (newCard: CardsType) => {


        // check inputs
        if (!termin.trim() || !definition.trim()) {
            toast.error("Please fill in both fields.");
            return;
        }

        // add new card database
        try {
            await postCard(newCard).unwrap();

            refetch();
            toast.success("Card added successfully!");


            setTermin("");
            setDefinition("");
            dispatch(toggle());
        } catch {
            toast.error("An error occurred while adding the card.");
        }
    };

    const modalRef = useInsideOutsClick<HTMLDivElement>(
        () => { },
        () => {
            if (modal) {
                dispatch(toggle());
            }
        }
    );

    return (
        <div>
            {
                modal ? (
                    <div className={` fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}>
                        <div ref={modalRef} className="flex justify-center flex-col items-center gap-[20px]">


                            <div className='flex bg-[#90B5DA] flex-col rounded-[12px] min-w-[200px] max-w-[200px] h-[205px] px-[10px] py-[20px] gap-[10px] '>
                                <input
                                    placeholder="Termin"
                                    value={termin}
                                    type="text"
                                    onChange={(e) => setTermin(e.target.value)}

                                    className='text-[1rem] font-semibold leading-[19.5px] bg-transparent border-gray-700 placeholder-gray-700 border-b-[0.2px] focus:outline-none'
                                />

                                <textarea
                                    placeholder="Definition"
                                    value={definition}
                                    maxLength={105}
                                    rows={5}
                                    onChange={(e) => setDefinition(e.target.value)}

                                    className=' text-[0.75rem] font-normal leading-[14.63px] bg-transparent border-none placeholder-gray-700 resize-none focus:outline-none'
                                ></textarea>
                            </div>



                            <div>
                                <button
                                    className='flex items-center justify-center gap-2 bg-[#212121] text-white py-[10px] px-[20px] rounded-[12px]'
                                    onClick={() => handleAddCard(newCard)}
                                >
                                    <IoAddSharp className='text-[1.3rem]' /> Add
                                </button>
                            </div>

                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Modal;
