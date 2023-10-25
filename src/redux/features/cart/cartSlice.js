const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existing = state.products.find(pro => pro._id === action.payload._id);
            if (existing) {
                existing.quantity = existing.quantity + 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }

            state.total += parseFloat(action.payload.price);
        },

        removeOne: (state, action) => {
            const existing = state.products.find((product) => product._id === action.payload._id);
            if (existing && existing.quantity > 1) {
                existing.quantity = existing.quantity - 1;
            } else {
                state.products = state.products.filter(product => product._id !== action.payload._id)
            }

            state.total -= parseFloat(action.payload.price);
        },

        removeFromCart: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload._id);

            state.total -= parseFloat(action.payload.price) * action.payload.quantity
        },

        buyNowBtn: (state, action) => {
            const existing = state.products.find(pro => pro._id === action.payload._id);
            if (existing) {
                return
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
                state.total += parseFloat(action.payload.price);
            }
        },

        increaseQuantity: (state, action) => {
            const product = state.products.find((item) => item._id === action.payload._id);
            if (product) {
                product.quantity += 1;
                state.total += parseFloat(product.price);
            }
        },

        decreaseQuantity: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload.id);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
                state.total -= parseFloat(product.price);
            } else if (product && product.quantity === 1) {
                // Remove the product from the cart
                const productIndex = state.products.findIndex((item) => item.id === action.payload.id);
                if (productIndex !== -1) {
                    state.total -= parseFloat(product.price);
                    state.products.splice(productIndex, 1);
                }
            }
        },

        addPCBuilderToCart: (state, action) => {
            action.payload.forEach((item) => {
                if (item && item._id) {
                    const existing = state.products.find((product) => product?._id === item._id);
                    if (existing) {
                        existing.quantity = existing.quantity + 1;
                    } else {
                        state.products.push({ ...item, quantity: 1 });
                    }
                    if (!isNaN(item?.price)) {
                        state.total += parseFloat(item.price);
                    }
                }
            });
        }
    }
});


export const { addToCart, removeOne, removeFromCart, buyNowBtn, increaseQuantity, decreaseQuantity, addPCBuilderToCart } = cartSlice.actions;
export default cartSlice.reducer;