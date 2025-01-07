"use client"
import { CardsDataProps } from '@/types/interfaces'
import classes from '@/app/styles/Flashcards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setIsFlippedForClick } from '@/stores/isFlipped';
import { RootType } from '@/stores/store-provider';




function FlashCards({ data }: CardsDataProps) {
    const dispatch = useDispatch();

    const { displayedCardValue } = useSelector((store: RootType) => store.displayedCard);
    const { isFlipped } = useSelector((store: RootType) => store.isFlipped);

    return (
        <div>

            {
                data && data.map((card) => (

                    card.queueNumber === displayedCardValue ? (

                        <div
                            onClick={() => dispatch(setIsFlippedForClick())}
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
