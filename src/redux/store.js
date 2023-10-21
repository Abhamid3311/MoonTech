import { configureStore } from '@reduxjs/toolkit'
import pcBuilderReducer from './features/pcBuilder/pcBuilderSlice'
import { api } from './api/apiSlice'
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderReducer,
        cart: cartReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})