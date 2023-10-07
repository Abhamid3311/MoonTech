const { api } = require("@/redux/api/apiSlice");

const productsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),

    }),
});


export const { useGetProductsQuery } = productsApi;