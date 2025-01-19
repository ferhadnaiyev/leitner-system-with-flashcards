import { collectData } from '@/lib/collector';
import { Card } from '@/types/interfaces';
import FlashCards from '@/components/FlashCards';
import CardNav from '@/components/CardNavigation/index';
import classNames from 'classnames';
import pageStyles from './page.module.css';



export default async function RepetitionPage() {


    const cardsForToday: Card[] = await collectData();



    return (
        <main className={classNames(pageStyles.main)}>
            <div className={classNames(pageStyles.container)}>
                <FlashCards data={cardsForToday} />
                <CardNav data={cardsForToday} />
            </div>


        </main >
    );
};
