import { api } from '@/redux/api/apiSlice';

const cartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCarts: builder.query({
            query: () => '/carts',
        }),
        updateItemToCart: builder.mutation({
            query: ({ id, data }) => ({
                url: `/carts/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
});

export const {
} = cartApi;