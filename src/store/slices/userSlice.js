import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions/userActions";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  }
});
