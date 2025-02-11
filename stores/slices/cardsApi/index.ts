import { CardsType } from '@/types/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const BASE_URL = "http://localhost:4001"


export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['cards'],
    endpoints: (builder) => ({


        getCards: builder.query<CardsType[], void>({
            query: () => '/cards',
            providesTags: ['cards'],
        }),

        postCard: builder.mutation<CardsType, CardsType>({
            query: (newCard) => ({
                url: '/cards',
                method: 'POST',
                body: newCard,
            }),

            invalidatesTags: ['cards'],
        }),


        putCard: builder.mutation<CardsType, CardsType>({
            query: ({ id, ...newCard }) => ({
                url: `/cards/${id}`,
                method: 'PUT',
                body: newCard,
            }),

            invalidatesTags: ['cards'],
        }),
    }),
});

export const { useGetCardsQuery, usePostCardMutation, usePutCardMutation } = cardsApi;
