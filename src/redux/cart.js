import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    showCart: false,
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCart: (state) => {
            state.showCart = true;
        },
        hideCart: (state) => {
            state.showCart = false;
        },
        increaseQuantity: (state, { payload: id }) => {
            const index = state.items.map(e => e.id).indexOf(id);
            state.items[index].quantity += 1;
            state.totalAmount += state.items[index].price;
        },
        decreaseQuantity: (state, { payload: id }) => {
            const index = state.items.map(e => e.id).indexOf(id);
            if (state.items[index].quantity > 1) {
                state.items[index].quantity -= 1;
                state.totalAmount -= state.items[index].price;
            }
        },
        addCartItem: (state, { payload }) => {
            const index = state.items.map(e => e.id).indexOf(payload.id);
            if (index >= 0) {
                state.items[index].quantity += 1
                state.totalAmount += state.items[index].price;
            } else {
                state.items.push(payload);
                state.totalAmount += payload.price;
            }
        },
        removeCartItem: (state, { payload: id }) => {
            const index = state.items.map(e => e.id).indexOf(id);
            const _item = state.items[index];
            state.totalAmount -= _item.price * _item.quantity;
            state.items.splice(index, 1);
        },
    },
})

export const { addCartItem, removeCartItem, increaseQuantity, decreaseQuantity, showCart, hideCart } = cartSlice.actions

export default cartSlice.reducer