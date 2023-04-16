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
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(user)
    })

    const result = response.json();
    return result;
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

    const result = response.json();
    return result;
})

export const showProfile = createAsyncThunk('/users/profile', async (token) => {
    const response = await fetch('http://localhost:8000/users/profile', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const result = await response.json()
    return result;
})

export const addUsersTopic = createAsyncThunk('/users/addTopic', async (data) => {
    const response = await fetch('http://localhost:8000/users/addTopic', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    const result = response.json()
    return result
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
        .addCase(loginUser.fulfilled, (state, action) => {
            if(!action.payload.message) {
                state.status = 'error'
                state.error = action.payload.message
            } else {
                state.status = 'succeeded'
                state.error = null;
            }
        })
    }
})

export default usersSlice.reducer