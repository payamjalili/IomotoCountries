import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  nameKeyword: '',
  codeKeyword: '',
};

export const searchSlice = createSlice({
  name: 'user',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    updateKeywords: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateKeywords } = searchSlice.actions;

export default searchSlice.reducer;
