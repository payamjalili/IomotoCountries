import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  firstName: 'Payam',
  lastName: 'Jalili',
  email: 'payam.jalilii@gmail.com',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initialStateValue,
  },
  reducers: {},
});

export default userSlice.reducer;
