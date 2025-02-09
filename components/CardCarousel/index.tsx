"use client"
import React from 'react'
import Card from '@/components/Card'
import { useSelector } from 'react-redux'
import { RootType } from '@/stores/store-provider'
import { useGetCardsQuery } from '@/stores/slices/getCards'
import AddNewCard from '../AddNewCard'
function CardCarousel() {
    const { data: cards } = useGetCardsQuery();
    const displayedBox = useSelector((state: RootType) => state.displayedBox.displayedBox)

    return (
        <div className='flex flex-col gap-[2rem] '>
            <h3 className='flex justify-center items-center font-semibold text-[34px] '>Word Cards</h3>
            <div className='flex gap-[12px] overflow-x-auto w-full scroll-m-1 scrollable'>

                {
                    cards && cards.map(item =>
                        item.boxID === displayedBox ? (
                            <Card key={item.id} {...item} />
                        ) : null
                    )
                }
                <AddNewCard />
            </div>
        </div>
    )
}

export default CardCarousel
