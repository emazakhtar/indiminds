import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllDetail } from "./detailAPI";

const initialState = {
  detailsList: [],
  status: "idle",
  error: null,
};

export const fetchAllDetailsAsync = createAsyncThunk(
  "details/fetchAllDetails",
  async () => {
    const response = await fetchAllDetail();
    console.log("detail API called");
    return response.data;
  }
);

export const detailsSlice = createSlice({
  name: "details",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDetailsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllDetailsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("details fulfilled", state.detailsList);

        state.detailsList = action.payload;
      })
      .addCase(fetchAllDetailsAsync.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const selectDetails = (state) => state.details.detailsList;

export default detailsSlice.reducer;
