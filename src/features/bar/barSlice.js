import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllBar } from "./barAPI";

const initialState = {
  barList: [],
  status: "idle",
  error: null,
};

export const fetchAllBarsAsync = createAsyncThunk(
  "bar/fetchAllBar",
  async ({ email }) => {
    const response = await fetchAllBar(email);
    return response.data;
  }
);
export const barSlice = createSlice({
  name: "bar",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBarsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBarsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.barList = action.payload;
      })
      .addCase(fetchAllBarsAsync.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const selectBars = (state) => state.bar.barList;

export default barSlice.reducer;
