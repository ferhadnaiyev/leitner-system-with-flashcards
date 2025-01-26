"use client"
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { incrementDisplayedCard } from '@/stores/displayedCard';
import { setIsFlippedForButton } from '@/stores/isFlipped';
import linkStyles from '@/app/styles/link.module.css';
import cardNavStyles from '@/app/styles/CardNav.module.css';
import { useDispatch, useSelector } from 'react-redux'
import findID from '../../utils/findID'
import incrementBoxID from '@/utils/incrementBoxID/index';
import { RootType } from '@/stores/store-provider';
import { Card, CardsDataProps } from '@/types/interfaces';
import classNames from "classnames";
import { boxIDPutRequest } from "@/utils/boxIDPutRequest";


function CardNav({ data }: CardsDataProps) {

    const dispatch = useDispatch();
    const { displayedCardValue } = useSelector((store: RootType) => store.displayedCard);
    const cardsForToday: Card[] = data
    const finishLine: number = data.length;
    const no = async () => {

        const id = (findID(cardsForToday, displayedCardValue, "id"))
        const newBoxID = 1
        try {
            await boxIDPutRequest(id, newBoxID)






            dispatch(setIsFlippedForButton());
            dispatch(incrementDisplayedCard());
        } catch (error) {
            console.error("Error updating boxID:", error);
        }

    }

    const yes = async () => {
        const id = (findID(cardsForToday, displayedCardValue, "id"));
        const newBoxID = incrementBoxID(cardsForToday, displayedCardValue, "boxID");



        try {

            await boxIDPutRequest(id, newBoxID)





            dispatch(setIsFlippedForButton());
            dispatch(incrementDisplayedCard());
        } catch (error) {
            console.error("Error updating boxID:", error);
        }
    }

    return (
        <div className={classNames(cardNavStyles.container)} >

            <button className={classNames(linkStyles.link)} onClick={no} disabled={displayedCardValue === finishLine}>
                <ImCross className={classNames(cardNavStyles.red)} />
            </button>

            <button className={classNames(linkStyles.link)} onClick={yes} disabled={displayedCardValue === finishLine}>
                <FaCheck className={classNames(cardNavStyles.green)} />
            </button>


        </div >
    )
}

export default CardNav