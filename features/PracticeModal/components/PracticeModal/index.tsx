"use client"
import Modal from "@/components/Modal"
import { toggle } from "@/stores/slices/practiceModalIsOpen";
import { useDispatch, useSelector } from "react-redux"
import PracticeCard from "../PracticeCard";
import { useGetCardsQuery } from "@/stores/slices/cardsApi";
import { useState } from "react";
import { RootType } from "@/stores/store-provider";






function PracticeModal() {

    const { currentCardIndex } = useSelector((state: RootType) => state.currentCardIndex);
    const practiceModalIsOpen = useSelector((state: { practiceModalIsOpen: { practiceModalIsOpen: boolean } }) => state.practiceModalIsOpen.practiceModalIsOpen);
    const { displayedBoxId, displayedBoxTitle } = useSelector((state: RootType) => state.displayedBox);
    const dispatch = useDispatch()

    const { data, isLoading, error } = useGetCardsQuery();
    const cards = data?.data || [];

    const filteredCards = cards.filter((item) => item.boxId === displayedBoxId);

    return (
        <Modal modal={practiceModalIsOpen} outClickFunction={() => dispatch(toggle())}>
            {displayedBoxTitle} Cards





            <div className="flex justify-center gap-[12px] overflow-x-auto w-full scroll-m-1 scrollable">
                {filteredCards.length > 0 ? (
                    filteredCards.map((item) => <PracticeCard key={item.id} {...item} />)
                ) : (
                    <div className="font-semibold text-center w-full bg-[var(--blue)] max-w-max text-[3rem] py-[20px] px-[40px] rounded-[20px]">
                        This Box is Empty !
                    </div>
                )}

            </div>





        </Modal>
    )
}

export default PracticeModal
