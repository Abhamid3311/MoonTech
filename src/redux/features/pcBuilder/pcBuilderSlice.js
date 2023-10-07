const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    builder: [],
    status: false
}

const pcBuilderSlice = createSlice({
    name: "pc_builder",
    initialState,
    reducers: {
        addToBuilder: (state, action) => {

        }
    }
});


export const { addToBuilder } = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;