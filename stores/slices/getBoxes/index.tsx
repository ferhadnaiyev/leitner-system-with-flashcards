import { BoxType } from '@/types/interfaces';
import axiosBaseQuery from '@/utils/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';






export const getBoxesSlice = createApi({
    reducerPath: 'getBoxes',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:4001' }),
    endpoints: (builder) => ({
        getBoxes: builder.query<BoxType[], void>({
            query: () => ({ url: '/boxes' }),
        }),
    }),
});


export const { useGetBoxesQuery } = getBoxesSlice