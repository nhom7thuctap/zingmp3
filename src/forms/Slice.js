import { createSlice } from '@reduxjs/toolkit';

const initialUsers = [
  {
    id: 1234,
    categoryId: 1,
    username: 'nghiama0029',
    email: 'nghiama0029@gmail.com',
    password: 'nnn111',
  },
  {
    id: 1294,
    categoryId: 3,
    username: 'Huuphuoc161',
    email: 'finway99@gmail.com',
    password: 'wsdiovuyh3555',
  },
  {
    id: 4562,
    categoryId: 5,
    username: 'HUyga51@',
    email: 'huygiaett@gmail.com',
    password: '1u0udsauv09',
  },
  {
    id: 1124,
    categoryId: 2,
    username: 'Chuiehfie',
    email: 'Nhiqttx@gmail.com',
    password: 'MMq23ddx',
  },
  {
    id: 6657,
    categoryId: 4,
    username: 'NNooUpdate',
    email: 'NeverDie@gmail.com',
    password: 'WhatsupBro21',
  },
  {
    id: 9981,
    categoryId: 1,
    username: 'whysoserious',
    email: 'jokeralwayswin@gmail.com',
    password: 'batbanisasal',
  },
];
const user = createSlice({
  name: 'users',
  initialState: initialUsers,
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.push(newUser);
    },
    removeUser: (state, actions) => {
      const removeUserId = actions.payload;
      state = state.filter((user) => user.id !== removeUserId);
      return state;
    },
  },
});

const { reducer, actions } = user;
export const { addUser, removeUser } = actions;
export default reducer;
