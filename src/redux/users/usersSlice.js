import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser(state, { payload }) {
      state.users.push(payload);
    },
    deleteUser(state, { payload }) {
      state.users = state.users.filter(el => el.id !== payload);
    },
    toggleStatus(state, { payload }) {
      state.users = state.users.map(el => {
        if (el.id === payload) {
          return {
            ...el,
            status: el.status === 'online' ? 'offline' : 'online',
          };
        } else {
          return el;
        }
      });
    },
  },
});

export const { addUser, deleteUser, toggleStatus } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
