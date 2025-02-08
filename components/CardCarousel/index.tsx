"use client"
import React from 'react'
import Card from '@/components/Card'
import { useSelector } from 'react-redux'
import { CardsItem } from '@/types/interfaces'
import { RootType } from '@/stores/store-provider'
function CardCarousel({ data }: { data: CardsItem[] }) {

    const displayedBox = useSelector((state: RootType) => state.displayedBox.displayedBox)

    return (
        <div className='flex flex-col gap-[2rem] pl-[72px]'>
            <h3 className='flex justify-center items-center font-semibold text-[34px] '>Word Cards</h3>
            <div className='flex gap-[12px] overflow-x-auto w-full scroll-m-1 scrollable'>
                {data && data.length > 0 ? (
                    data.map(item =>
                        item.boxID === displayedBox ? (
                            <Card key={item.id} {...item} />
                        ) : null
                    )
                ) : (
                    <div>Tapılmadı</div>
                )}
            </div>
        </div>
    )
}

export default CardCarousel
