// 'use client'
// import { useState } from 'react';

import { collectData } from '@/lib/collector';

import { Card } from '@/types/interfaces';
import FlashCards from '@/components/flashcards/FlashCards';
import CardNav from '@/components/card-navigation/CardNav';
import { getCards } from '@/lib/api/actions';
import classNames from 'classnames';

import pageStyles from './page.module.css';



export default async function RepetitionPage() {
    console.log(getCards())

    const cardsForToday: Card[] = await collectData();
    console.log(cardsForToday)


    return (
        <main className={classNames(pageStyles.main)}>
            <div className={classNames(pageStyles.container)}>
                <FlashCards data={cardsForToday} />
                <CardNav data={cardsForToday} />
            </div>


        </main >
    );
};
