import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
        }),
        singleProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        postComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/comment/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['comments'],
        }),
    }),
});

export const {
    useGetCommentQuery,
    useGetProductsQuery,
    usePostCommentMutation,
} = productApi;