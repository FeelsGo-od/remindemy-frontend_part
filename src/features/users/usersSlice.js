import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: 'idle',
    error: null,
}

export const fetchUsers = createAsyncThunk('users', async () => {
    const response = await fetch('http://localhost:8000/users')
    const users = await response.json();
    return users.data;
})

export const addNewUser = createAsyncThunk('/users/createUser', async (user) => {
    const response = await fetch('http://localhost:8000/users/createUser', {
        method: 'POST',
        // mode: 'cors',
        // cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
        // redirect: 'follow',
        // referrerPolicy: 'no-referrer',
        body: JSON.stringify(user)
    })
    return response.json()
})

export const loginUser = createAsyncThunk('/users/login', async (data) => {
    const response = await fetch('http://localhost:8000/users/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return response.json()
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = state.users.concat(action.payload)
        })
        .addCase(addNewUser.fulfilled, (state, action) => {
            state.users.push(action.payload)
        })
    }
})

export default usersSlice.reducer