"use client"
import { CardsDataProps } from '@/types/interfaces'
import classes from '@/app/styles/Flashcards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setIsFlippedForClick } from '@/stores/isFlipped';
import { RootType } from '@/stores/store-provider';
import { VscDebugRestart } from "react-icons/vsc";
import { useRef, useState } from 'react';
import { resetDisplayedCardValue } from '@/stores/displayedCard';
import { GiNextButton } from "react-icons/gi";
import Link from 'next/link';
// import { IoSettings } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";

function FlashCards({ data }: CardsDataProps) {
    const pathname = window.location.pathname;
    const dispatch = useDispatch();
    const ref = useRef(null)
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { displayedCardValue } = useSelector((store: RootType) => store.displayedCard);
    const { isFlipped } = useSelector((store: RootType) => store.isFlipped);
    const finishLine: number = data.length;
    const isFinish = displayedCardValue === finishLine
    const handleFlashcardClick = () => {
        dispatch(setIsFlippedForClick())

    }

    // const togglePopup = () => {
    //     setIsPopupVisible(!isPopupVisible);
    // };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    const handleReset = () => {
        dispatch(resetDisplayedCardValue());
        closePopup();
    };
    const handleReload = () => {
        window.location.reload();
        closePopup();
    };





    return (
        <div>

            {isFinish ? (
                <div className={`${classes.flashcardContainer} ${classes.placeholder}`}>
                    Finish!



                </div>
            ) : (
                data && data.map((card) => (

                    card.queueNumber === displayedCardValue ? (

                        <div
                            ref={ref}
                            onClick={handleFlashcardClick}
                            className={`${classes.flashcardContainer} ${isFlipped ? classes.flipped : ""
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
            )
            }
            {/* <button onClick={togglePopup}><IoSettings /></button> */}
            {(isPopupVisible || isFinish) && (
                <div>
                    <div
                        className={classes.backdrop}
                    ></div>
                    <div
                        className={classes.popup}

                    >
                        <h2 className={classes.heading}>{isFinish ? "Finish!" : "Settings"}</h2>

                        {!isFinish ? (<button onClick={closePopup}>
                            <IoCloseCircleSharp />
                        </button>) : null}
                        <div className={classes.popupButtons} onClick={closePopup}>

                            {/* 
                            <Link href="/" title="Home">
                                <AiFillHome />
                            </Link> */}

                            <button type="button" onClick={handleReset} title='Study the old list'>
                                <VscDebugRestart />
                            </button>
                            <button type='button' onClick={handleReload} title='Study the updated list'>
                                <GiNextButton />
                            </button>
                        </div>
                    </div>
                </div>
            )
            }

        </div >
    )
}

export default FlashCards
