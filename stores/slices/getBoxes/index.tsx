import { BoxType } from '@/types/interfaces';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';






export const getBoxesSlice = createApi({
    reducerPath: 'getBoxes',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4001' }),
    endpoints: (builder) => ({
        getBoxes: builder.query<BoxType[], void>({
            query: () => ({ url: '/boxes' }),
        }),
    }),
});


export const { useGetBoxesQuery } = getBoxesSlice