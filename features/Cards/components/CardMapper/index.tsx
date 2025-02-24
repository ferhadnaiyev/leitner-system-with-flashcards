"use client"

import Card from '@/features/Cards/components/Card'
import { useSelector } from 'react-redux'
import { RootType } from '@/stores/store-provider'

import { useGetCardsQuery } from '@/stores/slices/cardsApi'
import AddNewCard from '../AddNewCard'









function CardMapper() {

    const { displayedBoxId, displayedBoxTitle } = useSelector((state: RootType) => state.displayedBox);
    const { data, isLoading, error } = useGetCardsQuery();
    const cards = data?.data || [];



    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading cards</p>;

    return (
        <div className='flex flex-col gap-[2rem] '>
            <h3 className='flex justify-center items-center font-semibold text-[34px]'>{`${displayedBoxTitle} Cards`}</h3>
            <div className='flex gap-[12px] overflow-x-auto w-full scroll-m-1 scrollable'>
                <AddNewCard />
                {
                    cards && cards.map((item) =>
                        item.boxId === displayedBoxId ? (
                            <Card key={item.id}  {...item} />
                        ) : null
                    )
                }

            </div>
        </div>
    )
}

export default CardMapper
