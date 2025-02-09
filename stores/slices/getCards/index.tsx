import { CardsType } from '@/types/interfaces';
import axiosBaseQuery from '@/utils/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';






export const getCardsSlice = createApi({
    reducerPath: 'getCards',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:4001' }),
    tagTypes: ['cards'],
    endpoints: (builder) => ({
        getCards: builder.query<CardsType[], void>({
            query: () => ({ url: '/cards' }),
            providesTags: ['cards'],
        }),
    }),
});


export const { useGetCardsQuery } = getCardsSlice;
