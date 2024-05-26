import { api } from '@/redux/api/apiSlice';

const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => '/orders',
        }),
        singleOrder: builder.query({
            query: (id) => `/orders/${id}`,
        }),
    }),
});

export const {

} = orderApi;