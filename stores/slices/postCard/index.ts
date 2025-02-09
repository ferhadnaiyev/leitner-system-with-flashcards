
import { CardsType } from '@/types/interfaces';
import axiosBaseQuery from '@/utils/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';






export const postCardSlice = createApi({
    reducerPath: 'postCard',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:4001' }),
    tagTypes: ['cards'],
    endpoints: (builder) => ({
        getCards: builder.query<CardsType[], void>({
            query: () => ({ url: '/cards' }),
            providesTags: ['cards'],
        }),
        postCard: builder.mutation<CardsType, CardsType>({
            query: (newCard) => ({
                url: '/cards',
                method: "post",
                data: newCard,
            }),
            invalidatesTags: ['cards'],
        }),
    }),
});


export const { usePostCardMutation, useGetCardsQuery } = postCardSlice;
