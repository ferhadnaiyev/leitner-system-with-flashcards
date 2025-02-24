import { CardType } from '@/types/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// ✅ BASE_URL'i .env dosyasından al
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['cards'],
    endpoints: (builder) => ({

        // ✅ Kullanıcının tüm kartlarını getir
        getCards: builder.query<CardType[], void>({
            query: () => '/api/cards',  // ✅ Next.js API yolunu güncelledik
            providesTags: ['cards'],
        }),

        // ✅ Yeni kart ekle
        postCard: builder.mutation<CardType, Partial<CardType>>({
            query: (newCard) => ({
                url: '/api/cards',  // ✅ Next.js API yolunu güncelledik
                method: 'POST',
                body: newCard,
            }),
            invalidatesTags: ['cards'],
        }),

        // ✅ Kart güncelle
        updateBoxId: builder.mutation<CardType, { id: string; boxId: number }>({
            query: ({ id, boxId }) => ({
                url: `/api/cards/${id}`,
                method: 'PUT',
                body: { boxId },  // Sadece boxId gönderiliyor
            }),
            invalidatesTags: ['cards'],
        }),

        // ✅ Kart sil
        deleteCard: builder.mutation<CardType, { id: string }>({
            query: ({ id }) => ({
                url: `/api/cards/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['cards'],  // Cache'i geçersiz kıl
        }),
    }),
});

export const { useGetCardsQuery, usePostCardMutation, useUpdateBoxIdMutation, useDeleteCardMutation } = cardsApi;
