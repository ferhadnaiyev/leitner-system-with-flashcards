"use client"
import { CardsDataProps } from '@/types/interfaces'
import classes from '@/app/styles/Flashcards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setIsFlippedForClick } from '@/stores/isFlipped';
import { RootType } from '@/stores/store-provider';

import { useRef } from 'react';



function FlashCards({ data }: CardsDataProps) {
    const dispatch = useDispatch();
    const ref = useRef(null)
    const { displayedCardValue } = useSelector((store: RootType) => store.displayedCard);
    const { isFlipped } = useSelector((store: RootType) => store.isFlipped);


    const handleClickInside = () => {

        console.log('clicked inside')
    }
    const handleFlashcardClick = () => {
        dispatch(setIsFlippedForClick())
        handleClickInside()
    }

    return (
        <div>

            {
                data && data.map((card) => (

                    card.queueNumber === displayedCardValue ? (

                        <div
                            ref={ref}
                            onClick={handleFlashcardClick}
                            className={`${classes.flashcardSecondaryContainer} ${isFlipped ? classes.flipped : ""
                                }`}
                            key={card.id}
                        >
                            <div className={classes.front_side}>

                                {card.termin}
                            </div>

                            <div className={classes.back_side}>

                                {card.definition}
                            </div>
                        </div>
                    ) : null
                ))

            }

        </div>
    )
}

export default FlashCards
