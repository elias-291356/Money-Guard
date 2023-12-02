
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, registerRequest } from "../service/api";

//---------------registration------------------//
export const registerThunk = createAsyncThunk(
  'user/registerThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await registerRequest(formData);
      console.log(data)
      return data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);

    }
  }
);
//---------------login------------------//
export const loginThunk = createAsyncThunk(
  'user/loginThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await loginRequest(formData);
      console.log(data)
      return data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);

    }
  }
);
