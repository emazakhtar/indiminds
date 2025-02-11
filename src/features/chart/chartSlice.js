import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllChart } from "./chartAPI";

const initialState = {
  chartList: [],
  status: "idle",
  error: null,
};

export const fetchAllChartAsync = createAsyncThunk(
  "chart/fetchAllChart",
  async ({ email }) => {
    const response = await fetchAllChart(email);
    return response.data;
  }
);
export const chartSlice = createSlice({
  name: "chart",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllChartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllChartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.chartList = action.payload;
      })
      .addCase(fetchAllChartAsync.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const selectChart = (state) => state.bar.barList;

export default chartSlice.reducer;
