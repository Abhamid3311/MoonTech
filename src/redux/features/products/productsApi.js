const { api } = require("@/redux/api/apiSlice");

const productsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),

        getComment: builder.query({
            query: (id) => `/comment/${id}`,
            providesTags: ["comments"]
        }),

        addComment: builder.mutation({
            query: ({ data, id }) => ({
                url: `/comment/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["comments"]
        }),

    }),
});


export const { useGetProductsQuery, useAddCommentMutation, useGetCommentQuery } = productsApi;