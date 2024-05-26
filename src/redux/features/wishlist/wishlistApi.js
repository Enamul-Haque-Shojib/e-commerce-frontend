import { api } from '@/redux/api/apiSlice';

const wishlistApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getWishlists: builder.query({
            query: () => '/wishlists',
        }),
        singleWishlists: builder.query({
            query: (id) => `/wishlists/${id}`,
        }),
        postWishlists: builder.mutation({
            query: ({ id, data }) => ({
                url: `/wishlists/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['comments'],
        }),
    }),
});

export const {
} = wishlistApi;