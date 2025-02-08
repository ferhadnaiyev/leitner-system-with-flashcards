import React from 'react'
import Box from '../Box'
import { BoxItem } from '@/types/interfaces'

function BoxWrapper({ data }: { data: BoxItem[] }) {

    return (


        <div className='  flex justify-between items-center sm:px-[72px]'>
            {
                data && data.map((item) => (

                    <Box key={item.id} {...item} />
                ))
            }
        </div>

    )
}

export default BoxWrapper
