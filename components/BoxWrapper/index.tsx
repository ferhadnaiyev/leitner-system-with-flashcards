"use client"
import React from 'react'
import Box from '../Box'

import { useGetBoxesQuery } from '@/stores/slices/getBoxes';

function BoxWrapper() {
    const { data: boxes, } = useGetBoxesQuery();
    return (


        <div className='  flex justify-between items-center '>
            {
                boxes && boxes.map((item) => (

                    <Box key={item.id} {...item} />
                ))
            }
        </div>

    )
}

export default BoxWrapper
