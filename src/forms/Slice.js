import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.push(newUser);
    },
  },
});

const { reducer, actions } = user;
export const { addUser } = actions;
export default reducer;
