
import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerRequest } from "../service/api";

//---------------registration------------------//
export const registerThunk = createAsyncThunk(
  'user/registerThunk',
  async (formData, thunkAPI) => {
    try {
      const response = await registerRequest(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
