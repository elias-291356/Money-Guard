

import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "../thunk";
// import { registerThunk } from "../thunk";


const initialState = {
  isSubmit: false,
  isLoading: false,
  userData: null,
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    setSubmit: (state, action) => {
      state.isSubmit = action.payload;
    },
  },
  extraReducers: builder => {
    builder


      // ------------ Registration -------------//

      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;


      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;

      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


  },
});

export const { setSubmit } = userSlice.actions;
export const userReducer = userSlice.reducer;