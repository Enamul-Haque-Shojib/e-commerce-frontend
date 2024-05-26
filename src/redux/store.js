import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from "../redux/features/cart/cartSlice";
import orderReducer from "../redux/features/order/orderSlice";
import wishlistReducer from "../redux/features/wishlist/wishlistSlice";
import productReducer from './features/products/productSlice';

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        order: orderReducer,
        wishlist: wishlistReducer,
        product: productReducer,
        [api.reducerPath]: api.reducer,
    },
})