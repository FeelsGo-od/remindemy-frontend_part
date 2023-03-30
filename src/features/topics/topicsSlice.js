import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const topicsAdapter = createEntityAdapter({
})

const topicsSlice = createSlice({
    name: 'topics',
    initialState: topicsAdapter.getInitialState(),
    reducers: {}
})

export default topicsSlice.reducer