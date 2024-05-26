import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state) => {
            const existing = state.products.find(
                (product) => product._id === action.payload._id
            );

            if (existing) {
                existing.quantity = existing.quantity + 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }

            state.total += action.payload.price;
        },
        removeOne: (state) => {
            const existing = state.products.find(
                (product) => product._id === action.payload._id
            );

            if (existing && existing.quantity > 1) {
                existing.quantity = existing.quantity - 1;
            } else {
                state.products = state.products.filter(
                    (product) => product._id !== action.payload._id
                );
            }

            state.total -= action.payload.price;
        },
        removeFromCart: (state) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload._id
            );
            state.total -= action.payload.price * action.payload.quantity;
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, removeOne } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer