import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllSummary } from "./summaryAPI";

const initialState = {
  summaryList: [],
  status: "idle",
  error: null,
};

export const fetchAllSummaryAsync = createAsyncThunk(
  "summary/fetchAllSummary",
  async ({ email }) => {
    const response = await fetchAllSummary(email);
    return response.data;
  }
);
export const summarySlice = createSlice({
  name: "summary",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSummaryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSummaryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.summaryList = action.payload;
      })
      .addCase(fetchAllSummaryAsync.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const selectSummary = (state) => state.summary.summaryList;

export default summarySlice.reducer;
