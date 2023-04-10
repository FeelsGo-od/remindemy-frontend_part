import { configureStore } from '@reduxjs/toolkit';

import topicsReducer from '../features/topics/topicsSlice';
import usersSlice from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    topics: topicsReducer,
  },
});
