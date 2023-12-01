
import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerRequest } from "../service/api";

//---------------registration------------------//
export const registerThunk = createAsyncThunk(
  'user/registerThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await registerRequest(formData);
      console.log(data)
      return data;
    } catch (error) {
      console.error("Error in registerRequest:", error);
      console.log("Response data:", error.response.data);
      throw error; // Прокидывайте ошибку дальше
      // return thunkAPI.rejectWithValue(error.message);

    }
  }
);
