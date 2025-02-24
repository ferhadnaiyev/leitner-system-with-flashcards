import Box from '../Box'

import { boxesData } from '@/mock_data';
const boxes = boxesData

function BoxMapper() {
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-[20px]  w-full'>
                {
                    boxes && boxes.map((item) => (
                        <Box key={item.id} {...item} />

                    ))
                }
            </div>
        </div>

    )
}

export default BoxMapper
