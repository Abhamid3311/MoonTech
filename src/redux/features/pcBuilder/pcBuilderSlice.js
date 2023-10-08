const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    builder: [],
    total: 0,
}

const pcBuilderSlice = createSlice({
    name: "pc_builder",
    initialState,
    reducers: {
        addToBuilder: (state, action) => {
            const existingIndex = state.builder.findIndex((product) => product.category === action.payload.category);

            if (existingIndex !== -1) {
                // Replace existing product
                state.builder[existingIndex] = { ...action.payload, quantity: 1 };
                console.log("Replaced Old Category Product")
            } else {
                // Add new product
                state.builder.push({ ...action.payload, quantity: 1 });
            }

            // Update total
            state.total = state.builder.reduce((total, product) => total + parseFloat(product.price), 0);
            console.log("Added New Category Product")
        },

        removeFromBuilder: (state, action) => {
            const productToRemove = action.payload;

            // Find the index of the product in the builder based on the product object
            const productIndex = state.builder.findIndex((product) => product._id === productToRemove._id);

            if (productIndex !== -1) {
                // Remove the product from the builder and update the total price
                const removedProductPrice = parseFloat(state.builder[productIndex].price);
                state.builder.splice(productIndex, 1);
                state.total -= removedProductPrice;

                console.log("Removed product:", productToRemove);
            } else {
                console.log("Product not found in builder");
            }
        },

    }
});


export const { addToBuilder, removeFromBuilder } = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;