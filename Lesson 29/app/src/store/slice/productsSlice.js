
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: 'empty',
    list: []
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const resp = await fetch('https://fakestoreapi.com/products')
        const data = await resp.json();
        return data
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, {payload}) => {
                state.status = 'ready'
                state.list.push(...payload);
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'error'
            })
    }
})


export default productsSlice.reducer;