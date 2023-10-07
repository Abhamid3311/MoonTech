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
        }

    }
});


export const { addToBuilder } = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;