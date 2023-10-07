import { configureStore } from '@reduxjs/toolkit'
import pcBuilderReducer from './features/pcBuilder/pcBuilderSlice'
import { api } from './api/apiSlice'

export const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})