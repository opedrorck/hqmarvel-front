import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    offset: 0,
    comics: [0],
  },
  reducers: {
    incremented: (state) => {
      state.offset += 20;
    },
    reset: (state) => {
      state.offset = 0;
    },
    add: (state, action) => {
      state.comics.push(+action.payload);
    },
    remove: (state, action) => {
      const index = state.comics.indexOf(+action.payload);
      if (index !== -1) {
        state.comics.splice(index, 1);
      }
    },
  },
});

export const { incremented, reset, add, remove } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
