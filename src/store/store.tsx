import { configureStore } from '@reduxjs/toolkit'
import { api as productsApi } from '../pages/productsCard/ProductsApi'
import { authApi } from '../pages/authentication/AuthApi'
import authReducer from './auth'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, authApi.middleware),
})