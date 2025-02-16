"use client"
import React, { useState } from 'react'
import { ImMinus, ImPlus } from "react-icons/im";
function AccordionItem() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (

        <div className={`
            ${isOpen ? "border-2" : "border-none"}
            flex flex-col border-[var(--yellow)] rounded-[12px] font-medium max-w-max bg-gray-100`}>

            <abbr onClick={handleClick} className='flex justify-between items-center bg-yellow'>
                <h3 className={`bg-[var(--yellow)] py-[10px] px-[20px] rounded-[12px] text-[22px] font-semibold leading-[26.82px] relative 
h3-fluid
                ${isOpen ? "md:left-[50px] sm:left-[30px] xs:left-[10px]" : " "}


                top-[-27px]`} >
                    What is Leitner System?
                </h3>
            </abbr>
            {
                isOpen ? (

                    <p className="flex justify-center items-center line-clamp-5 text-[18px] leading-[21.94px] font-medium sm:pb-[20px] pb-[10px] px-[20px] sm:px-[50px] p-fluid">
                        The Leitner System is a spaced repetition technique using
                        flashcards, developed by Sebastian Leitner in the 1970s. It
                        optimizes review frequency based on how well you remember each card.
                        You divide flashcards into multiple groups, usually five boxes. All
                        new cards start in Box 1. If you remember a card, it moves to the
                        next box; if you forget, it returns to Box 1. Each box has a
                        different review interval: Box 1 is reviewed daily, Box 2 every two
                        days, Box 3 every four days, Box 4 every eight days, and Box 5 every
                        sixteen or more days. This method reinforces difficult material more
                        frequently while reducing review time for familiar content.
                    </p>

                ) : null
            }
        </div>



    )
}

export default AccordionItem
