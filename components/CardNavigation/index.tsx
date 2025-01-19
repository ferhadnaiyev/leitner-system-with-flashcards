"use client"
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import axios from 'axios';
import { incrementDisplayedCard } from '@/stores/displayedCard';
import { setIsFlippedForButton } from '@/stores/isFlipped';
import linkStyles from '@/app/styles/link.module.css';
import cardNavStyles from '@/app/styles/CardNav.module.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import findID from '../../utils/findID'
import incrementBoxID from '@/utils/incrementBoxID/index';
import { RootType } from '@/stores/store-provider';
import { Card, CardsDataProps } from '@/types/interfaces';
import classNames from "classnames";


function CardNav({ data }: CardsDataProps) {
    const dispatch = useDispatch();
    const { displayedCardValue } = useSelector((store: RootType) => store.displayedCard);
    const cardsForToday: Card[] = data

    const no = async () => {

        const id = (findID(cardsForToday, displayedCardValue, "id"))

        try {

            await axios.put(`http://localhost:3000/api/cards/${id}`, {
                boxID: 1,
            });





            dispatch(setIsFlippedForButton());
            dispatch(incrementDisplayedCard());
        } catch (error) {
            console.error("Error updating boxID:", error);
        }

    }

    const yes = async () => {
        const id = (findID(cardsForToday, displayedCardValue, "id"));
        const boxID = incrementBoxID(cardsForToday, displayedCardValue, "boxID");



        try {

            await axios.put(`http://localhost:3000/api/cards/${id}`, {
                boxID: boxID,
            });





            dispatch(setIsFlippedForButton());
            dispatch(incrementDisplayedCard());
        } catch (error) {
            console.error("Error updating boxID:", error);
        }
    }

    return (
        <div className={classNames(cardNavStyles.container)} >

            <button className={classNames(linkStyles.link)} onClick={no}>
                <ImCross className={classNames(cardNavStyles.red)} />
            </button>

            <button className={classNames(linkStyles.link)} onClick={yes}>
                <FaCheck className={classNames(cardNavStyles.green)} />
            </button>


        </div >
    )
}

export default CardNav