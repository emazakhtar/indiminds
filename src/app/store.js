import { configureStore } from "@reduxjs/toolkit";
import summaryReducer from "../features/summary/summarySlice";
import detailsReducer from "../features/details/detailSlice";
import barReducer from "../features/bar/barSlice";
import chartReducer from "../features/chart/chartSlice";

const store = configureStore({
  reducer: {
    summary: summaryReducer,
    details: detailsReducer,
    bar: barReducer,
    chart: chartReducer,
  },
});

export default store;
