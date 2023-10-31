import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://moontech-server-five.vercel.app' }),
    tagTypes: ["builders","comments"],
    endpoints: () => ({}),
});

